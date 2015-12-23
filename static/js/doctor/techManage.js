$(function() {
    var $techTable;
    var $linkStop, $linkStart, $linkDetails;
    var $stopModal, $stopId, $stopModalBtn, $startModal, $startId, $startModalBtn;

    var tempdata = [
        {
            "id" : "01",
            "username" : "username1",
            "ID" : "440022********0000",
            "name" : "技师A",
            "status" : "正常",
            "edit" : '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="details">详情</a>' +
                     '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="stop">停用</a>'
        },
        {
            "id" : "02",
            "username" : "username1",
            "ID" : "440022********0000",
            "name" : "技师A",
            "status" : "正常",
            "edit" : '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="details">详情</a>' +
                     '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="stop">停用</a>'
        },
        {
            "id" : "03",
            "username" : "username1",
            "ID" : "440022********0000",
            "name" : "技师A",
            "status" : "正常",
            "edit" : '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="details">详情</a>' +
                     '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="stop">停用</a>'
        },
        {
            "id" : "04",
            "username" : "username1",
            "ID" : "440022********0000",
            "name" : "技师A",
            "status" : "正常",
            "edit" : '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="details">详情</a>' +
                     '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="stop">停用</a>'
        },
        {
            "id" : "05",
            "username" : "username1",
            "ID" : "440022********0000",
            "name" : "技师A",
            "status" : "正常",
            "edit" : '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="details">详情</a>' +
                     '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="stop">停用</a>'
        },
        {
            "id" : "06",
            "username" : "username1",
            "ID" : "440022********0000",
            "name" : "技师A",
            "status" : "停用",
            "edit" : '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="details">详情</a>' +
                     '<a href="javascript:void(0);" class="btn btn-success btn-xs" data-link="start">启用</a>'
        },
    ];

    var tempcolumn = [
        {"data": "id"},
        {"data": "username"},
        {"data": "name"},
        {"data": "ID"},
        {"data": "status"},
        {"data": "edit"}
    ];

    $techTable = $("#techTable");
    $techTable.DataTable({
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

    $linkDetails = $('[data-link="details"]');
    $linkStop = $('[data-link="stop"]');
    $linkStart = $('[data-link="start"]');

    $linkDetails.on('click', function() {
        var $this = $(this);
        var id = $this.parents("tr").children(":first").html();
        location.href = "techDetails.html?id=" + id;
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
