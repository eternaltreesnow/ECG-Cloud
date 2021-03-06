$(function() {

    // initial from parameter "status" in the location.search
    var status = location.search.substr(1).split("&")[1].split("=")[1];
    var $summaryResult, $personalComment;

    var ids = [2, 22];
    initialMenuTreeByIds(ids);

    $summaryResult = $("#summaryResult");
    $personalComment = $("#personalComment");

    if (status === "0") {
        // Ongoing status
        $personalComment.show();
        $summaryResult.hide();
    } else {
        // Finished status
        $personalComment.hide();
        $summaryResult.show();
    }
});
