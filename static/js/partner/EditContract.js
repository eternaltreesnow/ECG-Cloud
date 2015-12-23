$(function() {
    var $beginDatetimepicker, $endDatetimepicker;
    var $inputHospital, $selectType, $inputManager, $inputIdentify, $inputContact, $inputEmail, $inputArea;
    var $inputPrice, $selectCheckType, $inputLimit;

    $inputHospital = $("#inputHospital");
    $selectType = $("#selectType");
    $inputManager = $("#inputManager");
    $inputIdentify = $("#inputIdentify");
    $inputContact = $("#inputContact");
    $inputEmail = $("#inputEmail");
    $inputArea = $("#inputArea");
    $inputPrice = $("#inputPrice");
    $selectCheckType = $("#selectCheckType");
    $inputLimit = $("#inputLimit");

    /**
     * [$beginDatetimepicker 排期起始时间选择器]
     * [$endDatetimepicker 排期结束时间选择器]
     * dp.change 通过监听change事件设置结束时间大于起始时间
     */
    $beginDatetimepicker = $("#beginDatetimepicker");
    $endDatetimepicker = $("#endDatetimepicker");
    $beginDatetimepicker.datetimepicker({
        sideBySide: true,
        format: 'YYYY-MM-DD HH:mm',
        defaultDate: '2015-12-03 15:39'
    });
    $endDatetimepicker.datetimepicker({
        sideBySide: true,
        format: 'YYYY-MM-DD HH:mm',
        defaultDate: '2016-12-03 15:39',
        useCurrent: false
    });
    $beginDatetimepicker.on("dp.change", function(e) {
        $endDatetimepicker.data("DateTimePicker").minDate(e.date);
    });
    $endDatetimepicker.on("dp.change", function(e) {
        $beginDatetimepicker.data("DateTimePicker").maxDate(e.date);
    });

    var tempdata = {
        "hospital" : "小谷围社区医院",
        "manager" : "张经理",
        "identify" : "440440********0000",
        "contact" : "13300000000",
        "email" : "xxxxx@qq.com",
        "area" : "广东省广州市番禺区小谷围街道",
        "price" : "30",
        "limit" : "20"
    };

    $inputHospital.val(tempdata['hospital']);
    $inputManager.val(tempdata['manager']);
    $inputIdentify.val(tempdata['identify']);
    $inputContact.val(tempdata['contact']);
    $inputEmail.val(tempdata['email']);
    $inputArea.val(tempdata['area']);
    $inputPrice.val(tempdata['price']);
    $inputLimit.val(tempdata['limit']);

});
