<template>
    <div class="main-wrapper">
        <layout-header3></layout-header3>
        <breadcrumb6></breadcrumb6>
        	
			<!-- Page Content -->
			<div class="content">
				<div class="container-fluid">
					<div class="row">
                        <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <sidebar1></sidebar1>
                        </div>						
						
						<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="card">
								<div class="card-body">
									
									<!-- Profile Settings Form -->
									<form>
										<div class="row form-row">
											<div class="col-12 col-md-12">
												<div class="form-group">
													<div class="change-avatar">
														<div class="profile-img">
															<img src="@/assets/img/patients/patient.jpg" alt="User Image">
														</div>
														<div class="upload-img">
															<div class="change-photo-btn">
																<span><i class="fa fa-upload"></i> Upload Photo</span>
																<input type="file" class="upload">
															</div>
															<small class="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
														</div>
													</div>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>First Name</label>
													<input v-model="fname" type="text" class="form-control" value="Richard">
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>Last Name</label>
													<input v-model="lname" type="text" class="form-control" value="Wilson">
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>Date of Birth</label>
													<div class="cal-icon">
														<input v-model="dateofbirth" type="text" class="form-control" value="24-07-1983">
													</div>
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label></label>
													
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>Email ID</label>
													<input  type="email" class="form-control" >
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>Mobile</label>
													<input v-model="phonenummber" type="text"  class="form-control">
												</div>
											</div>
											<div class="col-12">
												<div class="form-group">
												<label>Address</label>
													<input v-model="homeadress" type="text" class="form-control">
												</div>
											</div>
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>City</label>
													<input v-model="city" type="text" class="form-control">
												</div>
											</div>
										
	
											<div class="col-12 col-md-6">
												<div class="form-group">
													<label>County</label>
													<input v-model="county" type="text" class="form-control">
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
//import {fb , db} from "../firebase";

export default {
 data() {
	 return {
		 imageurl:"",
		 fname:"",
		 lname:"",
		 dateofbirth:"",
		 email:"",
		 phone:"",
		 bloodgroup:"",
		 homeadress:"",
		 city:"",
		 county:"",
	 }
 },
 methods: {
	 
 },
 mounted() {
	
 },
}
 
</script>