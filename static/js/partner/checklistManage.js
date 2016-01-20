$(function() {
    var $oldestTable, $currentTable;
    var $linkDist, $distModal, $distId, $distModalBtn;
    var $linkRecord, $recordModal, $recordId;

    var ids = [3];
    initialMenuTreeByIds(ids);

    var oldestdata = [{
        "id": "12",
        "name": "张三",
        "age": "71",
        "hospital": "小谷围社区医院",
        "type": "动态心电",
        "time": "2015-11-01 10:45",
        "team": "张教授团队"
    }, {
        "id": "25",
        "name": "王强",
        "age": "65",
        "hospital": "小谷围社区医院",
        "type": "动态心电",
        "time": "2015-11-11 14:28",
        "team": "李教授团队"
    }, {
        "id": "27",
        "name": "李梅美",
        "age": "55",
        "hospital": "小谷围社区医院",
        "type": "动态心电",
        "time": "2015-11-12 08:03",
        "team": "郑教授团队"
    }, {
        "id": "31",
        "name": "肖武贤",
        "age": "59",
        "hospital": "小谷围社区医院",
        "type": "动态心电",
        "time": "2015-11-21 10:45",
        "team": "张教授团队"
    }, ];

    var currentdata = [{
        "id": "45",
        "name": "张三",
        "age": "71",
        "hospital": "小谷围社区医院",
        "type": "动态心电",
        "time": "2015-12-01 10:45",
        "team": "张教授团队"
    }, {
        "id": "46",
        "name": "王强",
        "age": "65",
        "hospital": "小谷围社区医院",
        "type": "动态心电",
        "time": "2015-12-04 14:28",
        "team": "李教授团队"
    }, {
        "id": "47",
        "name": "李梅美",
        "age": "55",
        "hospital": "小谷围社区医院",
        "type": "动态心电",
        "time": "2015-12-12 08:03",
        "team": "郑教授团队"
    }, {
        "id": "48",
        "name": "肖武贤",
        "age": "59",
        "hospital": "小谷围社区医院",
        "type": "动态心电",
        "time": "2015-12-21 10:45",
        "team": "张教授团队"
    }, {
        "id": "48",
        "name": "肖武贤",
        "age": "59",
        "hospital": "小谷围社区医院",
        "type": "动态心电",
        "time": "2015-12-05 10:45",
        "team": "张教授团队"
    }, {
        "id": "48",
        "name": "肖武贤",
        "age": "59",
        "hospital": "小谷围社区医院",
        "type": "动态心电",
        "time": "2015-12-06 10:45",
        "team": "张教授团队"
    }, ];

    var tempcolumn = [{
        "data": "id"
    }, {
        "data": "name"
    }, {
        "data": "age"
    }, {
        "data": "hospital"
    }, {
        "data": "type"
    }, {
        "data": "time"
    }, {
        "data": "team"
    }, {
        "data": ""
    }];

    $oldestTable = $("#oldestTable");
    $oldestTable.DataTable({
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
        data: oldestdata,
        columns: tempcolumn,
        pagingType: "full_numbers",
        dom: 'rt',
        columnDefs: [{
            "targets": -1,
            "data": null,
            "defaultContent": '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="distribute">重新分配</a>' +
                '<a href="javascript:void(0);" class="btn btn-default btn-xs" data-link="record">分配记录</a>'
        }]
    });

    $currentTable = $("#currentTable");
    $currentTable.DataTable({
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
        data: currentdata,
        columns: tempcolumn,
        pagingType: "full_numbers",
        dom: 'rtl<"ecg-table-paginate"p>',
        columnDefs: [{
            "targets": -1,
            "data": null,
            "defaultContent": '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="distribute">重新分配</a>' +
                '<a href="javascript:void(0);" class="btn btn-default btn-xs" data-link="record">分配记录</a>'
        }]
    });

    $linkDist = $('[data-link="distribute"]');
    $linkRecord = $('[data-link="record"]');

    $distModal = $("#distModal");
    $distId = $("#distId");
    $distModalBtn = $("#distModalBtn");
    $linkDist.on('click', function() {
        var $this = $(this);
        $distId.val($this.parents("tr").children(":first").html());
        $distModal.modal('show');
    });
    $distModalBtn.on('click', function() {
        $distModal.modal('hide');
    });

    $recordModal = $("#recordModal");
    $recordId = $("#recordId");
    $linkRecord.on('click', function() {
        var $this = $(this);
        $recordId.val($this.parents("tr").children(":first").html());
        $recordModal.modal('show');
    });
});
