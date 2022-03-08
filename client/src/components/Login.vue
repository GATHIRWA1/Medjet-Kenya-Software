<template>
	<div class="account-page">
		<div class="main-wrapper">
			<layout-header></layout-header>
			
				<!-- Page Content -->
				<div class="content">
					<div class="container-fluid">
						
						<div class="row">
							<div class="col-md-8 offset-md-2">
								
								<!-- Login Tab Content -->
								<div class="account-content">
									<div class="row align-items-center justify-content-center">
										<div class="col-md-7 col-lg-6 login-left">
											<img src="@/assets/img/login-banner.png" class="img-fluid" alt="Doccure Login">	
										</div>
										<div class="col-md-12 col-lg-6 login-right">
											<div class="login-header">
												<h3>Login <span>Medjet Kenya</span></h3>
											</div>
											<!--login form -->

		                  <form>
                              
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" v-model="email" id="email" name="email" class="form-control"  />
                               
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" v-model="password" id="password" name="password" class="form-control" />
                               
                                   
                            </div>
                         
							<div class="text-right">
											<router-link class="forgot-link" to="/register">Don't have an account? Register </router-link>
											<div><router-link class="forgot-link" to="/forgot-password">Forgot password </router-link> </div>
											</div>
                            <div class="form-group">
                                <button @click.prevent="login" class="btn btn-primary">Log In </button>
                            </div>
                        </form>

											<!--/login from -->
										</div>
									</div>
								</div>
								<!-- /Login Tab Content -->
									
							</div>
						</div>

					</div>

				</div>		
				<!-- /Page Content -->
			<layout-footer></layout-footer>
		</div>
	</div>
</template>

<script>
import fb from "firebase";


export default {
name: "app",
        data() {
            return {
               
                email: "",
                password: "",
              
                    
            }
        
        },
        methods: {
    
async login(){
fb.auth().setPersistence(fb.auth.Auth.Persistence.SESSION)
  .then(() => {
  return  fb.auth().signInWithEmailAndPassword(this.email, this.password)
   .then(()=>{
     this.$router.push('patient/index');
    })
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
    window.alert('Wrong password.');
  } else {
  window.alert(errorMessage);
  }
  console.log(error);
});
  })
   } 
        }
}
    
</script>