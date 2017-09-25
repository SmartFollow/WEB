    <div id="modal-upload" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Ajoutez un document</h4>
          </div>
          <div class="modal-body text-center">
            <label class="control-label">Nom</label>
            <input type="text" class="form-control" id="name">
            <br>
            <label class="control-label">Description</label>
            <textarea class="form-control" rows="2" id="description"></textarea>
            <br>
            <label class="control-label">Document</label>
            <br>
            <input type="file" name="pic" accept=".jpg, .png, .pdf" id="document" style="margin-left: auto;margin-right: auto;">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" ng-click="createDocument();">Ajoutez</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
          </div>
        </div>
      </div>
    </div>

    <div id="modal-upload-edit-{{document.id}}" class="modal fade" tabindex="-1" role="dialog" ng-repeat="(key, document) in lesson.documents">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Editez un document</h4>
          </div>
          <div class="modal-body text-center">
            <label class="control-label">Nom</label>
            <input type="text" class="form-control" id="name" value="{{document.name}}">
            <br>
            <label class="control-label">Description</label>
            <textarea class="form-control" rows="2" id="description">{{document.description}}</textarea>
            <br>
            <label class="control-label">Document</label>
            <br>
            <input type="file" name="pic" accept=".jpg, .png, .pdf" id="document" style="margin-left: auto;margin-right: auto;">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" ng-click="editDocument(document, 'send')">Editez</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
          </div>
        </div>
      </div>
    </div>

      <div id="modal-file-{{key}}" class="modal fade" tabindex="-1" role="dialog" ng-repeat="(key, document) in lesson.documents">
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
	          <a href="{{ config.apiUrl + document.path}}" download="{{document.filename}}.{{document.extension}}"><i class="document-type glyphicon glyphicon-download-alt"></i></a>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </div>

    <div id="modal-upload-homework" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Ajoutez un devoir maison</h4>
          </div>
          <div class="modal-body text-center">
            <label class="control-label">Description</label>
            <textarea class="form-control" rows="5" id="HWdescription"></textarea>
            <br>
            <label class="control-label">Et/Ou un document</label>
            <br>
            <input type="file" name="pic" accept=".jpg, .png, .pdf" id="document" style="margin-left: auto;margin-right: auto;">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" ng-click="createHW();">Ajoutez</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
          </div>
        </div>
      </div>
    </div>

    <div id="modal-upload-homework-{{document.id}}" class="modal fade" tabindex="-1" role="dialog"  ng-repeat="(key, document) in lesson.homeworks">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Devoir à la maison N°{{key+1}}</h4>
          </div>
          <div class="modal-body text-center">
            <label class="control-label">Description</label>
            <textarea class="form-control" rows="5" id="HWdescription">{{document.description}}</textarea>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" ng-click="editHW(document, 'send')">Editer</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
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
            <h4 class="modal-title">Examen</h4>
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

    <div id="modal-upload-exam" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Ajoutez un examen</h4>
          </div>
          <div class="modal-body text-center">
            <label class="control-label">Type</label>
            <select class="form-control" id="examType">
              <option value="home">Examen maison</option>
              <option value="class">Examen en classe</option>
              <option value="surprise">Examen surprise</option>
            </select>
            <br>
            <label class="control-label">Notation</label>
            <div class="form-group row">
              <div class="col-md-6">
                <label class="control-label">min</label>
                <input class="form-control" type="number" value="0" id="examMin">
              </div>
              <div class="col-md-6">
                <label class="control-label">max</label>
                <input class="form-control" type="number" value="20" id="examMax">
              </div>
            </div>
            <br>
            <label class="control-label">Description</label>
            <textarea class="form-control" rows="5" id="examDescription"></textarea>
            <br>
            <label class="control-label">Et/Ou un document</label>
            <br>
            <input type="file" name="pic" accept=".jpg, .png, .pdf" id="document" style="margin-left: auto;margin-right: auto;">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" ng-click="createExam();">Ajoutez</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
          </div>
        </div>
      </div>
    </div>
