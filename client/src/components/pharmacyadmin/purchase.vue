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
                        <div class="col-sm-7 col-auto">
                            <h3 class="page-title">Purchase</h3>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="/pharmacyadmin/index">Dashboard</router-link></li>
                                <li class="breadcrumb-item active">Purchase</li>
                            </ul>
                        </div>
                        <div class="col-sm-5 col">
                            <router-link to="/pharmacyadmin/addpurchase" class="btn btn-primary float-right mt-2">Add New</router-link>
                        </div>
                    </div>
                </div>
                <!-- /Page Header -->
                <div class="row">
                    <div class="col-md-12">
                    
                        <!-- Recent Orders -->
                        <div class="card">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="datatable table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Purchase Date</th>
                                                <th>Medicine Name</th>
                                                <th>Medicine Category</th>
                                                <th>Purchase Price</th>
                                                <th>Quantity</th>
                                                <th>Supplier</th>
                                                <th>Expire Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in purchase" :key="item.id">
                                                <td>{{item.date}}</td>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <span class="avatar avatar-sm mr-2"><img class="avatar-img" :src="loadImg(item.image)" alt="product image"></span>
                                                        {{item.name}}
                                                    </h2>
                                                </td>
                                                <td>{{item.category}}</td>
                                                <td>{{item.price}}</td>
                                                <td>{{item.quantity}}</td>
                                                <td>{{item.supplier}}</td>
                                                <td>{{item.Expiredate}}</td>
                                                <td>
                                                    <div class="actions">
                                                        <router-link class="btn btn-sm bg-success-light" to="/pharmacyadmin/editpurchase">
                                                            <i class="fa fa-edit"></i> Edit
                                                        </router-link>
                                                        <a href="javascript:void(0);" class="btn btn-sm bg-danger-light" data-toggle="modal" data-target="#deleteConfirmModal">
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
                        <!-- /Recent Orders -->
                        
                    </div>
                </div>
            </div>			
        </div>
        <!-- /Page Wrapper -->
         <!-- Model -->
		<div class="modal fade" id="deleteConfirmModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="acc_title">Delete</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<p id="acc_msg">are you sure you want to delete?</p>
					</div>
					<div class="modal-footer">
						<a href="javascript:;" class="btn btn-success si_accept_confirm">Yes</a>
						<button type="button" class="btn btn-danger si_accept_cancel" data-dismiss="modal">Cancel</button>
					</div>
				</div>
			</div>
		</div>
		<!-- /Modele -->
    </div>
</template>
<script>
    import purchase from '../../assets/json/pharmacyadmin/Purchase/purchase.json'
    const images = require.context('@/assets/pharmacy_img/product', false, /\.png$|\.jpg$/)
    export default {
        data() {
		return {
			purchase: purchase
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