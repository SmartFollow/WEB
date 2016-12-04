<?php
$page_title = "Profil de Pierre Bechad";
?>

<div class="pad15">
  <!-- Header -->
  <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div class="header-block margb20">
        <div class="row">
          <div class="center-header">
            <div class="col-lg-5 col-md-6">
          		<img src="{{imgUser}}" class="img-circle img-responsive profile-picture center-block "></img>
            </div>
            <div class="col-lg-7 col-md-6">
              <div class="row center-block">
                <h3 class="title-h3 title-h2">{{user.firstname}} {{user.lastname}}</h3>
                <h4 class="title-h3 title-h2">Terminale S-4</h4><br><br>
              </div>
              <div class="row center-block title-h2">
                <span class="glyphicon glyphicon-phone mrs" aria-hidden="true"></span> 06.63.63.63.63<br>
                <span class="glyphicon glyphicon-envelope mrs" aria-hidden="true"></span> {{user.email}}
              </div><br>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div class="header-block margb20">
        <div class="row">
          <div class="center-block">
            <h2 class="title-h2 mtl mbm">Alertes</h2><br><br>
          </div>
        </div>
        <div class="row center-block">
          <div class="col-md-4 text-center c-white">
            <div class="a-ab-block center-block">
              <h3 class="title-h3 mtl">Absences</h3>
              <p class="stats">1</p>
            </div>
          </div>
          <div class="col-md-4 text-center c-white">
            <div class="a-bav-block center-block">
              <h3 class="title-h3 mtl">Bavardages</h3>
              <p class="stats">3</p>
            </div>
          </div>
          <div class="col-md-4 text-center c-white">
            <div class="a-ret-block  center-block">
              <h3 class="title-h3 mtl">Devoirs non faits</h3>
              <p class="stats">2</p>
            </div>
          </div>
        </div>
        </div>
    </div>
  </div>
  <!-- Header -->

  <!-- Body -->
  <div class="row">
    <!-- Left -->
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <!-- Next activities -->
      <div class="margb20">
        <div class="std-block">
          <div class="component">
            <h2 class="title-h2 mtl">Evènements du jour</h2>
            <div class="pull-right pad15">
              <div class="btn-group">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  21/01/2016 <span class="caret"></span>
                </button>
                <ul class="dropdown-menu pull-right">
                  <li><a href="#">21/01/2016</a>
                  </li>
                  <li><a href="#">22/01/2016</a>
                  </li>
                  <li><a href="#">23/01/2016</a>
                  </li>
                  <li><a href="#">24/01/2016</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="sticky-wrap">
              <table class="icon">
                  <thead>
                      <tr>
                          <th>Heure</th>
                          <th>Salle</th>
                          <th>Devoir</th>
                          <th>Matiere</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td class="user-hours">de 10h à 12h</td><td class="user-classroom">Français</td><td class="user-room">A305</td>
                        <td class="user-date">
                          <div class="col-md-12 col-sm-12 col-xs-12 icon btn-group-xs">
                            <button type="button" class="btn btn-default" disabled>
                              <div class="glyphicon glyphicon-book c-info"></div>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr><td class="user-hours">De 14h à 16h</td><td class="user-classroom">Math</td><td class="user-room">B206</td>
                        <td class="user-date">
                          <div class="col-md-12 col-sm-12 col-xs-12 icon btn-group-xs">
                            <button type="button" class="btn btn-default btn-work-m">
                              <div class="glyphicon glyphicon-book c-info"></div>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr><td class="user-hours">De 16h à 17h</td><td class="user-classroom">Histoire</td><td class="user-room">B301</td>
                        <td class="user-date">
                          <div class="col-md-12 col-sm-12 col-xs-12 icon btn-group-xs">
                            <button type="button" class="btn btn-default btn-work-h">
                              <div class="glyphicon glyphicon-book c-info"></div>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr><td class="user-hours">De 15h à 17h</td><td class="user-classroom">Math</td><td class="user-room">B206</td>
                        <td class="user-date">
                          <div class="col-md-12 col-sm-12 col-xs-12 icon btn-group-xs">
                            <button type="button" class="btn btn-default" disabled>
                              <div class="glyphicon glyphicon-book c-info"></div>
                            </button>
                          </div>
                        </td>
                      </tr>
                  </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- Next activities -->

      <!-- Past activities -->
      <div class="margb20">
        <div class="std-block center-block">
          <div class="component">
            <h2 class="title-h2 mtl">Activités passées</h2>
            <div class="sticky-wrap">
              <table class="icon">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Salle</th>
                    <th>Matiere</th>
                    <th>Resultat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td class="user-hours">19/01/16</td><td class="user-classroom">Musique</td><td class="user-room">B206</td>
                    <td class="user-date">
                      <div class="row">
                        <div class="col-md-3 col-sm-3 col-xs-3 glyphicon glyphicon-comment c-warning icon"></div>
                        <div class="col-md-3 col-sm-3 col-xs-3 glyphicon glyphicon-book c-grey icon"></div>
                        <div class="col-md-3 col-sm-3 col-xs-3 glyphicon glyphicon-star c-grey icon"></div>
                      </div>
                    </td>
                  </tr>
                  <tr><td class="user-hours">19/01/16</td><td class="user-classroom">Français</td><td class="user-room">A305</td>
                    <td class="user-date">
                      <div class="row">
                        <div class="col-md-3 col-sm-3 col-xs-3 glyphicon glyphicon-comment c-grey icon"></div>
                        <div class="col-md-3 col-sm-3 col-xs-3 glyphicon glyphicon-book c-grey icon"></div>
                        <div class="col-md-3 col-sm-3 col-xs-3 glyphicon glyphicon-star c-grey icon"></div>
                      </div>
                    </td>
                  </tr>
                  <tr><td class="user-hours">19/01/16</td><td class="user-classroom">Histoire</td><td class="user-room">B301</td>
                    <td class="user-date">
                      <div class="row">
                        <div class="col-md-3 col-sm-3 col-xs-3 glyphicon glyphicon-comment c-warning icon"></div>
                        <div class="col-md-3 col-sm-3 col-xs-3 glyphicon glyphicon-book c-danger icon"></div>
                        <div class="col-md-3 col-sm-3 col-xs-3 glyphicon glyphicon-star c-grey icon"></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- Past activities -->
    </div>
    <!-- Left -->
    <!-- Right -->
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <!-- Notification -->
      <div class="margb20">
        <div class="std-block center-block">
          <div class="component">
            <h2 class="title-h2 mtl">Notifications</h2>
            <div class="sticky-wrap">
              <table class="icon">
                <tbody>
                  <tr>
                    <td>
                      <div class="glyphicon glyphicon-comment c-info icon"></div>
                      Nouveau commentaire
                      <span class="pull-right text-muted small"><em>4 minutes </em></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="glyphicon glyphicon-bell c-warning icon"></div>
                      Nouvelle note
                      <span class="pull-right text-muted small"><em>27 minutes </em>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="glyphicon glyphicon-envelope icon"></div>
                      Nouveau message
                      <span class="pull-right text-muted small"><em> 13h53 </em>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="glyphicon glyphicon-education icon"></div>
                      Vous avez recu une note
                      <span class="pull-right text-muted small"><em> 16h02 </em>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="glyphicon glyphicon-comment c-info icon"></div>
                      Nouveau commentaire
                      <span class="pull-right text-muted small"><em> Hier </em>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="glyphicon glyphicon-blackboard c-danger icon"></div>
                      Nouvelle évaluation de cours
                      <span class="pull-right text-muted small"><em> Hier </em>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <a href="#" class="btn btn-default btn-block">Voir toutes les Alertes</a>
            </div>
          </div>
        </div>

      </div>
      <!-- Notification -->
    </div>
    <!-- Right -->
