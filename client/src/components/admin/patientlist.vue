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
								<h3 class="page-title">List of Patient</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
									<li class="breadcrumb-item"><a href="javascript:(0);">Users</a></li>
									<li class="breadcrumb-item active">Patient</li>
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
										<div class="table-responsive">
										<table class="datatable table table-hover table-center mb-0">
											<thead>
												<tr>
													<th>Patient ID</th>
													<th>Patient Name</th>
													<th>Age</th>
													<th>Address</th>
													<th>Phone</th>
													<th>Last Visit</th>
													<th class="text-right">Paid</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in patientlist" :key="item.id">
													<td>{{item.patientid}}</td>
													<td>
														<h2 class="table-avatar">
															<router-link to="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image"></router-link>
															<router-link to="/admin/profile">{{item.patientname}} </router-link>
														</h2>
													</td>
													<td>{{item.age}}</td>
													<td>{{item.address}}</td>
													<td>{{item.phno}}</td>
													<td>{{item.lastvisit}}</td>
													<td class="text-right">{{item.paid}}</td>
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
			<!-- /Page Wrapper -->
            </div>
</template>
<script>
    import patientlist from '../../assets/json/admin/Patientlist/patientlist.json'
    const images = require.context('@/assets/admin_img/patients', false, /\.png$|\.jpg$/)
    export default {
        data() {
		return {
			patientlist: patientlist
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