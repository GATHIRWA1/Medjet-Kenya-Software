<template>
        <!-- Sidebar -->
        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner">
                <vue-custom-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title"> 
                            <span>Main</span>.
                        </li>
                        <li> 
                            <router-link to="/admin/index"><home-icon size="1.4x" class="custom-class"></home-icon> <span>Dashboard</span></router-link>
                        </li>
                        <li> 
                            <router-link to="/admin/appointmentlist"><layout-icon size="1.4x" class="custom-class"></layout-icon> <span>Appointments</span></router-link>
                        </li>
                        <li> 
                            <router-link to="/admin/specialities"><users-icon size="1.4x" class="custom-class"></users-icon> <span>Specialities</span></router-link>
                        </li>
                        <li> 
                            <router-link to="/admin/doctorlist"><user-plus-icon size="1.4x" class="custom-class"></user-plus-icon> <span>Doctors</span></router-link>
                        </li>
                        <li> 
                            <router-link to="/admin/patientlist"><user-icon size="1.4x" class="custom-class"></user-icon>
                                <span>Patients</span></router-link>
                        </li>
                        <li> 
                            <router-link to="/admin/reviews"><star-icon size="1.4x" class="custom-class"></star-icon> <span>Reviews</span></router-link>
                        </li>
                        <li> 
                            <router-link to="/admin/transactionslist"><bar-chart-2-icon size="1.4x" class="custom-class"></bar-chart-2-icon> <span>Transactions</span></router-link>
                        </li>
                        <li> 
                            <router-link to="/admin/settings"><settings-icon size="1.4x" class="custom-class"></settings-icon> <span>Settings</span></router-link>
                        </li>
                        <li class="submenu">
                            <a href="#"><file-text-icon size="1.4x" class="custom-class"></file-text-icon> <span> Reports</span> <span class="menu-arrow"></span></a>
                            <ul style="display: none;">
                                <li><router-link to="/admin/invoicereport">Invoice Reports</router-link></li>
                            </ul>
                        </li>
                        <li class="menu-title"> 
                            <span>Pages</span>
                        </li>
                        <li class="submenu">
                            <a href="#"><file-text-icon size="1.4x" class="custom-class"></file-text-icon> <span> Blog </span> <span class="menu-arrow"></span></a>
                            <ul style="display: none;">
                                <li><router-link to="/admin/blog"> Blog </router-link></li>
                                <li><router-link to="/admin/blogdetails"> Blog Details</router-link></li>
                                <li><router-link to="/admin/addblog"> Add Blog </router-link></li>
                                <li><router-link to="/admin/editblog"> Edit Blog </router-link></li>
                            </ul>
                        </li>
                        <li><router-link to="/admin/productlist"><layout-icon size="1.4x" class="custom-class"></layout-icon> <span>Product List</span></router-link></li>
                        <li><router-link to="/admin/pharmacylist"><settings-icon size="1.4x" class="custom-class"></settings-icon> <span>Pharmacy List</span></router-link></li>
                        <li> 
                            <router-link to="/admin/profile"><user-plus-icon size="1.4x" class="custom-class"></user-plus-icon> <span>Profile</span></router-link>
                        </li>
                        <li class="submenu">
                            <a href="#"><file-text-icon size="1.4x" class="custom-class"></file-text-icon> <span> Authentication </span> <span class="menu-arrow"></span></a>
                            <ul style="display: none;">
                                <li><router-link to="/admin/login"> Login </router-link></li>
                                <li><router-link to="/admin/register"> Register </router-link></li>
                                <li><router-link to="/admin/forgotpassword"> Forgot Password </router-link></li>
                                <li><router-link to="/admin/lockscreen"> Lock Screen </router-link></li>
                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="#"><x-circle-icon size="1.4x" class="custom-class"></x-circle-icon> <span> Error Pages </span> <span class="menu-arrow"></span></a>
                            <ul style="display: none;">
                                <li><router-link to="/admin/error404">404 Error </router-link></li>
                                <li><router-link to="/admin/error500">500 Error </router-link></li>
                            </ul>
                        </li>
                        <li> 
                            <router-link to="/admin/blankpage"> <file-icon size="1.5x" class="custom-class"></file-icon> <span>Blank Page</span></router-link>
                        </li>
                        <li class="menu-title"> 
                            <span>UI Interface</span>
                        </li>
                        <li> 
                            <router-link to="/admin/components"><settings-icon size="1.4x" class="custom-class"></settings-icon> <span>Components</span></router-link>
                        </li>
                        <li class="submenu">
                            <a href="#"><layout-icon size="1.4x" class="custom-class"></layout-icon> <span> Forms </span> <span class="menu-arrow"></span></a>
                            <ul style="display: none;">
                                <li><router-link to="/admin/formbasicinputs">Basic Inputs </router-link></li>
                                <li><router-link to="/admin/forminputgroups">Input Groups </router-link></li>
                                <li><router-link to="/admin/formhorizontal">Horizontal Form </router-link></li>
                                <li><router-link to="/admin/formvertical"> Vertical Form </router-link></li>
                                <li><router-link to="/admin/formmask"> Form Mask </router-link></li>
                                <li><router-link to="/admin/formvalidation"> Form Validation </router-link></li>
                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="#"><tablet-icon size="1.4x" class="custom-class"></tablet-icon> <span> Tables </span> <span class="menu-arrow"></span></a>
                            <ul style="display: none;">
                                <li><router-link to="/admin/tablesbasic">Basic Tables </router-link></li>
                                <li><router-link to="/admin/datatables">Data Table </router-link></li>
                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><code-icon size="1.5x" class="custom-class"></code-icon> <span>Multi Level</span> <span class="menu-arrow"></span></a>
                            <ul style="display: none;">
                                <li class="submenu">
                                    <a href="javascript:void(0);"> <span>Level 1</span> <span class="menu-arrow"></span></a>
                                    <ul style="display: none;">
                                        <li><a href="javascript:void(0);"><span>Level 2</span></a></li>
                                        <li class="submenu">
                                            <a href="javascript:void(0);"> <span> Level 2</span> <span class="menu-arrow"></span></a>
                                            <ul style="display: none;">
                                                <li><a href="javascript:void(0);">Level 3</a></li>
                                                <li><a href="javascript:void(0);">Level 3</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="javascript:void(0);"> <span>Level 2</span></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript:void(0);"> <span>Level 1</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </vue-custom-scrollbar>
            </div>
        </div>
        <!-- /Sidebar -->
