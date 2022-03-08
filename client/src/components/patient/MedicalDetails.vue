<template>
<div>
    <div class="main-wrapper">
        <layout-header3></layout-header3>
        
       <!-- Breadcrumb -->
            <div class="breadcrumb-bar">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-12 col-12">
                            <nav aria-label="breadcrumb" class="page-breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><router-link to="/index">Home</router-link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Medical Details</li>
                                </ol>
                            </nav>
                            <h2 class="breadcrumb-title">Medical Details</h2>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Breadcrumb -->
            
            <!-- Page Content -->
            <div class="content">
                <div class="container-fluid">

                    <div class="row">
                        
                        <!-- Profile Sidebar -->
                        <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <div class="profile-sidebar">
                                <div class="widget-profile pro-widget-content">
                                    <div class="profile-info-widget">
                                        <a href="#" class="booking-doc-img">
                                            <img src="@/assets/img/patients/patient.jpg" alt="User Image">
                                        </a>
                                        <div class="profile-det-info">
                                            <h3>Richard Wilson</h3>
                                            <div class="patient-details">
                                                <h5><i class="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
                                                <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Newyork, USA</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="dashboard-widget">
                                    <nav class="dashboard-menu">
                                        <ul>
                                            <li>
                                                <router-link to="/patient/index">
                                                    <i class="fas fa-columns"></i>
                                                    <span>Dashboard</span>
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="/patient/favourites">
                                                    <i class="fas fa-bookmark"></i>
                                                    <span>Favourites</span>
                                                </router-link>
                                            </li> 
                                            <li>
                                                <router-link to="/patient/dependent">
                                                    <i class="fas fa-users"></i>
                                                    <span>Dependent</span>
                                                </router-link>
                                            </li> 
                                            <li>
                                                <router-link to="/patient/chat">
                                                    <i class="fas fa-comments"></i>
                                                    <span>Message</span>
                                                    <small class="unread-msg">23</small>
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="/patient/patient-accounts">
                                                    <i class="fas fa-file-invoice-dollar"></i>
                                                    <span>Accounts</span>
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="/patient/orders-list">
                                                    <i class="fas fa-list-alt"></i>
                                                    <span>Orders</span>
                                                    <small class="unread-msg">7</small>
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="/patient/medical-records">
                                                    <i class="fas fa-clipboard"></i>
                                                    <span>Add Medical Records</span>
                                                </router-link>
                                            </li>
                                            <li class="active">
                                                <router-link to="/patient/medical-details">
                                                    <i class="fas fa-file-medical-alt"></i>
                                                    <span>Medical Details</span>
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="/patient/profile">
                                                    <i class="fas fa-user-cog"></i>
                                                    <span>Profile Settings</span>
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="/patient/change-password">
                                                    <i class="fas fa-lock"></i>
                                                    <span>Change Password</span>
                                                </router-link>
                                            </li>
                                            <li>
                                                <router-link to="/patient/index">
                                                    <i class="fas fa-sign-out-alt"></i>
                                                    <span>Logout</span>
                                                </router-link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                            </div>
                        </div>
                        <!-- / Profile Sidebar -->
                        
                        <div class="col-md-7 col-lg-8 col-xl-9">

                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title float-left">Medical details</h4>
                                            <a href="#modal_medical_form" class="btn btn-primary float-right" data-toggle="modal">Add Details</a>
                                        </div>
                                        <div class="card-body">
                                            <div class="card card-table mb-0">
                                                <div class="card-body">
                                                    <div class="table-responsive">
                                                        <table class="table table-hover table-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>Name</th>
                                                                    <th>BMI</th>
                                                                    <th class="text-center">Heart Rate</th>
                                                                    <th class="text-center">FBC Status</th>
                                                                    <th>Weight</th>
                                                                    <th>Order date</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Richard Wilson</td>
                                                                    <td>23.7</td>
                                                                    <td class="text-center">89</td>
                                                                    <td class="text-center">140</td>
                                                                    <td>74Kg</td>
                                                                    <td>11 Nov 2019 <span class="d-block text-info">10.00 AM</span></td>
                                                                    <td>
                                                                        <div class="table-action">
                                                                            <a href="#edit_medical_form" class="btn btn-sm bg-info-light" data-toggle="modal">
                                                                                <i class="fas fa-edit"></i> Edit
                                                                            </a>
                                                                            <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                                <i class="fas fa-trash-alt"></i> Delete
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>Champagne</td>
                                                                    <td>25.2</td>
                                                                    <td class="text-center">92</td>
                                                                    <td class="text-center">135</td>
                                                                    <td>73Kg</td>
                                                                    <td>3 Nov 2019 <span class="d-block text-info">11.00 AM</span></td>
                                                                    <td>
                                                                        <div class="table-action">
                                                                            <a href="#edit_medical_form" class="btn btn-sm bg-info-light" data-toggle="modal">
                                                                                <i class="fas fa-edit"></i> Edit
                                                                            </a>
                                                                            <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                                <i class="fas fa-trash-alt"></i> Delete
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>Vena</td>
                                                                    <td>24.5</td>
                                                                    <td class="text-center">90</td>
                                                                    <td class="text-center">125</td>
                                                                    <td>73.5Kg</td>
                                                                    <td>1 Nov 2019 <span class="d-block text-info">1.00 PM</span></td>
                                                                    <td>
                                                                        <div class="table-action">
                                                                            <a href="#edit_medical_form" class="btn btn-sm bg-info-light" data-toggle="modal">
                                                                                <i class="fas fa-edit"></i> Edit
                                                                            </a>
                                                                            <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                                <i class="fas fa-trash-alt"></i> Delete
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>4</td>
                                                                    <td>Tressie</td>
                                                                    <td>24.2</td>
                                                                    <td class="text-center">95</td>
                                                                    <td class="text-center">128</td>
                                                                    <td>10.2Kg</td>
                                                                    <td>30 Oct 2019 <span class="d-block text-info">9.00 AM</span></td>
                                                                    <td>
                                                                        <div class="table-action">
                                                                            <a href="#edit_medical_form" class="btn btn-sm bg-info-light" data-toggle="modal">
                                                                                <i class="fas fa-edit"></i> Edit
                                                                            </a>
                                                                            <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                                <i class="fas fa-trash-alt"></i> Delete
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>5</td>
                                                                    <td>Christopher</td>
                                                                    <td>24.7</td>
                                                                    <td class="text-center">99</td>
                                                                    <td class="text-center">122</td>
                                                                    <td>12.8Kg</td>
                                                                    <td>28 Oct 2019 <span class="d-block text-info">6.00 PM</span></td>
                                                                    <td>
                                                                        <div class="table-action">
                                                                            <a href="#edit_medical_form" class="btn btn-sm bg-info-light" data-toggle="modal">
                                                                                <i class="fas fa-edit"></i> Edit
                                                                            </a>
                                                                            <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                                <i class="fas fa-trash-alt"></i> Delete
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>      
            <!-- /Page Content -->
   
        <layout-footer></layout-footer>
    </div>
