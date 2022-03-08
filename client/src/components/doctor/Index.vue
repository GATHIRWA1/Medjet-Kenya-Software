<template>
    <div class="main-wrapper">
        <layout-header2></layout-header2>
        <breadcrumb></breadcrumb>
        <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <sidebar></sidebar>
						</div>
						
						<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="row">
								<div class="col-md-12">
									<div class="card dash-card">
										<div class="card-body">
											<div class="row">
												<div class="col-md-12 col-lg-4">
													<div class="dash-widget dct-border-rht">
														<div class="circle-bar circle-bar1">
															<div class="progressresult circle-graph3" data-value="75">
																 <span class="progress-left">
                       													 <span class="progress-bar total-patients"></span>
          														</span>
																<span class="progress-right">
																		<span class="progress-bar total-patients"></span>
																</span>
																<div class="progress-value  w-100 h-100  align-items-center rounded-circle d-flex justify-content-center">
																	<div class="h2 font-weight-bold"><img src="@/assets/img/icon-01.png" class="img-fluid" alt="Patient"></div>
																</div>
															</div>
														</div>
														<div class="dash-widget-info">
															<h6>Total Patient</h6>
															<h3>1500</h3>
															<p class="text-muted">Till Today</p>
														</div>
													</div>
												</div>
												
												<div class="col-md-12 col-lg-4">
													<div class="dash-widget dct-border-rht">
														<div class="circle-bar circle-bar2">
															<div class="progressresult circle-graph3" data-value="100">
																 <span class="progress-left">
                       													 <span class="progress-bar today-patients"></span>
          														</span>
																<span class="progress-right">
																		<span class="progress-bar today-patients"></span>
																</span>
																<div class="progress-value  w-100 h-100  align-items-center rounded-circle d-flex justify-content-center">
																	<div class="h2 font-weight-bold"><img src="@/assets/img/icon-02.png" class="img-fluid" alt="Patient"></div>
																</div>
															</div>
														</div>
														<div class="dash-widget-info">
															<h6>Today Patient</h6>
															<h3>160</h3>
															<p class="text-muted">06, Nov 2019</p>
														</div>
													</div>
												</div>
												
												<div class="col-md-12 col-lg-4">
													<div class="dash-widget">
														<div class="circle-bar circle-bar3">
															<div class="progressresult circle-graph3" data-value="50">
																 <span class="progress-left">
                       													 <span class="progress-bar appointments"></span>
          														</span>
																<span class="progress-right">
																		<span class="progress-bar appointments"></span>
																</span>
																<div class="progress-value  w-100 h-100  align-items-center rounded-circle d-flex justify-content-center">
																	<div class="h2 font-weight-bold"><img src="@/assets/img/icon-03.png" class="img-fluid" alt="Patient"></div>
																</div>
															</div>
														</div>
														<div class="dash-widget-info">
															<h6>Appoinments</h6>
															<h3>85</h3>
															<p class="text-muted">06, Apr 2019</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="row">
								<div class="col-md-12">
									<h4 class="mb-4">Patient Appoinment</h4>
									<div class="appointment-tab">
									
										<!-- Appointment Tab -->
										<ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
											<li class="nav-item">
												<a class="nav-link active" href="#upcoming-appointments" data-toggle="tab">Upcoming</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" href="#today-appointments" data-toggle="tab">Today</a>
											</li> 
										</ul>
										<!-- /Appointment Tab -->
										
										<div class="tab-content">
										
											<!-- Upcoming Appointment Tab -->
											<div class="tab-pane show active" id="upcoming-appointments">
												<div class="card card-table mb-0">
													<div class="card-body">
														<div class="table-responsive">
															<table class="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Patient Name</th>
																		<th>Appt Date</th>
																		<th>Purpose</th>
																		<th>Type</th>
																		<th class="text-center">Paid Amount</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr v-for="item in upcomingpatients" :key="item.id">
																		<td>
																			<h2 class="table-avatar">
																				<a href="/patient-profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image"></a>
																				<a href="/patient-profile">{{item.name}}<span>{{item.patient_id}}</span></a>
																			</h2>
																		</td>
																		<td>{{item.appt_date}} <span class="d-block text-info">{{item.appt_time}}</span></td>
																		<td>{{item.purpose}}</td>
																		<td>{{item.type}}</td>
																		<td class="text-center">{{item.paid_amount}}</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
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
											<!-- /Upcoming Appointment Tab -->
									   
											<!-- Today Appointment Tab -->
											<div class="tab-pane" id="today-appointments">
												<div class="card card-table mb-0">
													<div class="card-body">
														<div class="table-responsive">
															<table class="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Patient Name</th>
																		<th>Appt Date</th>
																		<th>Purpose</th>
																		<th>Type</th>
																		<th class="text-center">Paid Amount</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr v-for="item in todaypatients" :key="item.id">
																		<td>
																			<h2 class="table-avatar">
																				<router-link to="/doctor/patient-profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image"></router-link>
																				<router-link to="/doctor/patient-profile">{{item.name}}<span>{{item.patient_id}}</span></router-link>
																			</h2>
																		</td>
																		<td>{{item.appt_date}}<span class="d-block text-info">{{item.appt_time}}</span></td>
																		<td>{{item.purpose}}</td>
																		<td>{{item.type}}</td>
																		<td class="text-center">{{item.paid_amount}}</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<router-link to="/doctor/patient-profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="@/assets/img/patients/patient7.jpg" alt="User Image"></router-link>
																				<router-link to="/doctor/patient-profile">Joan Gardner <span>#PT0006</span></router-link>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span class="d-block text-info">5.00 PM</span></td>
																		<td>General</td>
																		<td>Old Patient</td>
																		<td class="text-center">$100</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<router-link to="/doctor/patient-profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="@/assets/img/patients/patient8.jpg" alt="User Image"></router-link>
																				<router-link to="/doctor/patient-profile">Daniel Griffing <span>#PT0007</span></router-link>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span class="d-block text-info">3.00 PM</span></td>
																		<td>General</td>
																		<td>New Patient</td>
																		<td class="text-center">$75</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<router-link to="/doctor/patient-profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="@/assets/img/patients/patient9.jpg" alt="User Image"></router-link>
																				<router-link to="/doctor/patient-profile">Walter Roberson <span>#PT0008</span></router-link>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span class="d-block text-info">1.00 PM</span></td>
																		<td>General</td>
																		<td>Old Patient</td>
																		<td class="text-center">$350</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<router-link to="/doctor/patient-profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="@/assets/img/patients/patient10.jpg" alt="User Image"></router-link>
																				<router-link to="/doctor/patient-profile">Robert Rhodes <span>#PT0010</span></router-link>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span class="d-block text-info">10.00 AM</span></td>
																		<td>General</td>
																		<td>New Patient</td>
																		<td class="text-center">$175</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 class="table-avatar">
																				<router-link to="/doctor/patient-profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="@/assets/img/patients/patient11.jpg" alt="User Image"></router-link>
																				<router-link to="/doctor/patient-profile">Harry Williams <span>#PT0011</span></router-link>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span class="d-block text-info">11.00 AM</span></td>
																		<td>General</td>
																		<td>New Patient</td>
																		<td class="text-center">$450</td>
																		<td class="text-right">
																			<div class="table-action">
																				<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																					<i class="far fa-eye"></i> View
																				</a>
																				
																				<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
																					<i class="fas fa-check"></i> Accept
																				</a>
																				<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
																					<i class="fas fa-times"></i> Cancel
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
											<!-- /Today Appointment Tab -->
											
										</div>
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
</template>

<script>
import upcomingpatients from '../../assets/json/doctor/upcomingpatients.json'
import todaypatients from '../../assets/json/doctor/todaypatients.json'
const images = require.context('@/assets/img/patients', false, /\.png$|\.jpg$/)

export default {
	data() {
		return {
			upcomingpatients: upcomingpatients,
			todaypatients: todaypatients
		}
	},
	mounted() {
		 $(".progressresult").each(function() {
			const percentageToDegrees = (percentage) =>  {
				return percentage / 100 * 360
			}
			let value = $(this).attr('data-value');
			let left = $(this).find('.progress-left .progress-bar');
			let right = $(this).find('.progress-right .progress-bar');

			if (value > 0) {
				if (value <= 50) {
					right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
				} else {
					right.css('transform', 'rotate(180deg)')
					left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
				}
			}

  		})
	},
	 methods:{
        loadImg(imgPath) {
            return images('./' + imgPath)
        },
    }
}
</script>
