$(function() {
    var $ongoingTable, $finishedTable;

    var ids = [2, 21];
    initialMenuTreeByIds(ids);

    var tempcolumn = [{
        "data": "id"
    }, {
        "data": "title"
    }, {
        "data": "begindate"
    }, {
        "data": "number"
    }, {
        "data": ""
    }];

    var ongoingdata = [{
        "id": "01",
        "title": "标题1",
        "begindate": "2015-11-19 15:30",
        "number": "5",
    }, {
        "id": "02",
        "title": "标题1",
        "begindate": "2015-11-19 15:30",
        "number": "5",
    }, {
        "id": "03",
        "title": "标题1",
        "begindate": "2015-11-19 15:30",
        "number": "5",
    }];

    var finisheddata = [{
        "id": "01",
        "title": "标题1",
        "begindate": "2015-11-19 15:30",
        "number": "5",
    }, {
        "id": "02",
        "title": "标题1",
        "begindate": "2015-11-19 15:30",
        "number": "5",
    }, {
        "id": "03",
        "title": "标题1",
        "begindate": "2015-11-19 15:30",
        "number": "5",
    }, {
        "id": "04",
        "title": "标题1",
        "begindate": "2015-11-19 15:30",
        "number": "5",
    }, {
        "id": "05",
        "title": "标题1",
        "begindate": "2015-11-19 15:30",
        "number": "5",
    }, {
        "id": "06",
        "title": "标题1",
        "begindate": "2015-11-19 15:30",
        "number": "5",
    }, {
        "id": "07",
        "title": "标题1",
        "begindate": "2015-11-19 15:30",
        "number": "5",
    }];

    $finishedTable = $("#finishedTable");
    $finishedTable.DataTable({
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
        data: finisheddata,
        columns: tempcolumn,
        columnDefs: [{
            "targets": -1,
            "data": null,
            "defaultContent": '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="finish">详情</a>'
        }],
        pagingType: "full_numbers",
        dom: 'rtl<"ecg-table-paginate"p>'
    });

    $ongoingTable = $("#ongoingTable");
    $ongoingTable.DataTable({
        searching: false,
        processing: true,
        language: {
            "processing": "数据加载中, 请稍后...",
            "zeroRecords": "记录数为0...",
            "emptyTable": "记录数为0..."
        },
        data: ongoingdata,
        columns: tempcolumn,
        columnDefs: [{
            "targets": -1,
            "data": null,
            "defaultContent": '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="ongoing">详情</a>' +
                '<a href="javascript:void(0);" class="btn btn-default btn-xs" data-link="edit">编辑</a>'
        }],
        pagingType: "full_numbers",
        dom: 'rt'
    });

    $linkFinish = $('[data-link="finish"]');
    $linkFinish.on('click', function() {
        var $this = $(this);
        var id = $this.parents("tr").children(":first").html();
        location.href = "initConsultDetails.html?id=" + id + "&status=1";
    });

    $linkOngoing = $('[data-link="ongoing"]');
    $linkOngoing.on('click', function() {
        var $this = $(this);
        var id = $this.parents("tr").children(":first").html();
        location.href = "initConsultDetails.html?id=" + id + "&status=0";
    });

    $linkEdit = $('[data-link="edit"]');
    $linkEdit.on('click', function() {
        var $this = $(this);
        var id = $this.parents("tr").children(":first").html();
        location.href = "editConsult.html?id=" + id;
    });
});
