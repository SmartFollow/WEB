angular.module('app').controller('HwrkMod', function ($scope, $filter) {

    // init
    $scope.sort = {
        sortingOrder : 'id',
        reverse : false
    };

    var hwrkJson = {
        "id": 7,
        "email": "edythe86@example.net",
        "created_at": "2017-01-08 06:05:31",
        "updated_at": "2017-01-08 06:05:31",
        "firstname": "Verona",
        "lastname": "Schuster",
        "class_id": 4,
        "group_id": 4,
        "homeworks": [
            {
                "id": 1,
                "subject_id": 6,
                "reservation_id": 2,
                "description": null,
                "created_at": "2017-03-23 01:00:59",
                "updated_at": "2017-03-23 01:00:59",
                "deleted_at": null,
                "student_class_id": 4,
                "start": "2017-07-11 10:25:18",
                "end": "2017-07-11 11:25:18",
                "homeworks": [
                    {
                        "id": 2,
                        "description": "devoir de test 2",
                        "lesson_id": 1,
                        "document_id": 1,
                        "created_at": "2017-01-08 06:40:13",
                        "updated_at": "2017-01-08 06:40:13"
                    },
                    {
                        "id": 3,
                        "description": "devoir de test 3",
                        "lesson_id": 1,
                        "document_id": null,
                        "created_at": "2017-02-15 14:44:43",
                        "updated_at": "2017-02-15 14:44:43"
                    },
                    {
                        "id": 4,
                        "description": "fais tes devoirs lol",
                        "lesson_id": 1,
                        "document_id": null,
                        "created_at": null,
                        "updated_at": null
                    }
                ],
                "subject": {
                    "id": 6,
                    "level_id": 1,
                    "name": "Anglais",
                    "description": null,
                    "teacher_id": 2,
                    "created_at": "2017-01-08 06:05:34",
                    "updated_at": "2017-01-08 06:05:34",
                    "deleted_at": null
                }
            }
        ],
        "group": {
            "id": 4,
            "name": "Students",
            "description": "Students of the school",
            "deletable": false,
            "created_at": "2017-01-08 06:05:31",
            "updated_at": "2017-01-08 06:05:31",
            "editable": false
        },
        "student_class": {
            "id": 4,
            "level_id": 1,
            "name": "TES 1",
            "created_at": "2017-01-08 06:05:32",
            "updated_at": "2017-01-08 06:05:32",
            "deleted_at": null
        },
        "taught_subjects": [],
        "marks": [
            {
                "id": 2,
                "exam_id": 1,
                "student_id": 7,
                "mark": 14,
                "comment": null,
                "created_at": null,
                "updated_at": null,
                "exam": {
                    "id": 1,
                    "lesson_id": 1,
                    "description": "1er quizz de test",
                    "min_mark": 0,
                    "max_mark": 20,
                    "created_at": "2017-04-11 17:57:08",
                    "updated_at": "2017-04-11 17:57:08",
                    "type": "class",
                    "document_id": null,
                    "lesson": {
                        "id": 1,
                        "subject_id": 6,
                        "reservation_id": 2,
                        "description": null,
                        "created_at": "2017-03-23 01:00:59",
                        "updated_at": "2017-03-23 01:00:59",
                        "deleted_at": null,
                        "student_class_id": 4,
                        "start": "2017-07-11 10:25:18",
                        "end": "2017-07-11 11:25:18",
                        "subject": {
                            "id": 6,
                            "level_id": 1,
                            "name": "Anglais",
                            "description": null,
                            "teacher_id": 2,
                            "created_at": "2017-01-08 06:05:34",
                            "updated_at": "2017-01-08 06:05:34",
                            "deleted_at": null
                        }
                    }
                }
            }
        ],
        "criteria_averages": [
            {
                "id": 1,
                "user_id": 7,
                "criterion_id": 1,
                "average": "2.50",
                "week_start": "2017-06-05",
                "week_end": "2017-06-11",
                "created_at": "2017-06-18 03:02:49",
                "updated_at": "2017-06-18 03:15:55",
                "week": 24,
                "year": 2017
            },
            {
                "id": 2,
                "user_id": 7,
                "criterion_id": 2,
                "average": "0.50",
                "week_start": "2017-06-05",
                "week_end": "2017-06-11",
                "created_at": "2017-06-18 03:02:49",
                "updated_at": "2017-06-18 03:15:55",
                "week": 24,
                "year": 2017
            },
            {
                "id": 3,
                "user_id": 7,
                "criterion_id": 3,
                "average": "0.50",
                "week_start": "2017-06-05",
                "week_end": "2017-06-11",
                "created_at": "2017-06-18 03:02:49",
                "updated_at": "2017-06-18 03:15:55",
                "week": 24,
                "year": 2017
            }
        ]
    };

    $scope.gap = 5;

    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;
    $scope.items = [];
//        {"id":1,"Date":"date 1","Matiere":"Matiere 1", "Exercices":"Exercices 1"},
//    ];

    var i = 0;
    var j = 0;
    while (hwrkJson.homeworks[i])
    {
        j = 0;
        while (hwrkJson.homeworks[i].homeworks[j])
        {
            $scope.items.push({
                id: hwrkJson.homeworks[i].homeworks[j].id,
                Date: hwrkJson.homeworks[i].start,
                Matiere: hwrkJson.homeworks[i].subject.name,
                Exercices:hwrkJson.homeworks[i].homeworks[j].description,
            });
            j++;
        }
        i++
    };

    var searchMatch = function (haystack, needle) {
        if (!needle) {
            return true;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    };

    // init the filtered items
    $scope.search = function () {
        $scope.filteredItems = $filter('filter')($scope.items, function (item) {
            for(var attr in item) {
                if (searchMatch(item[attr], $scope.query))
                    return true;
            }
            return false;
        });
        // take care of the sorting order
        if ($scope.sort.sortingOrder !== '') {
            $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
        }
        $scope.currentPage = 0;
        // now group by pages
        $scope.groupToPages();
    };


    // calculate page in place
    $scope.groupToPages = function () {
        $scope.pagedItems = [];

        for (var i = 0; i < $scope.filteredItems.length; i++) {
            if (i % $scope.itemsPerPage === 0) {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
            }
        }
    };

    $scope.range = function (size,start, end) {
        var ret = [];
        console.log(size,start, end);

        if (size < end) {
            end = size;
            start = ((size-$scope.gap) < 0) ? 0 : (size-$scope.gap);
        }else if( end%5 != 0){
            end = end - (end%5);
            start = end - $scope.gap;
        }

        for (var i = start; i < end; i++) {
            ret.push(i);
        }

        return ret;

    };

    $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };

    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pagedItems.length - 1) {
            $scope.currentPage++;
        }
    };

    $scope.setPage = function (goToPage) {
        if(goToPage != undefined){
            this.n = goToPage;
        }
        $scope.currentPage = this.n;
    };

    // functions have been describe process the data for display
    $scope.search();



});


$inject = ['$scope', '$filter']

    .directive("customSort", function() {
        return {
            restrict: 'A',
            transclude: true,
            scope: {
                order: '=',
                sort: '='
            },
            template :
            ' <a ng-click="sort_by(order)" style="color: #555555;">'+
            '    <span ng-transclude></span>'+
            '    <i ng-class="selectedCls(order)"></i>'+
            '</a>',
            link: function(scope) {

                // change sorting order
                scope.sort_by = function(newSortingOrder) {
                    var sort = scope.sort;

                    if (sort.sortingOrder == newSortingOrder){
                        sort.reverse = !sort.reverse;
                    }

                    sort.sortingOrder = newSortingOrder;
                };


                scope.selectedCls = function(column) {
                    if(column == scope.sort.sortingOrder){
                        return ('icon-chevron-' + ((scope.sort.reverse) ? 'down' : 'up'));
                    }
                    else{
                        return'icon-sort'
                    }
                };
            }// end link
        }
    });