<div class="row row-eq-height lesson-infos display-table">
	<div class="col-md-1 hidden-xs teacher-image display-cell">
		<img src="{{ config.apiUrl + lesson.subject.teacher.avatar }}" class="img-circle" />
	</div>

	<div class="col-md-4 col-md-offset-1 lesson-details display-cell">
		<dl class="" style="margin-top: 20px;">
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
      <li href="#" class="list-group-item" ng-repeat="(key, document) in lesson.documents">
        {{document.name}}
        <div class="pull-left">
          <a href="{{ config.apiUrl + document.path}}" download="{{document.filename}}.{{document.extension}}"><i class="document-type glyphicon glyphicon-download-alt"></i></a>
          <a id="pdf-tpe" data-toggle="modal" data-target="#modal-file-{{key}}"><i class="document-type glyphicon glyphicon-eye-open"></i></a>
          <a href="" ng-click="editDocument(document, 'modal')"><i class="document-type glyphicon glyphicon-pencil"></i></a>
          <a href="" ng-click="deleteDocument(document)"><i class="document-type glyphicon glyphicon-remove"></i></a>
        </div>
        <div class="pull-right">
          <i class="document-type glyphicon glyphicon-file"></i>
          <i class="document-type glyphicon glyphicon-time" data-toggle="tooltip" data-placement="top" title="{{document.updated_at}}"></i>
        </div>
      </li>
      <a data-toggle="modal" data-target="#modal-upload">
        <li class="list-group-item" style="text-align:center">
          Ajouter un document
          <div class="pull-left">
            <i class="document-type glyphicon glyphicon-plus"></i>
          </div>
        </li>
      </a>
      <strong class="title">Devoirs à la maison :</strong>
      <li href="#" class="list-group-item" ng-repeat="(key, homework) in lesson.homeworks">
        Devoir à la maison N°{{key+1}}
        <div class="pull-left">
          <a id="pdf-tpe" data-toggle="modal" data-target="#modal-homework-{{key}}"><i class="document-type glyphicon glyphicon-eye-open"></i></a>
          <a href="" ng-click="editHW(homework, 'modal')"><i class="document-type glyphicon glyphicon-pencil"></i></a>
          <a href="" ng-click="deleteHW(homework)"><i class="document-type glyphicon glyphicon-remove"></i></a>
        </div>
        <div class="pull-right">
          <i class="document-type glyphicon glyphicon-file"></i>
          <i class="document-type glyphicon glyphicon-time" data-toggle="tooltip" data-placement="top" title="{{document.updated_at}}"></i>
        </div>
      </li>
      <a data-toggle="modal" data-target="#modal-upload-homework">
        <li class="list-group-item" style="text-align:center">
          Ajouter un devoir à la maison
          <div class="pull-left">
            <i class="document-type glyphicon glyphicon-plus"></i>
          </div>
        </li>
      </a>
      <strong class="title">Examens :</strong>
      <li href="#" class="list-group-item" ng-show="lesson.exam">
        Examen
        <div class="pull-left">
          <a id="pdf-tpe" data-toggle="modal" data-target="#modal-exam-1"><i class="document-type glyphicon glyphicon-eye-open"></i></a>
          <a href="" ng-click="editExam()"><i class="document-type glyphicon glyphicon-pencil"></i></a>
          <a href="" ng-click="deleteExam()"><i class="document-type glyphicon glyphicon-remove"></i></a>
        </div>
        <div class="pull-right">
          <i class="document-type glyphicon glyphicon-file"></i>
          <i class="document-type glyphicon glyphicon-time" data-toggle="tooltip" data-placement="top" title="{{lesson.exam.updated_at}}"></i>
        </div>
      </li>
      <a data-toggle="modal" data-target="#modal-upload-exam" ng-show="!lesson.exam">
        <li class="list-group-item" style="text-align:center">
          Ajouter un examen
          <div class="pull-left">
            <i class="document-type glyphicon glyphicon-plus"></i>
          </div>
        </li>
      </a>
		</div>
	</div>
</div>



