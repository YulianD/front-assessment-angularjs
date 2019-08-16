class apiService {
    constructor($http,$resource) {
        this.$http = $http;
        this.$resource = $resource;
        // this.apiUrl="http://www.mocky.io/v2/5d56143a350000e60508804";
        this.apiUrl="http://www.mocky.io/v2/5d56143a350000e605088043";
        this.shipping = this.$resource(this.apiUrl);
    }

    shippingRs(callback){
        this.shipping.get().$promise.then(function (response) {
            console.log("SERVICE - OK")
            callback(response);
        },function (err) {
            console.info("SERVICE - FAIL")
            callback(err);
        })
    }
}

apiService.$inject = ['$http','$resource'];

export default apiService;