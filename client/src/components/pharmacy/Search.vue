<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <breadcrumb22></breadcrumb22>
        	<!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
                            <search-filter1></search-filter1>
						</div>
						
						<div class="col-md-12 col-lg-8 col-xl-9">

							<!-- Doctor Widget -->
							<div class="card" v-for="item in searchresults" :key="item.id">
								<div class="card-body">
									<div class="doctor-widget">
										<div class="doc-info-left">
											<div class="doctor-img1">
												<router-link to="/pharmacy/details">
													<img :src="loadImg(item.image)" class="img-fluid" alt="User Image">
												</router-link>
											</div>
											<div class="doc-info-cont">
												<h4 class="doc-name mb-2"><router-link to="/pharmacy/details">{{item.name}}</router-link></h4>
												<div class="rating mb-2">
													<span class="badge badge-primary">4.0</span>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="d-inline-block average-rating">({{item.rating}})</span>
												</div>
												<div class="clinic-details">
													<div class="clini-infos pt-3">
												
													<p class="doc-location mb-2"><i class="fas fa-phone-volume mr-1"></i>{{item.phone}}</p>
													<p class="doc-location mb-2 text-ellipse"><i class="fas fa-map-marker-alt mr-1"></i> {{item.location}}</p>
													<p class="doc-location mb-2"><i class="fas fa-chevron-right mr-1"></i>{{item.category}}</p>
													
													<p class="doc-location mb-2"><i class="fas fa-chevron-right mr-1"></i> {{item.opening_time}}</p>
	
													</div>
												</div>
											</div>
										</div>
										<div class="doc-info-right">
											<div class="clinic-booking">
												<router-link class="view-pro-btn" to="/pharmacy/details">View Details</router-link>
												<router-link class="apt-btn" to="/pharmacy/product">Browse Products</router-link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- /Doctor Widget -->

							<div class="load-more text-center">
								<a class="btn btn-primary btn-md" href="javascript:void(0);">Load More</a>	
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
import searchresults from '../../assets/json/pharmacy/searchresults.json';
const images = require.context('@/assets/img/', false, /\.png$|\.jpg$/)
export default {
    data() {
        return {
            searchresults: searchresults
        }
    },
     methods: {
        loadImg(imgPath) {
            return images('./' + imgPath)
        },
    },
}
</script>