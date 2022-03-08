<template>
    <div class="main-wrapper">
            <header-admin></header-admin>
            <sidebar-admin></sidebar-admin>
           <!-- Page Wrapper -->
           <div class="page-wrapper">
            <div class="content container-fluid">
            
                <!-- Page Header -->
                <div class="page-header">
                    <div class="row">
                        <div class="col-sm-12">
                            <h3 class="page-title">List of Doctors</h3>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
                                <li class="breadcrumb-item"><a href="javascript:(0);">Users</a></li>
                                <li class="breadcrumb-item active">Doctor</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- /Page Header -->
                
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="datatable table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Doctor Name</th>
                                                <th>Speciality</th>
                                                <th>Member Since</th>
                                                <th>Earned</th>
                                                <th>Account Status</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in doctorlist" :key="item.id">
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <router-link to="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image"></router-link>
                                                        <router-link to="/admin/profile">{{item.name}}</router-link>
                                                    </h2>
                                                </td>
                                                <td>{{item.speciality}}</td>
                                                
                                                <td>{{item.date}} <br><small>{{item.time}}</small></td>
                                                
                                                <td>{{item.earned}}</td>
                                                
                                                <td>
                                                    <div class="status-toggle">
                                                        <input type="checkbox" id="status_1" class="check" checked>
                                                        <label for="status_1" class="checktoggle">checkbox</label>
                                                    </div>
                                                </td>
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
        <!-- /Page Wrapper -->
    </div>
</template>
<script>
    import doctorlist from '../../assets/json/admin/Doctorlist/doctorlist.json'
    const images = require.context('@/assets/admin_img/doctors', false, /\.png$|\.jpg$/)
    export default {
        data() {
		return {
			doctorlist: doctorlist
		}
	},
    mounted() {
         // Datatable

		 if ($('.datatable').length > 0) {
        $('.datatable').DataTable({
          "bFilter": false,
        });
      }
        $(document).on('click', '#toggle_btn', function() {
		if($('body').hasClass('mini-sidebar')) {
			$('body').removeClass('mini-sidebar');
			$('.subdrop + ul').slideDown();
		} else {
			$('body').addClass('mini-sidebar');
			$('.subdrop + ul').slideUp();
		}
		// setTimeout(function(){ 
		// 	mA.redraw();
		// 	mL.redraw();
		// }, 300);
		return false;
	});
	$(document).on('mouseover', function(e) {
		e.stopPropagation();
		if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
			var targ = $(e.target).closest('.sidebar').length;
			if(targ) {
				$('body').addClass('expand-menu');
				$('.subdrop + ul').slideDown();
			} else {
				$('body').removeClass('expand-menu');
				$('.subdrop + ul').slideUp();
			}
			return false;
		}
    });
},
methods:{
        loadImg(imgPath) {
            return images('./' + imgPath)
        },
    }
    }
</script>