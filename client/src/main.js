import Vue from 'vue'
import App from './App'
import router from './router'
import { BarChart } from 'vue-morris'
import { LineChart } from 'vue-morris'
//vuelidate
import Vuelidate from 'vuelidate'

import VueFirestore from 'vue-firestore'


Vue.use(VueFirestore)


Vue.use(Vuelidate)



import LayoutHeader from '@/components/layouts/Header'

import TopHeader from '@/components/layouts/TopHeader'
import HeaderAdmin from '@/components/layouts/HeaderAdmin'
import HeaderPharmacyAdmin from '@/components/layouts/HeaderPharmacyAdmin'
import SidebarPharmacyAdmin from '@/components/layouts/SidebarPharmacyAdmin'
import SidebarAdmin from '@/components/layouts/SidebarAdmin'

import LayoutHeader3 from '@/components/layouts/patient/Header'
import LayoutFooter from '@/components/layouts/Footer'

import Sidebar from '@/components/layouts/doctors/SideBar'
import Sidebar1 from '@/components/layouts/patient/SideBar'
import HomeBanner from '@/components/HomeBanner'
import Looking from '@/components/Looking'
import Specialities from '@/components/Specialities'
import BrowseSpecialities from '@/components/BrowseSpecialities'
import BookDoctor from '@/components/BookDoctor'
import BestDoctor from '@/components/BestDoctor'
import Loader from '@/components/Loader'
import Features from '@/components/Features'
import Blogs from '@/components/Blogs'
import LatestPosts from '@/components/doctor/LatestPosts'
import BlogCategories from '@/components/doctor/BlogCategories'
import LastBooking from '@/components/doctor/LastBooking'
import PatientInformation from '@/components/doctor/PatientInformation'
import Tags from '@/components/doctor/Tags'
import SearchBar from '@/components/doctor/SearchBar'
import Slider from '@/components/pharmacy/Slider'
import SearchFilter from '@/components/patient/SearchFilter'
import SearchFilter1 from '@/components/pharmacy/SearchFilter'
import SearchFilter2 from '@/components/breadcrumb/ProductsFilter'

/** Breadcrumbs **/
import BreadCrumb from '@/components/breadcrumb/Dashboard'
import BreadCrumb1 from '@/components/breadcrumb/Appointments'
import BreadCrumb2 from '@/components/breadcrumb/MyPatients'
import BreadCrumb3 from '@/components/breadcrumb/ScheduleTimings'
import BreadCrumb4 from '@/components/breadcrumb/Invoices'
import BreadCrumb5 from '@/components/breadcrumb/Reviews'
import BreadCrumb6 from '@/components/breadcrumb/ProfileSettings'
import BreadCrumb7 from '@/components/breadcrumb/SocialMedia'
import BreadCrumb8 from '@/components/breadcrumb/ChangePassword'
import BreadCrumb9 from '@/components/breadcrumb/DoctorProfile'
import BreadCrumb10 from '@/components/breadcrumb/SearchDoctor'
import BreadCrumb11 from '@/components/breadcrumb/DoctorBlog'
import BreadCrumb12 from '@/components/breadcrumb/AddBlog'
import BreadCrumb13 from '@/components/breadcrumb/BlogDetails'
import BreadCrumb14 from '@/components/breadcrumb/BlogList'
import BreadCrumb15 from '@/components/breadcrumb/BlogGrid'
import BreadCrumb16 from '@/components/breadcrumb/Booking'
import BreadCrumb17 from '@/components/breadcrumb/Checkout'
import BreadCrumb18 from '@/components/breadcrumb/Favourites'
import BreadCrumb19 from '@/components/breadcrumb/AddDependent'
import BreadCrumb20 from '@/components/breadcrumb/Pharmacy'
import BreadCrumb21 from '@/components/breadcrumb/PharmacyDetails'
import BreadCrumb22 from '@/components/breadcrumb/PharmacySearch'
import BreadCrumb23 from '@/components/breadcrumb/Product'
import BreadCrumb24 from '@/components/breadcrumb/ProductDescription'
import BreadCrumb25 from '@/components/breadcrumb/Cart'
import BreadCrumb26 from '@/components/breadcrumb/PaymentSuccess'
import BreadCrumb27 from '@/components/breadcrumb/Calender'
import BreadCrumb28 from '@/components/breadcrumb/Components'
import BreadCrumb29 from '@/components/breadcrumb/InvoiceView'
import BreadCrumb30 from '@/components/breadcrumb/Blank'
import BreadCrumb31 from '@/components/breadcrumb/EditDependent'
import BreadCrumb32 from '@/components/breadcrumb/Profile'
import BreadCrumb33 from '@/components/breadcrumb/AddPrescription'
import BreadCrumb34 from '@/components/breadcrumb/AddBilling'
import BreadCrumb35 from '@/components/breadcrumb/EditPrescription'
import BreadCrumb36 from '@/components/breadcrumb/EditBilling'
import BreadCrumb37 from '@/components/breadcrumb/EditBlog'
import BreadCrumb38 from '@/components/breadcrumb/TermCondition'
import BreadCrumb39 from '@/components/breadcrumb/PrivacyPolicy'
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
//sytles 

