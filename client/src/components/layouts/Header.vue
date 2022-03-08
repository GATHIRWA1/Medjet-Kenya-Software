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
                   <ul class="main-nav">
                       <li class="has-submenu">
                             <li :class="currentPath == 'doctor-blogs' || currentPath == 'edit-blog' ? 'active' : 'notactive'"><router-link to="/doctor/blogs">Blog</router-link></li>
                        <li :class="currentPath == 'blog-details' ? 'active' : 'notactive'"><router-link to="/doctor/blog-details">Blog view</router-link></li>
                   <li :class="currentPath == 'add-blog' ? 'active' : 'notactive'"><router-link to="/doctor/add-blog">Add Blog</router-link></li>
                       <li :class="currentPath == 'add-blog' ? 'active' : 'notactive'"><router-link to="">Support</router-link></li>             
                   </ul>
                        
                     
               </div>       
               <ul class="nav header-navbar-rht">
                   <li class="nav-item contact-item">
                       <div class="header-contact-img">
                           <i class="far fa-hospital"></i>                         
                       </div>
                       <div class="header-contact-detail">
                           <p class="contact-header">Contact</p>
                           <p class="contact-info-header"> +254 19 381 888</p>
                       </div>
                   </li>
                   <li class="nav-item">
                       <div style="margin-right: 10px;"><router-link class="nav-link header-login" to="/login">login</router-link></div>
                       <div><router-link class="nav-link header-login" to="/register">Signup </router-link></div>
                   </li>
               </ul>
           </nav>
       </header>
       <!-- /Header -->
</template>

<script>

export default {
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
     
       blogMenu() {
           return this.$route.name == 'blog-list' || this.$route.name == 'blog-grid' || this.$route.name == 'blog-details';
       }
   },
   methods: {
       dashboard(value) {
           if(value == 1) {
               let router = this.$router.resolve({path: '/admin/index'});
               window.open(router.href, '_blank');
           } else {
               let router = this.$router.resolve({path: '/pharmacyadmin/index'});
               window.open(router.href, '_blank');
           }
       }
   },
}
</script>