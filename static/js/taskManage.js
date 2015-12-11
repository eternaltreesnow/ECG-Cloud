$(function() {
    var $taskTable;

    var tempdata = [
        {
            "No" : "01",
            "checklistid" : "0101",
            "userid" : "000001",
            "name" : "李先生",
            "hospital" : "中山大学附属第一医院",
            "checktype" : "动态心电图",
            "tech" : "777号技师",
            "status" : "报告未审核",
            "editstatus" : "空闲",
            "date" : "2015-11-19 15:30",
            "edit" : '<a href="#" class="btn btn-primary btn-xs">编辑</a><a href="#" class="btn btn-default btn-xs">详情</a>'
        },
        {
            "No" : "01",
            "checklistid" : "0101",
            "userid" : "000001",
            "name" : "李先生",
            "hospital" : "中山大学附属第一医院",
            "checktype" : "动态心电图",
            "tech" : "777号技师",
            "status" : "报告未审核",
            "editstatus" : "空闲",
            "date" : "2015-11-19 15:30",
            "edit" : '<a href="#" class="btn btn-primary btn-xs">编辑</a><a href="#" class="btn btn-default btn-xs">详情</a>'
        },
        {
            "No" : "01",
            "checklistid" : "0101",
            "userid" : "000001",
            "name" : "李先生",
            "hospital" : "中山大学附属第一医院",
            "checktype" : "动态心电图",
            "tech" : "777号技师",
            "status" : "报告未审核",
            "editstatus" : "空闲",
            "date" : "2015-11-19 15:30",
            "edit" : '<a href="#" class="btn btn-primary btn-xs">编辑</a><a href="#" class="btn btn-default btn-xs">详情</a>'
        },
        {
            "No" : "01",
            "checklistid" : "0101",
            "userid" : "000001",
            "name" : "李先生",
            "hospital" : "中山大学附属第一医院",
            "checktype" : "动态心电图",
            "tech" : "777号技师",
            "status" : "报告未审核",
            "editstatus" : "空闲",
            "date" : "2015-11-19 15:30",
            "edit" : '<a href="#" class="btn btn-primary btn-xs">编辑</a><a href="#" class="btn btn-default btn-xs">详情</a>'
        }
    ];
    var tempcolumn = [
        {"data": "No"},
        {"data": "checklistid"},
        {"data": "userid"},
        {"data": "name"},
        {"data": "hospital"},
        {"data": "checktype"},
        {"data": "tech"},
        {"data": "status"},
        {"data": "editstatus"},
        {"data": "date"},
        {"data": "edit"}
    ];

    /**
     * 初始化表格
     * $checkListTable 检查单表格
     */
    $taskTable = $("#taskTable");
    $taskTable.DataTable({
        searching: false,
        processing: true,
        language: {
            "processing": "数据加载中, 请稍后...",
            "zeroRecords": "记录数为0...",
            "emptyTable":  "记录数为0...",
            "paginate": {
                "first": "首页",
                "previous": "上一页",
                "next": "下一页",
                "last": "尾页"
            },
            "lengthMenu": '每页显示 _MENU_ 条记录'
        },
        data: tempdata,
        columns: tempcolumn,
        pagingType: "full_numbers",
        dom: 'rtl<"ecg-table-paginate"p>'
    });
});
