(function ($) {
    "use strict";

    $(document).ready(function () {

        // Toggle Menu
        $('.hamberger_btn').click(function (e) {
            $(this).toggleClass("active");
            $('.site_header').toggleClass("active");
        });

    });

})(jQuery);