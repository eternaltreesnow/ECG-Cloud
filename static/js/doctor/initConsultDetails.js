$(function() {

    // initial from parameter "status" in the location.search
    var status = location.search.substr(1).split("&")[1].split("=")[1];
    var $inputSummary, $summaryResult, $submitBtn;

    $inputSummary = $("#inputSummary");
    $summaryResult = $("#summaryResult");
    $submitBtn = $("#submitBtn");

    if(status === "0") {
        // Ongoing status
        $inputSummary.show();
        $submitBtn.show();
        $summaryResult.hide();
    } else {
        // Finished status
        $inputSummary.hide();
        $submitBtn.hide();
        $summaryResult.show();
    }
});
