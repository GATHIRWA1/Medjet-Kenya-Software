<template>
    <div class="main-wrapper">
        <!-- Search Filter -->
			<div class="card search-filter">
				<div class="card-header">
					<h4 class="card-title mb-0">Search Filter</h4>
				</div>
				<div class="card-body">
				<div class="filter-widget">
					<div class="cal-icon">
						<input type="text" class="form-control datetimepicker" placeholder="Select Date">
					</div>			
				</div>
				<div class="filter-widget">
					<h4>Gender</h4>
					<div>
						<label class="custom_check">
							<input type="checkbox" name="gender_type" checked>
							<span class="checkmark"></span> Male Doctor
						</label>
					</div>
					<div>
						<label class="custom_check">
							<input type="checkbox" name="gender_type">
							<span class="checkmark"></span> Female Doctor
						</label>
					</div>
				</div>
				<div class="filter-widget">
					<h4>Select Specialist</h4>
					<div>
						<label class="custom_check">
							<input type="checkbox" name="select_specialist" checked>
							<span class="checkmark"></span> Urology
						</label>
					</div>
					<div>
						<label class="custom_check">
							<input type="checkbox" name="select_specialist" checked>
							<span class="checkmark"></span> Neurology
						</label>
					</div>
					<div>
						<label class="custom_check">
							<input type="checkbox" name="select_specialist">
							<span class="checkmark"></span> Dentist
						</label>
					</div>
					<div>
						<label class="custom_check">
							<input type="checkbox" name="select_specialist">
							<span class="checkmark"></span> Orthopedic
						</label>
					</div>
					<div>
						<label class="custom_check">
							<input type="checkbox" name="select_specialist">
							<span class="checkmark"></span> Cardiologist
						</label>
					</div>
					<div>
						<label class="custom_check">
							<input type="checkbox" name="select_specialist">
							<span class="checkmark"></span> Cardiologist
						</label>
					</div>
				</div>
					<div class="btn-search">
						<button type="button" class="btn btn-block">Search</button>
					</div>	
				</div>
			</div>
		<!-- /Search Filter -->	
    </div>
</template>

<script>
export default {
	mounted() {
		if($('.datetimepicker').length > 0) {
			$('.datetimepicker').datetimepicker({
				format: 'DD/MM/YYYY',
				icons: {
					up: "fas fa-chevron-up",
					down: "fas fa-chevron-down",
					next: 'fas fa-chevron-right',
					previous: 'fas fa-chevron-left'
				}
			});
		}
    },
}
</script>