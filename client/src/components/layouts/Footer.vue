<template>
	<!-- Footer -->
	<footer class="footer">
		<!-- Footer Top -->
		<div class="footer-top">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-3 col-md-6">

						<!-- Footer Widget -->
						<div class="footer-widget footer-about">
							<div class="footer-logo">
								<img src="@/assets/img/logo.png" alt="logo">
							</div>
							<div class="footer-about-content">
								<p>Consult a Doctor Online within minutes using your phone, tablet or computer on our website. </p>
								<div class="social-icon">
									<ul>
										<li>
											<a href="#" target="_blank"><i class="fab fa-facebook-f"></i> </a>
										</li>
										<li>
											<a href="#" target="_blank"><i class="fab fa-twitter"></i> </a>
										</li>
										<li>
											<a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
										</li>
										<li>
											<a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
										</li>
										<li>
											<a href="#" target="_blank"><i class="fab fa-dribbble"></i> </a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<!-- /Footer Widget -->
					</div>
					<div class="col-lg-3 col-md-6">
						<!-- Footer Widget -->
						<div class="footer-widget footer-menu">
							<h2 class="footer-title">For Patients</h2>
							<ul>
								<li><router-link to="/doctor/search">Chat with a doctor </router-link></li>
								<li><router-link to="/login">Login</router-link></li>
								<li><router-link to="/patient/register">Register</router-link></li>
								<li><router-link to="/patient/booking">Booking</router-link></li>
								<li><router-link to="/patient/index">Patient Dashboard</router-link></li>
							</ul>
						</div>
						<!-- /Footer Widget -->
					</div>
					<div class="col-lg-3 col-md-6">
						<!-- Footer Widget -->
						<div class="footer-widget footer-menu">
							<h2 class="footer-title">Our services</h2>
							<ul style="color: white;">
								<li>Covid 19 Resulting</li>
								<li>Special Follow Up</li>
								<li>Mental Healthcare</li>
								<li>Gynecological</li>
								<li >Orthorpendics</li>
							</ul>
						</div>
						<!-- /Footer Widget -->
					</div>
					<div class="col-lg-3 col-md-6">
						<!-- Footer Widget -->
						<div class="footer-widget footer-contact">
							<h2 class="footer-title">Contact Us</h2>
							<div class="footer-contact-info">
								<div class="footer-address">
									<span><i class="fas fa-map-marker-alt"></i></span>
									<p> Mima center 3rd floor Along Eastern bypass <br> Ruiru Kamakis, Kenya</p>
								</div>
								<p>
									<i class="fas fa-phone-alt"></i>
									+254 719 381 888
								</p>
								<p class="mb-0">
									<i class="fas fa-envelope"></i>
									medjetkenya.co.ke
								</p>
							</div>
						</div>
						<!-- /Footer Widget -->
					</div>
				</div>
			</div>
		</div>
		<!-- /Footer Top -->
		<!-- Footer Bottom -->
		<div class="footer-bottom">
			<div class="container-fluid">
				<!-- Copyright -->
				<div class="copyright">
					<div class="row">
						<div class="col-md-6 col-lg-6">
							<div class="copyright-text">
								<p class="mb-0">&copy; 2021 Medjetkenya. All rights reserved.</p>
							</div>
						</div>
						<div class="col-md-6 col-lg-6">
							<!-- Copyright Menu -->
							<div class="copyright-menu">
								<ul class="policy-menu">
									<li><router-link to="/term-condition">Terms and Conditions</router-link></li>
									<li><router-link to="/privacy-policy">Policy</router-link></li>
								</ul>
							</div>
							<!-- /Copyright Menu -->
						</div>
					</div>
				</div>
				<!-- /Copyright -->
			</div>
		</div>
		<!-- /Footer Bottom -->
	</footer>
	<!-- /Footer -->
</template>