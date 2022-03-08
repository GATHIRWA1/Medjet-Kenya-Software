<template>
<div>
    <div class="main-wrapper">
        <layout-header3></layout-header3>
        <breadcrumb></breadcrumb>
        	<!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						
						<!-- Profile Sidebar -->
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
							<sidebar1></sidebar1>
						</div>
						<!-- / Profile Sidebar -->
						
						<div class="col-md-7 col-lg-8 col-xl-9">


<div class="row">
								<div class="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
									<div class="card">
										<div class="card-body text-center">
											<div class="mb-3">
												<img src="@/assets/img/specialities/pt-dashboard-01.png" alt="" width="55">
											</div>
											<h5>Heart Rate</h5>
											<h6>12 <sub>bpm</sub></h6>
										</div>
									</div>
								</div>
								<div class="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
									<div class="card">
										<div class="card-body text-center">
											<div class="mb-3">
												<img src="@/assets/img/specialities/pt-dashboard-02.png" alt="" width="55">
											</div>
											<h5>Body Temperature</h5>
											<h6>18 <sub>C</sub></h6>
										</div>
									</div>
								</div>
								<div class="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
									<div class="card">
										<div class="card-body text-center">
											<div class="mb-3">
												<img src="@/assets/img/specialities/pt-dashboard-03.png" alt="" width="55">
											</div>
											<h5>Glucose Level</h5>
											<h6>70 - 90</h6>
										</div>
									</div>
								</div>
								<div class="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
									<div class="card">
										<div class="card-body text-center">
											<div class="mb-3">
												<img src="@/assets/img/specialities/pt-dashboard-01.png" alt="" width="55">
											</div>
											<h5>Blood Pressure</h5>
											<h6>202/90 <sub>mg/dl</sub></h6>
										</div>
									</div>
								</div>
							</div>

							<div class="row patient-graph-col">
								<div class="col-12">
									<div class="card">
										<div class="card-header">
											<h4 class="card-title">Graph Status</h4>
										</div>
										<div class="card-body pt-2 pb-2 mt-1 mb-1">
											<div class="row">
												<div class="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
													<a href="#" class="graph-box" data-toggle="modal" data-target="#graph1">
														<div>
															<h4>BMI Status</h4>
														</div>
														<div class="graph-img">
															<img src="@/assets/img/shapes/graph-01.png" alt="">
														</div>
														<div class="graph-status-result mt-3">
															<h3 class="bmi_data_last"></h3>
															<span class="graph-update-date">Last Update 6d</span>
														</div>
													</a>
												</div>
												<div class="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
														<a href="#" class="graph-box pink-graph" data-toggle="modal" data-target="#graph2">
															<div>
																<h4>Heart Rate Status</h4>
															</div>
															<div class="graph-img">
																<img src="@/assets/img/shapes/graph-02.png" alt="">
															</div>
															<div class="graph-status-result mt-3">
																<h3 class="bmi_data_last"></h3>
																<span class="graph-update-date">Last Update 2d</span>
															</div>
														</a>
												</div>
												<div class="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
													<a href="#" class="graph-box sky-blue-graph" data-toggle="modal" data-target="#graph3">
														<div>
															<h4>FBC Status</h4>
														</div>
														<div class="graph-img">
															<img src="@/assets/img/shapes/graph-03.png" alt="">
														</div>
														<div class="graph-status-result mt-3">
															<h3 class="bmi_data_last"></h3>
															<span class="graph-update-date">Last Update 5d</span>
														</div>
													</a>
												</div>
												<div class="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
													<a href="#" class="graph-box orange-graph" data-toggle="modal" data-target="#graph4">
														<div>
															<h4>Weight Status</h4>
														</div>
														<div class="graph-img">
															<img src="@/assets/img/shapes/graph-04.png" alt="">
														</div>
														<div class="graph-status-result mt-3">
															<h3 class="bmi_data_last"></h3>
															<span class="graph-update-date">Last Update 3d</span>
														</div>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>


							<div class="card">
								<div class="card-body pt-0">
								
									<!-- Tab Menu -->
									<nav class="user-tabs mb-4">
										<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
											<li class="nav-item">
												<a class="nav-link active" href="#pat_appointments" data-toggle="tab">Appointments</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" href="#pat_prescriptions" data-toggle="tab">Prescriptions</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" href="#pat_medical_records" data-toggle="tab"><span class="med-records">Medical Records</span></a>
											</li>
											<li class="nav-item">
												<a class="nav-link" href="#pat_billing" data-toggle="tab">Billing</a>
											</li>
										</ul>
									</nav>
									<!-- /Tab Menu -->
									
									<!-- Tab Content -->
									<div class="tab-content pt-0">
										
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
																<tr v-for="item in appointments" :key="item.id">
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
                                                                        <span class="badge badge-pill bg-success-light" v-if="item.status == 'Confirm'">Confirm</span>
                                                                        <span class="badge badge-pill bg-danger-light" v-if="item.status == 'Cancelled'">Cancelled</span>
                                                                        <span class="badge badge-pill bg-warning-light" v-if="item.status == 'Pending'">Pending</span>
                                                                    </td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																				<i class="fas fa-print"></i> Print
																			</a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																				<i class="far fa-eye"></i> View
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
										<div class="tab-pane fade" id="pat_prescriptions">
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
																			<router-link to="/doctor/profile">{{item.created_by}} <span>{{item.category}}</span></router-link>
																		</h2>
																	</td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																				<i class="fas fa-print"></i> Print
																			</a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																				<i class="far fa-eye"></i> View
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
										<div id="pat_medical_records" class="tab-pane fade">
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
																	<td>{{item.description}}</td>
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
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																				<i class="far fa-eye"></i> View
																			</a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																				<i class="fas fa-print"></i> Print
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
										<div id="pat_billing" class="tab-pane fade">
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
												</div>
											</div>
										</div>
										<!-- /Billing Tab -->
										  
									</div>
									<!-- Tab Content -->
									
								</div>
							</div>
						</div>
					</div>

				</div>

			</div>		
			<!-- /Page Content -->
        <layout-footer></layout-footer>
    </div>
    <!-- Graph One-->
		<div class="modal fade custom-modal show" id="graph1">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">BMI Status</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<div id="bmi-status"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Graph One-->

		<!-- Graph Two-->
		<div class="modal fade custom-modal show" id="graph2">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Heart Rate Status</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<div id="heartrate-status"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Graph Two-->

		<!-- Graph Two-->
		<div class="modal fade custom-modal show" id="graph3">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">FBC Status</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<div id="fbc-status"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Graph Two-->

		<!-- Graph Two-->
		<div class="modal fade custom-modal show" id="graph4">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Weight Status</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<div id="weight-status"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Graph Two-->
		</div>
