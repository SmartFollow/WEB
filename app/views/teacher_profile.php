<div class="mainbg">
    <div class="row">
        <div class="col-md-6">
	        <div class="row">
		        <div class="col-md-12">
			        <div class="block center-block">
				        <div class="row">
					        <div class="col-md-5">
						        <img src="{{ config.apiUrl + profile.avatar }}" class="img-circle profile_picture"><br>
					        </div>
					        <div class="col-md-7">
						        <h2>{{profile.firstname}} <span class="uppercase">{{profile.lastname}}</span></h2>
						        <h3 class="title_h3">{{profile.group.description}}</h3><br>
						        <span class="glyphicon glyphicon-envelope mrs" aria-hidden="true"></span>{{profile.email}}
					        </div>
				        </div>
			        </div>
		        </div>
	        </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="block">
                        <h2 class="title_h2">Evènements du jour</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Heure</th>
                                    <th>Classe</th>
                                    <th>Salle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="user-date">20/02/2016</td><td class="user-hours">De 8h à 10h</td><td class="user-classroom">TS 5</td><td class="user-room">A305</td></tr>
                                <tr><td class="user-date">20/02/2016</td><td class="user-hours">De 11h à 12h</td><td class="user-classroom">1èreS 3</td><td class="user-room">B206</td></tr>
                                <tr><td class="user-date">20/02/2016</td><td class="user-hours">De 14h à 15h</td><td class="user-classroom">2nd 4</td><td class="user-room">B301</td></tr>
                                <tr><td class="user-date">20/02/2016</td><td class="user-hours">De 15h à 17h</td><td class="user-classroom">TES 3</td><td class="user-room">D105</td></tr>
                                <tr><td class="user-date">20/02/2016</td><td class="user-hours">De 17h à 18h</td><td class="user-classroom">1èreL 2</td><td class="user-room">A305</td></tr>
                                <tr><td class="user-date">21/02/2016</td><td class="user-hours">De 10h à 12h</td><td class="user-classroom">TS 5</td><td class="user-room">A305</td></tr>
                                <tr><td class="user-date">21/02/2016</td><td class="user-hours">De 15h à 16h</td><td class="user-classroom">TES 3</td><td class="user-room">B206</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="row block center-block">
                <h2 class="title_h2">Evolution des retards</h2>
                <div id="my-chart" style="text-align: center; padding: 50px 0;">
	                <strong><em>Aucune donnée à afficher</em></strong>
                </div>
                <!-- <h3 class="title_h3 text-center pts">Evolution du nombre de retard par semaine</h3> -->
            </div>
        </div>

        <div class="col-md-6">
	        <div class="row">
		        <div class="col-md-12">
			        <div class="block">
				        <h2 class="title_h2">Elèves en difficultés</h2>
				        <div class="row">
					        <a href="#/profil/20" class="block-lesson col-sm-4">
						        <img src="/app/images/profil 2/bechad_p.bmp" class="img-circle img-lesson"><br>
						        <span class="text-lesson">Kris Kunde</span>
					        </a>
					        <a href="#/profil/18" class="block-lesson col-sm-4">
						        <img src="/app/images/profil 2/diafou_j.bmp" class="img-circle img-lesson"><br>
						        <span class="text-lesson">Paxton Collier</span>
					        </a>
					        <a href="#/profil/72" class="block-lesson col-sm-4">
						        <img src="/app/images/profil 2/rio_s.bmp" class="img-circle img-lesson"><br>
						        <span class="text-lesson">Miles Prosacco</span>
					        </a>
				        </div>
			        </div>
		        </div>
	        </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="center-block block pts">
                        <h2 class="title_h2">Notifications</h2>
                        <div ng-controller="NotifMod">
                            <div class="row">
	                            <div class="col-md-12">
		                            <table>
			                            <thead>
			                            <tr>
				                            <th class="id" custom-sort order="'id'" sort="sort">#&nbsp;</th>
				                            <th class="Type" custom-sort order="'Type'" sort="sort">Type&nbsp;</th>
				                            <th class="Message" custom-sort order="'Message'" sort="sort">Message&nbsp;</th>
			                            </tr>
			                            </thead>
			                            <tbody>
				                            <tr ng-repeat="item in pagedItems[currentPage] | orderBy:sort.sortingOrder:sort.reverse" ng-class="{success : item.Type == 'Success!', danger : item.Type == 'Alerte!', warning : item.Type == 'Warning!', info : item.Type == 'Info!'}"/>
				                            <td>{{item.id}}</td>
				                            <td>{{item.Type}}</td>
				                            <td>{{item.Message}}</td>
			                            </tr>
			                            </tbody>
		                            </table>
	                            </div>
                            </div>

                            <div class="row">
	                            <div class="col-md-12 text-right">
		                            <ul class="pagination" style="margin: 15px 0 0 0;">
			                            <li ng-class="{disabled: currentPage == 0}">
				                            <a href ng-click="prevPage()">« Prev</a>
			                            </li>
			                            <li ng-repeat="n in range(pagedItems.length, currentPage, currentPage + gap) "
			                                ng-class="{active: n == currentPage}"
			                                ng-click="setPage()">
				                            <a href ng-bind="n + 1">1</a>
			                            </li>
			                            <li ng-class="{disabled: (currentPage) == pagedItems.length - 1}">
				                            <a href ng-click="nextPage()">›</a>
			                            </li>
			                            <li ng-class="{disabled: (currentPage) == pagedItems.length - 1}" ng-show="pagedItems.length > 5" ng-click="setPage(pagedItems.length-1)">
				                            <a href>»</a>
			                            </li>
		                            </ul>
	                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row block center-block">
                <h2 class="title_h2">Evolution des difficultés</h2>
                <div id="difficult" style="text-align: center; padding: 50px 0;">
	                <strong><em>Aucune donnée à afficher</em></strong>
                </div>
                <!-- <h3 class="title_h3 text-center pts">Evolution du nombre d'élèves en difficultés chaque mois</h3> -->
            </div>
        </div>
    </div>
<!-- END BODY -->

</div>

<script type="text/javascript">

var data = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
  series: [
    {
      data: [1, 2, 3, 5, 3, 8, 6, 9]
    }
  ]
};

var options = {
  axisX: {
    labelInterpolationFnc: function(value) {
      return 'Semaine n°' + value;
    }
  }
};

var responsiveOptions = [
  ['screen and (min-width: 641px) and (max-width: 1024px)', {
    showPoint: false,
    axisX: {
      labelInterpolationFnc: function(value) {
        return 'S n° ' + value;
      }
    }
  }],
  ['screen and (max-width: 640px)', {
    showLine: true,
    axisX: {
      labelInterpolationFnc: function(value) {
        return 'S' + value;
      }
    }
  }]
];

new Chartist.Line('#my-chart', data, options, responsiveOptions);

</script>


<script type="text/javascript">

var data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
    [1, 6, 5, 5, 7, 3, 4, 8, 9, 4, 3, 1],
    [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
  ]
};

var options = {
  seriesBarDistance: 10
};

var responsiveOptions = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

new Chartist.Bar('#difficult', data, options, responsiveOptions);

</script>