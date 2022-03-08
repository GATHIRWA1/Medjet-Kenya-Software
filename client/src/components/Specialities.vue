<template>
    <!-- Clinic and Specialities -->
    <section class="section section-specialities">
        <div class="container-fluid">
            <div class="section-header text-center">
                <h2>Clinic and Specialities</h2>
                <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-9">
                    <!-- Slider -->
                    <slick  class="specialities-slider slider" ref="slick" :options="slickOptions">
                        <!-- Slider Item -->
                        <div class="speicality-item text-center" v-for="item in specialities" :key="item.id">
                            <div class="speicality-img">
                                <img :src="loadImg(item.image)" class="img-fluid" alt="Speciality">
                                <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                            </div>
                            <p>{{item.name}}</p>
                        </div>	
                        <!-- /Slider Item -->
                        
                    </slick>
                    <!-- /Slider -->
                </div>
            </div>
        </div>   
    </section>	 
    <!-- Clinic and Specialities -->
</template>
<script>
const images = require.context('@/assets/img/specialities', false, /\.png$|\.jpg$/)
export default {
    data() {
        return {
            slickOptions: {
                slidesToShow: 4,
                dots: true,
                arrows:false,
                swipeToSlide: true,
                variableWidth: true,
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
        specialities: { type: Array }
    },
    methods: {
        next() {
            this.$refs.slick.next();
        },
        prev() {
            this.$refs.slick.prev();
        },
        reInit() {
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
        loadImg(imgPath) {
            return images('./' + imgPath)
        },
        
    },
}
</script>