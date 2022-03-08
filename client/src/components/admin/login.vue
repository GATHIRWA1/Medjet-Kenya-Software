<template>
       <!-- Main Wrapper -->
       <div class="main-wrapper login-body">
        <div class="login-wrapper">
            <div class="container">
                <div class="loginbox">
                    <div class="login-left">
                        <img class="img-fluid" src="@/assets/img/logo.png" alt="Logo">
                    </div>
                    <div class="login-right">
                        <div class="login-right-wrap">
                            <h1>Login</h1>
                            <p class="account-subtitle">Access to our  admin dashboard</p>
                            
                            <!-- Form -->
                            <form @click.prevent="loginAdmin">
                                <div class="form-group">
                                    <input class="form-control" v-model="email" type="text" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" v-model="password" type="text" placeholder="Password">
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-primary btn-block" type="submit">Login</button>
                                </div>
                            </form>
                            <!-- /Form -->
                            
                            <div class="text-center forgotpass"><router-link to="/admin/forgotpassword">Forgot Password?</router-link></div>
                            
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Main Wrapper -->
</template>
<script>
import {fb ,func} from "../../firebase";
export default {
data() {
    return {
 email :"",
password:""
    }
},

methods: {
    loginAdmin ()   {
         fb.auth().signInWithEmailAndPassword(this.email, this.password)
     .currentUser.getIdTokenResult()
  .then((idTokenResult) => {
     // Confirm the user is an Admin.
     if (!!idTokenResult.claims.admin) {
       // Show admin UI.
        this.$router.push('admin/index');
     } else {
       // Show regular user UI.
       console.log('You are not an admin !!');
       this.$router.push('patient/index');
     }
  })
  .catch((error) => {
    console.log(error);
  });
    
    }
    },
}
</script>