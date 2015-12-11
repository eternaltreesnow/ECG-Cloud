$(function() {
    var $uploadFile;
    var $checkFeedback;
    var $submitBtn;
    var $submitModal;
    var $typeContainer;

    $uploadFile = $("#uploadFile");
    $checkFeedback = $("#checkFeedback");
    $typeContainer = $("#typeContainer");

    $("input:radio[name='checkRadios']").on('change', function() {
        if($("input:radio[name='checkRadios']:checked").attr('id') === "checkOption1") {
            $uploadFile.removeAttr('disabled');
            $typeContainer.hide();
        } else if($("input:radio[name='checkRadios']:checked").attr('id') === "checkOption2") {
            $uploadFile.attr('disabled', 'disabled');
            $typeContainer.show();
        } else {
            $uploadFile.attr('disabled', 'disabled');
            $typeContainer.hide();
        }
    });

    $submitBtn = $("#submitBtn");
    $submitModal = $("#submitModal");
    $submitBtn.on('click', function() {
        $submitModal.modal({
            backdrop: 'static',
            show: true
        });
    });
});
