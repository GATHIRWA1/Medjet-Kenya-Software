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
										<form id="personal_details" enctype="multipart/form-data"  >  
					                    	<div class="text-left mt-2">
						                        <h4 class="mt-3">Select Your Gender</h4>
						                    </div>
						                    <div class="select-gender-col">
						                    	<div class="row">
						                    		<div class="col-6 pr-2">
						                    			<input type="radio" id="test1" name="gender" value="Male" v-model="gender">
    													<label for="test1">
    														<span class="gender-icon"><img src="@/assets/img/icons/male.png" alt=""></span>
    														<span>Male</span>
    													</label>
						                    		</div>
						                    		<div class="col-6 pl-2">
						                    			<input type="radio" id="test2" name="gender" value="Female" v-model="gender">
    													<label for="test2">
    														<span class="gender-icon"><img src="@/assets/img/icons/female.png" alt=""></span>
    														<span>Female</span>
    													</label>
						                    		</div>
						                    	</div>
						                    </div>
						                    
						                    
							                    <div class="form-group">
							                    	<label>Your Weight</label>
							                    	<div class="row">
							                    		<div class="col-7 pr-2">
							                    			<input type="text" class="form-control" name="weight" v-model="weight">
							                    		</div>
							                    		<div class="col-5 pl-2">
							                    			<select class="form-control select" id="weight_unit" name="weight_unit">
									                    		<option value="kg">Kg</option>
									                    	</select>
							                    		</div>
							                    	</div>
							                    </div>
							                    <div class="form-group">
							                    	<label>Your Height</label>
							                    	<div class="row">
							                    		<div class="col-7 pr-2">
							                    			<input type="text" v-model="height" name="" class="form-control"  required>
							                    		</div>
							                    		<div class="col-5 pl-2">
							                    			<select class="form-control select" id="height_unit" name="height_unit" tabindex="-1" aria-hidden="true" >
									                    		<option value="cm">Ft</option>
									                    		
									                    	</select>
							                    		</div>
							                    	</div>
							                    </div>
							                    <div class="form-group">
							                    	<label>Your Age</label>
							                    	<div class="row">
							                    		<div class="col-7 pr-2">
							                    			<input type="text" name="" class="form-control" v-model="age" required>
							                    		</div>
							                    		<div class="col-5 pl-2">
							                    			<select class="form-control select" id="height_unit" name="height_unit" tabindex="-1" aria-hidden="true" >
									                    		<option value="Years">YEARS</option>
									                    		
									                    	</select>
							                    		</div>
							                    	</div>
							                    </div>
							                <div class="mt-5">
					                        	<button to="/patient-register-step3" class="btn btn-primary btn-block btn-lg login-btn " @click.prevent="addmedical_info"  >continue </button>
					                        </div>
				                        </form>
									</div>
								</div>
								<div class="login-bottom-copyright">
								<span>© 2020 MedJet Kenya. All rights reserved.</span>
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
import {fb , db} from "../firebase";
export default {
  data() {
	  return {
		  gender:"",
		  weight:"",
		  height:"",
		  age:""
	  }
  },
  methods:{
addmedical_info(e){

fb.auth().onAuthStateChanged((user) => {
	 if (user) {
if (this.gender && this.weight && this.height && this.age !=="") {
 db.collection("medical_info").doc(user.uid).set({
    gender: this.gender ,
    weight:this.weight + "Kg",
	height:this.height + "M",
	age:this.age+"Years"
	},{ merge : true}).then(() => {
    console.log("Document successfully written!");
	this.$router.push('/patient-register-step3');
})
}else{
	alert('This field cannot be empty')
}
    
  } else {
    
  }
});

		  
	}
},

}
</script>
