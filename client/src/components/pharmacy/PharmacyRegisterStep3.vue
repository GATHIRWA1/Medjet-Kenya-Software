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
												<li><a href="#" class="active-done">2</a></li>
												<li><a href="#" class="active">3</a></li>
											</ul>
										</div>
										<form id="personal_details" enctype="multipart/form-data">  
					                    	<div class="pregnant-col pt-4">
						                    	<div>
						                            <div class="remember-me-col d-flex justify-content-between">
						                            	<span class="mt-1">Are you Registered</span>
						                                <label class="custom_check">
						                                    <input type="checkbox" class="" id="is_registered" name="pregnant" value="1">
						                                    <span class="checkmark"></span>
						                                </label>
						                            </div>
						                        </div>
						                    </div>
						                    <div class="step-process-col mt-4">
							                    <div class="form-group" id="preg_div" style="display: none;">
							                    	<label>How Many Years you have been Registered?</label>
							                    	<select class="form-control select" id="preg_term" name="preg_term" tabindex="-1" aria-hidden="true">
							                    		<option value="">Tell us Many Years you have been Registered</option>
							                    		<option value="1">1</option>
							                    		<option value="2">2</option>
							                    		<option value="3">3</option>
							                    		<option value="4">4</option>
							                    		<option value="5">5</option>
							                    		<option value="6">6</option>
							                    		<option value="7">7</option>
							                    		<option value="8">8</option>
							                    		<option value="9">9</option>
							                    		<option value="10">10</option>
							                    	</select>
							                    </div>
							                     <div class="form-group">
							                    	<label>Address line 1</label>
							                    	<input type="text" placeholder="Address line 1" class="form-control" id="address1" value="" name="address1">
							                    </div>
							                    <div class="form-group">
							                    	<label>Address line 2</label>
							                    	<input type="text" placeholder="Address line 2" class="form-control" id="address2" value="" name="address2">
							                    </div>
							                    <div class="form-group">
							                    	<label>Postal/Zip code</label>
							                    	<input type="text" placeholder="Postal/Zip code" class="form-control" id="postal" value="" name="postal">
							                    </div>
							                    <div class="form-group">
							                    	<label>Certification and Employer</label>
							                    	<div class="row justify-content-center">
										                 <div class="profile-pic-upload d-flex flex-wrap  justify-content-center">
							                        		<div class="cam-col">
							                        			<img src="@/assets/img/icons/camera.svg" alt="">
							                        		</div>
							                        		<span class="text-center">Upload Rigth To sell Certigifcate</span>
							                        		<input type="file" id="right_to_sell" name="right_to_sell">
							                        	</div>
				                        	      		<div class="profile-pic-upload d-flex flex-wrap  justify-content-center">
							                        		<div class="cam-col">
							                        			<img src="@/assets/img/icons/camera.svg" alt="">
							                        		</div>
							                        		<span class="text-center">Upload Photo ID</span>
							                        		<input type="file" id="photo_id" name="photo_id">
							                        	</div>
				                        	      		<div class="profile-pic-upload d-flex flex-wrap  justify-content-center">
							                        		<div class="cam-col">
							                        			<img src="@/assets/img/icons/camera.svg" alt="">
							                        		</div>
							                        		<span class="text-center">Upload Clinical employment</span>
							                        		<input type="file" id="c_employment" name="c_employment">
							                        	</div>
							                        </div>
							                    </div>
							                    <div class="checklist-col pregnant-col">
						                            <div class="remember-me-col d-flex justify-content-between">
						                            	<span class="mt-1">Do you Deliver?</span>
						                                <label class="custom_check">
                                                            <input type="checkbox" class="" name="deliver" id="deliver" value="1">
                                                            <span class="checkmark"></span>
						                                </label>
						                            </div>
						                            <div class="remember-me-col d-flex justify-content-between">
						                            	<span class="mt-1">Do you Offer appoinment?</span>
						                                <label class="custom_check">
                                                            <input type="checkbox" class="" name="appoinment" id="appoinment" value="1">
                                                            <span class="checkmark"></span>
						                                </label>
						                            </div>
						                            <div class="remember-me-col d-flex justify-content-between">
						                            	<span class="mt-1">Do you honour free prescription?</span>
						                                <label class="custom_check">
                                                            <input type="checkbox" class="" name="prescription" id="prescription" value="1">
                                                            <span class="checkmark"></span>
						                                </label>
						                            </div>
						                        </div>
						                	</div>
					                        <div class="mt-5">
					                        	<router-link to="/pharmacy/index" class="btn btn-primary btn-block btn-lg login-btn step2_submit" id="step2_button" >continue </router-link>
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
