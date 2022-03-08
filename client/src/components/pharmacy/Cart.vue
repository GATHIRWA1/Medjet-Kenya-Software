<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <breadcrumb25></breadcrumb25>
        <!-- Page Content -->
			<div class="content">
				<div class="container">			
					
					<div class="card card-table">
						<div class="card-body">
							<div class="table-responsive">
								<table class="table table-hover table-center mb-0">
									<thead>
										<tr>
											<th>Product</th>
											<th>SKU</th>
											<th>Price</th>
											<th class="text-center">Quantity</th>
											<th class="text-center">Total</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="item in cart" :key="item.id">
											<td>
												<h2 class="table-avatar">
													<router-link to="/pharmacy/product-description" class="avatar avatar-sm mr-2"><img class="avatar-img" :src="loadImg(item.image)" alt="User Image"></router-link>
												</h2>
												<router-link to="/pharmacy/product-description">{{item.name}}</router-link>
											</td>
											<td>{{item.sku}}</td>
											<td>{{item.price}}</td>					
											<td class="text-center">
											<div class="custom-increment cart">
			                                    <div class="input-group1">
				                                    <span class="input-group-btn">
				                                        <button type="button" class="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">
				                                          <span><i class="fas fa-minus"></i></span>
				                                        </button>
				                                    </span>
				                                    <input type="text" id="quantity2" name="quantity1" class=" input-number" value="10">
				                                    <span class="input-group-btn">
				                                        <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
				                                            <span><i class="fas fa-plus"></i></span>
				                                        </button>
				                                    </span>
			                                	</div>
		                        			</div>
											</td>
											<td class="text-center">{{item.total}}</td>
											<td class="text-right">
												<div class="table-action">
													<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
														<i class="fas fa-times"></i>
													</a>
												</div>
											</td>
										</tr>
									</tbody>
								</table>		
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-md-7 col-lg-8">
						</div>
						
						<div class="col-md-5 col-lg-4">
						
							<!-- Booking Summary -->
							<div class="card booking-card">
								<div class="card-header">
									<h4 class="card-title">Cart Totals</h4>
								</div>
								<div class="card-body">
									
									<div class="booking-summary">
										<div class="booking-item-wrap">
											<ul class="booking-date">
												<li>Subtotal <span>$5,877.00</span></li>
												<li>Shipping <span>$25.00<a href="#">Calculate shipping</a></span></li>
											</ul>
											<ul class="booking-fee pt-4">
												<li>Tax <span>$0.00</span></li>
											</ul>
											<div class="booking-total">
												<ul class="booking-total-list">
													<li>
														<span>Total</span>
														<span class="total-cost">$160</span>
													</li>
													<li>
														<div class="clinic-booking pt-4">
															<router-link class="apt-btn" to="/pharmacy/product-checkout">Proceed to checkout</router-link>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- /Booking Summary -->
							
						</div>
					</div>

				</div>
			</div>		
			<!-- /Page Content -->
            <layout-footer></layout-footer>
    </div>
</template>

<script>
import cart from '../../assets/json/pharmacy/cart.json';
const images = require.context('@/assets/img/products', false, /\.png$|\.jpg$/)
export default {
    data() {
        return {
            cart: cart
        }
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath)
        }
    },
}
</script>