<template>
    <div class="main-wrapper">
        <layout-header2></layout-header2>
        <breadcrumb1></breadcrumb1>
        <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <sidebar></sidebar>
						</div>
						<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="appointments">
								<!-- Appointment List -->
								<div class="appointment-list" v-for="item in appointments" :key="item.id">
									<div class="profile-info-widget">
										<router-link to="/doctor/patient-profile" class="booking-doc-img">
											<img v-bind:src="loadImg(item.image)" alt="User Image">
										</router-link>
										<div class="profile-det-info">
											<h3><router-link to="/doctor/patient-profile">{{item.name}}</router-link></h3>
											<div class="patient-details">
												<h5><i class="far fa-clock"></i>{{item.date_time}}</h5>
												<h5><i class="fas fa-map-marker-alt"></i>{{item.location}}</h5>
												<h5><i class="fas fa-envelope"></i>{{item.email}}</h5>
												<h5 class="mb-0"><i class="fas fa-phone"></i>{{item.phone_no}}</h5>
											</div>
										</div>
									</div>
									<div class="appointment-action">
										<a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
											<i class="far fa-eye"></i> View
										</a>
										<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
											<i class="fas fa-check"></i> Accept
										</a>
										<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
											<i class="fas fa-times"></i> Cancel
										</a>
									</div>
								</div>
								<!-- /Appointment List -->
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
import appointments from '../../assets/json/doctor/appointments.json'
const images = require.context('@/assets/img/patients', false, /\.png$|\.jpg$/)
export default {
    data() {
        return {
            appointments: appointments
        }
    },
    methods:{
        loadImg(imgPath) {
            return images('./' + imgPath)
        },
    }
}
</script>