<div class="row">
  <div class="col-md-6" style="background-color: white;margin-left: 20px;margin-top: 20px;padding-top: 10px;padding-bottom: 10px;">   
    <div class="col-md-12" style="margin-top: 20px" id="selectedLevel">
      Niveau:<br>
      <select class="selectedLevel form-control"
        ng-options="level.name for level in lessons.levels track by level.id"
        ng-model="selectedLevel">
      </select>
    </div>
    <div class="col-md-12" style="margin-top: 20px" id="selectedSubject">
      Matière:<br>
      <select class="selectedSubject form-control"
        ng-options="subject.name for subject in selectedLevel.subjects track by subject.id"
        ng-model="selectedSubject">
      </select>
    </div>
    <div class="col-md-12" style="margin-top: 20px" id="selectedClasse">
      Classe:<br>
      <select class="selectedClasse form-control"
        ng-options="classe.name for classe in selectedSubject.student_classes track by classe.id"
        ng-model="selectedClasse">
      </select>
    </div>
    <div class="col-md-12" style="margin-top: 20px" id="selectedReservation">
      Réservation:<br>
      <select class="selectedReservation form-control" id="reservation"
        ng-model="selectedReservation">
        <option ng-repeat="reservation in lessons.available_reservations" value="{{reservation.id}}">Du {{reservation.date_start}} à {{reservation.time_start}} au {{reservation.date_end}} à {{reservation.time_end}}</option>
      </select>
    </div>
    <div class="col-md-2" style="margin-top: 20px; margin-bottom: 20px;">
      <button id="create" type="button" class="btn btn-danger" ng-click="edit()">Editer</button>
    </div>
  </div>
</div>
