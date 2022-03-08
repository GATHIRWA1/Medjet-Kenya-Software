<template>

			<!--Homebanner  Index- 3 -->
	
		<section id="home" class="divider">
			<div class="container-fluid p-0">
			<!--- slider ---->
				<div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel" data-interval="2500"> 
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img class="d-block w-100" src="@/assets/img/slider/slider-1.jpg" alt="First slide">
						<div class="carousel-caption d-none d-md-block">
							<span>We Provide Solution</span>
							<h2>To stressless Life</h2>
							<p>People who are more perfectionist are most likely to be depressed,<br>Because they stress themselves out so much.</p>
						</div>
					</div>
					<div class="carousel-item">
						<img class="d-block w-100" src="@/assets/img/slider/slider-2.jpg" alt="Second slide">
						<div class="carousel-caption d-none d-md-block">
							<span>We Provide Solution</span>
							<h2>Health Care Solution</h2>
							<p>Every day we bring hope to millions of children in the world's<br>  hardest places as a sign of God's unconditional love.</p>
						</div>
					</div>
					<div class="carousel-item">
						<img class="d-block w-100" src="@/assets/img/slider/slider-3.jpg" alt="Third slide">
						<div class="carousel-caption d-none d-md-block">
							<span>We Provide total</span>
							<h2>Personalised care</h2>
							<p>People who are more perfectionist are most likely to be depressed,<br>Because they stress themselves out so much.</p>
						</div>
					</div>
				</div>
				<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
				</div>
				<!--- /slider ---->
				<!-- Search -->
				<div class="banner-wrapper">
					<div class="search-box search-box-3" style="margin-left: 150px;">
						<form>
							<div class="form-group search-info">
								<input type="text" class="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc">
							</div>
							<button @click="searchPath" class="btn btn-primary search-btn btn-search mt-0"><i class="fas fa-search"></i>  <span>Search</span>
							</button>
						</form>
					</div>
				</div>
				<!-- /Search -->
			</div>
		</section>
	
	<!-- /Home Banner -->
</template>

<script>
export default {
	
	computed: {
		currentpath() {
			return this.$route.name;
		}
	},
	 methods: {
		searchPath() {
			this.$router.push('/doctor/search')
		}
    },
}
</script>