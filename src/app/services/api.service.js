class apiService {
    constructor($http,$resource) {
        this.$http = $http;
        this.$resource = $resource;
        this.apiUrl="https://still-forest-3527.getsandbox.com";
        this.messagesApi=this.apiUrl+'/messages';
    }

    shippingLocal(){
        return {
            "data": [
                {
                    "status": "delivered",
                    "origin": {
                        "city": "Hiuston",
                        "state": "TX",
                        "postalcode": 33619
                    },
                    "destination": {
                        "city": "Atlanta",
                        "state": "GA",
                        "postalcode": 30123
                    },
                    "item": {
                        "name": "Small package",
                        "amount": 1,
                        "cost": 250.00,
                        "date": "2019-08-16T00:10:22.453Z",
                        "means": "road"
                    }
                },
                {
                    "status": "sent",
                    "origin": {
                        "city": "Bogota",
                        "state": "DC",
                        "postalcode": 33619
                    },
                    "destination": {
                        "city": "Cali",
                        "state": "VC",
                        "postalcode": 30123
                    },
                    "item": {
                        "name": "Big package",
                        "amount": 2,
                        "cost": 500.99,
                        "date": "2019-08-14T00:10:22.453Z",
                        "means": "air"
                    }
                },
                {
                    "status": "delivered",
                    "origin": {
                        "city": "Medellin",
                        "state": "AQ",
                        "postalcode": 33619
                    },
                    "destination": {
                        "city": "Pereira",
                        "state": "RS",
                        "postalcode": 30123
                    },
                    "item": {
                        "name": "Normal package",
                        "amount": 1,
                        "cost": 89.00,
                        "date": "2019-08-10T00:10:22.453Z",
                        "means": "road"
                    }
                },
                {
                    "status": "delivered",
                    "origin": {
                        "city": "Hiuston",
                        "state": "TX",
                        "postalcode": 33619
                    },
                    "destination": {
                        "city": "Atlanta",
                        "state": "GA",
                        "postalcode": 30123
                    },
                    "item": {
                        "name": "Small package",
                        "amount": 1,
                        "cost": 250.00,
                        "date": "2019-08-16T00:10:22.453Z",
                        "means": "road"
                    }
                },
                {
                    "status": "sent",
                    "origin": {
                        "city": "Bogota",
                        "state": "DC",
                        "postalcode": 33619
                    },
                    "destination": {
                        "city": "Cali",
                        "state": "VC",
                        "postalcode": 30123
                    },
                    "item": {
                        "name": "Big package",
                        "amount": 2,
                        "cost": 500.99,
                        "date": "2019-08-14T00:10:22.453Z",
                        "means": "air"
                    }
                },
                {
                    "status": "sent",
                    "origin": {
                        "city": "Bogota",
                        "state": "DC",
                        "postalcode": 33619
                    },
                    "destination": {
                        "city": "Cali",
                        "state": "VC",
                        "postalcode": 30123
                    },
                    "item": {
                        "name": "Big package",
                        "amount": 2,
                        "cost": 500.99,
                        "date": "2019-08-14T00:10:22.453Z",
                        "means": "air"
                    }
                }
            ]
        };
    }

    messagesResource(method, data='', callback){

        this.$http({
            url: this.messagesApi,
            dataType: 'json',
            method: method,
            data: data,
            headers: {
                "Content-Type": "application/json"
            }

        }).then(response=>{
            callback(response)
        },error=>{
            alert('Error in the Request');
            callback(error)
        });
    }

}

apiService.$inject = ['$http','$resource'];

export default apiService;