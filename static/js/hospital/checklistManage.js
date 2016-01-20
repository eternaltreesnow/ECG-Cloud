$(function() {
    var $checklistTable;

    var ids = [2, 21];
    initialMenuTreeByIds(ids);

    var tempdata = [{
        "id": "01",
        "No": "10001",
        "Id": "445000********0000",
        "name": "张三",
        "partner": "合伙人1",
        "operator": "操作员1",
        "status": "处理中",
        "updatedate": "2015-11-23 19:30",
        "edit": ''
    }, {
        "id": "02",
        "No": "10001",
        "Id": "445000********0000",
        "name": "张三",
        "partner": "合伙人1",
        "operator": "操作员1",
        "status": "处理中",
        "updatedate": "2015-11-23 19:30",
        "edit": ''
    }, {
        "id": "03",
        "No": "10001",
        "Id": "445000********0000",
        "name": "张三",
        "partner": "合伙人1",
        "operator": "操作员1",
        "status": "已完成",
        "updatedate": "2015-11-23 19:30",
        "edit": '<a href="#" class="btn btn-primary btn-xs">下载报告</a>'
    }, {
        "id": "04",
        "No": "10001",
        "Id": "445000********0000",
        "name": "张三",
        "partner": "合伙人1",
        "operator": "操作员1",
        "status": "未分析",
        "updatedate": "2015-11-23 19:30",
        "edit": '<a href="#" class="btn btn-warning btn-xs">撤销</a>'
    }];

    var tempcolumn = [{
        "data": "id"
    }, {
        "data": "No"
    }, {
        "data": "Id"
    }, {
        "data": "name"
    }, {
        "data": "partner"
    }, {
        "data": "operator"
    }, {
        "data": "status"
    }, {
        "data": "updatedate"
    }, {
        "data": "edit"
    }];

    $checklistTable = $("#checklistTable");
    $checklistTable.DataTable({
        searching: false,
        processing: true,
        language: {
            "processing": "数据加载中, 请稍后...",
            "zeroRecords": "记录数为0...",
            "emptyTable": "记录数为0...",
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