<!-- Add Medical Detail -->
        <div id="modal_medical_form" class="modal fade custom-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="display: none;" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <form action="#" enctype="multipart/form-data" autocomplete="off" id="medical_form" method="post"> 
                        <div class="modal-header">
                            <h5 class="modal-title">Add new data</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input type="hidden" value="" name="id"> 
                            <input type="hidden" value="insert" name="method">
                            <div class="form-group">
                                <label for="category_name" class="control-label mb-10"> BMI <span class="text-danger">*</span></label>
                                <input type="text" parsley-trigger="change" id="bmi" name="bmi" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="slug" class="control-label mb-10">Heart rate </label>
                                <input type="text" parsley-trigger="change" id="hr" name="hr" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="slug" class="control-label mb-10">Weight</label>
                                <input type="text" parsley-trigger="change" id="Weight" name="Weight" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="slug" class="control-label mb-10">Fbc</label>
                                <input type="text" parsley-trigger="change" id="Fbc" name="Fbc" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="keywords" class="control-label mb-10">Created Date </label>
                                <input type="text" name="dob" id="dob" value="" readonly="" class="form-control">
                            </div>
                        </div>
                        <div class="modal-footer text-center">
                            <button type="submit" id="btnMedicalsave" class="btn btn-outline btn-success ">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- /Add Medical Detail -->

        <!-- Edit Medical Detail -->
        <div id="edit_medical_form" class="modal fade custom-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="display: none;" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <form action="#" enctype="multipart/form-data" autocomplete="off" id="medical_form" method="post"> 
                        <div class="modal-header">
                            <h5 class="modal-title">Add new data</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input type="hidden" value="" name="id"> 
                            <input type="hidden" value="insert" name="method">
                            <div class="form-group">
                                <label for="category_name" class="control-label mb-10"> BMI <span class="text-danger">*</span></label>
                                <input type="text" parsley-trigger="change" id="bmi" name="bmi" class="form-control" value="23.7">
                            </div>
                            <div class="form-group">
                                <label for="slug" class="control-label mb-10">Heart rate </label>
                                <input type="text" parsley-trigger="change" id="hr" name="hr" class="form-control" value="89">
                            </div>
                            <div class="form-group">
                                <label for="slug" class="control-label mb-10">Weight</label>
                                <input type="text" parsley-trigger="change" id="Weight" name="Weight" class="form-control" value="74">
                            </div>
                            <div class="form-group">
                                <label for="slug" class="control-label mb-10">Fbc</label>
                                <input type="text" parsley-trigger="change" id="Fbc" name="Fbc" class="form-control" value="140">
                            </div>
                            <div class="form-group">
                                <label for="keywords" class="control-label mb-10">Created Date </label>
                                <input type="text" name="dob" id="editdob" value="11/11/2019" readonly="" class="form-control">
                            </div>
                        </div>
                        <div class="modal-footer text-center">
                            <button type="submit" id="btnMedicalsave" class="btn btn-outline btn-success ">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- /Edit Medical Detail -->
        </div>
