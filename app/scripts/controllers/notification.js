angular.module('app').controller('NotifMod',['$scope','$filter','users', function ($scope, $filter, users) {

    // init
    $scope.sort = {
        sortingOrder : 'id',
        reverse : false
    };

    $scope.gap = 5;

    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;
    $scope.items = [
        {"id":1,"Type":"Warning!","Message":"Notes en Mathématiques sont en baisse"},
        {"id":2,"Type":"Info!","Message":"Mr. X ne pourra assurer ses cours le 12 janvier"},
        {"id":3,"Type":"Warning!","Message":"commentaire 3"},
        {"id":4,"Type":"Alerte!","Message":"Baisse des notes en Histoire et manque de rigueur"},
        {"id":5,"Type":"Info!","Message":"Le cours de Mathématiques du 10 janvier est déplacé en salle 104"},
        {"id":6,"Type":"Warning!","Message":"commentaire 6"},
        {"id":7,"Type":"Success!","Message":"Notes en SVT sont en train de remonter. Bon travail!"},
        {"id":8,"Type":"Success!","Message":"commentaire 9"},
        {"id":9 ,"Type":"Alerte!","Message":"commentaire 10"},
    ];
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

}]);
