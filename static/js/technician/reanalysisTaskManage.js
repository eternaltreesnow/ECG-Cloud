$(function() {
    var $taskTable;

    var ids = [1, 13];
    initialMenuTreeByIds(ids);

    var tempcolumn = [{
        "data": "id"
    }, {
        "data": "name"
    }, {
        "data": "type"
    }, {
        "data": "checkdate"
    }, {
        "data": "errortype"
    }, {
        "data": "edit"
    }];

    var tempdata = [{
        "id": "01",
        "name": "检查单1",
        "type": "动态心电",
        "checkdate": "2015-11-19 15:30",
        "errortype": "数据筛选错误",
        "edit": '<a href="reanalysisTaskDetails.html" class="btn btn-primary btn-xs">详情</a>'
    }, {
        "id": "02",
        "name": "检查单1",
        "type": "动态心电",
        "checkdate": "2015-11-19 15:30",
        "errortype": "数据筛选错误",
        "edit": '<a href="reanalysisTaskDetails.html" class="btn btn-primary btn-xs">详情</a>'
    }, {
        "id": "03",
        "name": "检查单1",
        "type": "动态心电",
        "checkdate": "2015-11-19 15:30",
        "errortype": "数据筛选错误",
        "edit": '<a href="reanalysisTaskDetails.html" class="btn btn-primary btn-xs">详情</a>'
    }, {
        "id": "04",
        "name": "检查单1",
        "type": "动态心电",
        "checkdate": "2015-11-19 15:30",
        "errortype": "数据筛选错误",
        "edit": '<a href="reanalysisTaskDetails.html" class="btn btn-primary btn-xs">详情</a>'
    }, {
        "id": "05",
        "name": "检查单1",
        "type": "动态心电",
        "checkdate": "2015-11-19 15:30",
        "errortype": "数据筛选错误",
        "edit": '<a href="reanalysisTaskDetails.html" class="btn btn-primary btn-xs">详情</a>'
    }, {
        "id": "06",
        "name": "检查单1",
        "type": "动态心电",
        "checkdate": "2015-11-19 15:30",
        "errortype": "数据筛选错误",
        "edit": '<a href="reanalysisTaskDetails.html" class="btn btn-primary btn-xs">详情</a>'
    }, {
        "id": "07",
        "name": "检查单1",
        "type": "动态心电",
        "checkdate": "2015-11-19 15:30",
        "errortype": "数据筛选错误",
        "edit": '<a href="reanalysisTaskDetails.html" class="btn btn-primary btn-xs">详情</a>'
    }];

    $taskTable = $("#taskTable");
    $taskTable.DataTable({
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
