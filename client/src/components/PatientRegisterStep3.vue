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
												<li><a href="#" class="active-done">3</a></li>
												
											</ul>
										</div>
										<form>
				                        	<h3 class="my-4">Your Location</h3>
											
				                        	<div class="form-group">
												<label>Select City</label>
												<input class="form-control"  type="text" name="city" id="city" v-model="city" >
												
											</div>
											<div class="form-group">
												<label>Select county of residence </label>
												<input class="form-control"  type="text" name="county" id="county" v-model="county" >
											</div>
											<div class="form-group">
												<label>Home Address</label>
												<input class="form-control"  type="text" name="address" id="adress" v-model="address" >
												
											</div>
						                    
							                <div class="mt-5">
												 
					                        	<button  @click.prevent="addLocation" class="btn btn-primary btn-block btn-lg login-btn " id="step5_button" >continue </button>
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

data(){
return{
city:"",
county:"",
address:""
}
},
methods:{
addLocation(e){

fb.auth().onAuthStateChanged((user) => {
	 if (user) {
if (this.city && this.county && this.address !=="") {
 db.collection("profile").doc(user.uid).set({
    city: this.city,
    county:this.county,
	address:this.address
	},{ merge : true}).then(() => {
    console.log("Document successfully written!");
	this.$router.push('/patient/index');
})
}else{
	alert('This field cannot be empty')
}
    
  } else {
    this.$router.push('/register');
  }
});

		  
	}
},

   


}
</script>
