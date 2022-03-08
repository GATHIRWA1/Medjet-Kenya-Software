<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <breadcrumb15></breadcrumb15>
        <!-- Page Content -->
			<div class="content">
				<div class="container">
				
					<div class="row">
						<div class="col-lg-8 col-md-12">
						
							<div class="row blog-grid-row">
								<div class="col-md-6 col-sm-12" v-for="item in blogs" :key="item.id">
								
									<!-- Blog Post -->
									<div class="blog grid-blog">
										<div class="blog-image">
											<router-link to="/doctor/blog-details"><img class="img-fluid" :src="loadImg(item.blog_image,1)" alt="Post Image"></router-link>
										</div>
										<div class="blog-content">
											<ul class="entry-meta meta-item">
												<li>
													<div class="post-author">
														<router-link to="/doctor/profile"><img :src="loadImg(item.doctor_image,2)" alt="Post Author"> <span>{{item.doctor_name}}</span></router-link>
													</div>
												</li>
												<li><i class="far fa-clock"></i> {{item.date}}</li>
											</ul>
											<h3 class="blog-title"><router-link to="/doctor/blog-details">{{item.question}}</router-link></h3>
											<p class="mb-0">{{item.answer}}</p>
										</div>
									</div>
									<!-- /Blog Post -->
									
								</div>
							</div>
							
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

<script>
import blogs from '../../assets/json/blogs.json'
const blogImages = require.context('@/assets/img/blog', false, /\.png$|\.jpg$/)
const docterImages= require.context('@/assets/img/doctors', false, /\.png$|\.jpg$/)

export default {
    data() {
        return {
            blogs: blogs
        }
    },
    methods: {
        loadImg(imgPath, value) {
            if(value == 1) {
                return blogImages('./' + imgPath)
            } else {
                return docterImages('./' + imgPath)
            }
        },
    },
}
</script>