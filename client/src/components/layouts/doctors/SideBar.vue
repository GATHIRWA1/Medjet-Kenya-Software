<template>
    <!-- Profile Sidebar -->
    <div class="profile-sidebar">
        <div class="widget-profile pro-widget-content">
            <div class="profile-info-widget">
                <a href="#" class="booking-doc-img">
                    <img src="@/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                </a>
                <div class="profile-det-info">
                    <h3>Dr. Darren Elder</h3>
                    
                    <div class="patient-details">
                        <h5 class="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="dashboard-widget">
            <nav class="dashboard-menu">
                <ul>
                    <li :class="currentPath == 'doctor-index' ? 'active' : 'notactive'">
                        <router-link to="/doctor/index">
                            <i class="fas fa-columns"></i>
                            <span>Dashboard</span>
                        </router-link>
                    </li>
                    <li :class="currentPath == 'doctor-appointments' ? 'active' : 'notactive'">
                        <router-link to="/doctor/appointments">
                            <i class="fas fa-calendar-check"></i>
                            <span>Appointments</span>
                        </router-link>
                    </li>
                    <li :class="currentPath == 'my-patients' ? 'active' : 'notactive'">
                        <router-link to="/doctor/patients">
                            <i class="fas fa-user-injured"></i>
                            <span>My Patients</span>
                        </router-link>
                    </li>
                    <li :class="currentPath == 'schedule-timings' ? 'active' : 'notactive'">
                        <router-link to="/doctor/schedule-timings">
                            <i class="fas fa-hourglass-start"></i>
                            <span>Schedule Timings</span>
                        </router-link>
                    </li>
                    <li :class="currentPath == 'available-timings' ? 'active' : 'notactive'">
                                                <router-link to="/doctor/available-timings">
                                                    <i class="fas fa-clock"></i>
                                                    <span>Available Timings</span>
                                                </router-link>
                                            </li>
                    <li :class="currentPath == 'invoices' ? 'active' : 'notactive'">
                        <router-link to="/doctor/invoices">
                            <i class="fas fa-file-invoice"></i>
                            <span>Invoices</span>
                        </router-link>
                    </li>
                    <li :class="currentPath == 'accounts' ? 'active' : 'notactive'">
                                                <router-link to="/doctor/accounts">
                                                    <i class="fas fa-file-invoice-dollar"></i>
                                                    <span>Accounts</span>
                                                </router-link>
                                            </li>
                    <li :class="currentPath == 'doctor-reviews' ? 'active' : 'notactive'">
                        <router-link to="/doctor/reviews">
                            <i class="fas fa-star"></i>
                            <span>Reviews</span>
                        </router-link>
                    </li>
                    <li :class="currentPath == 'messages' ? 'active' : 'notactive'">
                        <router-link to="/doctor/messages">
                            <i class="fas fa-comments"></i>
                            <span>Message</span>
                            <small class="unread-msg">23</small>
                        </router-link>
                    </li>
                    <li :class="currentPath == 'profile-settings' ? 'active' : 'notactive'">
                        <router-link to="/doctor/profile-settings">
                            <i class="fas fa-user-cog"></i>
                            <span>Profile Settings</span>
                        </router-link>
                    </li>
                    <li :class="currentPath == 'social-media' ? 'active' : 'notactive'">
                        <router-link to="/doctor/social-media">
                            <i class="fas fa-share-alt"></i>
                            <span>Social Media</span>
                        </router-link>
                    </li>
                    <li :class="currentPath == 'change-password' ? 'active' : 'notactive'">
                        <router-link to="/doctor/change-password">
                            <i class="fas fa-lock"></i>
                            <span>Change Password</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/index">
                            <i class="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <!-- /Profile Sidebar -->
</template>

<script>
export default {
    computed:{
        currentPath() {
            return this.$route.name;
        }
    }
}
</script>