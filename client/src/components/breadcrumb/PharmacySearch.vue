<template>
	<!-- Breadcrumb -->
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><router-link to="/index">Home</router-link></li>
							<li class="breadcrumb-item active" aria-current="page">Search</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">2245 matches found for : Pharmacy In United States</h2>
				</div>
				<div class="col-md-4 col-12 d-md-block d-none">
					<div class="sort-by">
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
		</div>
	</div>
	<!-- /Breadcrumb -->
</template>


<script>

export default {
	mounted() {
        if($('.select').length > 0) {
            $('.select').select2({
            minimumResultsForSearch: -1,
            width: '100%'
            });
        }
    },
}
</script>