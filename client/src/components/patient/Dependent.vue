<template>
    <div class="main-wrapper">
        <layout-header3></layout-header3>
        <breadcrumb></breadcrumb>
        <!-- Page Content -->
		<div class="content">
			<div class="container-fluid">
				<div class="row">
					<!-- Profile Sidebar -->
					<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
						<sidebar1></sidebar1>
					</div>
					<!-- / Profile Sidebar -->
					<div class="col-md-7 col-lg-8 col-xl-9">
						<div class="card">
							<div class="card-header">
								<div class="row">
									<div class="col-sm-6">
										<h3 class="card-title">Dependent</h3>
									</div>
									<div class="col-sm-6">
										<div class="text-right">
											<a href="#modal_form" data-toggle="modal" class="btn btn-primary btn-sm" tabindex="0">Add Dependent</a>
										</div>
									</div>
								</div>
							</div>
							<div class="card-body ">

								<!-- Dependent Tab -->
								<div class="card card-table mb-0">
									<div class="card-body">
										<div class="table-responsive">
											<table class="table table-hover table-center mb-0">
												<thead>
													<tr>
														<th>Dependent</th>
														<th>Relationship</th>
														<th>gender</th>
														<th>Number</th>
														<th>Blood Group</th>
														<th>Action</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<h2 class="table-avatar">
																<span class="avatar avatar-sm mr-2">
																	<img class="avatar-img rounded-circle" src="@/assets/img/son.jpg" alt="User Image">
																</span>
																Christopher
															</h2>
														</td>
														<td>Son</td>
														<td>Male</td>
														<td>303-297-6170</td>
														<td>AB+</td>
														<td>
															<div class="table-action">
																<a href="#edit_form" class="btn btn-sm bg-info-light" data-toggle="modal">	<i class="fas fa-edit"></i> Edit</a>
																<a href="javascript:void(0);" class="btn btn-sm bg-danger-light"><i class="fas fa-times"></i> Deactive</a>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<h2 class="table-avatar">
																<span class="avatar avatar-sm mr-2">
																	<img class="avatar-img rounded-circle" src="@/assets/img/daughter.jpg" alt="User Image">
																</span>
																Tressie
															</h2>
														</td>
														<td>Daughter</td>
														<td>Female</td>
														<td>360-822-9097</td>
														<td>B+</td>
														<td>
															<div class="table-action">
																<a href="#edit_form" class="btn btn-sm bg-info-light" data-toggle="modal">	<i class="fas fa-edit"></i> Edit</a>
																<a href="javascript:void(0);" class="btn btn-sm bg-danger-light"><i class="fas fa-times"></i> Deactive</a>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<h2 class="table-avatar">
																<span class="avatar avatar-sm mr-2">
																	<img class="avatar-img rounded-circle" src="@/assets/img/father.jpg" alt="User Image">
																</span>
																Champagne
															</h2>
														</td>
														<td>Father</td>
														<td>Male</td>
														<td>720-841-8299</td>
														<td>B+</td>
														<td>
															<div class="table-action">
																<a href="#edit_form" class="btn btn-sm bg-info-light" data-toggle="modal">	<i class="fas fa-edit"></i> Edit</a>
																<a href="javascript:void(0);" class="btn btn-sm bg-danger-light"><i class="fas fa-times"></i> Deactive</a>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<h2 class="table-avatar">
																<span class="avatar avatar-sm mr-2">
																	<img class="avatar-img rounded-circle" src="@/assets/img/mother.jpg" alt="User Image">
																</span>
																Vena
															</h2>
														</td>
														<td>Mother</td>
														<td>Male</td>
														<td>949-583-4370</td>
														<td>A+</td>
														<td>
															<div class="table-action">
																<a href="#edit_form" class="btn btn-sm bg-info-light" data-toggle="modal">	<i class="fas fa-edit"></i> Edit</a>
																<a href="javascript:void(0);" class="btn btn-sm bg-danger-light"><i class="fas fa-times"></i> Deactive</a>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<!-- /Dependent Tab -->

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Page Content -->
        <layout-footer></layout-footer>
    </div>
</template>