</template>
<script>
     import vueCustomScrollbar from 'vue-custom-scrollbar'
     import "vue-custom-scrollbar/dist/vueScrollbar.css"
    import { HomeIcon } from 'vue-feather-icons'
    import { LayoutIcon } from 'vue-feather-icons'
    import { UsersIcon } from 'vue-feather-icons'
    import { UserPlusIcon } from 'vue-feather-icons'
    import { UserIcon } from 'vue-feather-icons'
    import { StarIcon } from 'vue-feather-icons'
    import { BarChart2Icon } from 'vue-feather-icons'
    import { FileTextIcon } from 'vue-feather-icons'
    import { XCircleIcon } from 'vue-feather-icons'
    import { FileIcon } from 'vue-feather-icons'
    import { CodeIcon } from 'vue-feather-icons'
    import { TabletIcon } from 'vue-feather-icons'
    import { SettingsIcon } from 'vue-feather-icons'
    export default {
  components: {
    vueCustomScrollbar,
    HomeIcon,
    LayoutIcon,
    UsersIcon,
    UserPlusIcon,
    UserIcon,
    StarIcon,
    BarChart2Icon,
    FileTextIcon,
    XCircleIcon,
    FileIcon,
    CodeIcon,
    TabletIcon,
    SettingsIcon
  },
  mounted() {
      $('#sidebar-menu a').on('click', function (e) {
        if ($(this).parent().hasClass('submenu')) {
          e.preventDefault();
        }
        if (!$(this).hasClass('subdrop')) {
          $('ul', $(this).parents('ul:first')).slideUp(350);
          $('a', $(this).parents('ul:first')).removeClass('subdrop');
          $(this).next('ul').slideDown(350);
          $(this).addClass('subdrop');
        } else if ($(this).hasClass('subdrop')) {
          $(this).removeClass('subdrop');
          $(this).next('ul').slideUp(350);
        }
      });
      $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');

    },
    computed: {
        currentpage() {
          return this.$route.path;
        },
      },
  data() {
      return {
        settings: {
suppressScrollX: true,
},
        activeClass: 'active',
      };
              //  isactive : true
    },
    methods: {
    scrollHanle(evt) {
      console.log(evt)
    }
  },
}
</script>
<style>
    .scroll-area {
      position: relative;
      margin: auto;
      height: calc(100vh - 60px);
      background-color: transparent !important;
  }
  .sidebar-menu ul li a.active {
    background-color: #19c1dc;
    color: #fff;
}
.sidebar-menu ul ul a.active {
    color: #20e3ff;
    text-decoration: underline;
    background-color: unset;
}
</style>