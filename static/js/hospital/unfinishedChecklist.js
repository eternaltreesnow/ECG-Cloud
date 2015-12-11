$(function() {
    var $checklistTable;

    var tempdata = [
        {
            "id" : "01",
            "No" : "10001",
            "ID" : "445000********0000",
            "name" : "张三",
            "partner" : "合伙人1",
            "operator" : "操作员1",
            "status" : "未处理",
            "updatedate" : "2015-11-19 15:30",
            "edit" : '<a href="#" class="btn btn-warning btn-xs">撤销</a>'
        },
        {
            "id" : "02",
            "No" : "10001",
            "ID" : "445000********0000",
            "name" : "张三",
            "partner" : "合伙人1",
            "operator" : "操作员1",
            "status" : "未处理",
            "updatedate" : "2015-11-19 15:30",
            "edit" : '<a href="#" class="btn btn-warning btn-xs">撤销</a>'
        },
        {
            "id" : "03",
            "No" : "10001",
            "ID" : "445000********0000",
            "name" : "张三",
            "partner" : "合伙人1",
            "operator" : "操作员1",
            "status" : "处理中",
            "updatedate" : "2015-11-19 15:30",
            "edit" : ''
        },
        {
            "id" : "04",
            "No" : "10001",
            "ID" : "445000********0000",
            "name" : "张三",
            "partner" : "合伙人1",
            "operator" : "操作员1",
            "status" : "处理中",
            "updatedate" : "2015-11-19 15:30",
            "edit" : ''
        }
    ];

    var tempcolumn = [
        {"data": "id"},
        {"data": "No"},
        {"data": "ID"},
        {"data": "name"},
        {"data": "partner"},
        {"data": "operator"},
        {"data": "status"},
        {"data": "updatedate"},
        {"data": "edit"}
    ];

    $checklistTable = $("#checklistTable");
    $checklistTable.DataTable({
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
