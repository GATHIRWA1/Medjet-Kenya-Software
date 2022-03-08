<template>
        <div class="main-wrapper">
            <header-pharmacy-admin></header-pharmacy-admin>
            <sidebar-pharmacy-admin></sidebar-pharmacy-admin>
            <!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
                
                    <!-- Page Header -->
                    <div class="page-header">
                        <div class="row">
                            <div class="col-sm-12">
                                <h3 class="page-title">Transactions</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><router-link to="/pharmacyadmin/index">Dashboard</router-link></li>
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
                                                    <th>Invoice No</th>
                                                    <th>Product ID</th>
                                                    <th>Product Name</th>
                                                    <th>Total Amount</th>
                                                    <th class="text-center">Status</th>
                                                    <th class="text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in transactionlist" :key="item.id">
                                                    <td><router-link to="/pharmacyadmin/invoice">{{item.invoiceno}}</router-link></td>
                                                    <td>{{item.productid}}</td>
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <span class="avatar avatar-sm mr-2"><img class="avatar-img" :src="loadImg(item.image)" alt="User Image"></span>
                                                            {{item.name}}
                                                        </h2>
                                                    </td>
                                                    <td>{{item.amount}}</td>
                                                    <td class="text-center">
                                                        <span class="badge badge-pill bg-success inv-badge">{{item.status}}</span>
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
    </div>
</template>
<script>
    import transactionlist from '../../assets/json/pharmacyadmin/Transactionlist/transactionlist.json'
    const images = require.context('@/assets/pharmacy_img/product', false, /\.png$|\.jpg$/)
    export default {
        data() {
		return {
			transactionlist: transactionlist
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
<style>
    .fa-edit {
        font-size: 12px;
    }
    .fa-trash {
        font-size: 12px;
    }
</style>