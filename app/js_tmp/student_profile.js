$( document ).ready(function() {

	for (var i = 0; i < 1; i++) {
		$.ajax({
		  url: 'https://randomuser.me/api/',
		  dataType: 'json',
		  success: function(data){
		  	var user = data.results[0].user;
		  	var html = '<div class="col-lg-5 col-md-5 col-sm-6 col-xs-6">' +
			            		'<img src="'+user.picture.medium+'" class="img-circle profile-picture"></img>' +
			           		'</div>' ;
										// '<div class="offset col-lg-1 col-md-1 col-sm-1 col-xs-0"></div>' +
										//     		'<div class="col-lg-6 col-md-6 mts col-sm-5 col-xs-6">' +
										// 	'<div class="row">' +
										// 		'<div class="row">' +
			              //       '<h3><span class="uppercase prs">'+user.name.last+'</span>'+user.name.first+'</h3>' +
			              //       '<h4 class="title-h3">Etudiant en 6eme C</h4><br><br><br>' +
										// 		'</div>' +
										// 		'<div class="row">' +
			              //       '<span class="glyphicon glyphicon-phone mrs" aria-hidden="true"></span> 06.63.63.63.63<br><br>' +
	                  //   		'<span class="glyphicon glyphicon-envelope mrs" aria-hidden="true"></span> steevenlebgdu69@student.fr' +
										// 		'</div>' +
										// 	'</div>' +
                		// '</div>';
									
		    $(".profile").append(html);
		  }
		});
	};
});

$( document ).ready(function() {
	$(".btn-work-m").click(function() {
			$('#mathModal').modal('show');
		});
	$(".btn-work-h").click(function() {
			$('#histModal').modal('show');
		});
});
