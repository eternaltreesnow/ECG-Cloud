var MenuTree = React.createClass({
    displayName: "MenuTree",
    render: function() {
        return (
            React.createElement(MenuNodes, {
                data: this.props.data
            })
        );
    }
});

var MenuChildNode = React.createClass({
    displayName: "MenuChildNode",
    render: function() {
        return (
            React.createElement("li", {
                    className: this.props.data.status
                },
                React.createElement("a", {
                    href: this.props.data.url
                }, this.props.data.text)
            )
        );
    }
});

var MenuParentNode = React.createClass({
    displayName: "MenuParentNode",
    render: function() {
        var target = "#" + this.props.data.target;
        var collapse = "collapse";
        if (this.props.data.status == "active") {
            collapse = "collapse in";
        }
        return (
            React.createElement("li", null,
                React.createElement("a", {
                        href: "javascript:void(0);",
                        "data-toggle": "collapse",
                        "data-target": target
                    },
                    React.createElement("span", null, this.props.data.text),
                    React.createElement("span", {
                        className: "caret"
                    })
                ),
                React.createElement(MenuNodes, {
                    data: this.props.data.nodes,
                    target: this.props.data.target,
                    collapse: collapse
                })
            )
        );
    }
});

var MenuNodes = React.createClass({
    displayName: "MenuNodes",
    render: function() {
        if (this.props.target == null) {
            return (
                React.createElement("ul", {
                        className: "nav side-nav"
                    },
                    this.props.data.map(function(node) {
                        if (node.isparent) {
                            return (React.createElement(MenuParentNode, {
                                data: node
                            }));
                        } else {
                            return (React.createElement(MenuChildNode, {
                                data: node
                            }));
                        }
                    })
                )
            );
        } else {
            return (
                React.createElement("ul", {
                        id: this.props.target,
                        className: this.props.collapse
                    },
                    this.props.data.map(function(node) {
                        if (node.isparent) {
                            return (React.createElement(MenuParentNode, {
                                data: node
                            }));
                        } else {
                            return (React.createElement(MenuChildNode, {
                                data: node
                            }));
                        }
                    })
                )
            );
        }
    }
});
