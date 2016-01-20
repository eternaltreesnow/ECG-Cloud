$(function() {
    var $submitBtn, $addBtn, $searchBtn, $addPatientBtn;
    var $inputTitle, $selectDoc, $inputFile;
    var $submitModal, $addModal, $searchModal;
    var $datetimepicker;
    var $searchKeyWord, $inputId;

    $submitBtn = $("#submitBtn");
    $inputTitle = $("#inputTitle");
    $selectDoc = $("#selectDoc");
    $inputFile = $("#inputFile");
    $submitModal = $("#submitModal");

    var ids = [1];
    initialMenuTreeByIds(ids);

    $submitBtn.on('click', function() {
        $submitModal.modal({
            backdrop: 'static',
            show: true
        });
    });

    $datetimepicker = $("#datetimepicker");
    $datetimepicker.datetimepicker({
        sideBySide: true,
        format: 'YYYY/MM/DD HH:mm'
    });

    $addModal = $("#addModal");
    $addBtn = $("#addBtn");
    $addBtn.on('click', function() {
        $addModal.modal('show');
    });

    $searchKeyWord = $("#searchKeyWord");
    $inputId = $("#inputId");
    $searchModal = $("#searchModal");
    $searchBtn = $("#searchBtn");
    $searchBtn.on('click', function() {
        $searchKeyWord.html($inputId.val());
        $searchModal.modal('show');
    });

    $addPatientBtn = $("#addPatientBtn");
    $addPatientBtn.on('click', function() {
        $searchModal.modal('hide');
        $addModal.modal('show');
    });
});
