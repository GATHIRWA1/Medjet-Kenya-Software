<template>
    <div class="main-wrapper">
        <layout-header2></layout-header2>
        	<!-- Page Content -->
			<div class="content">
				<div class="container"> 
					<div class="row">
						<div class="col-md-8 col-lg-5 col-xl-5 col-sm-12 dependent">
						<h2 class="text-center mb-4">Edit Dependent</h2>
							<div class="card">
								<div class="card-body">
									<!-- Profile Settings Form -->
									<form>
										<div class="row form-row">
											<div class="col-12 col-md-12">
												<div class="form-group">
													<label>Name</label>
													<input type="text" class="form-control" value="Sherif">
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group">
													<label>Gender</label>
													<select class="form-control select">
														<option>Male</option>
														<option>Fe Male</option>
													</select>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group">
													<label>Relationship</label>
													<select class="form-control select">
														<option>Son</option>
														<option>Daughter</option>
														<option>Father</option>
														<option>Mother</option>
														<option>Others</option>
													</select>
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group">
													<label>Phone Number (optional)</label>
													<input type="text" class="form-control" value="9845346123">
												</div>
											</div>
											<div class="col-12 col-md-12">
												<div class="form-group">
													<label>Email (optional)</label>
													<input type="text" class="form-control" value="abc@gmail.com">
												</div>
											</div>
										</div>
										<div class="submit-section">
											<button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
										</div>
									</form>
									<!-- /Profile Settings Form -->
									
								</div>
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