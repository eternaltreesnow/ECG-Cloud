$(function() {
    var $taskTable, $latestTable, $lastWeekTable;

    var tempcolumn = [
        {"data": "id"},
        {"data": "Id"},
        {"data": "name"},
        {"data": "sex"},
        {"data": "age"},
        {"data": "type"},
        {"data": "hospital"},
        {"data": "checktype"},
        {"data": "tech"},
        {"data": "date"},
        {"data": ""}
    ];

    var tempdata = [
        {
            "id" : "01",
            "Id" : "445000********0000",
            "name" : "张三",
            "sex" : "男",
            "age" : "71",
            "type" : "动态心电",
            "hospital" : "基层医院1",
            "checktype" : "初审",
            "tech" : "技师1",
            "date" : "2015-11-19 15:30"
        },
        {
            "id" : "02",
            "Id" : "445000********0000",
            "name" : "张三",
            "sex" : "男",
            "age" : "71",
            "type" : "动态心电",
            "hospital" : "基层医院1",
            "checktype" : "初审",
            "tech" : "技师1",
            "date" : "2015-11-19 15:30"
        },
        {
            "id" : "03",
            "Id" : "445000********0000",
            "name" : "张三",
            "sex" : "男",
            "age" : "71",
            "type" : "动态心电",
            "hospital" : "基层医院1",
            "checktype" : "初审",
            "tech" : "技师1",
            "date" : "2015-11-19 15:30"
        },
        {
            "id" : "04",
            "Id" : "445000********0000",
            "name" : "张三",
            "sex" : "男",
            "age" : "71",
            "type" : "动态心电",
            "hospital" : "基层医院1",
            "checktype" : "初审",
            "tech" : "技师1",
            "date" : "2015-11-19 15:30"
        },
        {
            "id" : "05",
            "Id" : "445000********0000",
            "name" : "张三",
            "sex" : "男",
            "age" : "71",
            "type" : "动态心电",
            "hospital" : "基层医院1",
            "checktype" : "重审",
            "tech" : "技师1",
            "date" : "2015-11-19 15:30"
        },
        {
            "id" : "06",
            "Id" : "445000********0000",
            "name" : "张三",
            "sex" : "男",
            "age" : "71",
            "type" : "动态心电",
            "hospital" : "基层医院1",
            "checktype" : "重审",
            "tech" : "技师1",
            "date" : "2015-11-19 15:30"
        }
    ];

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
        columnDefs: [
            {
                "targets" : -1,
                "data" : null,
                "defaultContent" : '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="recheck">审核</a>'
            }
        ],
        pagingType: "full_numbers",
        dom: 'rtl<"ecg-table-paginate"p>'
    });

    $latestTable = $("#latestTable");
    $latestTable.DataTable({
        searching: false,
        processing: true,
        language: {
            "processing": "数据加载中, 请稍后...",
            "zeroRecords": "记录数为0...",
            "emptyTable":  "记录数为0..."
        },
        data: tempdata,
        columns: tempcolumn,
        columnDefs: [
            {
                "targets" : -1,
                "data" : null,
                "defaultContent" : '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="recheck">审核</a>'
            }
        ],
        pagingType: "full_numbers",
        dom: 'rt'
    });

    $lastWeekTable = $("#lastWeekTable");
    $lastWeekTable.DataTable({
        searching: false,
        processing: true,
        language: {
            "processing": "数据加载中, 请稍后...",
            "zeroRecords": "记录数为0...",
            "emptyTable":  "记录数为0..."
        },
        data: tempdata,
        columns: tempcolumn,
        columnDefs: [
            {
                "targets" : -1,
                "data" : null,
                "defaultContent" : '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="check">审核</a>'
            }
        ],
        pagingType: "full_numbers",
        dom: 'rt'
    });

    $linkCheck = $('[data-link="check"]');
    $linkCheck.on('click', function() {
        var $this = $(this);
        var id = $this.parents("tr").children(":first").html();
        location.href = "uncheckTaskDetails.html?id=" + id;
    });

    $linkRecheck = $('[data-link="recheck"]');
    $linkRecheck.on('click', function() {
        var $this = $(this);
        var id = $this.parents("tr").children(":first").html();
        location.href = "recheckTaskDetails.html?id=" + id;
    });
});
