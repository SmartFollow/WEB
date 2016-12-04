<div class="row lesson-infos">
	<div class="col-md-1 hidden-xs teacher-image">
		<img src="/app/images/profile_pict.jpg" class="img-circle" />
	</div>
	<div class="col-md-4 col-md-offset-1 lesson-details">
		<dl class="">
			<dt>Professeur</dt>
			<dd><a href="#"><span id="teacher"></span></a></dd>

			<dt>Classe</dt>
			<dd><a href="#">Terminale S - 4</a></dd>

			<dt>Cours</dt>
			<dd><span id="title"></span></dd>

			<dt>Salle</dt>
			<dd><span id="room"></span></dd>

			<dt>Date</dt>
			<dd>23/02/2016 à 16h05</dd>
		</dl>
	</div>
	<div class="col-md-3"></div>
	<div class="col-md-4 lesson-documents">
		<div class="list-group documents-list">
			<strong class="title">Documents liés au cours :</strong>
			<li href="#" class="list-group-item">
				Fichier des exercices du jour
				<div class="pull-left">
					<a href="#"><i class="document-type glyphicon glyphicon-download-alt"></i></a>
					<a id="pdf-exercice" href="#"><i class="document-type glyphicon glyphicon-eye-open"></i></a>
				</div>
				<div class="pull-right">
					<i class="document-type glyphicon glyphicon-file"></i>
					<i class="document-type glyphicon glyphicon-time" data-toggle="tooltip" data-placement="top" title="21/02/2016 à 16h34"></i>
				</div>
			</li>
			<li href="#" class="list-group-item">
				Tableau périodique des éléments
				<div class="pull-left">
					<a href="#"><i class="document-type glyphicon glyphicon-download-alt"></i></a>
					<a id="pdf-tpe" href="#"><i class="document-type glyphicon glyphicon-eye-open"></i></a>
				</div>
				<div class="pull-right">
					<i class="document-type glyphicon glyphicon-picture"></i>
					<i class="document-type glyphicon glyphicon-time" data-toggle="tooltip" data-placement="top" title="21/02/2016 à 16h35"></i>
				</div>
			</li>
		</div>
	</div>
</div>

<div class="row breadcrumb-container">
	<ol class="breadcrumb">
		<li class="legend">Déroulement du cours</li>
		<li class="clickable active">Appel</li>
		<li class="clickable">Cours</li>
		<li class="clickable">Fin</li>
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

    <div id="modal" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title"></h4>
          </div>
          <div id="popup-body" class="modal-body">
            <div class="icon-lesson text-center" style="margin-bottom: 40px;">
                <div class="participation col-md-4 col-sm-4 col-xs-3"><span class="glyphicon glyphicon-star"></span><span class="text"> 0</span></div>
                <div class="chat comment col-md-4 col-sm-4 col-xs-3"><span class="glyphicon glyphicon-comment"></span><span class="text"> 0</span></div>
                <div class="homework col-md-4 col-sm-4 col-xs-3"><span class="glyphicon glyphicon-book"></span><span class="text"> 0</span></div>
            </div>
            <button type="button" class="participation btn btn-success btn-lg btn-block">Participe</button>
            <button type="button" class="chat btn btn-warning btn-lg btn-block">Bavarde</button>
            <button type="button" class="homework btn btn-danger btn-lg btn-block">Devoir non fait</button>
            <button type="button" class="reset btn btn-secondary btn-lg btn-block">Réinitialiser</button>
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
        <div class="subtab appel on">
            <div class="row trombi">
            </div>
        </div>
        <div class="subtab cours" style="display: none">
            <div class="row trombi">
            </div>
        </div>
        <div class="subtab" style="display: none">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
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
            </div>
        </div>
    </div>

    <div class="col-xs-2 col-sm-2 col-md-1">
        <div class="text-center">
            <div class="next-lesson">
                <div class="icon-next glyphicon glyphicon-chevron-right"></div>
            </div>
        </div>
    </div>
</div>
