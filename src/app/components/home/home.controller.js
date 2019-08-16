
class homeController {

    constructor($http, ApiService) {
        this.apiService = ApiService;
        this.$http = $http;
    }

    $onInit(){
        var vm = this;

        vm.shippingList = [];
        vm.shippingList = vm.apiService.shippingLocal().data;

    }
  }

  homeController.$inject=['$http','ApiService'];

  export default homeController;