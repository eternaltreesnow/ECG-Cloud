$(function() {
    var $submitBtn, $submitModal;

    var ids = [4];
    initialMenuTreeByIds(ids);

    $submitBtn = $("#submitBtn");
    $submitModal = $("#submitModal");
    $submitBtn.on('click', function() {
        $submitModal.modal('show');
    });
});
