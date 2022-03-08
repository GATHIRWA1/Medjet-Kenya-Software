<template>
	<!-- Header -->
		<header class="header">
			<nav class="navbar navbar-expand-lg header-nav">
				<div class="navbar-header">
					<a id="mobile_btn" href="javascript:void(0);">
						<span class="bar-icon">
							<span></span>
							<span></span>
							<span></span>
						</span>
					</a>
					<router-link to="/" class="navbar-brand logo">
						<img src="@/assets/img/logo.png" class="img-fluid" alt="Logo">
					</router-link>
				</div>
				<div class="main-menu-wrapper">
					<div class="menu-header">
						<router-link to="/" class="menu-logo">
							<img src="@/assets/img/logo.png" class="img-fluid" alt="Logo">
						</router-link>
						<a id="menu_close" class="menu-close" href="javascript:void(0);">
							<i class="fas fa-times"></i>
						</a>
					</div>
				
					
			
				</div>		 
				<ul class="nav header-navbar-rht">
					<li class="nav-item contact-item">
						<div class="header-contact-img">
							<i class="far fa-hospital"></i>							
						</div>
						<div class="header-contact-detail">
							<p class="contact-header">Contact</p>
							<p class="contact-info-header"> +254 71 938 1888</p>
						</div>
					</li>
					
					<!-- User Menu @/assets/img/patients/patient.jpg-->
					<li class="nav-item dropdown has-arrow logged-item">
						<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
							<span class="user-img">
								<img class="rounded-circle" :src="profiles.profilephoto_url" width="31" alt="user photohere">
							</span>
						</a>
						<div class="dropdown-menu dropdown-menu-right">
							<div class="user-header">
								<div class="avatar avatar-sm">
									<img :src="profiles.profilephoto_url" alt="User Image" class="avatar-img rounded-circle">
								</div>
								<div class="user-text">
									<h6>{{profiles.fname}}{{profiles.lname}}</h6>
									<p class="text-muted mb-0">Patient</p>
								</div>
							</div>
							
							<router-link class="dropdown-item" to="/patient/profile">Profile Settings</router-link>
							<router-link class="dropdown-item" to="/">Logout</router-link>
						</div>
					</li>
					<!-- /User Menu -->
					
				</ul>
			</nav>
		</header>
		<!-- /Header -->
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

	
	mounted() {
		var $wrapper = $('.main-wrapper');
		$('.main-nav a').on('click', function(e) {
				if($(this).parent().hasClass('has-submenu')) {
					e.preventDefault();
				}
				if(!$(this).hasClass('submenu')) {
					$('ul', $(this).parents('ul:first')).slideUp(350);
					$('a', $(this).parents('ul:first')).removeClass('submenu');
					$(this).next('ul').slideDown(350);
					$(this).addClass('submenu');
				} else if($(this).hasClass('submenu')) {
					$(this).removeClass('submenu');
					$(this).next('ul').slideUp(350);
				}
			});
		$('body').append('<div class="sidebar-overlay"></div>');
		$(document).on('click', '#mobile_btn', function() {
			$wrapper.toggleClass('slide-nav');
			$('.sidebar-overlay').toggleClass('opened');
			$('html').addClass('menu-opened');
			$('#task_window').removeClass('opened');
			return false;
		});
		
		$(document).on('click', '#menu_close', function() {
			$('html').removeClass('menu-opened');
			$('.sidebar-overlay').removeClass('opened');
			$('main-wrapper').removeClass('slide-nav');
		});
		$('.main-nav ul li:not(.submenu) a').click(function(){
            $("html").removeClass('menu-opened');         
            $(".sidebar-overlay").removeClass('opened');
        });
	},
    computed: {
        currentPath() {
           return this.$route.name
	    },
    
    },
    methods: {
       dashboard(value) {
           if(value == 1) {
               let router = this.$router.resolve({path: '/admin/index'});
               window.open(router.href, '_blank');
           } else {
               let router = this.$router.resolve({path: '/doctor/index'});
               window.open(router.href, '_blank');
           }
       }
   }
}
</script>