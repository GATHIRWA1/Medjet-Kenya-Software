<template>
    <div class="main-wrapper">
        <layout-header2></layout-header2>
        <breadcrumb11></breadcrumb11>
        
			<!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <sidebar></sidebar>
						</div>
						<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="doc-review review-listing">

								<div class="row mb-5">
                                    <div class="col">
                                        <ul class="nav nav-tabs nav-tabs-solid">
                                            <li class="nav-item">
                                                <router-link class="nav-link " to="/doctor/blogs">Active Blog</router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link class="nav-link active" to="/doctor/pending-blogs">Pending Blog</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-auto">
                                        <router-link class="btn btn-primary btn-sm" to="/doctor/add-blog"><i class="fas fa-plus mr-1"></i> Add Blog</router-link>
                                    </div>
                                </div>
							
								<!-- Blog -->
								<div class="row blog-grid-row">
                                    <div class="col-md-6 col-lg-4 col-sm-12" v-for="item in blogs" :key="item.id">
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
                                            <div class="row pt-3">
												<div class="col"><router-link to="/doctor/edit-blog" class="text-success"><i class="far fa-edit"></i> Edit</router-link></div>
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
								<!-- /Blog -->

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
import blogs from '../../assets/json/blogs.json';
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