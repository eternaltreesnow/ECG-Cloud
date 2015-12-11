$(function() {
    var $selectDoc;
    var $datetimepicker;
    var $submitBtn, $submitModal;

    var $inputCheckId;
    $inputCheckId = $("#inputCheckId");
    var id = location.search.substr(1).split("&")[0].split("=")[1];
    if(id != null) {
        $inputCheckId.val(id);
        $inputCheckId.attr('disabled', 'disabled');
    } else {
        $inputCheckId.val('');
        $inputCheckId.removeAttr('disabled', 'disabled');
    }


    $selectDoc = $("#selectDoc");
    $selectDoc.multiselect({
        search: {
            left: '<input type="text" name="q" class="form-control" placeholder="Search...">'
        },
        right: '#selectDoc_to',
        rightAll: '#multi_rightAll',
        rightSelected: '#multi_rightSelected',
        leftSelected: '#multi_leftSelected',
        leftAll: '#multi_leftAll'
    });

    $submitModal = $("#submitModal");
    $submitBtn = $("#submitBtn");
    $submitBtn.on('click', function() {
        $submitModal.modal({
            'backdrop' : "static",
            'show' : true
        });
    });
});
