$(document).ready(function(){
    $(".btn-signin").click(function( event ) {
        $.ajax({
           url: "http://api.dev.smartfollow.org/oauth/token",
           method: "POST",
           data: {
                username: $("#inputEmail").val(),
                password: $("#inputPassword").val(),
                grant_type: "password",
                client_id: "2",
                client_secret: "BjEebk7a3NP9nXOswW2Y5nJ04V7aRLGjxKYUEV3C",
                scope: ""
           },
           statusCode: {
               200: function(response) {
                   document.cookie='access_token='+response.access_token;
                   document.cookie='expires_in='+response.expires_in;
                   document.cookie='refresh_token='+response.refresh_token;
                   window.location.replace("./connected.html");
               },
               401: function() {
                   alert("Le nom d'utilisateur ou le mot de passe n'est pas pas correct. Essayez à nouveau.");
               }
           }
        });
        return (false);
    });
});
