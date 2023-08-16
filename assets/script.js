// Smooth scrolling for navigation links
$(document).ready(function() {
    $("a.nav-link").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800
            );
        }
    });
});

// Submit contact form
$(document).ready(function() {
    $("#contact-form").submit(function(event) {
        event.preventDefault();
        // Your form submission logic here
        // Example: sendFormDataToServer(formData);
    });
});
