$(function() {
    var $inputUsername, $inputPassword, $rePassword, $selectStatus;
    var $inputName, $selectGrade, $selectLevel, $inputManager, $inputIdentify, $inputContact, $inputPostcode, $inputArea, $inputIntro;

    $inputUsername = $("#inputUsername");
    $inputPassword = $("#inputPassword");
    $rePassword = $("#rePassword");
    $selectStatus = $("#selectStatus");
    $inputName = $("#inputName");
    $selectGrade = $("#selectGrade");
    $selectLevel = $("#selectLevel");
    $inputManager = $("#inputManager");
    $inputIdentify = $("#inputIdentify");
    $inputContact = $("#inputContact");
    $inputPostcode = $("#inputPostcode");
    $inputArea = $("#inputArea");
    $inputIntro = $("#inputIntro");

    var tempdata = {
        "username" : "username1",
        "name" : "小谷围社区医院",
        "manager" : "张奇峰",
        "identify" : "440003********4344",
        "contact" : "13300000000",
        "postcode" : "510006",
        "area" : "广东省广州市番禺区大学城外环东路112号",
        "intro" : "坐落于大学城的小谷围社区医院，服务覆盖大学城中环东路一带居民，覆盖人数约为24000人。"
    };

    $inputUsername.val(tempdata['username']);
    $inputName.val(tempdata['name']);
    $inputManager.val(tempdata['manager']);
    $inputIdentify.val(tempdata['identify']);
    $inputContact.val(tempdata['contact']);
    $inputPostcode.val(tempdata['postcode']);
    $inputArea.val(tempdata['area']);
    $inputIntro.text(tempdata['intro']);
});
