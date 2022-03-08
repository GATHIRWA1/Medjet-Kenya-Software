<template>
        <!-- Sidebar -->
        <div class="sidebar" id="sidebar">
            <div class="sidebar-inner">
                <vue-custom-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
                    <div id="sidebar-menu" class="sidebar-menu">
						<ul>
							<li class="menu-title"> 
								<span>Main</span>
							</li>
							<li> 
								<router-link to="/pharmacyadmin/index"><home-icon size="1.4x" class="custom-class"></home-icon> <span>Dashboard</span></router-link>
							</li>
							<li class="submenu">
								<a href="#"><file-text-icon size="1.4x" class="custom-class"></file-text-icon> <span> Products</span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><router-link to="/pharmacyadmin/products">Products</router-link></li>
									<li><router-link to="/pharmacyadmin/addproduct">Add Product</router-link></li>
									<li><router-link to="/pharmacyadmin/outstock">Out-Stock</router-link></li>
									<li><router-link to="/pharmacyadmin/expired">Expired</router-link></li>
								</ul>
							</li>
							<li> 
								<router-link to="/pharmacyadmin/categories"><layout-icon size="1.4x" class="custom-class"></layout-icon> <span>Categories</span></router-link>
							</li>
							<li class="submenu">
								<a href="#"><star-icon size="1.4x" class="custom-class"></star-icon> <span> Purchase</span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><router-link to="/pharmacyadmin/purchase">Purchase</router-link></li>
									<li><router-link to="/pharmacyadmin/addpurchase">Add Purchase</router-link></li>
									<li><router-link to="/pharmacyadmin/order">Orders</router-link></li>
								</ul>
							</li>
							<li><router-link to="/pharmacyadmin/sales"><bar-chart-2-icon size="1.4x" class="custom-class"></bar-chart-2-icon> <span>Sales</span></router-link></li>
							<li class="submenu">
								<a href="#"><user-icon size="1.4x" class="custom-class"></user-icon> <span> Supplier</span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><router-link to="/pharmacyadmin/supplier">Supplier</router-link></li>
									<li><router-link to="/pharmacyadmin/addsupplier">Add Supplier</router-link></li>
								</ul>
							</li>
							<li><router-link to="/pharmacyadmin/transactionslist"><book-icon size="1.5x" class="custom-class"></book-icon> <span>Transaction</span></router-link></li>
							<li class="submenu">
								<a href="#"><file-text-icon size="1.5x" class="custom-class"></file-text-icon> <span> Reports</span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><router-link to="/pharmacyadmin/invoicereport">Invoice Reports</router-link></li>
								</ul>
							</li>
							<li class="menu-title"> 
								<span>Pages</span>
							</li>
							<li> 
								<router-link to="/pharmacyadmin/profile"><user-plus-icon size="1.5x" class="custom-class"></user-plus-icon> <span>Profile</span></router-link>
							</li>
							<li> 
								<router-link to="/pharmacyadmin/settings"><settings-icon size="1.4x" class="custom-class"></settings-icon> <span>Settings</span></router-link>
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
    import { BookIcon } from 'vue-feather-icons'
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
    SettingsIcon,
    BookIcon
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