$(function() {
    var $patientTable;
    var $linkEdit, $linkDelete;

    var tempdata = [
        {
            "id" : "01",
            "No" : "100001",
            "ID" : "440022********0000",
            "name" : "张三",
            "sex" : "男",
            "age" : "71",
            "edit" : '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="edit">编辑</a>' +
                     '<a href="javascript:void(0);" class="btn btn-default btn-xs" data-link="delete">删除</a>'
        },
        {
            "id" : "02",
            "No" : "100001",
            "ID" : "440022********0000",
            "name" : "张三",
            "sex" : "男",
            "age" : "71",
            "edit" : '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="edit">编辑</a>' +
                     '<a href="javascript:void(0);" class="btn btn-default btn-xs" data-link="delete">删除</a>'
        },
        {
            "id" : "03",
            "No" : "100001",
            "ID" : "440022********0000",
            "name" : "张三",
            "sex" : "男",
            "age" : "71",
            "edit" : '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="edit">编辑</a>' +
                     '<a href="javascript:void(0);" class="btn btn-default btn-xs" data-link="delete">删除</a>'
        },
        {
            "id" : "04",
            "No" : "100001",
            "ID" : "440022********0000",
            "name" : "张三",
            "sex" : "男",
            "age" : "71",
            "edit" : '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="edit">编辑</a>' +
                     '<a href="javascript:void(0);" class="btn btn-default btn-xs" data-link="delete">删除</a>'
        },
        {
            "id" : "05",
            "No" : "100001",
            "ID" : "440022********0000",
            "name" : "张三",
            "sex" : "男",
            "age" : "71",
            "edit" : '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="edit">编辑</a>' +
                     '<a href="javascript:void(0);" class="btn btn-default btn-xs" data-link="delete">删除</a>'
        },
        {
            "id" : "06",
            "No" : "100001",
            "ID" : "440022********0000",
            "name" : "张三",
            "sex" : "男",
            "age" : "71",
            "edit" : '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="edit">编辑</a>' +
                     '<a href="javascript:void(0);" class="btn btn-default btn-xs" data-link="delete">删除</a>'
        },
        {
            "id" : "07",
            "No" : "100001",
            "ID" : "440022********0000",
            "name" : "张三",
            "sex" : "男",
            "age" : "71",
            "edit" : '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="edit">编辑</a>' +
                     '<a href="javascript:void(0);" class="btn btn-default btn-xs" data-link="delete">删除</a>'
        },
        {
            "id" : "08",
            "No" : "100001",
            "ID" : "440022********0000",
            "name" : "张三",
            "sex" : "男",
            "age" : "71",
            "edit" : '<a href="javascript:void(0);" class="btn btn-primary btn-xs" data-link="edit">编辑</a>' +
                     '<a href="javascript:void(0);" class="btn btn-default btn-xs" data-link="delete">删除</a>'
        }
    ];

    var tempcolumn = [
        {"data": "id"},
        {"data": "No"},
        {"data": "ID"},
        {"data": "name"},
        {"data": "sex"},
        {"data": "age"},
        {"data": "edit"}
    ];

    $patientTable = $("#patientTable");
    $patientTable.DataTable({
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

    $linkEdit = $('[data-link="edit"]');
    $linkDelete = $('[data-link="delete"]');

    $linkEdit.on('click', function() {
        var $this = $(this);
        var id = $this.parents("tr").children(":first").html();
        location.href = "EditPatient.html?id=" + id;
    });
});
