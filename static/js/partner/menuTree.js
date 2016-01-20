/**
 * Define menu tree node data of Hospital module
 */
var menuTreeNodes = [{
    id: 1,
    text: "医生团队管理",
    url: "",
    status: "",
    isparent: true,
    target: "team-drop",
    nodes: [{
        id: 11,
        text: "医生管理",
        url: "doctorManage.html",
        status: "",
        nodes: []
    }, {
        id: 12,
        text: "技师管理",
        url: "technicianManage.html",
        status: "",
        nodes: []
    }, {
        id: 13,
        text: "团队管理",
        url: "teamManage.html",
        status: "",
        nodes: []
    }]
}, {
    id: 2,
    text: "契约管理",
    url: "contractManage.html",
    status: "",
    nodes: []
}, {
    id: 3,
    text: "检查单管理",
    url: "checklistManage.html",
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
