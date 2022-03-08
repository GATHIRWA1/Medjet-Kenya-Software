<template>
	<div>
		<div class="main-wrapper">
			<layout-header2></layout-header2>
			<breadcrumb32></breadcrumb32>
				
				<!-- Page Content -->
				<div class="content">
					<div class="container-fluid">

						<div class="row">
							<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar dct-dashbd-lft">
								<patient-information></patient-information>
								<last-booking></last-booking>
							</div>

							<div class="col-md-7 col-lg-8 col-xl-9 dct-appoinment">
								<div class="card">
									<div class="card-body pt-0">
										<div class="user-tabs">
											<ul class="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap">
												<li class="nav-item">
													<a class="nav-link active" href="#pat_appointments" data-toggle="tab">Appointments</a>
												</li>
												<li class="nav-item">
													<a class="nav-link" href="#pres" data-toggle="tab"><span>Prescription</span></a>
												</li>
												<li class="nav-item">
													<a class="nav-link" href="#medical" data-toggle="tab"><span class="med-records">Medical Records</span></a>
												</li>
												<li class="nav-item">
													<a class="nav-link" href="#billing" data-toggle="tab"><span>Billing</span></a>
												</li> 
											</ul>
										</div>
										<div class="tab-content">
											
											<!-- Appointment Tab -->
											<div id="pat_appointments" class="tab-pane fade show active">
												<div class="card card-table mb-0">
													<div class="card-body">
														<div class="table-responsive">
															<table class="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Doctor</th>
																		<th>Appt Date</th>
																		<th>Booking Date</th>
																		<th>Amount</th>
																		<th>Follow Up</th>
																		<th>Status</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr v-for="item in patientappointments" :key="item.id">
																		<td>
																			<h2 class="table-avatar">
																				<router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
																					<img class="avatar-img rounded-circle" :src="loadImg(item.doctor_image)" alt="User Image">
																				</router-link>
																				<router-link to="/doctor/profile">{{item.doctor_name}}<span>{{item.category}}</span></router-link>
																			</h2>
																		</td>
																		<td>{{item.appt_date}}<span class="d-block text-info">{{item.appt_time}}</span></td>
																		<td>{{item.booking_date}}</td>
																		<td>{{item.amount}}</td>
																		<td>{{item.follow_up}}</td>
																		<td>
																			<span class="badge badge-pill bg-success-light" v-if="item.action_status == 1" >Confirm</span>
																			<span class="badge badge-pill bg-danger-light" v-if="item.action_status == 2" >Cancelled</span>
																			<span class="badge badge-pill bg-warning-light" v-if="item.action_status == 3" >Pending</span>
																			<span class="badge badge-pill bg-info-light" v-if="item.action_status == 4" >Completed</span>
																		</td>
																		<td class="text-right">
																			<div class="table-action" v-if="item.action_status == 1 ||  item.action_status == 2">
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="far fa-edit"></i> Edit
																				</a>
																			</div>
																			<div class="table-action" v-else-if="item.action_status == 3">
																				<router-link to="/doctor/edit-prescription" class="btn btn-sm bg-success-light">
																					<i class="far fa-edit"></i> Edit
																				</router-link>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="far fa-trash-alt"></i> Cancel
																				</a>
																			</div>
																			<div class="table-action" v-else>
																				<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																					<i class="far fa-clock"></i> Reschedule
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
											<!-- /Appointment Tab -->
											
											<!-- Prescription Tab -->
											<div class="tab-pane fade" id="pres">
												<div class="text-right">
													<router-link to="/doctor/add-prescription" class="add-new-btn">Add Prescription</router-link>
												</div>
												<div class="card card-table mb-0">
													<div class="card-body">
														<div class="table-responsive">
															<table class="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Date </th>
																		<th>Name</th>									
																		<th>Created by </th>
																		<th></th>
																	</tr>     
																</thead>
																<tbody>
																	<tr v-for="item in prescriptions" :key="item.id">
																		<td>{{item.date}}</td>
																		<td>{{item.name}}</td>
																		<td>
																			<h2 class="table-avatar">
																				<router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
																					<img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image">
																				</router-link>
																				<router-link to="/doctor/profile">{{item.created_by}}<span>{{item.category}}</span></router-link>
																			</h2>
																		</td>
																		<td class="text-right">
																			<div class="table-action" >
																				<a href="javascript:void(0);" v-if="item.action_status == 1 || item.action_status == 2" class="btn btn-sm bg-primary-light">
																					<i class="fas fa-print"></i> Print
																				</a>
																				<a href="javascript:void(0);" v-if="item.action_status == 1 || item.action_status == 2" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				<router-link to="/doctor/edit-prescription" v-if="item.action_status == 2" class="btn btn-sm bg-success-light">
																					<i class="fas fa-edit"></i> Edit
																				</router-link>
																				<a href="javascript:void(0);" v-if="item.action_status == 2" class="btn btn-sm bg-danger-light">
																					<i class="far fa-trash-alt"></i> Delete
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
											<!-- /Prescription Tab -->

											<!-- Medical Records Tab -->
											<div class="tab-pane fade" id="medical">
												<div class="text-right">		
													<a href="#" class="add-new-btn" data-toggle="modal" data-target="#add_medical_records">Add Medical Records</a>
												</div>
												<div class="card card-table mb-0">
													<div class="card-body">
														<div class="table-responsive">
															<table class="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>ID</th>
																		<th>Date </th>
																		<th>Description</th>
																		<th>Attachment</th>
																		<th>Created</th>
																		<th></th>
																	</tr>     
																</thead>
																<tbody>
																	<tr v-for="item in medicalrecords" :key="item.id">
																		<td><a href="javascript:void(0);">{{item.record_no}}</a></td>
																		<td>{{item.date}}</td>
																		<td>{{item.descriptiion}}</td>
																		<td><a href="#">{{item.attachment}}</a></td>
																		<td>
																			<h2 class="table-avatar">
																				<router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
																					<img class="avatar-img rounded-circle" :src="loadImg(item.doctor_image)" alt="User Image">
																				</router-link>
																				<router-link to="/doctor/profile">{{item.created_by}}<span>{{item.category}}</span></router-link>
																			</h2>
																		</td>
																		<td class="text-right">
																			<div class="table-action" >
																				<a href="javascript:void(0);" v-if="item.action_status == 1 || item.action_status == 2" class="btn btn-sm bg-primary-light">
																					<i class="fas fa-print"></i> Print
																				</a>
																				<a href="javascript:void(0);" v-if="item.action_status == 1 || item.action_status == 2" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				<a  v-if="item.action_status == 2" class="btn btn-sm bg-success-light" data-toggle="modal" data-target="#add_medical_records">
																					<i class="fas fa-edit"></i> Edit
																				</a>
																				<a href="javascript:void(0);" v-if="item.action_status == 2" class="btn btn-sm bg-danger-light">
																					<i class="far fa-trash-alt"></i> Delete
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
											<!-- /Medical Records Tab -->
											
											<!-- Billing Tab -->
											<div class="tab-pane" id="billing">
												<div class="text-right">
													<router-link class="add-new-btn" to="/doctor/add-billing">Add Billing</router-link>
												</div>
												<div class="card card-table mb-0">
													<div class="card-body">
														<div class="table-responsive">
														
															<table class="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Invoice No</th>
																		<th>Doctor</th>
																		<th>Amount</th>
																		<th>Paid On</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr v-for="item in billing" :key="item.id">
																		<td>
																			<router-link to="/invoice-view">{{item.invoice_no}}</router-link>
																		</td>
																		<td>
																			<h2 class="table-avatar">
																				<router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
																					<img class="avatar-img rounded-circle" :src="loadImg(item.doctor_image)" alt="User Image">
																				</router-link>
																				<router-link to="/doctor/profile">{{item.doctor_name}}<span>{{item.category}}</span></router-link>
																			</h2>
																		</td>
																		<td>{{item.amount}}</td>
																		<td>{{item.paid_on}}</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" v-if="item.action_status == 1 || item.action_status == 2" class="btn btn-sm bg-primary-light">
																					<i class="fas fa-print"></i> Print
																				</a>
																				<a href="javascript:void(0);" v-if="item.action_status == 1 || item.action_status == 2" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																					<router-link to="/doctor/edit-billing" v-if="item.action_status == 2" class="btn btn-sm bg-success-light">
																					<i class="fas fa-edit"></i> Edit
																				</router-link>
																				<a href="javascript:void(0);" v-if="item.action_status == 2" class="btn btn-sm bg-danger-light">
																					<i class="far fa-trash-alt"></i> Delete
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
											<!-- Billing Tab -->
													
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
					
				</div>		
				<!-- /Page Content -->
			<layout-footer></layout-footer>
		</div>
		<!-- Add Medical Records Modal -->
		<div class="modal fade custom-modal" id="add_medical_records">
			<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h3 class="modal-title">Medical Records</h3>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					</div>
					<form>					
						<div class="modal-body">
							<div class="form-group">
								<label>Date</label>
								<input type="text" class="form-control datetimepicker" value="31-10-2019">
							</div>
							<div class="form-group">
								<label>Description ( Optional )</label>
								<textarea class="form-control"></textarea>
							</div>
							<div class="form-group">
								<label>Upload File</label> 
								<input type="file" class="form-control">
							</div>	
							<div class="submit-section text-center">
								<button type="submit" class="btn btn-primary submit-btn">Submit</button>
								<button type="button" class="btn btn-secondary submit-btn" data-dismiss="modal">Cancel</button>							
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<!-- /Add Medical Records Modal -->
	</div>
</template>

<script>
import patientappointments from '../../assets/json/doctor/patientappointments.json'
import prescriptions from '../../assets/json/patient/prescriptions.json'
import medicalrecords from '../../assets/json/patient/medicalrecords.json'
import billing from '../../assets/json/patient/billing.json'
const images = require.context('@/assets/img/doctors', false, /\.png$|\.jpg$/)

export default {
	mounted() {
		if($('.datetimepicker').length > 0) {
			$('.datetimepicker').datetimepicker({
				format: 'DD/MM/YYYY',
				icons: {
					up: "fas fa-chevron-up",
					down: "fas fa-chevron-down",
					next: 'fas fa-chevron-right',
					previous: 'fas fa-chevron-left'
				}
			});
		}
	},
    data() {
        return {
            patientappointments: patientappointments,
            prescriptions: prescriptions,
            medicalrecords: medicalrecords,
            billing: billing  
        };
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath)
        },
    },
}
</script>