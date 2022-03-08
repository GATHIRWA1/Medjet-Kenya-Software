<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <breadcrumb14></breadcrumb14>
        
			<!-- Page Content -->
			<div class="content">
				<div class="container">
             
					<div class="row">
					
						<div class="col-lg-8 col-md-12">

							<!-- Blog Post -->
							<div class="blog">
								<div class="blog-image">

									<router-link to="/doctor/blog-details"><img class="img-fluid" :src='require("../../assets/img/blog/blog-01.jpg")' alt="Post Image"></router-link>
								</div>
								<h3 class="blog-title"><router-link to="/doctor/blog-details">Doccure – Making your clinic painless visit?</router-link></h3>
								<div class="blog-info clearfix">
									<div class="post-left">
										<ul>
											<li>
												<div class="post-author">
													<router-link to="/doctor/profile"><img src='../../assets/img/doctors/doctor-thumb-01.jpg' alt="Post Author"> <span>Dr. Ruby Perrin</span></router-link>
												</div>
											</li>
											<li><i class="far fa-clock"></i>4 Dec 2019</li>
											<li><i class="far fa-comments"></i>12 Comments</li>
											<li><i class="fa fa-tags"></i>Health Tips</li>
										</ul>
									</div>
								</div>
								<div class="blog-content">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<router-link to="/doctor/blog-details" class="read-more">Read More</router-link>
								</div>
							</div>
							<!-- /Blog Post -->

							<!-- Blog Post -->
							<div class="blog">
								<div class="blog-image">
									<router-link to="/doctor/blog-details"><img class="img-fluid" src="@/assets/img/blog/blog-02.jpg" alt=""></router-link>
								</div>
								<h3 class="blog-title"><router-link to="/doctor/blog-details">What are the benefits of Online Doctor Booking?</router-link></h3>
								<div class="blog-info clearfix">
									<div class="post-left">
										<ul>
											<li>
												<div class="post-author">
													<router-link to="/doctor/profile"><img src="@/assets/img/doctors/doctor-thumb-02.jpg" alt="Post Author"> <span>Dr. Darren Elder</span></router-link>
												</div>
											</li>
											<li><i class="far fa-clock"></i>3 Dec 2019</li>
											<li><i class="far fa-comments"></i>7 Comments</li>
											<li><i class="fa fa-tags"></i>Cardiology</li>
										</ul>
									</div>
								</div>
								<div class="blog-content">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<router-link to="/doctor/blog-details" class="read-more">Read More</router-link>
								</div>
							</div>
							<!-- /Blog Post -->

							<!-- Blog Post -->
							<div class="blog">
								<div class="blog-image">
									<div class="video">
										<iframe src="https://www.youtube.com/embed/nuVqJ_OriR8?rel=0&amp;controls=0&amp;showinfo=0" width="940" allowfullscreen></iframe>
									</div>
								</div>
								<h3 class="blog-title"><router-link to="/doctor/blog-details">Benefits of consulting with an Online Doctor</router-link></h3>
								<div class="blog-info clearfix">
									<div class="post-left">
										<ul>
											<li>
												<div class="post-author">
													<router-link to="/doctor/profile"><img src="@/assets/img/doctors/doctor-thumb-03.jpg" alt="Post Author"> <span>Dr. Deborah Angel</span></router-link>
												</div>
											</li>
											<li><i class="far fa-clock"></i>3 Dec 2019</li>
											<li><i class="far fa-comments"></i>2 Comments</li>
											<li><i class="fa fa-tags"></i>Health Care</li>
										</ul>
									</div>
								</div>
								<div class="blog-content">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<router-link to="/doctor/blog-details" class="read-more">Read More</router-link>
								</div>
							</div>
							<!-- /Blog Post -->

							<!-- Blog Post -->
							<div class="blog">
								<div class="blog-image">
									<div class="video">
										<iframe src="https://player.vimeo.com/video/133170635" width="940"></iframe>
									</div>
								</div>
								<h3 class="blog-title"><router-link to="/doctor/blog-details">5 Great reasons to use an Online Doctor</router-link></h3>
								<div class="blog-info clearfix">
									<div class="post-left">
										<ul>
											<li>
												<div class="post-author">
													<router-link to="/doctor/profile"><img src="@/assets/img/doctors/doctor-thumb-04.jpg" alt="Post Author"> <span>Dr. Sofia Brient</span></router-link>
												</div>
											</li>
											<li><i class="far fa-clock"></i>2 Dec 2019</li>
											<li><i class="far fa-comments"></i>41 Comments</li>
											<li><i class="fa fa-tags"></i>Health Tips</li>
										</ul>
									</div>
								</div>
								<div class="blog-content">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<router-link to="/doctor/blog-details" class="read-more">Read More</router-link>
								</div>
							</div>
							<!-- /Blog Post -->

							<!-- Blog Pagination -->
							<div class="row">
								<div class="col-md-12">
									<div class="blog-pagination">
										<nav>
											<ul class="pagination justify-content-center">
												<li class="page-item disabled">
													<a class="page-link" href="#" tabindex="-1"><i class="fas fa-angle-double-left"></i></a>
												</li>
												<li class="page-item">
													<a class="page-link" href="#">1</a>
												</li>
												<li class="page-item active">
													<a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
												</li>
												<li class="page-item">
													<a class="page-link" href="#">3</a>
												</li>
												<li class="page-item">
													<a class="page-link" href="#"><i class="fas fa-angle-double-right"></i></a>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
							<!-- /Blog Pagination -->
							
						</div>
						
						<!-- Blog Sidebar -->
						<div class="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">

							<!-- Search -->
							    <search-bar></search-bar>
							<!-- /Search -->

							<!-- Latest Posts -->
                                <latest-posts></latest-posts>
							<!-- /Latest Posts -->

							<!-- Categories -->
							    <blog-categories></blog-categories>
							<!-- /Categories -->

							<!-- Tags -->
							    <tags></tags>
							<!-- /Tags -->
							
						</div>
						<!-- /Blog Sidebar -->
						
					</div>
				</div>

			</div>		
			<!-- /Page Content -->
        <layout-footer></layout-footer>
    </div>
</template>