// When the user scrolls the page, execute myFunction
window.onscroll = function() { stickyFunction() };

var good_fill = true;

// Get the navbar
var navbar = document.getElementById("navBar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

$(document).ready(function() {
    $("#pay_btn").click(function() {

        console.log($("#fnText").val())


        if ($("#fnText").val() !== "" && $("#lnText").val() !== "" && $("#emailText").val() !== "" && $("#phoneText").val() !== "" && $("#appTime").val() !== "") {
            $("#myAppointment").modal("hide")

            var cost = parseInt($("#cut_type").children("option:selected").val());

            if ($('#wash').is(":checked")) {
                cost += 15
            }
            if ($('#color').is(":checked")) {
                cost += 40
            }
            console.log(cost);
            $("#totalCost").text("$" + String(cost))


            $("#paymentInfo").modal("show")
        } else {
            if (good_fill) {
                good_fill = false;
                $("#warning_div").append("<p style='background-color:red'>Please Fill every question out</p>")

            }
            //console.log($("#warning_div"))
            $("#myAppointment").modal("show")
        }
    });

});