/**
 * Admin module menu tree node data
 * @type {Array}
 */
var menuTreeNodes = [{
    id: 1,
    text: "合伙人管理",
    url: "partnerManage.html",
    status: "",
    nodes: []
}, {
    id: 2,
    text: "基层医院管理",
    url: "hospitalManage.html",
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
