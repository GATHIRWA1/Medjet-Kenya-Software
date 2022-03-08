<template>
    <div class="main-wrapper">
         <layout-header2></layout-header2>
         <breadcrumb2></breadcrumb2>
         <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <sidebar></sidebar>
						</div>
						<div class="col-md-7 col-lg-8 col-xl-9" >
							<div class="row row-grid">
								<div class="col-md-6 col-lg-4 col-xl-3" v-for="item in patients" v-bind:key="item.id">
									<div class="card widget-profile pat-widget-profile">
										<div class="card-body">
											<div class="pro-widget-content">
												<div class="profile-info-widget">
													<router-link to="/doctor/patient-profile" class="booking-doc-img">
														<img v-bind:src="loadImg(item.image)"  alt="User Image">
													</router-link>
													<div class="profile-det-info">
														<h3><router-link to="/doctor/patient-profile">{{item.name}}</router-link></h3>
														
														<div class="patient-details">
															<h5><b>Patient ID :</b> P0016</h5>
															<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Alabama, USA</h5>
														</div>
													</div>
												</div>
											</div>
											<div class="patient-info">
												<ul>
													<li>Phone <span>{{item.phone_no}}</span></li>
													<li>Age <span>{{item.age}}</span></li>
													<li>Blood Group <span>{{item.blood_group}}</span></li>
												</ul>
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

<script>
import patients from '../../assets/json/doctor/mypatients.json'
const images = require.context('@/assets/img/patients', false, /\.png$|\.jpg$/)
export default {
    data() {
        return {
            patients: patients
        }
    },
     methods:{
        loadImg(imgPath) {
            return images('./' + imgPath)
        },
    }
}
</script>