<template>
    <div class="main-wrapper">
         <layout-header2></layout-header2>
         <breadcrumb4></breadcrumb4>
         <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <sidebar></sidebar>
						</div>

						<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="card card-table">
								<div class="card-body">
								
									<!-- Invoice Table -->
									<div class="table-responsive">
										<table class="table table-hover table-center mb-0">
											<thead>
												<tr>
													<th>Invoice No</th>
													<th>Patient</th>
													<th>Amount</th>
													<th>Paid On</th>
													<th></th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in invoices" :key="item.id">
													<td>
														<router-link to="/invoice-view">{{item.invoice_no}}</router-link>
													</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/doctor/patient-profile" class="avatar avatar-sm mr-2">
																<img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image">
															</router-link>
															<router-link to="/doctor/patient-profile">{{item.patient_name}}<span>{{item.patient_id}}</span></router-link>
														</h2>
													</td>
													<td>{{item.invoice_amount}}</td>
													<td>{{item.paid_on}}</td>
													<td class="text-right">
														<div class="table-action">
															<router-link to="/invoice-view" class="btn btn-sm bg-info-light">
																<i class="far fa-eye"></i> View
															</router-link>
															<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																<i class="fas fa-print"></i> Print
															</a>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<!-- /Invoice Table -->
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>		
			<!-- /Page Content -->
            <layout-footer></layout-footer>
     </div>
</template>

<script>
import invoices from '../../assets/json/doctor/invoices.json'
const images = require.context('@/assets/img/patients', false, /\.png$|\.jpg$/)
export default {
    data() {
        return {
            invoices: invoices
        }
    },
     methods:{
        loadImg(imgPath) {
            return images('./' + imgPath)
        },
    }
}
</script>