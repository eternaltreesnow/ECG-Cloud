$(function() {
    var $inputManager, $inputIdentify, $inputContact, $inputEmail, $inputArea, $inputHousehold;
    var $inputSchool, $inputMajor,

    $inputManager = $("#inputManager");
    $inputIdentify = $("#inputIdentify");
    $inputContact = $("#inputContact");
    $inputEmail = $("#inputEmail");
    $inputArea = $("#inputArea");
    $inputHousehold = $("#inputHousehold");
    $inputSchool = $("#inputSchool");
    $inputMajor = $("#inputMajor");

    var tempdata = {
        "manager" : "李技师",
        "identify" : "440003********4344",
        "contact" : "13300000000",
        "email" : "xxxxx@qq.com",
        "area" : "广东省广州市番禺区大学城外环东路112号",
        "household" : "广东广州",
        "school" : "南方医科大学",
        "major" : "临床医学"
    };

    $inputManager.text(tempdata['manager']);
    $inputIdentify.text(tempdata['identify']);
    $inputContact.text(tempdata['contact']);
    $inputEmail.text(tempdata['email']);
    $inputArea.text(tempdata['area']);
    $inputHousehold.text(tempdata['household']);
    $inputSchool.text(tempdata['school']);
    $inputMajor.text(tempdata['major']);
});
