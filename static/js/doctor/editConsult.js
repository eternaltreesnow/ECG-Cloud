$(function() {
    var $selectDoc;
    var $datetimepicker;
    var $submitBtn, $submitModal;

    var ids = [2, 21];
    initialMenuTreeByIds(ids);

    $selectDoc = $("#selectDoc");
    $selectDoc.multiselect({
        search: {
            left: '<input type="text" name="q" class="form-control" placeholder="Search...">'
        }
    });

    $submitModal = $("#submitModal");
    $submitBtn = $("#submitBtn");
    $submitBtn.on('click', function() {
        $submitModal.modal({
            'backdrop': "static",
            'show': true
        });
    });
});