if (window.location.pathname.includes("template/admin")) {
    require('./assets/AdminStyle.css');
} else if (!window.location.pathname.includes("template/admin")) {
    require('./assets/style.css');
}




import './assets/plugins/fontawesome/css/fontawesome.min.css'
import './assets/plugins/fontawesome/css/all.min.css'
import Slick from 'vue-slick'
import '../node_modules/slick-carousel/slick/slick.css'
import Raphael from 'raphael/raphael'
global.Raphael = Raphael
Vue.config.productionTip = false

/*Global Components */

Vue.component('layout-header', LayoutHeader);
Vue.component('top-header', TopHeader);
Vue.component('header-admin', HeaderAdmin);
Vue.component('header-pharmacy-admin', HeaderPharmacyAdmin);
Vue.component('sidebar-admin', SidebarAdmin);
Vue.component('sidebar-pharmacy-admin', SidebarPharmacyAdmin);
Vue.component('LayoutHeader3', LayoutHeader3)
Vue.component('sidebar', Sidebar);
Vue.component('sidebar1', Sidebar1);
Vue.component('layout-footer', LayoutFooter);

Vue.component('home-banner', HomeBanner);
Vue.component('looking', Looking);
Vue.component('specialities', Specialities);
Vue.component('browse-specialities', BrowseSpecialities);
Vue.component('last-booking', LastBooking);
Vue.component('patient-information', PatientInformation);
Vue.component('book-doctor', BookDoctor);
Vue.component('best-doctor', BestDoctor);
Vue.component('features', Features);
Vue.component('blogs', Blogs);
Vue.component('slick', Slick);
Vue.component('search-filter', SearchFilter);
Vue.component('search-filter1', SearchFilter1);
Vue.component('search-filter2', SearchFilter2);
Vue.component('latest-posts', LatestPosts);
Vue.component('blog-categories', BlogCategories);
Vue.component('tags', Tags);
Vue.component('search-bar', SearchBar);
Vue.component('slider', Slider);
Vue.component('loader', Loader);

/* BreadCrumbs */
Vue.component('breadcrumb', BreadCrumb);
Vue.component('breadcrumb1', BreadCrumb1);
Vue.component('breadcrumb2', BreadCrumb2);
Vue.component('breadcrumb3', BreadCrumb3);
Vue.component('breadcrumb4', BreadCrumb4);
Vue.component('breadcrumb5', BreadCrumb5);
Vue.component('breadcrumb6', BreadCrumb6);
Vue.component('breadcrumb7', BreadCrumb7);
Vue.component('breadcrumb8', BreadCrumb8);
Vue.component('breadcrumb9', BreadCrumb9);
Vue.component('breadcrumb10', BreadCrumb10);
Vue.component('breadcrumb11', BreadCrumb11);
Vue.component('breadcrumb12', BreadCrumb12);
Vue.component('breadcrumb13', BreadCrumb13);
Vue.component('breadcrumb14', BreadCrumb14);
Vue.component('breadcrumb15', BreadCrumb15);
Vue.component('breadcrumb16', BreadCrumb16);
Vue.component('breadcrumb17', BreadCrumb17);
Vue.component('breadcrumb18', BreadCrumb18);
Vue.component('breadcrumb19', BreadCrumb19);
Vue.component('breadcrumb20', BreadCrumb20);
Vue.component('breadcrumb21', BreadCrumb21);
Vue.component('breadcrumb22', BreadCrumb22);
Vue.component('breadcrumb23', BreadCrumb23);
Vue.component('breadcrumb24', BreadCrumb24);
Vue.component('breadcrumb25', BreadCrumb25);
Vue.component('breadcrumb26', BreadCrumb26);
Vue.component('breadcrumb27', BreadCrumb27);
Vue.component('breadcrumb28', BreadCrumb28);
Vue.component('breadcrumb29', BreadCrumb29);
Vue.component('breadcrumb30', BreadCrumb30);
Vue.component('breadcrumb31', BreadCrumb31);
Vue.component('breadcrumb32', BreadCrumb32);
Vue.component('breadcrumb33', BreadCrumb33);
Vue.component('breadcrumb34', BreadCrumb34);
Vue.component('breadcrumb35', BreadCrumb35);
Vue.component('breadcrumb36', BreadCrumb36);
Vue.component('breadcrumb37', BreadCrumb37);
Vue.component('breadcrumb38', BreadCrumb38);
Vue.component('breadcrumb39', BreadCrumb39);


new Vue({
    el: '#app',
    router,
    components: {
        App,
        BarChart,
        LineChart,
    },
    template: '<App/>'
})