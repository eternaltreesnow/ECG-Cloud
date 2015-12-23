$(function() {
    var $submitBtn, $submitModal;

    $submitBtn = $("#submitBtn");
    $submitModal = $("#submitModal");
    $submitBtn.on('click', function() {
        $submitModal.modal('show');
    });
});