<div class="row breadcrumb-container">
	<ol class="breadcrumb">
		<li class="legend">Déroulement du cours</li>
		<li data-toggle="tab" href="#appel" class="active clickable" ng-click="tabClick(1)">Appel</li>
		<li data-toggle="tab" href="#cours" class="clickable" ng-click="tabClick(2)">Cours</li>
		<!--<li data-toggle="tab" href="#fin" class="clickable" ng-click="tabClick(3)">Fin</li>-->
	</ol>
</div>

    <div id="modal-pdf" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title"></h4>
          </div>
          <div class="modal-body text-center">
          </div>
        </div>
      </div>
    </div>

    <div id="modal-{{student.id}}" class="modal fade" tabindex="-1" role="dialog" ng-repeat="(key, student) in lesson.student_class.students">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title"></h4>
          </div>
          <div id="popup-body" class="modal-body">
            <button ng-repeat="criteria in student.criteria" ng-click="createEvaluationsByCriteria(criteria, student)" ng-if="criteria.impact == 'positive'" type="button" id="{{criteria.id}}" class="participation btn btn-success btn-lg btn-block">{{criteria.name}} - {{criteria.value}}</button>
            <button ng-repeat="criteria in student.criteria" ng-click="createEvaluationsByCriteria(criteria, student)" ng-if="criteria.impact == 'negative'" type="button" id="{{criteria.id}}" class="participation btn btn-danger btn-lg btn-block">{{criteria.name}} - {{criteria.value}}</button>
          </div>
        </div>
      </div>
    </div>
    
<div class="row">
    <div class="col-xs-2 col-sm-2 col-md-1">
        <div class="text-center">
            <div class="previous-lesson">
                <div class="icon-previous glyphicon glyphicon-chevron-left"></div>
            </div>
        </div>
    </div>

    <div class="tab col-xs-8 col-sm-8 col-md-10">
        <div id="appel" class="tab-pane fade in active">
            <div class="row trombi">
              <div ng-click="createEvaluations(key, student)" ng-repeat="(key, student) in lesson.student_class.students" id="student-{{key}}" class="block-lesson row block-center col-xs-6 col-sm-4 col-md-2">
                    <div class="cross-lesson glyphicon glyphicon-remove"></div>
                    <div class="time-lesson glyphicon glyphicon-time"></div>
                    <img src="{{ config.apiUrl + student.avatar }}" class="img-circle img-lesson"><br>
                    <div class="icon-lesson">
                    </div><br>
                    <span class="text-lesson">{{student.firstname}} {{student.lastname}}</span>
                 </div>
            </div>
        </div>
        <div id="cours" class="tab-pane fade">
            <div class="row trombi">
                    <div data-toggle="modal" data-target="#modal-{{student.id}}" ng-repeat="(key, student) in lesson.student_class.students" id="student-{{key}}" class="block-lesson row block-center col-xs-6 col-sm-4 col-md-2">
                    <img src="{{ config.apiUrl + student.avatar }}" class="img-circle img-lesson"><br>
                    <div class="icon-lesson">
                    </div><br>
                    <span class="text-lesson">{{student.firstname}} {{student.lastname}}</span>
                 </div>
            </div>
        </div>
        <div id="fin" class="tab-pane fade">

            <!--<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingOne">
                  <h4 class="panel-title">
                    <a class="collapse in" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <i class="more-less glyphicon glyphicon-plus"></i>
                      Ajouter un commentaire sur un élève.
                    </a>
                  </h4>
                </div>
                <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne" aria-expanded="true">
                  <div class="panel-body">
                    <table class="table table-hover"></table>
                     </div>
                  </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingTwo">
                  <h4 class="panel-title">
                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <i class="more-less glyphicon glyphicon-plus"></i>
                      Ajouter des documents.
                    </a>
                  </h4>
                </div>
                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div class="panel-body">
                    <label class="control-label">Sélectionnez Fichier</label>
                    <input id="input-fr" name="inputfr[]" type="file" multiple class="file-loading">
                  </div>
                </div>
              </div>
            </div>-->
        </div>
    </div>
    <!--
    <div class="col-xs-2 col-sm-2 col-md-1">
        <div class="text-center">
            <div class="next-lesson">
                <div class="icon-next glyphicon glyphicon-chevron-right"></div>
            </div>
        </div>
    </div>-->
</div>

