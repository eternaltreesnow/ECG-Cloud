$(function() {
    var $partnerTable;
    var $linkEdit, $linkStop, $linkDelete, $linkStart;
    var $stopModal, $stopId, $stopModalBtn, $deleteModal, $deleteId, $deleteModalBtn, $startModal, $startId, $startModalBtn;

    var ids = [1];
    initialMenuTreeByIds(ids);

    var tempdata = [{
        "id": "01",
        "username": "100001",
        "ID": "440022********0000",
        "manager": "张三",
        "time": "2015-12-03 15:39",
        "status": "正常使用"
    }, {
        "id": "02",
        "username": "100001",
        "ID": "440022********0000",
        "manager": "张三",
        "time": "2015-12-03 15:39",
        "status": "正常使用"
    }, {
        "id": "03",
        "username": "100001",
        "ID": "440022********0000",
        "manager": "张三",
        "time": "2015-12-03 15:39",
        "status": "正常使用"
    }, {
        "id": "04",
        "username": "100001",
        "ID": "440022********0000",
        "manager": "张三",
        "time": "2015-12-03 15:39",
        "status": "正常使用"
    }, {
        "id": "05",
        "username": "100001",
        "ID": "440022********0000",
        "manager": "张三",
        "time": "2015-12-03 15:39",
        "status": "停用",
        "edit": '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="edit">编辑</a>' +
            '<a href="javascript:void(0);" class="btn btn-success btn-xs" data-link="start">启用</a>' +
            '<a href="javascript:void(0);" class="btn btn-default btn-xs" data-link="delete">删除</a>'
    }, ];

    var tempcolumn = [{
        "data": "id"
    }, {
        "data": "username"
    }, {
        "data": "manager"
    }, {
        "data": "ID"
    }, {
        "data": "time"
    }, {
        "data": "status"
    }, {
        "data": "edit"
    }];

    $partnerTable = $("#partnerTable");
    $partnerTable.DataTable({
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
        dom: 'rtl<"ecg-table-paginate"p>',
        columnDefs: [{
            "targets": -1,
            "data": null,
            "defaultContent": '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="edit">编辑</a>' +
                '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="stop">停用</a>' +
                '<a href="javascript:void(0);" class="btn btn-default btn-xs" data-link="delete">删除</a>'
        }]
    });

    $linkEdit = $('[data-link="edit"]');
    $linkStop = $('[data-link="stop"]');
    $linkDelete = $('[data-link="delete"]');
    $linkStart = $('[data-link="start"]');

    $linkEdit.on('click', function() {
        var $this = $(this);
        var id = $this.parents("tr").children(":first").html();
        location.href = "EditPartner.html?id=" + id;
    });

    $stopModal = $("#stopModal");
    $stopId = $("#stopId");
    $stopModalBtn = $("#stopModalBtn");
    $linkStop.on('click', function() {
        var $this = $(this);
        $stopId.val($this.parents("tr").children(":first").html());
        $stopModal.modal('show');
    });
    $stopModalBtn.on('click', function() {
        $stopModal.modal('hide');
    });

    $deleteModal = $("#deleteModal");
    $deleteId = $("#deleteId");
    $deleteModalBtn = $("#deleteModalBtn");
    $linkDelete.on('click', function() {
        var $this = $(this);
        $deleteId.val($this.parents("tr").children(":first").html());
        $deleteModal.modal('show');
    });
    $deleteModalBtn.on('click', function() {
        $deleteModal.modal('hide');
    });

    $startModal = $("#startModal");
    $startId = $("#startId");
    $startModalBtn = $("#startModalBtn");
    $linkStart.on('click', function() {
        var $this = $(this);
        $startId.val($this.parents("tr").children(":first").html());
        $startModal.modal('show');
    });
    $startModalBtn.on('click', function() {
        $startModal.modal('hide');
    });
});
