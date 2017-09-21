$( document ).ready(function() {

	$(".previous-lesson").sticky({topSpacing:150});
	$(".next-lesson").sticky({topSpacing:150});
	$(".breadcrumb-container").sticky({
		topSpacing:0,
		widthFromWrapper: 60
	});


	var eleves = [["bechad_p", "Pierre Bechad"], 
				["benoit_g", "Gaël Benoit"], 
				["beurie_v", "Victor Beurie"], 
				["bourre_l", "Leo Bourre"],
				["boyer_c", "Clément Boyer"],
				["brunck_a", "Alexandre Brunck"],
				["calame_j", "Jordan Calame"],
				["carnie_j", "Jules Carniel"],
				["diafou_j", "Julien Diafou"],
				["dif_s", "Sabrina Dif"],
				["drecou_n", "Noémie Drecou"],
				["joeger_o", "Oriane Joeger"],
				["rio_s", "Soumi Rio"],
				["soulie_b", "Bernnard Soulie"],
				["darco_l", "Leo Darco"],
				["gorlie_f", "Fanille Gorlie"],
				["vielma_t", "Theo Vielma"],
				["barbi_m", "Manon Barbi"]];
	for (var i = 0; i < 18; i++) {
		  	var user = eleves[i];
		  	var html = '<div class="block-lesson row block-center col-xs-6 col-sm-4 col-md-2">' +
			            	'<div class="cross-lesson glyphicon glyphicon-remove"></div>' +
			            	'<div class="time-lesson glyphicon glyphicon-time"></div>' +
			            	'<img src="./images/profil 2/'+user[0]+'.bmp" class="img-circle img-lesson"><br>' +
			            	'<div class="icon-lesson text-center">' +
			            	'<div class="participation col-md-4 col-sm-4 col-xs-4"><span class="glyphicon glyphicon-star"></span><span class="text"> 0</span></div>' +
			            	'<div class="chat comment col-md-4 col-sm-4 col-xs-4"><span class="glyphicon glyphicon-comment"></span><span class="text"> 0</span></div>' +
			            	'<div class="homework col-md-4 col-sm-4 col-xs-4"><span class="glyphicon glyphicon-book"></span><span class="text"> 0</span></div>' +
			            	'</div><br>' +
			            	'<span class="text-lesson">'+user[1]+'</span>' +
			           '</div>';
		    $(".trombi").append(html);
	};


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

	var cours = null;

	$("#modal .participation").click(function() {
		var participation = cours.find(".participation .text");
		participation.html(" " + parseInt(parseInt(participation.html()) + 1));
		$("#modal .participation .text").html(participation.html());
		$("#modal").modal('hide');
	});

	$("#modal .chat").click(function() {
		var chat = cours.find(".chat .text");
		chat.html(" " + parseInt(parseInt(chat.html()) + 1));
		$("#modal .chat .text").html(chat.html());
		$("#modal").modal('hide');
	});

	$("#modal .homework").click(function() {
		var homework = cours.find(".homework .text");
		homework.html(" " + parseInt(parseInt(homework.html()) + 1));
		$("#modal .homework .text").html(homework.html());
		$("#modal").modal('hide');
	});

	$("#modal .reset").click(function() {
		var homework = cours.find(".homework .text");
		var chat = cours.find(".chat .text");
		var participation = cours.find(".participation .text");
		chat.html(" 0");
		homework.html(" 0");
		participation.html(" 0");
		$("#modal .homework .text").html(" 0");
		$("#modal .chat .text").html(" 0");
		$("#modal .participation .text").html(" 0");
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
		cours = $(this).find(".icon-lesson");
		$("#modal .participation .text").html(cours.find(".participation .text").html());
		$("#modal .chat .text").html(cours.find(".chat .text").html());
		$("#modal .homework .text").html(cours.find(".homework .text").html());
		$('#modal .modal-title').html($(this).find(".text-lesson").html());
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
