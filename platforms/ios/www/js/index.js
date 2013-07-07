var client;

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
        client = new Usergrid.Client({
            orgName:'asagustin',
            appName:'journey',
            logging: true
        });

        $('.inloggen').on('click', function(){
            var password = $('.password-field').val(),
                email = $('.email-field').val();
            client.login(email, password, function (error, response) {
                if (error) { 
                   alert('De gegevens die u heeft ingevoerd zijn niet bekend bij ons.');
                } else {
                    window.localStorage.setItem("user_email", email); 
                    window.localStorage.setItem("user_password", password);
                   location.href = '#home'; 
                } 
            });
        });

        $('.password-field').keyup(function(event){
            if(event.keyCode == 13){
                $('.inloggen').click();
            }
        });

         
    },

    preChechAuth: function() {
        var stored_email = window.localStorage.getItem("user_email");
        var stored_password = window.localStorage.getItem("user_password");

        if(stored_password && stored_email) {
            $('.email-field').val(stored_email);
            $('.password-field').val(stored_password);
            $('.inloggen').click();
        }  
    }
};

