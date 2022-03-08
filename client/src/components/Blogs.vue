<template>
    <!-- Blog Section -->
    <section class="section section-blogs">
        <div class="container-fluid">
        
            <!-- Section Header -->
            <div class="section-header text-center">
                <h2>Blogs and News</h2>
                <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <!-- /Section Header -->
            <div class="row blog-grid-row">
                <div class="col-md-6 col-lg-3 col-sm-12" v-for="blog in blogs.slice(0, 4)" :key="blog.id">
                    <!-- Blog Post -->
                    <div class="blog grid-blog">
                        <div class="blog-image">
                            <router-link to="/doctor/blog-details"><img class="img-fluid" :src="loadImg(blog.blog_image,1)" alt="Post Image"></router-link>
                        </div>
                        <div class="blog-content">
                            <ul class="entry-meta meta-item">
                                <li>
                                    <div class="post-author">
                                        <router-link to="/doctor/profile"><img :src="loadImg(blog.doctor_image,2)" alt="Post Author"> <span>{{blog.doctor_name}}</span></router-link>
                                    </div>
                                </li>
                                <li><i class="far fa-clock"></i> {{blog.date}}</li>
                            </ul>
                            <h3 class="blog-title"><router-link to="/doctor/blog-details">{{blog.question}}</router-link></h3>
                            <p class="mb-0">{{blog.answer}}</p>
                        </div>
                    </div>
                    <!-- /Blog Post -->
                </div>
            </div>
            <div class="view-all text-center"> 
                <router-link to="/doctor/blog-list" class="btn btn-primary">View All</router-link>
            </div>
        </div>
    </section>
    <!-- /Blog Section -->	
</template>

<script>
const blogImages = require.context('@/assets/img/blog', false, /\.png$|\.jpg$/)
const docterImages= require.context('@/assets/img/doctors', false, /\.png$|\.jpg$/)
export default {
    props: {
        blogs: { type: Array }
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