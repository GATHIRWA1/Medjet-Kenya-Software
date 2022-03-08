<template>
    <div class="main-wrapper">
        <layout-header2></layout-header2>
        <breadcrumb37></breadcrumb37>
        	
			<!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <sidebar1></sidebar1>
						</div>
						<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="doc-review review-listing custom-edit-service">

								<div class="row mb-5">
                                    <div class="col">
                                        <ul class="nav nav-tabs nav-tabs-solid">
                                            <li class="nav-item">
                                                <router-link class="nav-link" to="/doctor/blogs">Acitive Blog</router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link class="nav-link" to="/doctor/pending-blogs">Pending Blog</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-auto">
                                        <router-link class="btn btn-primary btn-sm" to="/doctor/add-blog"><i class="fas fa-plus mr-1"></i> Add Blog</router-link>
                                    </div>
                                </div>
							
								<!-- Edit Blog -->
								<div class="card">
									<div class="card-body">	
										<h3 class="pb-3">Edit Blog</h3>
						
										<form>
											<input type="hidden" name="csrf_token_name" value="0146f123a4c7ae94253b39bca6bd5a5e">

											<div class="service-fields mb-3">
												<div class="row">
													<div class="col-lg-12">
														<div class="form-group">
															<label>Blog Title <span class="text-danger">*</span></label>
															<input type="hidden" name="service_id" id="service_id" value="18">
															<input class="form-control" type="text" name="service_title" id="service_title" value="Doccure – Making your clinic painless visit?" required="">
														</div>
													</div>
												</div>
											</div>
											
											<div class="service-fields mb-3">
												<div class="row">
													<div class="col-lg-6">
														<div class="form-group">
															<label>Category <span class="text-danger">*</span></label>
															<select class="form-control select" name="category" required=""> 
																<option value="1">Automobile</option>
																<option value="2" selected="selected">Construction</option>
																<option value="3">Interior</option>
																<option value="4">Cleaning</option>
																<option value="5">Electrical</option>
																<option value="6">Carpentry</option>
																<option value="7">Computer</option>
																<option value="8">Painting</option>
																<option value="9">Car Wash</option>
																<option value="10">Category Test</option>
																<option value="11">dfdf</option>
																<option value="12">Equipment</option>
																<option value="13">Test category1</option>
																<option value="14">Farming</option>
																<option value="15">Test Category02</option>
																<option value="16">Laundry</option>
															</select>
														</div>
													</div>
													<div class="col-lg-6">
														<div class="form-group">
															<label>Sub Category <span class="text-danger">*</span></label>
															<select class="form-control select" name="subcategory"> 
															<option value="5">Others</option>
															<option value="6">Others</option>
															<option value="7">Others</option>
															<option value="8">House cleaning</option>
															<option value="9">Others</option>
															<option value="10">Others</option>
															<option value="11">Others</option>
															<option value="12">Others</option>
															<option value="13">Full Car Wash</option>
															<option value="14" selected="selected">Testing category</option>
															<option value="15">Test Sub category</option>
															<option value="16">Harvesting pine</option>
															<option value="17">Test Sub category name</option>
															<option value="18">Test Sub category name</option>
														</select>
														</div>
													</div>
												</div>
											</div>
											
											<div class="service-fields mb-3">
												<div class="row">
													<div class="col-lg-12">
														<div class="form-group">
															<label>Descriptions <span class="text-danger">*</span></label>
															<textarea id="about" class="form-control service-desc" name="about">note.</textarea>
														</div>
													</div>
												</div>
											</div>
											
											<div class="service-fields mb-3">
												<div class="row">
													<div class="col-lg-12">
														<div class="service-upload">
															<i class="fas fa-cloud-upload-alt"></i>
															<span>Upload Blog Images *</span>
															<input type="file" name="images[]" id="images" multiple="" accept="image/jpeg, image/png, image/gif,">
														
														</div>	
														<div id="uploadPreview">
															<ul class="upload-wrap">
																<li>
																	<div class=" upload-images">
																		<img alt="Blog Image" src="@/assets/img/img-01.jpg">
																	</div>
																</li>
																<li>
																	<div class=" upload-images">
																		<img alt="Blog Image" src="@/assets/img/img-02.jpg">
																	</div>
																</li>
																<li>
																	<div class=" upload-images">
																		<img alt="Blog Image" src="@/assets/img/img-03.jpg">
																	</div>
																</li>
															</ul>
														</div>
														
													</div>
												</div>
											</div>
											<div class="service-fields mb-3">
												<div class="row">
													<div class="col-lg-12">
														<div class="form-group">
															<label>Video id <span class="text-danger">*</span></label>
															<input type="hidden" name="video_id" id="video_id" value="18">
															<input class="form-control" type="text" name="video_id" id="video_id" value="Rf34rhkWW1" required="">
														</div>
													</div>
												</div>
											</div>
											<div class="submit-section">
												<button class="btn btn-primary submit-btn" @click="addblog" name="form_submit" value="submit">Submit</button>
											</div>
										</form>

									</div>
								</div>
								<!-- /Edit Blog -->

							</div>
						</div>
					</div>
				</div>

			</div>		
			<!-- /Page Content -->
        <layout-footer></layout-footer>
    </div>
</template>

<script>
export default {
	mounted() {
        if($('.select').length > 0) {
            $('.select').select2({
            minimumResultsForSearch: -1,
            width: '100%'
            });
        }
    },
    methods: {
        addblog() {
            this.$router.push('/doctor/blogs')
        }
    },
}
</script>