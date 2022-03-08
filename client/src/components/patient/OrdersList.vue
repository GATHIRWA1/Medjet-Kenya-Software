<template>
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
                                    <li class="breadcrumb-item active" aria-current="page">Orders</li>
                                </ol>
                            </nav>
                            <h2 class="breadcrumb-title">Orders</h2>
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
                                            <li>
                                                <router-link to="/patient/patient-accounts">
                                                    <i class="fas fa-file-invoice-dollar"></i>
                                                    <span>Accounts</span>
                                                </router-link>
                                            </li>
                                            <li class="active">
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
                                <div class="col-sm-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="card card-table mb-0">
                                                <div class="card-body">
                                                    <div class="table-responsive">
                                                        <table class="table table-hover table-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>Order Id</th>
                                                                    <th>Pharmacy Name</th>
                                                                    <th class="text-center">Quantity</th>
                                                                    <th class="text-center">Amount</th>
                                                                    <th>Payment Gateway</th>
                                                                    <th>Status</th>
                                                                    <th>Order date</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td><router-link to="/invoice-view">OD1236547890</router-link></td>
                                                                    <td>Medlife Medical</td>
                                                                    <td class="text-center">2</td>
                                                                    <td class="text-center">$150</td>
                                                                    <td>Stripe</td>
                                                                    <td><span class="badge badge-primary">Order Placed</span></td>
                                                                    <td>11 Nov 2019 <span class="d-block text-info">10.00 AM</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td><router-link to="/invoice-view">OD1236547891</router-link></td>
                                                                    <td>Medlife Medical</td>
                                                                    <td class="text-center">4</td>
                                                                    <td class="text-center">$200</td>
                                                                    <td>Stripe</td>
                                                                    <td><span class="badge badge-primary">Order Placed</span></td>
                                                                    <td>3 Nov 2019 <span class="d-block text-info">11.00 AM</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td><router-link to="/invoice-view">OD1236547892</router-link></td>
                                                                    <td>Medlife Medical</td>
                                                                    <td class="text-center">1</td>
                                                                    <td class="text-center">$75</td>
                                                                    <td>Stripe</td>
                                                                    <td><span class="badge badge-primary">Order Placed</span></td>
                                                                    <td>1 Nov 2019 <span class="d-block text-info">1.00 PM</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td><router-link to="/invoice-view">OD1236547893</router-link></td>
                                                                    <td>PharmaMed Medical</td>
                                                                    <td class="text-center">2</td>
                                                                    <td class="text-center">$100</td>
                                                                    <td>Paystack</td>
                                                                    <td><span class="badge badge-warning">Shipped</span></td>
                                                                    <td>30 Oct 2019 <span class="d-block text-info">9.00 AM</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5</td>
                                                                    <td><router-link to="/invoice-view">OD1236547894</router-link></td>
                                                                    <td>PharmaMed Medical</td>
                                                                    <td class="text-center">5</td>
                                                                    <td class="text-center">$350</td>
                                                                    <td>Stripe</td>
                                                                    <td><span class="badge badge-warning">Shipped</span></td>
                                                                    <td>28 Oct 2019 <span class="d-block text-info">6.00 PM</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>6</td>
                                                                    <td><router-link to="/invoice-view">OD1236547895</router-link></td>
                                                                    <td>The Pill Club Medical</td>
                                                                    <td class="text-center">1</td>
                                                                    <td class="text-center">$250</td>
                                                                    <td>Paypal</td>
                                                                    <td><span class="badge badge-primary">Order Placed</span></td>
                                                                    <td>27 Oct 2019 <span class="d-block text-info">8.00 AM</span></td>
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
                        </div>
                    </div>

                </div>

            </div>      
            <!-- /Page Content -->
   
        <layout-footer></layout-footer>
    </div>
</template>