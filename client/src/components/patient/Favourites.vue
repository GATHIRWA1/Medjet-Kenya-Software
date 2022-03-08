<template>
    <div class="main-wrapper">
        <layout-header3></layout-header3>
        <breadcrumb18></breadcrumb18>
        	<!-- Page Content -->
			<div class="content">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
							<sidebar1></sidebar1>
						</div>
						<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="row row-grid">
								<div class="col-md-6 col-lg-4 col-xl-3" v-for="item in favourites" :key="item.id">
									<div class="profile-widget">
										<div class="doc-img">
											<router-link to="/doctor/profile">
												<img class="img-fluid" alt="User Image" :src="loadImg(item.image)">
											</router-link>
											<a href="javascript:void(0)" class="fav-btn">
												<i class="far fa-bookmark"></i>
											</a>
										</div>
										<div class="pro-content">
											<h3 class="title">
												<router-link to="/doctor/profile">{{item.name}}</router-link> 
												<i class="fas fa-check-circle verified"></i>
											</h3>
											<p class="speciality">{{item.specialist}}</p>
											<div class="rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<span class="d-inline-block average-rating">({{item.rating}})</span>
											</div>
											<ul class="available-info">
												<li>
													<i class="fas fa-map-marker-alt"></i>{{item.location}}
												</li>
												<li>
													<i class="far fa-clock"></i>{{item.availableOn}}
												</li>
												<li>
													<i class="far fa-money-bill-alt"></i>{{item.fees}} <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div class="row row-sm">
												<div class="col-6">
													<router-link to="/doctor/profile" class="btn view-btn">View Profile</router-link>
												</div>
												<div class="col-6">
													<router-link to="/patient/booking" class="btn book-btn">Book Now</router-link>
												</div>
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
import favourites from '../../assets/json/patient/favourites.json'
const images = require.context('@/assets/img/doctors', false, /\.png$|\.jpg$/)
export default {
    data() {
        return {
            favourites: favourites
        }
    },
     methods: {
        loadImg(imgPath) { 
            return images('./' + imgPath)
        },
    },
}
</script>

