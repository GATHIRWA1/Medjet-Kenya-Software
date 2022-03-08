<template>
<div class="account-page">
    <div class="main-wrapper">
        
 <!-- Page Content -->
			<div class="content login-page pt-0">
				<div class="container-fluid">
					
					<!-- Register Content -->
					<div class="account-content">
						<div class="row align-items-center">
							<div class="login-right">
								<div class="inner-right-login">
									<div class="login-header">
										<div class="logo-icon">
											<img src="@/assets/img/logo.png" alt="">
										</div>
										<div class="step-list">
											<ul>
												<li><a href="#" class="active-done">1</a></li>
												<li><a href="#" class="active">2</a></li>
												<li><a href="#">3</a></li>
											</ul>
										</div>
										<form id="personal_details" enctype="multipart/form-data">  
					                    	<div class="text-left mt-2">
						                        <h4 class="mt-3">Select Your Gender</h4>
						                    </div>
						                    <div class="select-gender-col">
						                    	<div class="row">
						                    		<div class="col-6 pr-2">
						                    			<input type="radio" id="test1" name="gender" checked="" value="Male">
    													<label for="test1">
    														<span class="gender-icon"><img src="@/assets/img/icons/male.png" alt=""></span>
    														<span>Male</span>
    													</label>
						                    		</div>
						                    		<div class="col-6 pl-2">
						                    			<input type="radio" id="test2" name="gender" value="Female">
    													<label for="test2">
    														<span class="gender-icon"><img src="@/assets/img/icons/female.png" alt=""></span>
    														<span>Female</span>
    													</label>
						                    		</div>
						                    	</div>
						                    </div>
						                    <div class="pregnant-col pt-4">
						                    	<div>
						                            <div class="remember-me-col d-flex justify-content-between">
						                            	<span class="mt-1">Are you Registered?</span>
						                                <label class="custom_check">
						                                  <input type="checkbox" class="" id="is_registered" name="isregistered" value="1">
						                                  <span class="checkmark"></span>
						                                </label>
						                            </div>
						                        </div>
						                    </div>
						                    <div class="step-process-col mt-4">
							                    <div class="form-group" id="preg_div" style="display: none;">
							                    	<label>How many years have you been registered?</label>
							                    	<select class="form-control select" id="register_years" name="register_years" tabindex="-1" aria-hidden="true">
							                    		<option value="">Tell us how long you have been practicing</option>
							                    		<option value="1">1</option>
							                    		<option value="2">2</option>
							                    		<option value="3">3</option>
							                    		<option value="4">4</option>
							                    		<option value="5">5</option>
							                    		<option value="6">6</option>
							                    		<option value="">7</option>
							                    		<option value="8">8</option>
							                    		<option value="9">9</option>
							                    		<option value="10+">10+</option>
							                    	</select>
							                    </div>
							                     <div class="form-group">
							                    	<label>Registered Clinic address</label>
							                    	<input type="text" name="address" class="form-control" id="address">
							                    </div>
							                     <div class="form-group">
							                    	<label>Address 2</label>
							                    	<input type="text" name="address2" class="form-control" id="address2">
							                    </div>
							                     <div class="form-group">
							                    	<label>Pincode / Zipcoode</label>
							                    	<input type="text" name="zipcode" class="form-control" id="zipcode">
							                    </div>
							                      
							                    <div class="form-group">
							                    	<label>Certification and Employer</label>
							                    	<div class="row justify-content-center">
							                    		<div class="col-12 col-md-6 d-flex">
											                 <div class="profile-pic-upload d-flex flex-wrap justify-content-center">
								                        		<div class="cam-col">
								                        			<img src="@/assets/img/icons/camera.svg" alt="">
								                        		</div>
								                        		<span class="text-center">Upload Rigth To sell Certigifcate</span>
								                        		<input type="file" id="quali_certificate" name="quali_certificate">
								                        	</div>
							                        	</div>
							                        	<div class="col-12 col-md-6 d-flex">
								                        	<div class="profile-pic-upload d-flex flex-wrap justify-content-center">
								                        		<div class="cam-col">
								                        			<img src="@/assets/img/icons/camera.svg" alt="">
								                        		</div>
								                        		<span class="text-center">Upload Photo ID</span>
								                        		<input type="file" id="photo_id" name="photo_id">
								                        	</div>
							                        	</div>
							                        	<div class="col-12 col-md-6 d-flex">
								                        	<div class="profile-pic-upload d-flex flex-wrap justify-content-center">
								                        		<div class="cam-col">
								                        			<img src="@/assets/img/icons/camera.svg" alt="">
								                        		</div>
								                        		<span class="text-center">Upload Clinical employment</span>
								                        		<input type="file" id="clinical_employment" name="clinical_employment">
								                        	</div>
							                        	</div>
						                        	</div>
							                    </div>
							                    <div class="form-group">
							                    	<label>Your Weight</label>
							                    	<div class="row">
							                    		<div class="col-7 pr-2">
							                    			<input type="text" class="form-control" name="weight" id="weight">
							                    		</div>
							                    		<div class="col-5 pl-2">
							                    			<select class="form-control select" id="weight_unit" name="weight_unit" tabindex="-1" aria-hidden="true">
									                    		<option value="kg">Kg</option>
									                    	</select>
							                    		</div>
							                    	</div>
							                    </div>
							                    <div class="form-group">
							                    	<label>Your Height</label>
							                    	<div class="row">
							                    		<div class="col-7 pr-2">
							                    			<input type="text" name="" class="form-control" id="height">
							                    		</div>
							                    		<div class="col-5 pl-2">
							                    			<select class="form-control select" id="height_unit" name="height_unit" tabindex="-1" aria-hidden="true">
									                    		<option value="cm">cm</option>
									                    		<option value="ft">ft</option>
									                    	</select>
							                    		</div>
							                    	</div>
							                    </div>
							                    <div class="form-group">
							                    	<label>Your Age</label>
							                    	<input type="text" name="age" class="form-control" id="age">
							                    </div>
							                    <div class="form-group">
							                    	<label>Blood Type</label>
							                    	<select class="form-control select" id="blood_group" name="blood_group" tabindex="-1" aria-hidden="true">
							                    		<option value="">Select your blood group</option>
														<option value="A-">A-</option>
														<option value="A+">A+</option>
														<option value="B-">B-</option>
														<option value="B+">B+</option>
														<option value="AB-">AB-</option>
														<option value="AB+">AB+</option>
														<option value="O-">O-</option>
														<option value="O+">O+</option>
							                    	</select>
							                    </div>
						                	</div>
					                        <div class="mt-5">
					                        	<router-link to="/doctor/doctor-register-step3" class="btn btn-primary btn-block btn-lg login-btn step2_submit" id="step2_button" type="submit">continue </router-link>
					                        </div>
				                        </form>
									</div>
								</div>
								<div class="login-bottom-copyright">
									<span>© 2020 Doccure. All rights reserved.</span>
								</div>
							</div>
						</div>
					</div>
					<!-- /Register Content -->

				</div>

			</div>		
			<!-- /Page Content -->
   
        
    </div>
    </div>
