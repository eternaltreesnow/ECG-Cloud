$(function() {
    var $submitBtn, $submitModal;

    var ids = [2];
    initialMenuTreeByIds(ids);

    $submitBtn = $("#submitBtn");
    $submitModal = $("#submitModal");
    $submitBtn.on('click', function() {
        $submitModal.modal('show');
    });
});
