<template>
		<div class="main-wrapper">
			<layout-header3></layout-header3>
			<breadcrumb8></breadcrumb8>
			<!-- Page Content -->
				<div class="content">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
								<sidebar v-if="currentPath == 'change-password'"></sidebar>
								<sidebar1 v-else-if="currentPath == 'patient-change-password'"></sidebar1>
							</div>
							
							<div class="col-md-7 col-lg-8 col-xl-9">
								<div class="card">
									<div class="card-body">
										<div class="row">
											<div class="col-md-12 col-lg-6">
											
												<!-- Change Password Form -->
												<form>
													<div class="form-group">
														<label>Old Password</label>
														<input type="password" class="form-control">
													</div>
													<div class="form-group">
														<label>New Password</label>
														<input type="password" class="form-control">
													</div>
													<div class="form-group">
														<label>Confirm Password</label>
														<input type="password" class="form-control">
													</div>
													<div class="submit-section">
														<button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
													</div>
												</form>
												<!-- /Change Password Form -->
												
											</div>
										</div>
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
    computed: {
         currentPath() {
            return this.$route.name;
        }
    }
}
</script>