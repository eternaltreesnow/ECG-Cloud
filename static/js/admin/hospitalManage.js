$(function() {
    var $hospitalTable;
    var $linkEdit, $linkDelete;

    var tempdata = [
        {
            "id" : "01",
            "username" : "hospital1",
            "ID" : "440022********0000",
            "manager" : "张院长",
            "time" : "2015-12-03 15:39",
            "status" : "正常使用"
        },
        {
            "id" : "02",
            "username" : "hospital2",
            "ID" : "440022********0000",
            "manager" : "李院长",
            "time" : "2015-12-03 15:39",
            "status" : "正常使用"
        },
        {
            "id" : "03",
            "username" : "hospital3",
            "ID" : "440022********0000",
            "manager" : "张三",
            "time" : "2015-12-03 15:39",
            "status" : "正常使用"
        },
        {
            "id" : "04",
            "username" : "hospital4",
            "ID" : "440022********0000",
            "manager" : "张三",
            "time" : "2015-12-03 15:39",
            "status" : "正常使用"
        },
        {
            "id" : "05",
            "username" : "hospital5",
            "ID" : "440022********0000",
            "manager" : "张三",
            "time" : "2015-12-03 15:39",
            "status" : "正常使用"
        },
    ];

    var tempcolumn = [
        {"data": "id"},
        {"data": "username"},
        {"data": "manager"},
        {"data": "ID"},
        {"data": "time"},
        {"data": "status"},
        {"data": ""}
    ];

    $hospitalTable = $("#hospitalTable");
    $hospitalTable.DataTable({
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
        dom: 'rtl<"ecg-table-paginate"p>',
        columnDefs: [{
            "targets" : -1,
            "data" : null,
            "defaultContent" : '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="edit">编辑</a>' +
                               '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="stop">停用</a>' +
                               '<a href="javascript:void(0);" class="btn btn-default btn-xs" data-link="delete">删除</a>'
        }]
    });

    $linkEdit = $('[data-link="edit"]');
    $linkStop = $('[data-link="stop"]');
    $linkDelete = $('[data-link="delete"]');

    $linkEdit.on('click', function() {
        var $this = $(this);
        var id = $this.parents("tr").children(":first").html();
        location.href = "EditPatient.html?id=" + id;
    });

    $linkStop.on('click', function() {

    });
});
