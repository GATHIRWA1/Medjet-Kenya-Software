<template>
    <section class="section home-tile-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-9 m-auto">
                    <div class="section-header text-center">
                        <h2>What are you looking for?</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 mb-3">
                            <div class="card text-center doctor-book-card">
                                <img src="@/assets/img/doctors/doctor-07.jpg" alt="" class="img-fluid">
                                <div class="doctor-book-card-content tile-card-content-1">
                                    <div>
                                        <h3 class="card-title mb-0">Visit a Doctor</h3>
                                        <router-link to="/doctor/search" class="btn book-btn1 px-3 py-2 mt-3" tabindex="0">Book Now</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-3">
                            <div class="card text-center doctor-book-card">
                                <img src="@/assets/img/img-pharmacy1.jpg" alt="" class="img-fluid">
                                <div class="doctor-book-card-content tile-card-content-1">
                                    <div>
                                        <h3 class="card-title mb-0">Find a Pharmacy</h3>
                                        <router-link to="/pharmacy/search" class="btn book-btn1 px-3 py-2 mt-3" tabindex="0">Find Now</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-3">
                            <div class="card text-center doctor-book-card">
                                <img src="@/assets/img/lab-image.jpg" alt="" class="img-fluid">
                                <div class="doctor-book-card-content tile-card-content-1">
                                    <div>
                                    <h3 class="card-title mb-0">Find a Lab</h3>
                                        <a href="javascript:void(0);" class="btn book-btn1 px-3 py-2 mt-3" tabindex="0">Coming Soon</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>    
</template>