$(function() {
    var $contractTable;
    var $linkEdit, $linkDelete;
    var $stopModal, $stopId, $stopModalBtn, $deleteModal, $deleteId, $deleteModalBtn;

    var ids = [2];
    initialMenuTreeByIds(ids);

    var tempdata = [{
        "id": "01",
        "hospital": "广州市番禺区小谷围社区医院",
        "manager": "李某某",
        "contact": "13300000000",
        "begintime": "2015-12-03",
        "endtime": "2016-12-03",
        "status": "正常",
        "edit": '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="edit">编辑</a>' +
            '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="stop">停用</a>' +
            '<a href="javascript:void(0);" class="btn btn-default btn-xs" data-link="delete">删除</a>'
    }, {
        "id": "02",
        "hospital": "广州市番禺区小谷围社区医院",
        "manager": "李某某",
        "contact": "13300000000",
        "begintime": "2015-12-03",
        "endtime": "2016-12-03",
        "status": "正常",
        "edit": '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="edit">编辑</a>' +
            '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="stop">停用</a>' +
            '<a href="javascript:void(0);" class="btn btn-default btn-xs" data-link="delete">删除</a>'
    }, {
        "id": "03",
        "hospital": "广州市番禺区小谷围社区医院",
        "manager": "李某某",
        "contact": "13300000000",
        "begintime": "2015-12-03",
        "endtime": "2016-12-03",
        "status": "正常",
        "edit": '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="edit">编辑</a>' +
            '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="stop">停用</a>' +
            '<a href="javascript:void(0);" class="btn btn-default btn-xs" data-link="delete">删除</a>'
    }, {
        "id": "04",
        "hospital": "广州市番禺区小谷围社区医院",
        "manager": "李某某",
        "contact": "13300000000",
        "begintime": "2015-12-03",
        "endtime": "2016-12-03",
        "status": "正常",
        "edit": '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="edit">编辑</a>' +
            '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="stop">停用</a>' +
            '<a href="javascript:void(0);" class="btn btn-default btn-xs" data-link="delete">删除</a>'
    }, {
        "id": "05",
        "hospital": "广州市番禺区小谷围社区医院",
        "manager": "李某某",
        "contact": "13300000000",
        "begintime": "2015-12-03",
        "endtime": "2016-12-03",
        "status": "正常",
        "edit": '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="edit">编辑</a>' +
            '<a href="javascript:void(0);" class="btn btn-success btn-xs" data-link="start">启用</a>' +
            '<a href="javascript:void(0);" class="btn btn-default btn-xs" data-link="delete">删除</a>'
    }, {
        "id": "06",
        "hospital": "广州市番禺区市桥社区医院",
        "manager": "李某某",
        "contact": "13300000000",
        "begintime": "2014-12-03",
        "endtime": "2015-12-03",
        "status": "过期",
        "edit": ''
    }, ];

    var tempcolumn = [{
        "data": "id"
    }, {
        "data": "hospital"
    }, {
        "data": "manager"
    }, {
        "data": "contact"
    }, {
        "data": "begintime"
    }, {
        "data": "endtime"
    }, {
        "data": "status"
    }, {
        "data": "edit"
    }];

    $contractTable = $("#contractTable");
    $contractTable.DataTable({
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

    $linkEdit = $('[data-link="edit"]');
    $linkStop = $('[data-link="stop"]');
    $linkDelete = $('[data-link="delete"]');
    $linkStart = $('[data-link="start"]');

    $linkEdit.on('click', function() {
        var $this = $(this);
        var id = $this.parents("tr").children(":first").html();
        location.href = "EditContract.html?id=" + id;
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
