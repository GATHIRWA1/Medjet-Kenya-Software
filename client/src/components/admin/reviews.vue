<template>
        <div class="main-wrapper">
            <header-admin></header-admin>
            <sidebar-admin></sidebar-admin>
           <!-- Page Wrapper -->
           <div class="page-wrapper">
            <div class="content container-fluid">
            
                <!-- Page Header -->
                <div class="page-header">
                    <div class="row">
                        <div class="col-sm-12">
                            <h3 class="page-title">Reviews</h3>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
                                <li class="breadcrumb-item active">Reviews</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- /Page Header -->
                
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="datatable table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Patient Name</th>
                                                <th>Doctor Name</th>
                                                
                                                <th>Description</th>
                                                <th>Date</th>
                                                <th class="text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in reviews" :key="item.id">
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <router-link to="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image"></router-link>
                                                        <router-link to="/admin/profile">{{item.patientname}} </router-link>
                                                    </h2>
                                                </td>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <router-link to="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="loadImg(item.doctorimage)" alt="User Image"></router-link>
                                                        <router-link to="/admin/profile">{{item.doctorname}} </router-link>
                                                    </h2>
                                                </td>
                                                
                                                
                                                <td>
                                                    {{item.description}}
                                                </td>
                                                    <td>{{item.date}} <br><small>{{item.time}}</small></td>
                                                <td class="text-right">
                                                    <div class="actions">
                                                        <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                            <i class="fa fa-trash"></i> Delete
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
        <!-- /Page Wrapper -->
        
        <!-- Delete Modal -->
        <div class="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document" >
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="form-content p-2">
                            <h4 class="modal-title">Delete</h4>
                            <p class="mb-4">Are you sure want to delete?</p>
                            <button type="button" class="btn btn-primary">Save </button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Delete Modal -->
    </div>
</template>
<script>
    import reviews from '../../assets/json/admin/Reviews/reviews.json'
    const images = require.context('@/assets/admin_img/patients', false, /\.png$|\.jpg$/)
    
    export default {
        data() {
		return {
			reviews: reviews
		}
	},
    mounted() {
         // Datatable

		 if ($('.datatable').length > 0) {
        $('.datatable').DataTable({
          "bFilter": false,
        });
      }
        $(document).on('click', '#toggle_btn', function() {
		if($('body').hasClass('mini-sidebar')) {
			$('body').removeClass('mini-sidebar');
			$('.subdrop + ul').slideDown();
		} else {
			$('body').addClass('mini-sidebar');
			$('.subdrop + ul').slideUp();
		}
		// setTimeout(function(){ 
		// 	mA.redraw();
		// 	mL.redraw();
		// }, 300);
		return false;
	});
	$(document).on('mouseover', function(e) {
		e.stopPropagation();
		if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
			var targ = $(e.target).closest('.sidebar').length;
			if(targ) {
				$('body').addClass('expand-menu');
				$('.subdrop + ul').slideDown();
			} else {
				$('body').removeClass('expand-menu');
				$('.subdrop + ul').slideUp();
			}
			return false;
		}
    });
},
methods:{
        loadImg(imgPath) {
            return images('./' + imgPath)
        },
    }
    }
</script>