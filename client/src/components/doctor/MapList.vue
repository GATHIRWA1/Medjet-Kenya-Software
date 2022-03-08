<template>
<div class="map-page">
    <div class="main-wrapper">
        <layout-header></layout-header>
        <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

	            <div class="row">
					<div class="col-xl-7 col-lg-12 order-md-last order-sm-last order-last map-left">
				
						<div class="row align-items-center mb-4">
							<div class="col-md-6 col">
								<h4>2245 Doctors found</h4>
							</div>

							<div class="col-md-6 col-auto">
								<div class="view-icons">
									<router-link to="/doctor/map-grid" class="grid-view"><i class="fas fa-th-large"></i></router-link>
									<router-link to="/dcotor/map-list" class="list-view active"><i class="fas fa-bars"></i></router-link>
								</div>
								<div class="sort-by d-sm-block d-none">
									<span class="sortby-fliter">
										<select class="select">
											<option>Sort by</option>
											<option class="sorting">Rating</option>
											<option class="sorting">Popular</option>
											<option class="sorting">Latest</option>
											<option class="sorting">Free</option>
										</select>
									</span>
								</div>
							</div>
						</div>

						<!-- Doctor Widget -->
						<div class="card" v-for="item in searchresults.slice(0,5)" :key="item.id">
							<div class="card-body">
								<div class="doctor-widget">
									<div class="doc-info-left">
										<div class="doctor-img">
											<router-link to="/doctor/profile">
												<img :src="loadImg(item.image, 1)" class="img-fluid" alt="User Image">
											</router-link>
										</div>
										<div class="doc-info-cont">
											<h4 class="doc-name"><router-link to="/doctor/profile">{{item.name}}</router-link></h4>
											<p class="doc-speciality">{{item.specialist}}</p>
											<h5 class="doc-department"><img :src="loadImg(item.icon, 2)" class="img-fluid" alt="Speciality">Dentist</h5>
											<div class="rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star"></i>
												<span class="d-inline-block average-rating">({{item.feedback}})</span>
											</div>
											<div class="clinic-details">
												<p class="doc-location"><i class="fas fa-map-marker-alt"></i>{{item.location}}</p>
												<ul class="clinic-gallery" >
													<li v-for="data in item.images" :key="data.id">
														<a  data-fancybox="gallery">
															<img :src="loadImg(data.name,3)" alt="Feature">
														</a>
													</li>
													
												</ul>
											</div>
											<div class="clinic-services">
												<span>Dental Fillings</span>
												<span> Whitneing</span>
											</div>
										</div>
									</div>
									<div class="doc-info-right">
										<div class="clini-infos">
											<ul>
												<li><i class="far fa-thumbs-up"></i> {{item.likes}}</li>
												<li><i class="far fa-comment"></i> {{item.feedback}}  Feedback</li>
												<li><i class="fas fa-map-marker-alt"></i>{{item.location2}}</li>
												<li><i class="far fa-money-bill-alt"></i>{{item.fees}}<i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i> </li>
											</ul>
										</div>
										<div class="clinic-booking">
											<router-link class="view-pro-btn" to="/doctor/profile">View Profile</router-link>
											<router-link class="apt-btn" to="/patient/booking">Book Appointment</router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- /Doctor Widget -->

							
					<div class="load-more text-center">
						<a class="btn btn-primary btn-sm" href="javascript:void(0);">Load More</a>	
					</div>
	            </div>
	            <!-- /content-left-->
	            <div class="col-xl-5 col-lg-12 map-right">
	                <div id="map" class="map-listing"></div>
	                <!-- map-->
	            </div>
	            <!-- /map-right-->
	        </div>
	        <!-- /row-->
	   
				</div>

			</div>		
			<!-- /Page Content -->
   
    </div>
</div>
</template>

<script>
import searchresults from '../../assets/json/patient/searchresults.json';
import GoogleMapsLoader from 'google-maps'

const doctorImages = require.context('@/assets/img/doctors', false, /\.png$|\.jpg$/)
const specialityImages = require.context('@/assets/img/specialities', false, /\.png$|\.jpg$/)
const featureImages = require.context('@/assets/img/features', false, /\.png$|\.jpg$/)
const userImages = require.context('@/assets/img/patients', false, /\.png$|\.jpg$/)


