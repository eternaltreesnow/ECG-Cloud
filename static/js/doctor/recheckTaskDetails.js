$(function() {
    var $uploadFile;
    var $checkFeedback;
    var $submitBtn, $consultationBtn;
    var $submitModal;
    var $typeContainer;
    var $id;

    var ids = [1, 11];
    initialMenuTreeByIds(ids);

    $uploadFile = $("#uploadFile");
    $checkFeedback = $("#checkFeedback");
    $typeContainer = $("#typeContainer");

    $id = $("#id");
    $id.val(location.search.substr(1).split("&")[0].split("=")[1]);

    $("input:radio[name='checkRadios']").on('change', function() {
        if ($("input:radio[name='checkRadios']:checked").attr('id') === "checkOption1") {
            $uploadFile.removeAttr('disabled');
            $typeContainer.hide();
            $submitBtn.show();
            $consultationBtn.hide();
        } else if ($("input:radio[name='checkRadios']:checked").attr('id') === "checkOption2") {
            $uploadFile.attr('disabled', 'disabled');
            $typeContainer.show();
            $submitBtn.show();
            $consultationBtn.hide();
        } else {
            $uploadFile.attr('disabled', 'disabled');
            $typeContainer.hide();
            $submitBtn.hide();
            $consultationBtn.show();
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

    $consultationBtn = $("#consultationBtn");
    $consultationBtn.on('click', function() {
        location.href = "addConsult.html?id=" + $id.val();
    });
});
