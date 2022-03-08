<template>
<div>
    <div class="main-wrapper">
        <layout-header3></layout-header3>
        
        <!-- Breadcrumb -->
			<div class="breadcrumb-bar">
				<div class="container-fluid">
					<div class="row align-items-center">
						<div class="col-md-12 col-12">
							<nav aria-label="breadcrumb" class="page-breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/index">Home</router-link></li>
									<li class="breadcrumb-item active" aria-current="page">Accounts</li>
								</ol>
							</nav>
							<h2 class="breadcrumb-title">Accounts</h2>
						</div>
					</div>
				</div>
			</div>
			<!-- /Breadcrumb -->
			
			<!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						
						<!-- Profile Sidebar -->
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
							<div class="profile-sidebar">
								<div class="widget-profile pro-widget-content">
									<div class="profile-info-widget">
										<a href="#" class="booking-doc-img">
											<img src="@/assets/img/patients/patient.jpg" alt="User Image">
										</a>
										<div class="profile-det-info">
											<h3>Richard Wilson</h3>
											<div class="patient-details">
												<h5><i class="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
												<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Newyork, USA</h5>
											</div>
										</div>
									</div>
								</div>
								<div class="dashboard-widget">
									<nav class="dashboard-menu">
										<ul>
											<li>
												<router-link to="/patient/index">
													<i class="fas fa-columns"></i>
													<span>Dashboard</span>
												</router-link>
											</li>
											<li>
												<router-link to="/patient/favourites">
													<i class="fas fa-bookmark"></i>
													<span>Favourites</span>
												</router-link>
											</li> 
											<li>
												<router-link to="/patient/dependent">
													<i class="fas fa-users"></i>
													<span>Dependent</span>
												</router-link>
											</li> 
											<li>
												<router-link to="/patient/chat">
													<i class="fas fa-comments"></i>
													<span>Message</span>
													<small class="unread-msg">23</small>
												</router-link>
											</li>
                                            <li class="active">
												<router-link to="/patient/patient-accounts">
													<i class="fas fa-file-invoice-dollar"></i>
													<span>Accounts</span>
												</router-link>
											</li>
											<li>
												<router-link to="/patient/orders-list">
													<i class="fas fa-list-alt"></i>
													<span>Orders</span>
                                                    <small class="unread-msg">7</small>
												</router-link>
											</li>
											<li>
												<router-link to="/patient/medical-records">
													<i class="fas fa-clipboard"></i>
													<span>Add Medical Records</span>
												</router-link>
											</li>
											<li>
												<router-link to="/patient/medical-details">
													<i class="fas fa-file-medical-alt"></i>
													<span>Medical Details</span>
												</router-link>
											</li>
											<li>
												<router-link to="/patient/profile">
													<i class="fas fa-user-cog"></i>
													<span>Profile Settings</span>
												</router-link>
											</li>
											<li>
												<router-link to="/patient/change-password">
													<i class="fas fa-lock"></i>
													<span>Change Password</span>
												</router-link>
											</li>
											<li>
												<router-link to="/patient/index">
													<i class="fas fa-sign-out-alt"></i>
													<span>Logout</span>
												</router-link>
											</li>
										</ul>
									</nav>
								</div>

							</div>
						</div>
						<!-- / Profile Sidebar -->
						
						<div class="col-md-7 col-lg-8 col-xl-9">

							<div class="row">
                                <div class="col-lg-5 d-flex">
                                    <div class="card flex-fill">
                                        <div class="card-header">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <h3 class="card-title">Account</h3>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="text-right">
                                                        <a title="Edit Profile" class="btn btn-primary btn-sm" href="#account_modal" data-toggle="modal"><i class="fas fa-pencil"></i> Edit Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="profile-view-bottom">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="info-list">
                                                            <div class="title">Bank Name</div>
                                                            <div class="text" id="bank_name">Goldman Sachs</div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="info-list">
                                                            <div class="title">Branch Name</div>
                                                            <div class="text" id="branch_name">Alpharetta</div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="info-list">
                                                            <div class="title">Account Number</div>
                                                            <div class="text" id="account_no">4916 0606 4635 5064</div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="info-list">
                                                            <div class="title">Account Name</div>
                                                            <div class="text" id="account_name">Richard Wilson</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-7 d-flex">
                                    <div class="card flex-fill">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="account-card bg-success-light">
                                                        <span>$90.48</span> Received
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="account-card bg-warning-light">
                                                        <span>$0.00</span> Requested
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="account-card bg-purple-light">
                                                        <span>$90.48</span> Balance
                                                    </div>
        
                                                </div>
                                                
                                                <div class="col-md-12 text-center">
                                                    <a href="#payment_request_modal" class="btn btn-primary request_btn" data-toggle="modal">Refund Request</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

							<div class="row">
								<div class="col-sm-12">
									<div class="card">
                                        <div class="card-body pt-0">
                                        
                                            <!-- Tab Menu -->
                                            <nav class="user-tabs mb-4">
                                                <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                                                    <li class="nav-item">
                                                        <a class="nav-link active" href="#pat_accounts" data-toggle="tab">Accounts</a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="#pat_refundrequest" data-toggle="tab">Doctor Request</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                            <!-- /Tab Menu -->
                                            
                                            <!-- Tab Content -->
                                            <div class="tab-content pt-0">
                                                
                                                <!-- Accounts Tab -->
                                                <div id="pat_accounts" class="tab-pane fade show active">
                                                    <div class="card card-table mb-0">
                                                        <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table table-hover table-center mb-0">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Date</th>
                                                                            <th>Doctor Name</th>
                                                                            <th class="text-center">Amount</th>
                                                                            <th>Status</th>
                                                                            <th></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>11 Nov 2019 <span class="d-block text-info">10.00 AM</span></td>
                                                                            <td>
                                                                                <h2 class="table-avatar">
                                                                                    <router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
                                                                                        <img class="avatar-img rounded-circle" src="@/assets/img/doctors/doctor-thumb-01.jpg" alt="User Image">
                                                                                    </router-link>
                                                                                    <router-link to="/doctor/profile">Dr. Ruby Perrin <span>Dental</span></router-link>
                                                                                </h2>
                                                                            </td>
                                                                            <td class="text-center">$150</td>
                                                                            <td><span class="badge badge-pill bg-success-light">Paid</span></td>
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
                                                                            <td>3 Nov 2019 <span class="d-block text-info">11.00 AM</span></td>
                                                                            <td>
                                                                                <h2 class="table-avatar">
                                                                                    <router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
                                                                                        <img class="avatar-img rounded-circle" src="@/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                                    </router-link>
                                                                                    <router-link to="/doctor/profile">Dr. Darren Elder <span>Dental</span></router-link>
                                                                                </h2>
                                                                            </td>
                                                                            <td class="text-center">$200</td>
                                                                            <td><span class="badge badge-pill bg-success-light">Paid</span></td>
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
                                                                            <td>1 Nov 2019 <span class="d-block text-info">1.00 PM</span></td>
                                                                            <td>
                                                                                <h2 class="table-avatar">
                                                                                    <router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
                                                                                        <img class="avatar-img rounded-circle" src="@/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image">
                                                                                    </router-link>
                                                                                    <router-link to="/doctor/profile">Dr. Deborah Angel <span>Cardiology</span></router-link>
                                                                                </h2>
                                                                            </td>
                                                                            <td class="text-center">$75</td>
                                                                            <td><span class="badge badge-pill bg-success-light">Paid</span></td>
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
                                                                            <td>30 Oct 2019 <span class="d-block text-info">9.00 AM</span></td>
                                                                            <td>
                                                                                <h2 class="table-avatar">
                                                                                    <router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
                                                                                        <img class="avatar-img rounded-circle" src="@/assets/img/doctors/doctor-thumb-04.jpg" alt="User Image">
                                                                                    </router-link>
                                                                                    <router-link to="/doctor/profile">Dr. Sofia Brient <span>Urology</span></router-link>
                                                                                </h2>
                                                                            </td>
                                                                            <td class="text-center">$100</td>
                                                                            <td><span class="badge badge-pill bg-warning-light">Pending</span></td>
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
                                                                            <td>28 Oct 2019 <span class="d-block text-info">6.00 PM</span></td>
                                                                            <td>
                                                                                <h2 class="table-avatar">
                                                                                    <router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
                                                                                        <img class="avatar-img rounded-circle" src="@/assets/img/doctors/doctor-thumb-05.jpg" alt="User Image">
                                                                                    </router-link>
                                                                                    <router-link to="/doctor/profile">Dr. Marvin Campbell <span>Ophthalmology</span></router-link>
                                                                                </h2>
                                                                            </td>
                                                                            <td class="text-center">$350</td>
                                                                            <td><span class="badge badge-pill bg-success-light">Paid</span></td>
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
                                                                            <td>27 Oct 2019 <span class="d-block text-info">8.00 AM</span></td>
                                                                            <td>
                                                                                <h2 class="table-avatar">
                                                                                    <router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
                                                                                        <img class="avatar-img rounded-circle" src="@/assets/img/doctors/doctor-thumb-06.jpg" alt="User Image">
                                                                                    </router-link>
                                                                                    <router-link to="/doctor/profile">Dr. Katharine Berthold <span>Orthopaedics</span></router-link>
                                                                                </h2>
                                                                            </td>
                                                                            <td class="text-center">$250</td>
                                                                            <td><span class="badge badge-pill bg-danger-light">Refunded</span></td>
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
                                                <!-- /Accounts Tab -->
                                                
                                                <!-- Refund Request Tab -->
                                                <div class="tab-pane fade" id="pat_refundrequest">
                                                    <div class="card card-table mb-0">
                                                        <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table table-hover table-center mb-0">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Date</th>
                                                                            <th>Doctor Name</th>
                                                                            <th class="text-center">Amount</th>
                                                                            <th>Status</th>
                                                                            <th></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>11 Nov 2019 <span class="d-block text-info">10.00 AM</span></td>
                                                                            <td>
                                                                                <h2 class="table-avatar">
                                                                                    <router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
                                                                                        <img class="avatar-img rounded-circle" src="@/assets/img/doctors/doctor-thumb-01.jpg" alt="User Image">
                                                                                    </router-link>
                                                                                    <router-link to="/doctor/profile">Dr. Ruby Perrin <span>Dental</span></router-link>
                                                                                </h2>
                                                                            </td>
                                                                            <td class="text-center">$150</td>
                                                                            <td><span class="badge badge-pill bg-success-light">Paid</span></td>
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
                                                                            <td>3 Nov 2019 <span class="d-block text-info">11.00 AM</span></td>
                                                                            <td>
                                                                                <h2 class="table-avatar">
                                                                                    <router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
                                                                                        <img class="avatar-img rounded-circle" src="@/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                                    </router-link>
                                                                                    <router-link to="/doctor/profile">Dr. Darren Elder <span>Dental</span></router-link>
                                                                                </h2>
                                                                            </td>
                                                                            <td class="text-center">$200</td>
                                                                            <td><span class="badge badge-pill bg-success-light">Paid</span></td>
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
                                                                            <td>1 Nov 2019 <span class="d-block text-info">1.00 PM</span></td>
                                                                            <td>
                                                                                <h2 class="table-avatar">
                                                                                    <router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
                                                                                        <img class="avatar-img rounded-circle" src="@/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image">
                                                                                    </router-link>
                                                                                    <router-link to="/doctor/profile">Dr. Deborah Angel <span>Cardiology</span></router-link>
                                                                                </h2>
                                                                            </td>
                                                                            <td class="text-center">$75</td>
                                                                            <td><span class="badge badge-pill bg-success-light">Paid</span></td>
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
                                                                            <td>30 Oct 2019 <span class="d-block text-info">9.00 AM</span></td>
                                                                            <td>
                                                                                <h2 class="table-avatar">
                                                                                    <router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
                                                                                        <img class="avatar-img rounded-circle" src="@/assets/img/doctors/doctor-thumb-04.jpg" alt="User Image">
                                                                                    </router-link>
                                                                                    <router-link to="/doctor/profile">Dr. Sofia Brient <span>Urology</span></router-link>
                                                                                </h2>
                                                                            </td>
                                                                            <td class="text-center">$100</td>
                                                                            <td><span class="badge badge-pill bg-warning-light">Pending</span></td>
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
                                                                            <td>28 Oct 2019 <span class="d-block text-info">6.00 PM</span></td>
                                                                            <td>
                                                                                <h2 class="table-avatar">
                                                                                    <router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
                                                                                        <img class="avatar-img rounded-circle" src="@/assets/img/doctors/doctor-thumb-05.jpg" alt="User Image">
                                                                                    </router-link>
                                                                                    <router-link to="/doctor/profile">Dr. Marvin Campbell <span>Ophthalmology</span></router-link>
                                                                                </h2>
                                                                            </td>
                                                                            <td class="text-center">$350</td>
                                                                            <td><span class="badge badge-pill bg-success-light">Paid</span></td>
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
                                                                            <td>27 Oct 2019 <span class="d-block text-info">8.00 AM</span></td>
                                                                            <td>
                                                                                <h2 class="table-avatar">
                                                                                    <router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
                                                                                        <img class="avatar-img rounded-circle" src="@/assets/img/doctors/doctor-thumb-06.jpg" alt="User Image">
                                                                                    </router-link>
                                                                                    <router-link to="/doctor/profile">Dr. Katharine Berthold <span>Orthopaedics</span></router-link>
                                                                                </h2>
                                                                            </td>
                                                                            <td class="text-center">$250</td>
                                                                            <td><span class="badge badge-pill bg-danger-light">Refunded</span></td>
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
                                                <!-- /Refund Request Tab -->
                                                    
                                            </div>
                                            <!-- Tab Content -->
                                            
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
    <!-- Account Details Modal -->
        <div class="modal fade custom-modal" id="account_modal" role="dialog" style="display: none;" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Account Details</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    </div>
                    <div class="modal-body">
                        <form id="accounts_form" method="post">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="control-label">Bank Name</label>
                                        <input type="text" name="bank_name" class="form-control bank_name" value="Goldman Sachs">
                                        <span class="help-block"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="control-label">Branch Name</label>
                                        <input type="text" name="branch_name" class="form-control branch_name" value="Alpharetta">
                                        <span class="help-block"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="control-label">Account Number</label>
                                        <input type="text" name="account_no" class="form-control account_no" value="4916 0606 4635 5064">
                                        <span class="help-block"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="control-label">Account Name</label>
                                        <input type="text" name="account_name" class="form-control acc_name" value="Richard Wilson">
                                        <span class="help-block"></span>
                                    </div>
                                </div> 
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer text-center">
                        <button type="submit" id="acc_btn" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Account Details Modal -->
	  
        <!-- Payment Request Modal-->
        <div class="modal fade custom-modal" id="payment_request_modal" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Payment Request</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    </div>
                    <div class="modal-body">
                        <form id="payment_request_form" method="post">
                            <input type="hidden" name="payment_type" id="payment_type">
                            <div class="form-group">
                                <label>Request Amount</label>
                                <input type="text" onkeyup="amount()" onblur="amount()" name="request_amount" id="request_amount" class="form-control" maxlength="6" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');">
                                <span class="help-block"></span>
                            </div>
                            <div class="form-group">
                                <label>Description (Optional)</label>
                                <textarea class="form-control" name="description" id="description"></textarea>
                                <span class="help-block"></span>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer text-center">
                        <button type="submit" id="request_btn" class="btn btn-primary">Request</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Payment Request Modal -->
        </div>
</template>