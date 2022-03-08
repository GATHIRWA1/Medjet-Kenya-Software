<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <breadcrumb10></breadcrumb10>
        <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
							<search-filter></search-filter>
						</div>
						
						<div class="col-md-12 col-lg-8 col-xl-9">

							<!-- Doctor Widget -->
							<div class="card" v-for="item in searchresults.slice(0,5)" :key="item.id">
								<div class="card-body">
									<div class="doctor-widget">
										<div class="doc-info-left">
											<div class="doctor-img">
												<router-link  to="/doctor/profile">
													<img :src="loadImg(item.image, 1)" class="img-fluid" alt="User Image">
												</router-link>
											</div>
											<div class="doc-info-cont">
												<h4 class="doc-name"><router-link to="/doctor/profile">{{item.name}}</router-link></h4>
												<p class="doc-speciality">{{item.specialist}}</p>
												<h5 class="doc-department"><img :src="loadImg(item.icon, 2)" class="img-fluid" alt="Speciality">{{item.category}}</h5>
												<div class="rating">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating">{{item.rating}}</span>
												</div>
												<div class="clinic-details">
													<p class="doc-location"><i class="fas fa-map-marker-alt"></i> {{item.location1}}</p>
													<ul class="clinic-gallery">
														<li v-for="data in item.images" :key="data.id">
															<a  data-fancybox="gallery">
																<img :src="loadImg(data.name, 3)" alt="Feature">
															</a>
														</li>
													</ul>
												</div>
												<div class="clinic-services">
													<span>Dental Fillings</span>
													<span> Whitneing</span>
												</div>
											</div>
										</div>
										<div class="doc-info-right">
											<div class="clini-infos">
												<ul>
													<li><i class="far fa-thumbs-up"></i> {{item.likes}}</li>
													<li><i class="far fa-comment"></i> {{item.feedback}} Feedback</li>
													<li><i class="fas fa-map-marker-alt"></i> {{item.location2}}</li>
													<li><i class="far fa-money-bill-alt"></i> {{item.fees}} <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i> </li>
												</ul>
											</div>
											<div class="clinic-booking">
												<router-link class="view-pro-btn" to="/doctor/profile">View Profile</router-link>
												<router-link class="apt-btn" to="/patient/booking">Book Appointment</router-link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- /Doctor Widget -->

						
							<div class="load-more text-center">
								<a class="btn btn-primary btn-sm" href="javascript:void(0);">Load More</a>	
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
import searchresults from '../../assets/json/patient/searchresults.json';
const doctorImages = require.context('@/assets/img/doctors', false, /\.png$|\.jpg$/)
const specialityImages = require.context('@/assets/img/specialities', false, /\.png$|\.jpg$/)
const featureImages = require.context('@/assets/img/features', false, /\.png$|\.jpg$/)

export default {
	mounted() {
		if($('.datetimepicker').length > 0) {
			$('.datetimepicker').datetimepicker({
				format: 'DD/MM/YYYY',
				icons: {
					up: "fas fa-chevron-up",
					down: "fas fa-chevron-down",
					next: 'fas fa-chevron-right',
					previous: 'fas fa-chevron-left'
				}
			});
		}
	},
	data() {
		return {
			searchresults: searchresults
		}
	},
	 methods: {
        loadImg(imgPath, value) {
			if(value == 1) {
				return doctorImages('./' + imgPath)
			} else if(value == 2) {
				return specialityImages('./' + imgPath)
			} else {
				return featureImages('./' + imgPath)
			}
        },
    },
}
</script>