<template>
    <!-- Popular Section -->
    <section class="section section-doctor">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4">
                    <div class="section-header ">
                        <h2>Book Our Doctor</h2>
                        <p>Lorem Ipsum is simply dummy text </p>
                    </div>
                    <div class="about-content">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                        <p>web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes</p>					
                        <a href="javascript:;">Read More..</a>
                    </div>
                </div>
                <div class="col-lg-8">
                    <slick ref="slick" class="doctor-slider slider" :options="slickOptions">
                        <!-- Doctor Widget -->
                        <div class="profile-widget" v-for="doctor in doctors" v-bind:key="doctor.id">
                            <div class="doc-img">
                                <router-link to="/doctor/profile">
                                    <img class="img-fluid" alt="User Image" v-bind:src="loadImg(doctor.image)" >
                                </router-link>
                                <a href="javascript:void(0)" class="fav-btn">
                                    <i class="far fa-bookmark"></i>
                                </a>
                            </div>
                            <div class="pro-content">
                                <h3 class="title">
                                    <router-link to="/doctor/profile">{{doctor.name}}</router-link> 
                                    <i class="fas fa-check-circle verified"></i>
                                </h3>
                                <p class="speciality">{{doctor.specialist}}</p>
                                <div class="rating">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <span class="d-inline-block average-rating">({{doctor.rating}})</span>
                                </div>
                                <ul class="available-info">
                                    <li>
                                        <i class="fas fa-map-marker-alt"></i> {{doctor.location}}
                                    </li>
                                    <li>
                                        <i class="far fa-clock"></i> {{doctor.availableOn}}
                                    </li>
                                    <li>
                                        <i class="far fa-money-bill-alt"></i> {{doctor.fees}} 
                                        <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
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
                        <!-- /Doctor Widget -->
                    </slick>
                </div>
            </div>
        </div>
    </section>
    <!-- /Popular Section -->
</template>

<script>
const images = require.context('@/assets/img/doctors', false, /\.png$|\.jpg$/)
export default {
    data() {
        return {
            slickOptions: {
                slidesToShow: 3,
                arrows: true,
                swipeToSlide: true,
                responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                ]
            },
        };
    },
    props: {
        doctors: { type: Array }
    },
    methods: {
        next() {
            this.$refs.slick.next();
        },
        loadImg(imgPath) {
            return images('./' + imgPath)
        },
        prev() {
            this.$refs.slick.prev();
        },
        reInit() {
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
    },
}
</script>