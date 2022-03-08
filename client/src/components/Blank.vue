<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <!-- Page Content -->
			<div class="content bg-white">
				<div class="container-fluid">
					
					<div class="row">
						<div class="col-md-8 offset-md-2">
								
							<!-- Register Content -->
							<div class="account-content">
								<div class="row align-items-center justify-content-center">
									<div class="col-md-7 col-lg-6 login-left">
										<img src="@/assets/img/login-banner.png" class="img-fluid" alt="Doccure Register">	
									</div>
									<div class="col-md-12 col-lg-6 login-right">
										<div class="login-header">
											<h3>Register <router-link to="/index">Medjet Kenya</router-link></h3>
										</div>
										
										<!-- Register Form -->
										<form>
											
                                            <div class="form-group form-focus">
												<input type="email" placeholder='Email' v-model="email" class="form-control floating">
												<label class="focus-label">Email</label>
											</div>
										
											<div class="form-group form-focus">
												<input type="password"  v-model="password" class="form-control floating">
												<label class="focus-label">Create Password</label>
											</div>
												<div class="form-group form-focus">
												<input type="text"  v-model="confirmpassword" class="form-control floating">
												<label class="focus-label">Confirm Password</label>
											</div>
											<div class="text-right">
											<router-link class="forgot-link" to="/login">Already have an account? Log In</router-link>
											</div>
											<button @click="submit" class="btn btn-primary btn-block btn-lg login-btn" >Signup</button>
											<div class="login-or">
												<span class="or-line"></span>
												<div class="text-right">
				                               <router-link class="forgot-link" to="/forgot-password">Forgot Password ?</router-link>
				                              	</div>
											</div>
										
										</form>
										<!-- /Register Form -->
										
									</div>
								</div>
							</div>
							<!-- /Register Content -->
								
						</div>
					</div>

				</div>

			</div>		
			<!-- /Page Content -->
   
        <layout-footer></layout-footer>
    </div>
</template>

<script>
import firebase from "firebase";
export default {

    data() {
        return{
  
      email:"",
      confirmpassword:"",
      password:""
        }
    },
   methods: {
async submit (){ 
	if (this.password===!this.confirmpassword){
		window.alert('Password does not match ')
	}
firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
this.$route.push('patient/index')
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
}
    }
	
}
</script>