let infowindow = null;
let map, current = 0;
const icons = {
  'default':require('@/assets/img/marker.png')
};

export default {
	data() {
		return {
            searchresults: searchresults,
            slider: null,
			bounds: new google.maps.LatLngBounds(),
			locations: [
				{
					"id": 1,
					"doc_name":"Dr. Ruby Perrin",
					"speciality":"MDS - Periodontology and Oral Implantology, BDS",
					"address":"Florida, USA",
					"next_available":"Available on Fri, 22 Mar",
					"amount":"$300 - $1000",
					"lat": "53.470692",
					"lng":"-2.220328",
					"icons":"default",
					"profile_link":"/doctor/profile",
					"total_review":"17",
					"image":"doctor-thumb-01.jpg"
				}, 
				{
					"id": 2,
					"doc_name":"Dr. Darren Elder",
					"speciality":"BDS, MDS - Oral & Maxillofacial Surgery",
					"address":"Newyork, USA",
					"next_available":"Available on Fri, 23 Mar",
					"amount":"$50 - $300",
					"lat": "53.469189",
					"lng":"-2.199262",
					"icons":"default",
					"profile_link":"/doctor/profile",
					"total_review":"35",
					"image":"doctor-thumb-02.jpg"
				}, 
				{
					"id": 3,
					"doc_name":"Dr. Deborah Angel",
					"speciality":"MBBS, MD - General Medicine, DNB - Cardiology",
					"address":"Georgia, USA",
					"next_available":"Available on Fri, 24 Mar",
					"amount":"$100 - $400",
					"lat": "53.468665",
					"lng": "-2.189269",
					"icons":"default",
					"profile_link":"/doctor/profile",
					"total_review":"27",
					"image":"doctor-thumb-03.jpg"
				}, 
				{
					"id": 4,
					"doc_name":"Dr. Sofia Brient",
					"speciality":"MBBS, MS - General Surgery, MCh - Urology",
					"address":"Louisiana, USA",
					"next_available":"Available on Fri, 25 Mar",
					"amount":"$150 - $250",
					"lat": "53.463894",
					"lng":"-2.177880",
					"icons":"default",
					"profile_link":"/doctor/profile",
					"total_review":"4",
					"image":"doctor-thumb-04.jpg"
				}, 
				{
					"id": 5,
					"doc_name":"Dr. Marvin Campbell",
					"speciality":"MBBS, MD - Ophthalmology, DNB - Ophthalmology",
					"address":"Michigan, USA",
					"next_available":"Available on Fri, 25 Mar",
					"amount":"$50 - $700",
					"lat": "53.466359",
					"lng":"-2.213314",
					"icons":"default",
					"profile_link":"/doctor/profile",
					"total_review":"66",
					"image":"doctor-thumb-05.jpg"
				}, 
				{
					"id": 6,
					"doc_name":"Dr. Katharine Berthold",
					"speciality":"MS - Orthopaedics, MBBS, M.Ch - Orthopaedics",
					"address":"Texas, USA",
					"next_available":"Available on Fri, 25 Mar",
					"amount":"$100 - $500",
					"lat": "53.463906",
					"lng":"-2.213271",
					"icons":"default",
					"profile_link":"/doctor/profile",
					"total_review":"52",
					"image":"doctor-thumb-06.jpg"
				}, 
				{
					"id": 7,
					"doc_name":"Dr. Linda Tobin",
					"speciality":"MBBS, MD - General Medicine, DM - Neurology",
					"address":"Kansas, USA",
					"next_available":"Available on Fri, 25 Mar",
					"amount":"$100 - $1000",
					"lat": "53.461974",
					"lng":"-2.210661",
					"icons":"default",
					"profile_link":"/doctor/profile",
					"total_review":"43",
					"image":"doctor-thumb-07.jpg"
				}, 
				{
					"id": 8,
					"doc_name":"Dr. Paul Richard",
					"speciality":"MBBS, MD - Dermatology , Venereology & Lepros",
					"address":"California, USA",
					"next_available":"Available on Fri, 25 Mar",
					"amount":"$100 - $400",
					"lat": "53.458785",
					"lng":"-2.188532",
					"icons":"default",
					"profile_link":"/doctor/profile",
					"total_review":"49",
					"image":"doctor-thumb-08.jpg"
				}, 
				{
					"id": 9,
					"doc_name":"Dr. John Gibbs",
					"speciality":"MDS - Periodontology and Oral Implantology, BDS",
					"address":"Oklahoma, USA",
					"next_available":"Available on Fri, 25 Mar",
					"amount":"$500 - $2500",
					"lat": "53.4558571",
					"lng":"-2.1950372",
					"icons":"default",
					"profile_link":"/doctor/profile",
					"total_review":"112",
					"image":"doctor-thumb-09.jpg"
				}, 
				{
					"id":10,
					"doc_name":"Dr. Olga Barlow",
					"speciality":"MDS - Periodontology and Oral Implantology, BDS",
					"address":"Montana, USA",
					"next_available":"Available on Fri, 25 Mar",
					"amount":"$75 - $250",
					"lat": "53.458850",
					"lng": "-2.194549",
					"icons":"default",
					"profile_link":"/doctor/profile",
					"total_review":"65",
					"image":"doctor-thumb-10.jpg"
				}, 
				{
					"id":11,
					"doc_name":"Dr. Julia Washington",
					"speciality":"MBBS, MD - General Medicine, DM - Endocrinology",
					"address":"Oklahoma, USA",
					"next_available":"Available on Fri, 25 Mar",
					"amount":"$275 - $450",
					"lat": "53.461733",
					"lng":"-2.194502",
					"icons":"default",
					"profile_link":"/doctor/profile",
					"total_review":"5",
					"image":"doctor-thumb-11.jpg"
				}, 
				{
					"id":12,
					"doc_name":"Dr. Shaun Aponte",
					"speciality":"MBBS, MS - ENT, Diploma in Otorhinolaryngology (DLO)",
					"address":"Indiana, USA",
					"next_available":"Available on Fri, 25 Mar",
					"amount":"$150 - $350",
					"lat": "53.460548",
					"lng": "-2.190956",
					"icons":"default",
					"profile_link":"/doctor/profile",
					"total_review":"5",
					"image":"doctor-thumb-12.jpg"
				}
			]
		}
    },
    mounted() {
		this.mapShow();		
	},
	 methods: {
        loadImg(imgPath, value) { 
			if(value == 1) {
				return doctorImages('./' + imgPath)
			} else if(value == 2) {
				return specialityImages('./' + imgPath)
			} else if(value == 3) {
				return featureImages('./' + imgPath)
			} else {
				return doctorImages('./' + imgPath)
			}
        },
		show(value) {
			const setInfo = (marker) => {
			const content = 
			'<div class="profile-widget" style="width: 100%; display: inline-block;">'+
				'<div class="doc-img">'+
					'<a href="' + marker.profile_link + '" tabindex="0" target="_blank">'+
						'<img class="img-fluid" alt="' + marker.doc_name + '" src="' + this.loadImg(marker.image, 4) + '">'+
					'</a>'+
				'</div>'+
				'<div class="pro-content">'+
					'<h3 class="title">'+
						'<a href="' + marker.profile_link + '" tabindex="0">' + marker.doc_name + '</a>'+
						'<i class="fas fa-check-circle verified"></i>'+
					'</h3>'+
					'<p class="speciality">' + marker.speciality + '</p>'+
					'<div class="rating">'+
						'<i class="fas fa-star filled"></i>'+
						'<i class="fas fa-star filled"></i>'+
						'<i class="fas fa-star filled"></i>'+
						'<i class="fas fa-star filled"></i>'+
						'<i class="fas fa-star"></i>'+
						'<span class="d-inline-block average-rating"> (' + marker.total_review + ')</span>'+
					'</div>'+
					'<ul class="available-info">'+
						'<li><i class="fas fa-map-marker-alt"></i> ' + marker.address + ' </li>'+
						'<li><i class="far fa-clock"></i> ' + marker.next_available + '</li>'+
						'<li><i class="far fa-money-bill-alt"></i> ' + marker.amount + '</li>'+
					'</ul>'+
				'</div>'+
			'</div>';
			infowindow.setContent(content);
		}
			infowindow.close();

			if (!map.slide) {
				return;
			}
			let next, marker;
			if (this.locations.length == 0 ) {
				return
			} else if (this.locations.length == 1 ) {
				next = 0;
			}
			if (this.locations.length >1) {
				do {
					next = Math.floor (Math.random()*this.locations.length);
				} while (next == current)
			}
			current = next;
			marker = this.locations[next];
			setInfo(marker);
			infowindow.open(map, marker);
		},
		mapShow() {
			this.select2(2);
			let mapOptions = {
				zoom: 14,
				center: {
					lat: 53.470692,
					lng: -2.220328
				},
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				
			};
		
			map = new google.maps.Map(document.getElementById('map'), mapOptions);
			map.slide = true;

			this.setMarkers(map, this.locations);
			infowindow = new google.maps.InfoWindow({
				content: "loading..."
			});
			google.maps.event.addListener(infowindow, 'closeclick',function(){
				infowindow.close();
			});
			this.slider = window.setTimeout(this.show(1), 3000);
		},
		select2(value) {
			 if($('.select').length > 0) {
				$('.select').select2({
				minimumResultsForSearch: -1,
				width: '100%'
				});
        	}
		},
		setMarkers(map, markers) {
			const setInfo = (marker) => {
			const content = 
			'<div class="profile-widget" style="width: 100%; display: inline-block;">'+
				'<div class="doc-img">'+
					'<a href="' + marker.profile_link + '" tabindex="0" target="_blank">'+
						'<img class="img-fluid" alt="' + marker.doc_name + '" src="'+ this.loadImg(marker.image, 4) +'">'+
					'</a>'+
				'</div>'+
				'<div class="pro-content">'+
					'<h3 class="title">'+
						'<a href="' + marker.profile_link + '" tabindex="0">' + marker.doc_name + '</a>'+
						'<i class="fas fa-check-circle verified"></i>'+
					'</h3>'+
					'<p class="speciality">' + marker.speciality + '</p>'+
					'<div class="rating">'+
						'<i class="fas fa-star filled"></i>'+
						'<i class="fas fa-star filled"></i>'+
						'<i class="fas fa-star filled"></i>'+
						'<i class="fas fa-star filled"></i>'+
						'<i class="fas fa-star"></i>'+
						'<span class="d-inline-block average-rating"> (' + marker.total_review + ')</span>'+
					'</div>'+
					'<ul class="available-info">'+
						'<li><i class="fas fa-map-marker-alt"></i> ' + marker.address + ' </li>'+
						'<li><i class="far fa-clock"></i> ' + marker.next_available + '</li>'+
						'<li><i class="far fa-money-bill-alt"></i> ' + marker.amount + '</li>'+
					'</ul>'+
				'</div>'+
			'</div>';
			infowindow.setContent(content);
		}
			for (let i = 0; i < markers.length; i++) {
				let item = markers[i];
				let latlng = new google.maps.LatLng(parseFloat(item.lat), parseFloat(item.lng));
				let marker = new google.maps.Marker({
					position: latlng,
					map: map,
					doc_name: item.doc_name,
					address: item.address,
					speciality: item.speciality,
					next_available: item.next_available,
					amount: item.amount,
					profile_link: item.profile_link,
					total_review: item.total_review,
					animation: google.maps.Animation.DROP,
					icon: icons[item.icons],
					image: item.image
                    });

					this.bounds.extend(marker.position);
					markers[i] = marker;
					google.maps.event.addListener(marker, "click", function () {
						setInfo(markers[i]);
						infowindow.open(map,markers[i]);
						window.clearTimeout(this.slider);
					});
				}
			map.fitBounds(this.bounds);
			google.maps.event.addListener(map, 'zoom_changed', function() {
				if (map.zoom > 16) map.slide = false;
			});
		},
    },
}
</script>