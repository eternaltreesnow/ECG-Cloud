$(function() {
    var $inputUsername, $inputPassword, $rePassword, $selectStatus;
    var $inputManager, $inputIdentify, $inputContact, $inputEmail, $inputArea, $inputHousehold;
    var $inputSchool, $inputMajor,

        $inputUsername = $("#inputUsername");
    $inputPassword = $("#inputPassword");
    $rePassword = $("#rePassword");
    $selectStatus = $("#selectStatus");
    $inputManager = $("#inputManager");
    $inputIdentify = $("#inputIdentify");
    $inputContact = $("#inputContact");
    $inputEmail = $("#inputEmail");
    $inputArea = $("#inputArea");
    $inputHousehold = $("#inputHousehold");
    $inputSchool = $("#inputSchool");
    $inputMajor = $("#inputMajor");

    var ids = [1, 12];
    initialMenuTreeByIds(ids);

    var tempdata = {
        "username": "username1",
        "manager": "李技师",
        "identify": "440003********4344",
        "contact": "13300000000",
        "email": "xxxxx@qq.com",
        "area": "广东省广州市番禺区大学城外环东路112号",
        "household": "广东广州",
        "school": "南方医科大学",
        "major": "临床医学"
    };

    $inputUsername.val(tempdata['username']);
    $inputManager.val(tempdata['manager']);
    $inputIdentify.val(tempdata['identify']);
    $inputContact.val(tempdata['contact']);
    $inputEmail.val(tempdata['email']);
    $inputArea.val(tempdata['area']);
    $inputHousehold.val(tempdata['household']);
    $inputSchool.val(tempdata['school']);
    $inputMajor.val(tempdata['major']);
});
