(function($) {
    "use strict"; // Start of use strict

    //清空list-group和tab-content
    clear_list_group_tab_content();

    $(".dropdown-item").on('click', function() {
        alert('dropdown-item click');
        $(".dropdown-item").each(function(index) {
            $(this).removeClass("active");
        });
    });

    $(".list-group-item").on('click', function() {
        $(".list-group-item").each(function(index) {
            $(this).removeClass("active show");
        });
    });


    $("#inputSearch").keypress(function(e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            //alert('enter');
            //e.preventDefault();
            $('#btnSearch').click();
            return false;
        } else {
            return true;
        }
    });

    $("#btnSearch").on('click', function() {
        var tar = $("#inputSearch").val();
        clear_list_group_tab_content();
        tar = tar.replace('#', '_');
        $('#' + tar).addClass("active show");
        $('#list_' + tar).addClass("active show");
    });

    function clear_list_group_tab_content() {
        $(".list-group-item").each(function(index) {
            $(this).removeClass("active show");
        });
        $(".tab-pane").each(function(index) {
            $(this).removeClass("active show");
        });
        $(".dropdown-item").each(function(index) {
            $(this).removeClass("active");
        });
    }

})(jQuery); // End of use strict