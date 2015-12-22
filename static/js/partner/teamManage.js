$(function() {
    var $teamTable;
    var $linkEdit, $linkDelete;

    var tempdata = [
        {
            "id" : "01",
            "teamname" : "张医生团队",
            "ID" : "440022********0000",
            "user" : "张三",
            "number" : "10",
            "status" : "正常使用"
        },
        {
            "id" : "02",
            "teamname" : "郑医生团队",
            "ID" : "440022********0000",
            "user" : "郑华",
            "number" : "12",
            "status" : "正常使用"
        },
        {
            "id" : "03",
            "teamname" : "黄医生团队",
            "ID" : "440022********0000",
            "user" : "张三",
            "number" : "12",
            "status" : "正常使用"
        },
        {
            "id" : "04",
            "teamname" : "teamname1",
            "ID" : "440022********0000",
            "user" : "张三",
            "number" : "12",
            "status" : "正常使用"
        },
        {
            "id" : "05",
            "teamname" : "teamname1",
            "ID" : "440022********0000",
            "user" : "张三",
            "number" : "12",
            "status" : "正常使用"
        },
        {
            "id" : "06",
            "teamname" : "teamname1",
            "ID" : "440022********0000",
            "user" : "张三",
            "number" : "12",
            "status" : "正常使用"
        },
        {
            "id" : "07",
            "teamname" : "teamname1",
            "ID" : "440022********0000",
            "user" : "张三",
            "number" : "12",
            "status" : "正常使用"
        },
        {
            "id" : "08",
            "teamname" : "teamname1",
            "ID" : "440022********0000",
            "user" : "张三",
            "number" : "12",
            "status" : "正常使用"
        }
    ];

    var tempcolumn = [
        {"data": "id"},
        {"data": "teamname"},
        {"data": "user"},
        {"data": "ID"},
        {"data": "number"},
        {"data": "status"},
        {"data": ""}
    ];

    $teamTable = $("#teamTable");
    $teamTable.DataTable({
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
            "defaultContent" : '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="edit">管理团队</a>'
        }]
    });

    $linkEdit = $('[data-link="edit"]');

    $linkEdit.on('click', function() {
        var $this = $(this);
        var id = $this.parents("tr").children(":first").html();
        location.href = "teamDetails.html?id=" + id;
    });
});
