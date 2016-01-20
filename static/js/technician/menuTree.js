/**
 * Define menu tree node data of Technician module
 */
var menuTreeNodes = [{
    id: 1,
    text: "检查单管理",
    url: "",
    status: "",
    isparent: true,
    target: "task-drop",
    nodes: [{
        id: 11,
        text: "可接任务",
        url: "unoccupiedTaskManage.html",
        status: "",
        nodes: []
    }, {
        id: 12,
        text: "已接任务",
        url: "occupiedTaskManage.html",
        status: "",
        nodes: []
    }, {
        id: 13,
        text: "重分析任务",
        url: "reanalysisTaskManage.html",
        status: "",
        nodes: []
    }, {
        id: 14,
        text: "已完成任务",
        url: "finishedTaskManage.html",
        status: "",
        nodes: []
    }]
}, {
    id: 2,
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
