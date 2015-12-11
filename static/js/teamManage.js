$(function() {
    /* Initial variable
     * variable with $ means the jQuery variable
     */
    var $userTree, $rTreeMenu;
    var $rMenuNation, $rMenuTeam, $rMenuDoc, $rMenuTech;
    var $userid, $pid, $username, $usertype;

    // Initial zTree setting
    var setting = {
        view: {
            dblClickExpand: true,
            showLine: false,
            selectedMulti: false
        },
        data: {
            simpleData: {
                enable: true,
                idKey: "id",
                pIdKey: "pId",
                rootPId: ""
            }
        },
        callback: {
            onClick: zTreeOnClick,
            onRightClick: zTreeOnRightClick
        }
    };
    // Temp data of zTree
    var zNodes = [
        {id: 1, pId: 0, name: "国家级", open: true, iconSkin: "nationicon", type: "nation"},

        {id: 101, pId: 1, name: "省级团队", open: true, iconSkin: "teamicon", type: "team"},

        {id: 101001, pId: 101, name: "王教授", open: true, iconSkin: "docicon", type: "doc"},
        {id: 101001001, pId: 101001, name: "技师1", iconSkin: "techicon", type: "tech"},
        {id: 101001002, pId: 101001, name: "技师2", iconSkin: "techicon", type: "tech"},
        {id: 101001003, pId: 101001, name: "技师3", iconSkin: "techicon", type: "tech"},

        {id: 101002, pId: 101, name: "李教授", open: true, iconSkin: "docicon", type: "doc"},
        {id: 101002001, pId: 101002, name: "技师1", iconSkin: "techicon", type: "tech"},
        {id: 101002002, pId: 101002, name: "技师2", iconSkin: "techicon", type: "tech"},
        {id: 101002003, pId: 101002, name: "技师3", iconSkin: "techicon", type: "tech"},
    ];

    function zTreeOnClick(event, treeId, treeNode) {
        getNodeData(treeNode);
    }

    function getNodeData(treeNode) {
        $userid = $("#userid");
        $pid = $("#pid");
        $username = $("#username");
        $usertype = $("#usertype");
        $userid.html(treeNode["id"]);
        $pid.html(treeNode["pId"]);
        $username.html(treeNode["name"]);
        if(treeNode["type"] === "nation") {
            $usertype.html("国家级");
        } else if(treeNode["type"] === "team") {
            $usertype.html("省级团队");
        } else if(treeNode["type"] === "doc") {
            $usertype.html("医生");
        } else {
            $usertype.html("技师");
        }
    }

    function zTreeOnRightClick(event, treeId, treeNode) {
        $userTree.selectNode(treeNode);
        getNodeData(treeNode);
        if(treeNode) {
            showRTreeMenu(treeNode["type"], event.clientX, event.clientY);
        }
    }

    function showRTreeMenu(type, x, y) {
        $("#rTreeMenu ul").show();
        $rMenuNation = $(".rMenuNation");
        $rMenuTeam = $(".rMenuTeam");
        $rMenuDoc = $(".rMenuDoc");
        $rMenuTech = $(".rMenuTech");
        if(type === "nation") {
            $rMenuNation.show();
            $rMenuTeam.hide();
            $rMenuDoc.hide();
            $rMenuTech.hide();
        } else if(type === "team") {
            $rMenuNation.hide();
            $rMenuTeam.show();
            $rMenuDoc.hide();
            $rMenuTech.hide();
        } else if(type === 'doc') {
            $rMenuNation.hide();
            $rMenuTeam.hide();
            $rMenuDoc.show();
            $rMenuTech.hide();
        } else {
            $rMenuNation.hide();
            $rMenuTeam.hide();
            $rMenuDoc.hide();
            $rMenuTech.show();
        }
        $rTreeMenu.css({
            "top" : y + "px",
            "left" : x + "px",
            "visibility" : "visible"
        });
        $("body").bind('mousedown', onBodyMouseDown);
    }

    function hideRTreeMenu() {
        if($rTreeMenu) {
            $rTreeMenu.css({
                "visibility" : "hidden"
            });
        }
        $("body").unbind("mousedown", onBodyMouseDown);
    }

    function onBodyMouseDown(event) {
        if(!(event.target.id == "rTreeMenu" || $(event.target).parents("#rTreeMenu").length>0)) {
            $rTreeMenu.css({
                "visibility" : "hidden"
            });
        }
    }

    $.fn.zTree.init($("#userTree"), setting, zNodes);
    $userTree = $.fn.zTree.getZTreeObj("userTree");
    $rTreeMenu = $("#rTreeMenu");
});
