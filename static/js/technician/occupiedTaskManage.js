$(function() {
    var $taskTable;
    var $linkAnalysis, $linkCancel;
    var $cancelModal;

    var ids = [1, 12];
    initialMenuTreeByIds(ids);

    var tempcolumn = [{
        "data": "id"
    }, {
        "data": "name"
    }, {
        "data": "sex"
    }, {
        "data": "age"
    }, {
        "data": "type"
    }, {
        "data": "date"
    }, {
        "data": "edit"
    }];

    var tempdata = [{
        "id": "01",
        "name": "张三",
        "sex": "男",
        "age": "71",
        "type": "动态心电",
        "date": "2015-11-19 15:30",
        "edit": '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="analysis">开始分析</a>' +
            '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="cancel">取消任务</a>'
    }, {
        "id": "02",
        "name": "张三",
        "sex": "男",
        "age": "71",
        "type": "动态心电",
        "date": "2015-11-19 15:30",
        "edit": '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="analysis">开始分析</a>' +
            '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="cancel">取消任务</a>'
    }, {
        "id": "03",
        "name": "张三",
        "sex": "男",
        "age": "71",
        "type": "动态心电",
        "date": "2015-11-19 15:30",
        "edit": '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="analysis">开始分析</a>' +
            '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="cancel">取消任务</a>'
    }, {
        "id": "04",
        "name": "张三",
        "sex": "男",
        "age": "71",
        "type": "动态心电",
        "date": "2015-11-19 15:30",
        "edit": '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="analysis">开始分析</a>' +
            '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="cancel">取消任务</a>'
    }, {
        "id": "05",
        "name": "张三",
        "sex": "男",
        "age": "71",
        "type": "动态心电",
        "date": "2015-11-19 15:30",
        "edit": '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="analysis">开始分析</a>' +
            '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="cancel">取消任务</a>'
    }, {
        "id": "06",
        "name": "张三",
        "sex": "男",
        "age": "71",
        "type": "动态心电",
        "date": "2015-11-19 15:30",
        "edit": '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="analysis">开始分析</a>' +
            '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="cancel">取消任务</a>'
    }, {
        "id": "07",
        "name": "张三",
        "sex": "男",
        "age": "71",
        "type": "动态心电",
        "date": "2015-11-19 15:30",
        "edit": '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="analysis">开始分析</a>' +
            '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="cancel">取消任务</a>'
    }, {
        "id": "08",
        "name": "张三",
        "sex": "男",
        "age": "71",
        "type": "动态心电",
        "date": "2015-11-19 15:30",
        "edit": '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="analysis">开始分析</a>' +
            '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="cancel">取消任务</a>'
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

    $linkAnalysis = $('[data-link="analysis"]');
    $linkAnalysis.on('click', function() {
        var $this = $(this);
        var id = $this.parents("tr").children(":first").html();
        location.href = "analysisTaskDetails.html?id=" + id;
    });

    $cancelModal = $("#cancelModal");
    $linkCancel = $('[data-link="cancel"]');
    $linkCancel.on('click', function() {
        var $this = $(this);
        var id = $this.parents("tr").children(":first").html();
        $cancelModal.modal('show');
    });
});