<!-- Body -->
</div>


<!-- MODAL -->
<div id="mathModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mathModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="mathModal">Devoir de Math</h4>
      </div>
      <div class="modal-body">
        <div class="row center-block">
      		<div class="list-group">
      			<h5><strong>Pour le : 21/02/2016</strong></h5>
      			<li href="#" class="list-group-item">
      				Exercices du jour
      				<div class="pull-left">
      					<a href="#"><i class="document-type glyphicon glyphicon-download-alt margr5"></i></a>
      					<a href="#"><i class="document-type glyphicon glyphicon-eye-open margr5"></i></a>
      				</div>
      				<div class="pull-right">
      					<i class="document-type glyphicon glyphicon-file"></i>
      					<i class="document-type glyphicon glyphicon-time" data-toggle="tooltip" data-placement="top" title="21/02/2016 à 14h00"></i>
      				</div>
      			</li>
      			<li href="#" class="list-group-item">
      				DM
      				<div class="pull-left">
      					<a href="#"><i class="document-type glyphicon glyphicon-download-alt margr5"></i></a>
      					<a href="#"><i class="document-type glyphicon glyphicon-eye-open margr5"></i></a>
      				</div>
      				<div class="pull-right">
      					<i class="document-type glyphicon glyphicon-picture"></i>
      					<i class="document-type glyphicon glyphicon-time" data-toggle="tooltip" data-placement="top" title="21/02/2016 à 17h00"></i>
      				</div>
      			</li>
      		</div>
          <hr></hr>
          <div class="list-group">
      			<h5><strong>Pour le : 24/02/2016</strong></h5>
      			<li href="#" class="list-group-item">
      				Contrôle sur les fractions
      				<div class="pull-left">
      					<a href="#"><i class="document-type glyphicon glyphicon-download-alt margr5"></i></a>
      					<a href="#"><i class="document-type glyphicon glyphicon-eye-open margr5"></i></a>
      				</div>
      				<div class="pull-right">
      					<i class="document-type glyphicon glyphicon-time" data-toggle="tooltip" data-placement="top" title="24/02/2016 à 8h00"></i>
      				</div>
      			</li>
      		</div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
<div id="histModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="histModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="histModal">Devoir d'Histoire</h4>
      </div>
      <div class="modal-body">
        <div class="row center-block">
      		<div class="list-group">
      			<h5><strong>Pour le : 21/02/2016</strong></h5>
      			<li href="#" class="list-group-item">
      				Apprendre leçon sur la grêce
      				<div class="pull-left">
      					<a href="#"><i class="document-type glyphicon glyphicon-download-alt margr5"></i></a>
      					<a href="#"><i class="document-type glyphicon glyphicon-eye-open margr5"></i></a>
      				</div>
      				<div class="pull-right">
      					<i class="document-type glyphicon glyphicon-file"></i>
      					<i class="document-type glyphicon glyphicon-time" data-toggle="tooltip" data-placement="top" title="21/02/2016 à 16h00"></i>
      				</div>
      			</li>
      		</div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
<!-- MODAL -->
