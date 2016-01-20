/**
 * Define menu tree node data of Hospital module
 */
var menuTreeNodes = [{
    id: 1,
    text: "上传数据",
    url: "uploadFile.html",
    status: "",
    nodes: []
}, {
    id: 2,
    text: "检查单管理",
    url: "",
    status: "",
    isparent: true,
    target: "task-drop",
    nodes: [{
        id: 21,
        text: "全部检查单",
        url: "checklistManage.html",
        status: "",
        nodes: []
    }, {
        id: 22,
        text: "未完成检查单",
        url: "unfinishedChecklist.html",
        status: "",
        nodes: []
    }, {
        id: 23,
        text: "已完成检查单",
        url: "finishedChecklist.html",
        status: "",
        nodes: []
    }]
}, {
    id: 3,
    text: "病人管理",
    url: "patientManage.html",
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
