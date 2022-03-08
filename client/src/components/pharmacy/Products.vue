<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <breadcrumb23></breadcrumb23>
        	<!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-5 col-lg-3 col-xl-3 theiaStickySidebar">
                            <search-filter2></search-filter2>
						</div>
						
						<div class="col-md-7 col-lg-9 col-xl-9">

							<div class="row align-items-center pb-3">	
								<div class="col-md-4 col-12 d-md-block d-none custom-short-by">
									<h3 class="title pharmacy-title">Medlife Medical</h3>
									<p class="doc-location mb-2 text-ellipse pharmacy-location"><i class="fas fa-map-marker-alt mr-1"></i> 96 Red Hawk Road Cyrus, MN 56323 </p>
									<span class="sort-title">Showing 6 of 98 products</span>
								</div>
								<div class="col-md-8 col-12 d-md-block d-none custom-short-by">
									<div class="sort-by pb-3">
										<span class="sort-title">Sort by</span>
										<span class="sortby-fliter">
											<select class="select">
												<option>Select</option>
												<option class="sorting">Rating</option>
												<option class="sorting">Popular</option>
												<option class="sorting">Latest</option>
												<option class="sorting">Free</option>
											</select>
										</span>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-12 col-lg-4 col-xl-4 product-custom" v-for="item in products" :key="item.id">
	                                <div class="profile-widget">
										<div class="doc-img">
											<router-link to="/pharmacy/product-description" tabindex="-1">
												<img class="img-fluid" alt="Product image" :src="loadImg(item.image)">
											</router-link>
											<a href="javascript:void(0)" class="fav-btn" tabindex="-1">
												<i class="far fa-bookmark"></i>
											</a>
										</div>
										<div class="pro-content">
											<h3 class="title pb-4">
												<router-link to="/pharmacy/product-description" tabindex="-1">{{item.name}}</router-link> 
											</h3>
											<div class="row align-items-center">
												<div class="col-lg-6">
													<span class="price">{{item.deal_price}}</span>
													<span class="price-strike" v-if="item.real_price">{{item.real_price}}</span>
												</div>
												<div class="col-lg-6 text-right">
													<router-link to="/pharmacy/cart" class="cart-icon"><i class="fas fa-shopping-cart"></i></router-link>
												</div>
											</div>
										</div>
									</div>		
                            	</div>
                             </div>
                             <div class="col-md-12 text-center">
                             	<a href="#" class="btn book-btn1 mb-4">Load More</a>
                         	</div>
						</div>
					</div>
				</div>
			</div>
            <!-- /Page Content-->
    </div>
</template>

<script>
import products from '../../assets/json/pharmacy/products.json';
const images = require.context('@/assets/img/products', false, /\.png$|\.jpg$/)
export default {
	mounted() {
        if($('.select').length > 0) {
            $('.select').select2({
            minimumResultsForSearch: -1,
            width: '100%'
            });
        }
    },
    data() {
        return {
            products: products
        }
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath)
        }
    },
}
</script>