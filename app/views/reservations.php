<div class="row">
<div class="col-md-6" style="background-color: white;margin-left: 20px;margin-top: 20px;">
  <div class="alert alert-success" style="display:none;">
    <strong>Succès !</strong> Votre réservation a été créé avec succès, vous allez être redirigé vers le planning. 
  </div>
  <div class="alert alert-danger" style="display:none;">
    <strong>Erreur !</strong> Une erreur c'est produite lors de la réservation, veuillez réessayer ou contactez un administrateur.
  </div>
  <div class="col-md-6" style="margin-top:20px; margin-bottom: 10px;     background-color: rgba(192, 57, 43, 0.02);">
    Date de début<br>
    <span class="edit" id="edit1">
      Le {{reservation.date_start}} à {{reservation.time_start}}
      <button class="btn btn-info" ng-click="editDate1()" style="margin-left: 10px;">modifier</button>
    </span>
    <datetimepicker id="date1" data-ng-model="data.date1"></datetimepicker>
  </div>
  <div class="col-md-6" style="margin-top:20px; margin-bottom: 20px;     background-color: rgba(192, 57, 43, 0.02);">
    Date de fin<br>
    <span class="edit" id="edit2">
      Le {{reservation.date_end}} à {{reservation.time_end}}
      <button class="btn btn-info" ng-click="editDate2()" style="margin-left: 10px;">modifier</button>
    </span>
    <datetimepicker id="date2" data-ng-model="data.date2"></datetimepicker>
  </div>
  <div class="col-md-12" style="margin-bottom: 20px">
    <select class="form-control" id="room_id">
      <option value="1">C302</option>
      <option value="2">D301</option>
    </select>
  </div>
  <div class="col-md-2" style="margin-bottom: 20px">
    <button type="button" class="btn btn-danger" ng-click="create()">{{button}}</button>
  </div>
</div>
</div>
