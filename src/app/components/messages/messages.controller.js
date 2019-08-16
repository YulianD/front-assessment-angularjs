import homeController from "../home/home.controller";

class messagesController {
    constructor($http, ApiService) {
        this.apiService = ApiService;
        this.$http = $http;
    }


    $onInit(){
        var vm = this;

        vm.loaded=false;

        vm.messagesList = [];

        vm.apiService.messagesResource('GET','',response=>{
            if(response.data){
                vm.messagesList=response.data;
                vm.loaded=true;
            }

        });
    }
  }
messagesController.$inject=['$http','ApiService'];
  export default messagesController;