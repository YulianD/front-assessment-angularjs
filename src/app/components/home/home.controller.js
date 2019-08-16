
class homeController {

    constructor($http, ApiService) {
        this.apiService = ApiService;
        this.$http = $http;
    }

    $onInit(){
        var vm = this;

        vm.shipping = [];
        vm.searchBox;



        vm.apiService.shippingRs(function (res) {
            if(res.data){
                vm.shipping=res.data;
            }
        })

    }
  }

  homeController.$inject=['$http','ApiService'];

  export default homeController;