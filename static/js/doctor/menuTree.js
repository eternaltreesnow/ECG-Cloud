/**
 * Define menu tree node data of Hospital module
 */
var menuTreeNodes = [{
    id: 1,
    text: "任务管理",
    url: "",
    status: "",
    isparent: true,
    target: "task-drop",
    nodes: [{
        id: 11,
        text: "待审核任务",
        url: "uncheckTaskManage.html",
        status: "",
        nodes: []
    }, {
        id: 12,
        text: "所有任务",
        url: "",
        status: "",
        nodes: []
    }]
}, {
    id: 2,
    text: "会诊管理",
    url: "",
    status: "",
    isparent: true,
    target: "checklist-drop",
    nodes: [{
        id: 21,
        text: "发起的会诊",
        url: "initConsultManage.html",
        status: "",
        nodes: []
    }, {
        id: 22,
        text: "参加的会诊",
        url: "joinConsultManage.html",
        status: "",
        nodes: []
    }]
}, {
    id: 3,
    text: "我的技师",
    url: "techManage.html",
    status: "",
    nodes: []
}, {
    id: 4,
    text: "系统设置",
    url: "setting.html",
    status: "",
    nodes: []
}];
var setActiveNodes = function(id, nodes) {
    if (nodes.length == 0) {
        return;
    } else {
        nodes.map(function(node) {
            if (node.id == id) {
                node.status = "active";
            }
            setActiveNodes(id, node.nodes);
        });
    }
}
var initialMenuTreeByIds = function(ids) {
    ids.map(function(id) {
        setActiveNodes(id, menuTreeNodes);
    });
    React.render(
        React.createElement(MenuTree, {
            data: menuTreeNodes
        }),
        document.getElementById("menu")
    );
}
