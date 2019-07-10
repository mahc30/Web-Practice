$(document).ready(function () {

    
    $("#jquerytest").html("lel");
    $("button:first-of-type").click(function () {
        alert("click");

    });

    $("button").hover(function () {
        // over
        $("h2").slideToggle();
        $("#div1").load(".logos.txt");
   
    }, function () {
        // out
       
        $("h2").blur(function (e) {
            e.preventDefault();

        });

    }
    );

});



