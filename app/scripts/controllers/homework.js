angular.module('app').controller('HwrkMod', ['$scope','$filter', '$http', 'config', function ($scope, $filter, $http, config)    {

    // init
    $scope.sort = {
        sortingOrder : 'id',
        reverse : false
    };

    $http({
        method: 'GET',
        url: config.apiUrl + "api/users/profile"
    }).then(function successCallback(response) {
        $scope.profile = response.data;
        console.log(response);
        var i = 0;
        var j = 0;
        while (i < $scope.profile.homeworks.length)
        {
            j = 0;
            while (j < $scope.profile.homeworks[i].homeworks.length)
            {
                $scope.items.push({
                    id: $scope.profile.homeworks[i].homeworks[j].id,
                    Date: $scope.profile.homeworks[i].start,
                    Matiere: $scope.profile.homeworks[i].subject.name,
                    Exercices:$scope.profile.homeworks[i].homeworks[j].description,
                });
                j++;
            }
            i++
        };
    }, function errorCallback(response) {
        console.log(response);
    });

    $scope.gap = 5;

    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;
    $scope.items = [];
    

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
