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
											<h3>Register <router-link to="/">Medjet Kenya</router-link></h3>
										</div>
										
										<!-- Register Form -->
						<form @submit.prevent="handleSubmit">
                            <div class="form-group">
                                <label for="firstName">First Name</label>
                                <input type="text" v-model="user.firstName" id="firstName" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && $v.user.firstName.$error }" />
                                <div v-if="submitted && !$v.user.firstName.required" class="invalid-feedback">First Name is required</div>
                            </div>
                            <div class="form-group">
                                <label for="lastName">Last Name</label>
                                <input type="text" v-model="user.lastName" id="lastName" name="lastName" class="form-control" :class="{ 'is-invalid': submitted && $v.user.lastName.$error }" />
                                <div v-if="submitted && !$v.user.lastName.required" class="invalid-feedback">Last Name is required</div>
                            </div>
							  <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="text" v-model="user.phone" id="phone" name="phone" class="form-control" :class="{ 'is-invalid': submitted && $v.user.phone.$error }" />
                                <div v-if="submitted && !$v.user.phone.required" class="invalid-feedback">Phone Number is required</div>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" v-model="user.email" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                                <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.email.required">Email is required</span>
                                    <span v-if="!$v.user.email.email">Email is invalid</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" v-model="user.password" id="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && $v.user.password.$error }" />
                                <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.password.required">Password is required</span>
                                    <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="confirmPassword">Confirm Password</label>
                                <input type="password" v-model="user.confirmPassword" id="confirmPassword" name="confirmPassword" class="form-control" :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }" />
                                <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                                    <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
                                </div>
                            </div>
							<div class="text-right">
											<router-link class="forgot-link" to="/login">Already have an account? Log In</router-link>
											</div>
                            <div class="form-group">
                                <button  @click="register" class="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
    
										<!-- /Register Form -->
										
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
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
name: "app",
        data() {
            return {
                user: {
                    firstName: "",
                    lastName: "",
					phone:"",
                    email: "",
                    password: "",
                    confirmPassword: ""
                },
                submitted: false
            };
        },
        validations: {
            user: {
                firstName: { required },
                lastName: { required },
				phone:{required},
                email: { required, email },
                password: { required, minLength: minLength(6) },
                confirmPassword: { required, sameAsPassword: sameAs('password') }
            }
        },
        methods: {
            handleSubmit(e) {
                this.submitted = true;
                 // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                    
                }
            },
 register(user){
     firebase.auth().createUserWithEmailAndPassword(this.user.email , this.user.password)
     .then((user)=>{
         alert('YOUR ACCOUNT CREATED SUCCESIFULLY') 
        this.$router.push('/welcomebanner');
     })
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
            },
           
        }
    };
</script>