</template>
<script>

export default {
   mounted() {
       
// Signup Toggle
    $(function () {
        $("#is_registered").click(function () {
            if ($(this).is(":checked")) {
                $("#preg_div").show();
            } else {
                $("#preg_div").hide();
            }
        });
    });

    //Increment Decrement value
    $('.inc.button').click(function(){
        var $this = $(this),
            $input = $this.prev('input'),
            $parent = $input.closest('div'),
            newValue = parseInt($input.val())+1;
        $parent.find('.inc').addClass('a'+newValue);
        $input.val(newValue);
        newValue += newValue;
    });
    $('.dec.button').click(function(){
        var $this = $(this),
            $input = $this.next('input'),
            $parent = $input.closest('div'),
            newValue = parseInt($input.val())-1;
        console.log($parent);
        $parent.find('.inc').addClass('a'+newValue);
        $input.val(newValue);
        newValue += newValue;
    });

    // Signup Profile
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#prof-avatar').attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#profile_image").change(function() {
        readURL(this);
    });

    // Datepicker
      var maxDate = $('#maxDate').val();
      if($('#dob').length > 0) {
      $('#dob').datepicker({
          startView: 2,
          format: 'dd/mm/yyyy',
          autoclose: true,
          todayHighlight: true,
          endDate: maxDate
      });
    }
    if($('#editdob').length > 0) {
      $('#editdob').datepicker({
        startView: 2,
        format: 'dd/mm/yyyy',
        autoclose: true,
        todayHighlight: true,
        endDate: maxDate
    });
    }

// Select 2
    
    if($('.select').length > 0) {
        $('.select').select2({
            minimumResultsForSearch: -1,
            width: '100%'
        });
    }
   },


}
</script>