</template>
<script>

export default {
   mounted() {
       
// Signup Toggle
	$(function () {
        $("#is_registered").click(function () {
            if ($(this).is(":checked")) {
                $("#preg_div").show();
            } else {
                $("#preg_div").hide();
            }
        });
    });

    //Increment Decrement value
	$('.inc.button').click(function(){
	    var $this = $(this),
	        $input = $this.prev('input'),
	        $parent = $input.closest('div'),
	        newValue = parseInt($input.val())+1;
	    $parent.find('.inc').addClass('a'+newValue);
	    $input.val(newValue);
	    newValue += newValue;
	});
	$('.dec.button').click(function(){
	    var $this = $(this),
	        $input = $this.next('input'),
	        $parent = $input.closest('div'),
	        newValue = parseInt($input.val())-1;
	    console.log($parent);
	    $parent.find('.inc').addClass('a'+newValue);
	    $input.val(newValue);
	    newValue += newValue;
	});

	// Signup Profile
	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				$('#prof-avatar').attr('src', e.target.result);
			};

			reader.readAsDataURL(input.files[0]);
		}
	}
	$("#profile_image").change(function() {
		readURL(this);
	});

	// Datepicker
	  var maxDate = $('#maxDate').val();
	  if($('#dob').length > 0) {
	  $('#dob').datepicker({
		  startView: 2,
		  format: 'dd/mm/yyyy',
		  autoclose: true,
		  todayHighlight: true,
		  endDate: maxDate
	  });
	}
	
	if($('#editdob').length > 0) {
	  $('#editdob').datepicker({
		startView: 2,
		format: 'dd/mm/yyyy',
		autoclose: true,
		todayHighlight: true,
		endDate: maxDate
	});
	}

// Select 2
	
	if($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
   },


}
</script>
