function showHidePopup() {

    $(".addInfo").fadeIn(300, function () {
        $(this).focus();
    });

    $('.backBtn').click(function () {
        $("#capital").fadeOut(300);
    });

    $(document).mouseup(function (e) {
        var container = $(".window");
        var addInfo = $('.addInfo');

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0 && !addInfo.is(e.target) && addInfo.has(e.target).length === 0) {
            $('.addInfo').fadeOut(300);
        };
    });
}