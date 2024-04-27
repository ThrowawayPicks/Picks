document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("subscribeLink");
    var span = document.getElementsByClassName("close")[0];
    var form = document.getElementById("subscribeForm");

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    form.onsubmit = function (event) {
        event.preventDefault(); // Prevent the form from submitting via the browser.
        var email = document.getElementById('email').value;
        alert('Thank you for subscribing with: ' + email);
        modal.style.display = "none";
    }
});