</template>

<script>
import appointments from '../../assets/json/patient/appointments.json'
import prescriptions from '../../assets/json/patient/prescriptions.json'
import medicalrecords from '../../assets/json/patient/medicalrecords.json'
import billing from '../../assets/json/patient/billing.json'
const images = require.context('@/assets/img/doctors', false, /\.png$|\.jpg$/)

export default {
	  mounted() {
     
//BMI Status
	if($('#bmi-status').length > 0) {
		var options = {
          series: [{
            name: "BMI",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
        };

        var chart = new ApexCharts(document.querySelector("#bmi-status"), options);
        chart.render();
	}

	//Heart Rate Status
	if($('#heartrate-status').length > 0) {
		var options = {
          series: [{
          name: 'HeartRate',
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
        }],
          chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          width: 7,
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
          tickAmount: 10,
        },
        title: {
          align: 'left',
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: [ '#0de0fe'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          },
        },
        markers: {
          size: 4,
          colors: ["#15558d"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7,
          }
        },
        yaxis: {
          min: -10,
          max: 40,
          title: {
          },
        }
        };

        var chart = new ApexCharts(document.querySelector("#heartrate-status"), options);
        chart.render();
	}

	//FBC Status
	if($('#fbc-status').length > 0) {
	 	var options = {
          series: [{
          name: 'FBC',
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
        }],
          chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          position: 'top',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#0de0fe',
                colorTo: '#0de0fe',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }
        
        },
        title: {
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#fbc-status"), options);
        chart.render();
    }

    //Weight Status
    if($('#weight-status').length > 0) {
    	var options = {
          series: [{
          name: 'Weight',
          data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
        }],
          chart: {
          type: 'line',
          height: 350
        },
        stroke: {
          curve: 'stepline',
        },
        dataLabels: {
          enabled: false
        },
        title: {
          align: 'left'
        },
        markers: {
          hover: {
            sizeOffset: 4
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#weight-status"), options);
        chart.render();
    }

   },
    data() {
        return {
            appointments: appointments,
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