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
							<div class="col-12">
								<h3 class="page-title">Sales</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/pharmacyadmin/index">Dashboard</router-link></li>
									<li class="breadcrumb-item active">Sales</li>
								</ul>
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
													<th>Invoice No</th>
													<th>Medicine Name</th>
													<th>Total Price</th>
													<th>Date</th>
													<th class="text-right">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in sales" :key="item.id">
													<td>{{item.invoicenumber}}</td>
													<td>{{item.name}}</td>
													<td>{{item.price}}</td>
													<td>{{item.date}}</td>
													<td class="text-right">
														<div class="actions">
															<a class="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_invoice_report">
																<i class="fa fa-edit"></i> Edit
															</a>
															<router-link class="btn btn-sm bg-default-light" to="/pharmacyadmin/invoice">
																<i class="fas fa-file-alt"></i> Invoice
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
			 <!-- Edit Details Modal -->
		<div class="modal fade" id="edit_invoice_report" aria-hidden="true" role="dialog">
			<div class="modal-dialog modal-dialog-centered" role="document" >
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Edit Invoice Report</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<form>
							<div class="row form-row">
								<div class="col-12 col-sm-6">
									<div class="form-group">
										<label>Invoice Number</label>
										<input type="text" class="form-control" value="20169998">
									</div>
								</div>
								<div class="col-12 col-sm-6">
									<div class="form-group">
										<label>Medicine Name</label>
										<input type="text" class="form-control" value="Abilify">
									</div>
								</div>
								<div class="col-12 col-sm-6">
									<div class="form-group">
										<label>Total Amount</label>
										<input type="text"  class="form-control" value="$150.00">
									</div>
								</div>
								<div class="col-12 col-sm-6">
									<div class="form-group">
										<label>Created Date</label>
										<input type="text"  class="form-control" value="14-5-2020">
									</div>
								</div>
								
							</div>
							<button type="submit" class="btn btn-primary btn-block">Save Changes</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- /Edit Details Modal -->

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
    import sales from '../../assets/json/pharmacyadmin/Sales/sales.json'
    export default {
        data() {
		return {
			sales: sales
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