
function showHidePopup() {

    $(document).mouseup(function (e) {
        var container = $(".window");
        var addInfo = $('.addInfo');

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0 && !addInfo.is(e.target) && addInfo.has(e.target).length === 0) {
            $('.addInfo').fadeOut(300);
        };
    });
}

export default showHidePopup;
