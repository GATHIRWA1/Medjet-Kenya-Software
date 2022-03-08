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
												<li><a href="#" class="active">1</a></li>
												<li><a href="#">2</a></li>
												<li><a href="#">3</a></li>
											
											</ul>
										</div>
										<form id="profile_pic_form" enctype="multipart/form-data">  
											<div class="profile-pic-col">
												<h3>Profile Picture</h3>
												<div class="profile-pic-upload">
													<div class="cam-col">
														<img src="@/assets/img/icons/camera.svg" id="prof-avatar" alt="" class="img-fluid">
													</div>
													<span>Upload Profile Picture</span>
													<input type="file"  @change="uploadImage"   name="profile_image" > 
												</div>
											</div>
											<div class="mt-5">
												<router-link to="/patient-register-step2" class="btn btn-primary btn-block btn-lg login-btn step1_submit" id="step1_button" type="submit">continue </router-link>
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
import { fb,db } from "../firebase";
export default {
 data() {
	 return {
		 profilephoto_url:""
	 }
 },



 methods: {
	 uploadImage(e){

     fb.auth().onAuthStateChanged((user) => {
		 if (user) {
			  let file = e.target.files[0];
			  var storageRef = fb.storage().ref('profilephotos/' + file.name);
	         let uploadTask = storageRef.put(file);
              
uploadTask.on('state_changed', 
  (snapshot) => {
    }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
		db.collection("profile").doc(user.uid).set({
            profilephoto_url : downloadURL,
		},{ merge : true}).then(()=>{
      console.log('File available at', downloadURL);})

    });
  }
);


		alert('Image uploaded succesifully')
        this.$router.push('/patient-register-step2');

		 }
     
	 });
	 
	 }
 },
   


}

</script>
