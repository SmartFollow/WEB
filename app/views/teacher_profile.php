<div class="mainbg">

<!-- START HEADER -->
    <div class="row">
        <div class="col-sm-6">
            <div class="block_profile center-block mbm">
                <div class="row">
                    <div class="">
                        <div class="col-md-5 sepa">
                            <img src="{{ config.apiUrl + profile.avatar }}" class="img-circle profile_picture"><br>
                       </div>
                       <div class="col-md-7 mtl pll">
                            <h2><span class="uppercase prs">{{profile.firstname}}</span>{{profile.lastname}}</h2>
                            <h3 class="title_h3">{{profile.group.description}}</h3><br>
                            <span class="glyphicon glyphicon-envelope mrs" aria-hidden="true"></span>{{profile.email}}
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 text-center mts">
                        <span class="glyphicon glyphicon-alert mrs warning" aria-hidden="true"></span> Professeur Absent du 25/02/16 au 28/02/16<br><br>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="block_alert center-block">
                <div class="row pbm">
                    <div class="col-md-12">
                        <div class=" center-block block_help pts">
                            <h2 class="title_h2 mts mbs">Elèves en difficultés</h2>
                            <div class="row">
                                <a href="#/profil/4" class="block-lesson col-sm-4">
                                    <img src="/app/images/profil 2/bechad_p.bmp" class="img-circle img-lesson"><br>
                                    <span class="text-lesson">Raegan Schmeler</span>
                                </a>
                                <a href="#/profil/5" class="block-lesson col-sm-4">
                                    <img src="/app/images/profil 2/diafou_j.bmp" class="img-circle img-lesson"><br>
                                    <span class="text-lesson">Naomi Aufderhar</span>
                                </a>
                                <a href="#/profil/6" class="block-lesson col-sm-4">
                                    <img src="/app/images/profil 2/rio_s.bmp" class="img-circle img-lesson"><br>
                                    <span class="text-lesson">Macy Wunsch</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- END HEADER -->

<!-- START BODY -->
    <div class="row">
        <div class="col-md-6">
            <div class="row pbl">
                <div class="col-md-12">
                    <div class="block_event">
                        <div class="component">
                            <h2 class="title_h2 mtl">Evènements du jour</h2>
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
            </div>
            <div class="row block_graph1 center-block mbl">
                <h2 class="title_h2 mtl mbm">Evolution des retards</h2>
                <div id="my-chart" style="height: 250px;"></div>
                <h3 class="title_h3 text-center pts">Evolution du nombre de retard par semaine</h3>
            </div>
        </div>
        <div class="col-md-6">
            <div class="row pbm">
                <!-- Notif -->
                <div class="col-md-12">
                    <div class="center-block block_notif pts">
                        <div class="component">
                            <h2 class="title-h2 mtl">Notifications</h2>
                            <div class="sticky-wrap">
                                <div ng-controller="NotifMod">
                                    <table class="table">
                                        <thead>
                                        <tr>
                                            <th class="id" custom-sort order="'id'" sort="sort">Id&nbsp;</th>
                                            <th class="Type" custom-sort order="'Type'" sort="sort">Type&nbsp;</th>
                                            <th class="Message" custom-sort order="'Message'" sort="sort">Message&nbsp;</th>
                                        </tr>
                                        </thead>
                                        <tfoot>
                                        <td colspan="6">
                                            <div class="pagination pull-right">
                                                <ul class="pagination">
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
                                        </td>
                                        </tfoot>
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
                        </div>
                    </div>
                </div>
                <!-- END Notif -->
            </div>
            <div class="row pbl">
                <div class="col-md-12">
                    <div class="center-block block_doc pts">
                        <h2 class="title_h2 mts mbxl">Activitées récentes</h2>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="center-block ft17">
                                    <div class="arrow"></div>

                                    <div class="commentaire"></div>
                                    <div class="background">
                                        <span class="left mrm"><img src="/app/images/profil 2/drecou_n.bmp" class="img-circle activity_picture"></span><p class=" pts"><a>Noémie Drecou</a> à ajouté un <a>commentaire</a><br> 20/02/16 | 19:14 <span class="glyphicon glyphicon-eye-open mrs mls"></span>1 <span class="glyphicon glyphicon-comment mrs mls"></span>1</p>
                                    </div>
                                    <div class="pdf"></div>
                                    <div class="background">
                                        <span class="left mrm"><img src="/app/images/profile_pict.jpg" class="img-circle activity_picture"></span><p class=" pts">Vous avez partagé un<a> document</a><br> 20/02/16 | 10:38 <span class="glyphicon glyphicon-eye-open mrs mls"></span>12 <span class="glyphicon glyphicon-comment mrs mls"></span>3</p>
                                    </div>
                                    <div class="video"></div>
                                    <div class="background">
                                        <span class="left mrm"><img src="/app/images/profile_pict.jpg" class="img-circle activity_picture"></span><p class=" pts">Vous avez partagé une<a> vidéo</a><br> 19/02/16 | 15:10 <span class="glyphicon glyphicon-eye-open mrs mls"></span>31 <span class="glyphicon glyphicon-comment mrs mls"></span>0</p>
                                    </div>
                                    <div class="pdf"></div>
                                    <div class="background">
                                        <span class="left mrm"><img src="/app/images/profile_pict.jpg" class="img-circle activity_picture"></span><p class=" pts">Vous avez partagé un<a> document</a><br> 17/02/16 | 20:32 <span class="glyphicon glyphicon-eye-open mrs mls"></span>28 <span class="glyphicon glyphicon-comment mrs mls"></span>7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row block_graph2 center-block">
                <h2 class="title_h2 mtl mbm">Evolution des difficultés</h2>
                <div id="difficult" style="height: 250px;"></div>
                <h3 class="title_h3 text-center pts">Evolution du nombre d'élèves en difficultés chaque mois</h3>
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

new Chartist.Bar('#difficult', data, options, responsiveOptions);7

</script>