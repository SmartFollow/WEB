<div class="row lesson-infos display-table" style="background-color: #ffffff;padding-top: 10px;padding-bottom: 10px;margin-top: 40px;">
      <div id="modal-file-{{document.name}}" class="modal fade" tabindex="-1" role="dialog" ng-repeat="document in lesson.documents">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">{{document.name}}</h4>
          </div>
          <div class="modal-body text-center">
            <label class="control-label">Nom</label>
            <div>{{document.name}}</div>
            <br>
            <label class="control-label">Description</label>
            <div>{{document.description}}</div>
            <br>
            <label class="control-label">Document</label>
            <br>
            <img src="http://localhost/api/storage/app/{{document.path}}" height="150px"></img>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </div>

        <div id="modal-homework-{{key}}" class="modal fade" tabindex="-1" role="dialog" ng-repeat="(key, document) in lesson.homeworks">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Devoir à la maison N°{{key+1}}</h4>
          </div>
          <div class="modal-body text-center">
            <label class="control-label">Description</label>
            <div>{{document.description}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </div>

        <div id="modal-exam-1" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Examen N°1</h4>
          </div>
          <div class="modal-body text-center">
            <label class="control-label">Description</label>
            <div>{{lesson.exam.description}}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </div>

	<div class="col-md-1 hidden-xs teacher-image display-cell">
		<img src="/app/images/profile_pict.jpg" class="img-circle" />
	</div>
	<div class="col-md-4 col-md-offset-1 lesson-details display-cell">
		<dl class="">
			<dt>Professeur</dt>
			<dd><a href="#"><span id="teacher">{{lesson.subject.teacher.firstname}} {{lesson.subject.teacher.lastname}}</span></a></dd>

			<dt>Classe</dt>
			<dd><a href="#">{{lesson.student_class.name}}</a></dd>

			<dt>Cours</dt>
			<dd><span id="title">{{lesson.subject.name}}</span></dd>

			<dt>Salle</dt>
			<dd><span id="room">{{lesson.reservation.room.identifier}}</span></dd>

			<dt>Date</dt>
			<dd>Le {{lesson.reservation.date_start}} à {{lesson.reservation.time_start}} au {{lesson.reservation.date_end}} à {{lesson.reservation.time_end}}</dd>
		</dl>
	</div>
	<div class="col-md-3 display-cell"></div>
	<div class="col-md-4 lesson-documents display-cell">
		<div class="list-group documents-list">
			<strong class="title">Documents liés au cours :</strong>
      <li href="#" class="list-group-item" ng-repeat="document in lesson.documents">
        {{document.name}}
        <div class="pull-left">
          <a href="http://localhost/api/storage/app/{{document.path}}" download="{{document.filename}}{{document.extension}}"><i class="document-type glyphicon glyphicon-download-alt"></i></a>
          <a id="pdf-tpe" data-toggle="modal" data-target="#modal-file-{{document.name}}"><i class="document-type glyphicon glyphicon-eye-open"></i></a>
        </div>
        <div class="pull-right">
          <i class="document-type glyphicon glyphicon-file"></i>
          <i class="document-type glyphicon glyphicon-time" data-toggle="tooltip" data-placement="top" title="{{document.updated_at}}"></i>
        </div>
      </li>
      <strong class="title">Devoirs à la maison :</strong>
      <li href="#" class="list-group-item" ng-repeat="(key, document) in lesson.homeworks">
        Devoir à la maison N°{{key+1}}
        <div class="pull-left">
          <a id="pdf-tpe" data-toggle="modal" data-target="#modal-homework-{{key}}"><i class="document-type glyphicon glyphicon-eye-open"></i></a>
        </div>
        <div class="pull-right">
          <i class="document-type glyphicon glyphicon-file"></i>
          <i class="document-type glyphicon glyphicon-time" data-toggle="tooltip" data-placement="top" title="{{document.updated_at}}"></i>
        </div>
      </li>
      <strong class="title" ng-show="hm">Examens :</strong>
      <li href="#" class="list-group-item" ng-show="hm" ng-show="lesson.exam">
        Examen N°1
        <div class="pull-left">
          <a id="pdf-tpe" data-toggle="modal" data-target="#modal-exam-1"><i class="document-type glyphicon glyphicon-eye-open"></i></a>
        </div>
        <div class="pull-right">
          <i class="document-type glyphicon glyphicon-file"></i>
          <i class="document-type glyphicon glyphicon-time" data-toggle="tooltip" data-placement="top" title="{{lesson.exam.updated_at}}"></i>
        </div>
      </li>
		</div>
	</div>
</div>