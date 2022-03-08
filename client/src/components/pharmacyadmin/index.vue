<template>
    <div class="main-wrapper">
        <header-pharmacy-admin></header-pharmacy-admin>
        <sidebar-pharmacy-admin></sidebar-pharmacy-admin>
        <!-- Page Wrapper -->
       
        <div class="page-wrapper">
            <div class="content container-fluid">
                
                <!-- Page Header -->
                <div class="page-header">
                    <div class="row">
                        <div class="col-sm-12">
                            <h3 class="page-title">Welcome Admin!</h3>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item active">Dashboard</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- /Page Header -->

                <div class="row">
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-primary border-primary">
                                        <i class="fa fa-money"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>$50.00</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    <h6 class="text-muted">Sales Today</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-primary w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-success">
                                        <i class="fa fa-credit-card"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>$5.22</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    
                                    <h6 class="text-muted">Expense Today</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-success w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-danger border-danger">
                                        <i class="fa fa-folder"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>485</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    
                                    <h6 class="text-muted">Medicine</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-danger w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-warning border-warning">
                                        <i class="fa fa-users"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>50</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    
                                    <h6 class="text-muted">Staff</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-warning w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-lg-6">
                    
                        <!-- Sales Chart -->
							<div class="card card-chart">
								<div class="card-header">
									<h4 class="card-title">Revenue</h4>
								</div>
								<div class="card-body">
									<div id="morrisArea"></div>
								</div>
							</div>
							<!-- /Sales Chart -->

                        
                    </div>
                    <div class="col-md-12 col-lg-6">
                    
                        <!-- Invoice Chart -->
                        <div class="card card-chart">
                            <div class="card-header">
                                <h4 class="card-title">Status</h4>
                            </div>
                            <div class="card-body">
                                <div id="morrisLine"></div>
                            </div>
                        </div>
                        <!-- /Invoice Chart -->
                        
                    </div>	
                </div>
                <div class="row">
                    <div class="col-md-12">
                    
                        <!-- Latest Customers -->
                        <div class="card card-table">
                            <div class="card-header">
                                <h4 class="card-title">Latest Customers</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Address</th>
                                                <th>Telephone</th>
                                                <th>Email</th>
                                                <th class="text-right">Date added</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in latestcustomer" :key="item.id">
                                                <td>{{item.SNO}}</td>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        {{item.name}}
                                                    </h2>
                                                </td>
                                                <td>{{item.address}}</td>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        {{item.telephone}}
                                                    </h2>
                                                </td>
                                                <td>{{item.email}}</td>
                                                <td class="text-right">{{item.date}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!-- /Latest Customers -->
                        
                    </div>
                </div>
                
            </div>			
    </div>
        <!-- /Page Wrapper -->
    </div>
</template>
<script>
    import latestcustomer from '../../assets/json/pharmacyadmin/PharmacyadminIndex/latestcustomer.json'
    export default {
        data() {
		return {
            latestcustomer: latestcustomer
		}
	},
    mounted() {
        $(function(){
	
	/* Morris Area Chart */
	
	window.mA = Morris.Area({
	    element: 'morrisArea',
	    data: [
	        { y: '2013', a: 60},
	        { y: '2014', a: 100},
	        { y: '2015', a: 240},
	        { y: '2016', a: 120},
	        { y: '2017', a: 80},
	        { y: '2018', a: 100},
	        { y: '2019', a: 300},
	    ],
	    xkey: 'y',
	    ykeys: ['a'],
	    labels: ['Revenue'],
	    lineColors: ['#1b5a90'],
	    lineWidth: 2,
		
     	fillOpacity: 0.5,
	    gridTextSize: 10,
	    hideHover: 'auto',
	    resize: true,
		redraw: true
	});
	
	/* Morris Line Chart */
	
	window.mL = Morris.Line({
	    element: 'morrisLine',
	    data: [
	        { y: '2015', a: 100, b: 30},
	        { y: '2016', a: 20,  b: 60},
	        { y: '2017', a: 90,  b: 120},
	        { y: '2018', a: 50,  b: 80},
	        { y: '2019', a: 120,  b: 150},
	    ],
	    xkey: 'y',
	    ykeys: ['a', 'b'],
	    labels: ['Doctors', 'Patients'],
	    lineColors: ['#1b5a90','#ff9d00'],
	    lineWidth: 1,
	    gridTextSize: 10,
	    hideHover: 'auto',
	    resize: true,
		redraw: true
	});
	$(window).on("resize", function(){
		mA.redraw();
		mL.redraw();
	});
});

     
        $(document).on('click', '#toggle_btn', function() {
		if($('body').hasClass('mini-sidebar')) {
			$('body').removeClass('mini-sidebar');
			$('.subdrop + ul').slideDown();
		} else {
			$('body').addClass('mini-sidebar');
			$('.subdrop + ul').slideUp();
		}
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
    }
</script>
<style>
    .fa-users {
        font-size: 20px;
    }
    .fa-credit-card {
        font-size: 20px;
    }
    .fa-money {
        font-size: 20px;
    }
    .fa-folder {
        font-size: 20px;
    }
    .fa-star {
        font-size: 12px;
    }
</style>