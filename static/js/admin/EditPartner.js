$(function() {
    var $inputUsername, $inputPassword, $rePassword, $selectStatus;
    var $inputManager, $inputIdentify, $inputContact, $inputEmail, $inputArea;

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

    var tempdata = {
        "username" : "username1",
        "manager" : "张奇峰",
        "identify" : "440003********4344",
        "contact" : "13300000000",
        "email" : "xxxxx@qq.com",
        "area" : "广东省广州市番禺区大学城外环东路112号"
    };

    $inputUsername.val(tempdata['username']);
    $inputManager.val(tempdata['manager']);
    $inputIdentify.val(tempdata['identify']);
    $inputContact.val(tempdata['contact']);
    $inputEmail.val(tempdata['email']);
    $inputArea.val(tempdata['area']);
});
