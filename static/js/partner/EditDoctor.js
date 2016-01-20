$(function() {
    var $inputUsername, $inputPassword, $rePassword, $selectStatus;
    var $inputManager, $inputIdentify, $inputContact, $inputEmail, $inputArea, $inputHousehold;
    var $inputHospital, $inputOffice, $inputJob, $inputTechTitle, $inputQual, $inputQualTime, $inputPract, $inputPractTime, $inputSchool, $inputMajor,

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
    $inputHospital = $("#inputHospital");
    $inputOffice = $("#inputOffice");
    $inputJob = $("#inputJob");
    $inputTechTitle = $("#inputTechTitle");
    $inputQual = $("#inputQual");
    $inputQualTime = $("#inputQualTime");
    $inputPract = $("#inputPract");
    $inputPractTime = $("#inputPractTime");
    $inputSchool = $("#inputSchool");
    $inputMajor = $("#inputMajor");

    var ids = [1, 11];
    initialMenuTreeByIds(ids);

    var tempdata = {
        "username": "username1",
        "manager": "张教授",
        "identify": "440003********4344",
        "contact": "13300000000",
        "email": "xxxxx@qq.com",
        "area": "广东省广州市番禺区大学城外环东路112号",
        "household": "广东广州",
        "hospital": "中山大学附属第一医院",
        "office": "心血管内科",
        "job": "副主任医师",
        "techtitle": "",
        "qual": "xxxxxxxxxxxxxxxx",
        "qualtime": "1995-07-15",
        "pract": "xxxxxxxxxxxxxxx",
        "practtime": "2000-08-19",
        "school": "中山医学院",
        "major": "临床医学"
    };

    $inputUsername.val(tempdata['username']);
    $inputManager.val(tempdata['manager']);
    $inputIdentify.val(tempdata['identify']);
    $inputContact.val(tempdata['contact']);
    $inputEmail.val(tempdata['email']);
    $inputArea.val(tempdata['area']);
    $inputHousehold.val(tempdata['household']);
    $inputHospital.val(tempdata['hospital']);
    $inputOffice.val(tempdata['office']);
    $inputJob.val(tempdata['job']);
    $inputTechTitle.val(tempdata['techtitle']);
    $inputQual.val(tempdata['qual']);
    $inputQualTime.val(tempdata['qualtime']);
    $inputPract.val(tempdata['pract']);
    $inputPractTime.val(tempdata['practtime']);
    $inputSchool.val(tempdata['school']);
    $inputMajor.val(tempdata['major']);
});
