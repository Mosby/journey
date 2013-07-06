var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        var client = new Usergrid.Client({
            orgName:'asagustin',
            appName:'journey',
            logging: true
        });

        client.login("daan", "buza", function (error, response) {
             if (error) {
                console.log("login failed");
             } else {
                console.log("login succeeded");
            }
         });

        var journeys = new Usergrid.Collection({ "client":client, "type":"journeys" });

        var journey = {"destination": "Bla" + Math.random()};
        journeys.addEntity(journey, function (error, response) {
             if (error) {
                console.log("write failed");
             } else {
                console.log("write succeeded");
            }
         });
        console.log(journey);

        journeys.fetch(
            function() { // Success
                while(journeys.hasNextEntity()) {
                    var journey = journeys.getNextEntity();
                    console.log(journey); // Output the title of the book
                }
            }, function() { // Failure
                console.log("read failed");
            }
        );
    },
};

