<template>
    <div class="main-wrapper">
        <header-admin></header-admin>
        <sidebar-admin></sidebar-admin>
        <!-- Page Wrapper -->
        <div class="page-wrapper">
        <div class="content container-fluid">
        
            <!-- Page Header -->
            <div class="page-header">
                <div class="row">
                    <div class="col-sm-12">
                        <h3 class="page-title">Transactions</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
                            <li class="breadcrumb-item active">Transactions</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /Page Header -->
            
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="datatable table table-hover table-center mb-0">
                                    <thead>
                                        <tr>
                                            <th>Invoice Number</th>
                                            <th>Patient ID</th>
                                            <th>Patient Name</th>
                                            <th>Total Amount</th>
                                            <th class="text-center">Status</th>
                                            <th class="text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in transactionslist" :key="item.id">
                                            <td><router-link to="/admin/invoice">{{item.invoicenumber}}</router-link></td>
                                            <td>{{item.patientid}}</td>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <router-link to="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image"></router-link>
                                                    <router-link to="/admin/profile">{{item.patientname}} </router-link>
                                                </h2>
                                            </td>
                                            <td>$100.00</td>
                                            <td class="text-center">
                                                <span class="badge badge-pill bg-success inv-badge">Paid</span>
                                            </td>
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fa fa-trash"></i> Delete
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>			
            </div>
        </div>			
    </div>
    <!-- /Page Wrapper -->

<!-- Delete Modal -->
    <div class="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document" >
            <div class="modal-content">
                <div class="modal-body">
                    <div class="form-content p-2">
                        <h4 class="modal-title">Delete</h4>
                        <p class="mb-4">Are you sure want to delete?</p>
                        <button type="button" class="btn btn-primary">Save </button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Delete Modal -->
        </div>
</template>
<script>
    import transactionslist from '../../assets/json/admin/Transactionslist/transactionslist.json'
    const images = require.context('@/assets/admin_img/patients', false, /\.png$|\.jpg$/)
    export default {
        data() {
		return {
			transactionslist: transactionslist
		}
	},
    mounted() {
         // Datatable

		 if ($('.datatable').length > 0) {
        $('.datatable').DataTable({
          "bFilter": false,
        });
      }
        $(document).on('click', '#toggle_btn', function() {
		if($('body').hasClass('mini-sidebar')) {
			$('body').removeClass('mini-sidebar');
			$('.subdrop + ul').slideDown();
		} else {
			$('body').addClass('mini-sidebar');
			$('.subdrop + ul').slideUp();
		}
		// setTimeout(function(){ 
		// 	mA.redraw();
		// 	mL.redraw();
		// }, 300);
		return false;
	});
	$(document).on('mouseover', function(e) {
		e.stopPropagation();
		if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
			var targ = $(e.target).closest('.sidebar').length;
			if(targ) {
				$('body').addClass('expand-menu');
				$('.subdrop + ul').slideDown();
			} else {
				$('body').removeClass('expand-menu');
				$('.subdrop + ul').slideUp();
			}
			return false;
		}
    });
},
methods:{
        loadImg(imgPath) {
            return images('./' + imgPath)
        },
    }
    }
</script>