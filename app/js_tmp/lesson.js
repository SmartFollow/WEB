
$( document ).ready(function() {

	$(".previous-lesson").sticky({topSpacing:150});
	$(".next-lesson").sticky({topSpacing:150});
	$(".breadcrumb-container").sticky({
		topSpacing:0,
		widthFromWrapper: 60
	});

			var db = {
						_id: "56f2a3ca0dfb2a55e4df528d",
						teacher_id: "56f4119569642420086fe06b",
						title: "Cours de Maths",
						room: 42,
						evaluations: [{
							student_id: "56f41c3869642420086fe06d",
							value: "Présent"
						}],
						criteria_start: [{
							_id: "56f2ae660dfb2a55e4df5292",
							name: "Status",
							type: "state",
							possible_values: [{
								name: "Présent",
								impact: "neutral"
							}, {
								name: "Retard",
								impact: "negative"
							}, {
								name: "Absent",
								impact: "negative"
							}]
						}],
						criteria_middle: [{
							_id: "56f2a93a0dfb2a55e4df528e",
							name: "Bavardage",
							impact: "negative",
							type: "count"
						}, {
							_id: "56f2a9a60dfb2a55e4df528f",
							name: "Devoirs non réalisés",
							impact: "negative",
							type: "boolean"
						}, {
							_id: "56f2a9c30dfb2a55e4df5290",
							name: "Avertissement",
							impact: "negative",
							type: "count"
						}, {
							_id: "56f2aab50dfb2a55e4df5291",
							name: "Participation",
							impact: "positive",
							type: "count"
						}],
						criteria_end: [{
							_id: "56f2ae920dfb2a55e4df5293",
							name: "Commentaire",
							impact: "neutral",
							type: "text"
						}],
						students: [{
							_id: "56f41c3869642420086fe06d",
							name: {
								firstname: "Machin",
								lastname: "Truc"
							}
						},
						{
							_id: "56f41c3869642420086fe06e",
							name: {
								firstname: "Bidule",
								lastname: "Truc"
							}
						}],
						teacher: {
							_id: "56f4119569642420086fe06b",
							name: {
								firstname: "Antoine",
								lastname: "Buchser"
							}
						}
					};

	/* Settings */

	$("#teacher").html(db.teacher.name.firstname + " " + db.teacher.name.lastname);
	$("#title").html(db.title);
	$("#room").html(db.room);
	/* students */
	for (var i = 0; i < db.students.length; i++) {
		  	var html = '<div class="block-lesson row block-center col-xs-6 col-sm-4 col-md-2">' +
			            	'<div class="cross-lesson glyphicon glyphicon-remove"></div>' +
			            	'<div class="time-lesson glyphicon glyphicon-time"></div>' +
			            	'<img src="./images/profil 2/no-image.png" class="img-circle img-lesson"><br>' +
			            	'<div class="icon-lesson" id="'+i+'">' +
			            	'</div><br>' +
			            	'<span class="text-lesson">'+db.students[i].name.firstname+" "+db.students[i].name.lastname+'</span>' +
			           '</div>';
		    $(".trombi").append(html);
	};

	/* criteria_start */
	$(".appel .block-lesson").click(function() {
		if ($(this).find(".cross-lesson").is(":visible"))
		{
			//$(this).find(".img-lesson").removeClass("active");
			$(this).find(".cross-lesson").hide();
			$(this).find(".time-lesson").fadeIn(300);
			$(this).find(".cross-lesson").removeClass("oke");
			$(this).find(".time-lesson").addClass("oke");
		}
		else if ($(this).find(".time-lesson").is(":hidden"))
		{
			//$(this).find(".img-lesson").addClass("active");
			$(this).find(".cross-lesson").fadeIn(300);
			$(this).find(".cross-lesson").addClass("oke");
		}
		else
		{
			$(this).find(".cross-lesson").hide();
			$(this).find(".time-lesson").hide();
			$(this).find(".cross-lesson").removeClass("oke");
			$(this).find(".time-lesson").removeClass("oke");
		}

	});


	/* criteria_middle */
	var icon = '<div class="icon-lesson text-center">';
	var button = '';
	var size = 12 / db.criteria_middle.length;

	for (var i = 0; i < db.criteria_middle.length; i++) {
		
		if (db.criteria_middle[i].type == "count")
			var type = 0;
		else
			var type = false;
		icon += '<div id="'+db.criteria_middle[i]._id+'" class="'+db.criteria_middle[i]._id+' col-md-'+size+' col-sm-'+size+' col-xs-'+size+'"><span class="text"> '+type+'</span></div>';
		if (db.criteria_middle[i].impact == "positive")
			button += '<button type="button" id="'+db.criteria_middle[i]._id+'" class="'+db.criteria_middle[i]._id+' btn btn-success btn-lg btn-block">'+db.criteria_middle[i].name+'</button>';
		else
			button += '<button type="button" id="'+db.criteria_middle[i]._id+'" class="'+db.criteria_middle[i]._id+' btn btn-danger btn-lg btn-block">'+db.criteria_middle[i].name+'</button>';

	};
	icon += '</div>';
	button += '<button type="button" class="reset btn btn-secondary btn-lg btn-block">Réinitialiser</button>';

	$("#popup-body").html(icon + button);
	$(".trombi .icon-lesson").html(icon);
	var eleve = null;

	for (var i = 0; i < db.criteria_middle.length; i++) {

		var id = db.criteria_middle[i]._id;
		$("#popup-body ."+id+"").click(function() {
			var id = $(this).attr('id');
			var participation = eleve.find("."+id+" .text");
			/*db.students[eleve.attr('id')].criteria._id = $(this).attr('id');
			db.students[eleve.attr('id')].criteria.value = participation.html();*/
			console.log(db.students[eleve.attr('id')]);
			console.log(jQuery.type(participation.html()));
			if (participation.html() == " false")
				participation.html(" true");
			else
				participation.html(" " + parseInt(parseInt(participation.html()) + 1));
			$("#modal ."+id+" .text").html(participation.html());
			$("#modal").modal('hide');
		});
	};

	$("#modal .reset").click(function() {
		for (var i = 0; i < db.criteria_middle.length; i++) {
			var id = db.criteria_middle[i]._id;
			var v = " 0"
			if (eleve.find("."+id+" .text").html() == " false" || eleve.find("."+id+" .text").html() == " true")
				v = " false";
			eleve.find("."+id+" .text").html(v);
			$("#modal ."+id+" .text").html(v);
		};
	});

	$("#pdf-tpe").click(function(){
		$('#modal-pdf').modal('show');
		$('#exercice').hide();
		$('#tpe').show();
	});

	$("#pdf-exercice").click(function(){
		$('#modal-pdf').modal('show');
		$('#tpe').hide();
		$('#exercice').show();
	});

	$("#input-fr").fileinput({
	    language: "fr",
	    uploadUrl: "./tmp/",
	    allowedFileExtensions: ["jpg", "png", "gif", "pdf", "doc", "docx", "xls", "xlsx", "csv", "txt", "rtf", "html", "rar", "zip", "mp3", "wma", "mpg", "flv", "avi"]
	});

	$(".cours .block-lesson").click(function() {
		$('#modal').modal('show');
		eleve = $(this).find(".icon-lesson");
		/*$("#modal .participation .text").html(cours.find(".participation .text").html());
		$("#modal .chat .text").html(cours.find(".chat .text").html());
		$("#modal .homework .text").html(cours.find(".homework .text").html());
		$('#modal .modal-title').html($(this).find(".text-lesson").html());*/
	});

	$(".breadcrumb li").click(function() {
		if (!$(this).hasClass("legend") && !$(this).hasClass("active"))
		{
			$(".breadcrumb").find(".active").removeClass("active");
			$(this).addClass("active");
			var id = $(".breadcrumb li").index($(this)) - 1;
			var tab = $(".tab .subtab").eq(id);
			check(tab);
		}
	});

	$(".previous-lesson").click(function() {
		var breadcrumb = $(".breadcrumb").find(".active");
		breadcrumb.removeClass("active");
		breadcrumb.prev().addClass("active");
		var on = $(".tab").find(".on");
		check(on.prev());
	});

	$(".next-lesson").click(function() {
		var breadcrumb = $(".breadcrumb").find(".active");
		breadcrumb.removeClass("active");
		breadcrumb.next().addClass("active");
		var on = $(".tab").find(".on");
		check(on.next());
	});


function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('glyphicon-plus glyphicon-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);
});


function check(tab) {
	var previous = $(".tab").find(".on");
	previous.hide(500);
	if ($(".breadcrumb li").index($(".breadcrumb").find(".active")) != 2)
		$(".icon-lesson").hide(500);
	previous.removeClass("on");
	tab.addClass("on");
	if ($(".breadcrumb li").index($(".breadcrumb").find(".active")) == 3)
	{
		var cours = $(".subtab").eq(1);
		$(".subtab").eq(2).find("table").html("");
		var html = '<thead><tr>' +
                        '<th></th>' +
                        '<th>Nom Prénom</th>' +
                        '<th>Présence</th>' +
                        '<th>Activités</th>' +
                        '<th>Commentaire</th>' +
                    '</tr></thead><tbody>';
         $(".subtab").eq(2).find("table").append(html);
		cours.find(".row").find(".block-lesson").each(function(index) {
			var flag = ''
			var participation = parseInt($(this).find(".icon-lesson .participation .text").html());
			var chat = parseInt($(this).find(".icon-lesson .chat .text").html());
			var homework = parseInt($(this).find(".icon-lesson .homework .text").html());
			if (participation >= chat && participation >= homework && participation > 0)
				var flag = '<tr class="success">';
			else if (chat >= participation && chat >= homework && chat > 0)
				var flag = '<tr class="warning">';
			else if (homework >= participation && homework >= chat && homework > 0)
				var flag = '<tr class="danger">';
			else
				var flag = '<tr>';
			if ($(".appel").find(".row .block-lesson").eq(index).find(".cross-lesson").hasClass("oke"))
				var presence = 'Absent';
			else if ($(".appel").find(".row .block-lesson").eq(index).find(".time-lesson").hasClass("oke"))
				var presence = 'En retard';
			else
				var presence = 'Présent';
			var html = flag +
							'<td><img class="img-circle min-img-lesson" src="'+ $(this).find(".img-lesson").attr("src") +'"></td>'+
		                    '<td>'+ $(this).find(".text-lesson").html() +'</td>'+
		                    '<td>'+presence+'</td>' +
		                    '<td><div class="icon-lesson-final">'+ $(this).find(".icon-lesson").html() +'</div></td>' +
		                    '<td>' +
		                        '<textarea class="form-control" rows="1"></textarea>' +
		                    '</td>' +
		                '</tr>';
			 $(".subtab").eq(2).find("table").append(html);
		});
		$(".subtab").eq(2).find("table").append("</tbody>");
	}
	tab.show(500, function() {
		if ($(".breadcrumb li").index($(".breadcrumb").find(".active")) == 2)
			$(".icon-lesson").show();
	});
	if(!tab.prev().length)
		$(".previous-lesson").hide();
	else
		$(".previous-lesson").fadeIn();
	if (!tab.next().length)
		$(".next-lesson").hide();
	else
		$(".next-lesson").fadeIn();
}
