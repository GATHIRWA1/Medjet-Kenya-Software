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
										<form method="post">
											<h3 class="my-4">Your Location</h3>
				                        	<div class="form-group">
												<label>Select City</label>
												<select class="form-control select" id="heart_rate" name="heart_rate" tabindex="-1" aria-hidden="true">
													<option value="">Select Your City</option>
													<option value="1">City 1</option>
													<option value="2">City 2</option>
												</select>
											</div>
											<div class="form-group">
												<label>Select State</label>
												<select class="form-control select" id="bp" name="bp" tabindex="-1" aria-hidden="true">
													<option value="">Select Your State</option>
													<option value="1">State 1</option>
													<option value="2">State 2</option>
												</select>
											</div>
						                    <div class="mt-5">
					                        	<router-link to="/doctor/index" class="btn btn-primary btn-block btn-lg login-btn step5_submit" id="step5_button" type="submit">Update </router-link>
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
