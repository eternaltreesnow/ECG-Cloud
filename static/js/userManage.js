$(function(){
    var $userTable;

    var tempdata = [
        {
            "name" : "王医生",
            "jobposition" : "医生",
            "contact" : "18500000000",
            "info3" : "info3info3",
            "info4" : "info4info4",
            "info5" : "info5info5",
            "edit" : '<a href="#" class="btn btn-primary btn-xs">详情</a>'
        },
        {
            "name" : "王医生",
            "jobposition" : "医生",
            "contact" : "18500000000",
            "info3" : "info3info3",
            "info4" : "info4info4",
            "info5" : "info5info5",
            "edit" : '<a href="#" class="btn btn-primary btn-xs">详情</a>'
        },
        {
            "name" : "王医生",
            "jobposition" : "医生",
            "contact" : "18500000000",
            "info3" : "info3info3",
            "info4" : "info4info4",
            "info5" : "info5info5",
            "edit" : '<a href="#" class="btn btn-primary btn-xs">详情</a>'
        },
        {
            "name" : "王医生",
            "jobposition" : "医生",
            "contact" : "18500000000",
            "info3" : "info3info3",
            "info4" : "info4info4",
            "info5" : "info5info5",
            "edit" : '<a href="#" class="btn btn-primary btn-xs">详情</a>'
        },
        {
            "name" : "王医生",
            "jobposition" : "医生",
            "contact" : "18500000000",
            "info3" : "info3info3",
            "info4" : "info4info4",
            "info5" : "info5info5",
            "edit" : '<a href="#" class="btn btn-primary btn-xs">详情</a>'
        },
        {
            "name" : "王医生",
            "jobposition" : "医生",
            "contact" : "18500000000",
            "info3" : "info3info3",
            "info4" : "info4info4",
            "info5" : "info5info5",
            "edit" : '<a href="#" class="btn btn-primary btn-xs">详情</a>'
        }
    ];
    var tempcolumn = [
        {"data": "name"},
        {"data": "jobposition"},
        {"data": "contact"},
        {"data": "info3"},
        {"data": "info4"},
        {"data": "info5"},
        {"data": "edit"}
    ];
    /**
     * 初始化表格
     * $userTable 用户表格
     */
    $userTable = $("#userTable");
    $userTable.DataTable({
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
