<template>
    <!-- Profile Sidebar -->
        <div class="profile-sidebar">
            <div class="widget-profile pro-widget-content">
                <div class="profile-info-widget">
                    <a href="#" class="booking-doc-img">
                        <img :src="profiles.profilephoto_url" alt="User Image">
                    </a>
                    <div class="profile-det-info">
                        <h4>{{profiles.fname}} {{profiles.lname}}</h4> 
                        <h6>{{profiles.email}}</h6>
                        <div class="patient-details">
                            <h5><i class="fas fa-birthday-cake"></i> {{profiles.age}}</h5>
                            <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> {{profiles.city}} {{profiles.county}}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dashboard-widget">
                <nav class="dashboard-menu">
                    <ul>
                        <li :class="currentPath == 'patient-dashboard' ? 'active' : 'notaactive'">
                            <router-link to="/patient/index">
                                <i class="fas fa-columns"></i>
                                <span>Dashboard</span>
                            </router-link>
                        </li>
                        <li :class="currentPath == 'favourites' ? 'active' : 'notaactive'">
                            <router-link to="/patient/favourites">
                                <i class="fas fa-bookmark"></i>
                                <span>Favourites</span>
                            </router-link>
                        </li>
                        <li :class="currentPath == 'dependent' ? 'active' : 'notaactive'">
                            <router-link to="/patient/dependent">
                                <i class="fas fa-users"></i>
                                <span>Dependent</span>
                            </router-link>
                        </li>
                        <li :class="currentPath == 'chat' ? 'active' : 'notaactive'">
                            <router-link to="/patient/chat">
                                <i class="fas fa-comments"></i>
                                <span>Message</span>
                                <small class="unread-msg">23</small>
                            </router-link>
                        </li>
                        <li :class="currentPath == 'accounts' ? 'active' : 'notaactive'">
                            <router-link to="/patient/patient-accounts">
                            <i class="fas fa-file-invoice-dollar"></i>
                            <span>Accounts</span>
                            </router-link>
                            </li>
                        <li :class="currentPath == 'orders-list' ? 'active' : 'notaactive'">
                            <router-link to="/patient/orders-list">
                            <i class="fas fa-list-alt"></i>
                            <span>Orders</span>
                            <small class="unread-msg">7</small>
                            </router-link>
                        </li>
                        <li :class="currentPath == 'medical-records' ? 'active' : 'notaactive'">
                            <router-link to="/patient/medical-records">
                            <i class="fas fa-clipboard"></i>
                            <span>Add Medical Records</span>
                            </router-link>
                        </li>
                        <li :class="currentPath == 'medical-details' ? 'active' : 'notaactive'">
                            <router-link to="/patient/medical-details">
                            <i class="fas fa-file-medical-alt"></i>
                            <span>Medical Details</span>
                            </router-link>
                        </li>
                        <li :class="currentPath == 'patient-profile' ? 'active' : 'notaactive'">
                            <router-link to="/patient/profile">
                                <i class="fas fa-user-cog"></i>
                                <span>Profile Settings</span>
                            </router-link>
                        </li>
                        <li :class="currentPath == 'patient-change-password' ? 'active' : 'notaactive'">
                            <router-link to="/patient/change-password">
                                <i class="fas fa-lock"></i>
                                <span>Change Password</span>
                            </router-link>
                        </li>
                        <li>
                         <router-link to="/patient/change-password">
                            <div @click="logout">
                                <i class="fas fa-sign-out-alt"></i>
                                <span>Logout</span>
                            </div>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    <!-- /Profile Sidebar -->
</template>

<script>

import {db, fb } from "../../../firebase";
export default {

    data() {
        return {
            profiles :{
        fname:"",
        lname:"",
        email:"",
        age:"",
        city:"",
        county:"",
        profilephoto_url:""
     },
     //image: this.profiles.profilephoto_url,
        }
    },  

firestore(){
const user = fb.auth().currentUser;

 if (user !== null ) {
     return{
       profiles : db.collection('profile').doc(user.uid),
       
     }
 }

 },
   
methods:{
logout(){
    fb.auth().signOut()
    .then(()=>{
       this.$router.push('/'); 
    })
}
},
 computed:{
        currentPath() {
            return this.$route.name;
        }
    }
}
</script>