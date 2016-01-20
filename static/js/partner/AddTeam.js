$(function() {
    var $doctorTable, $technicianTalbe;
    var $addDocBtn, $addDocModal, $searchDoc, $searchDocBtn, $searchDocResult, $addDocModalBtn;
    var $addTechBtn, $addTechModal, $searchTech, $searchTechBtn, $searchTechResult, $addTechModalBtn;
    var $deleteModal, $confirmDeleteBtn;
    var $modifyTeamNameBtn, $successModal;

    var ids = [1, 13];
    initialMenuTreeByIds(ids);

    $addDocBtn = $("#addDocBtn");
    $addDocModal = $("#addDocModal");
    $searchDoc = $("#searchDoc");
    $searchDocBtn = $("#searchDocBtn");
    $searchDocResult = $("#searchDocResult");
    $addDocModalBtn = $("#addDocModalBtn");
    $addDocBtn.on('click', function() {
        $addDocModal.modal('show');
    });
    $searchDocBtn.on('click', function() {
        $searchDocResult.show();
    });
    $addDocModal.on('hidden.bs.modal', function(e) {
        $searchDocResult.hide();
    });
    $addDocModalBtn.on('click', function() {
        $addDocModal.modal('hide');
    });

    $addTechBtn = $("#addTechBtn");
    $addTechModal = $("#addTechModal");
    $searchTech = $("#searchTech");
    $searchTechBtn = $("#searchTechBtn");
    $searchTechResult = $("#searchTechResult");
    $addTechModalBtn = $("#addTechModalBtn");
    $addTechBtn.on('click', function() {
        $addTechModal.modal('show');
    });
    $searchTechBtn.on('click', function() {
        $searchTechResult.show();
    });
    $addTechModal.on('hidden.bs.modal', function(e) {
        $searchTechResult.hide();
    });
    $addTechModalBtn.on('click', function() {
        $addTechModal.modal('hide');
    });

    $modifyTeamNameBtn = $("#modifyTeamNameBtn");
    $successModal = $("#successModal");
    $modifyTeamNameBtn.on('click', function() {
        $successModal.modal('show');
    });

    var docdata = [
        // {
        //     "id" : "01",
        //     "username" : "username1",
        //     "ID" : "440022********0000",
        //     "name" : "张教授",
        //     "hospital" : "中山大学附属第一医院",
        //     "title" : "主任医师",
        //     "status" : "正常使用"
        // },
        // {
        //     "id" : "02",
        //     "username" : "username1",
        //     "ID" : "440022********0000",
        //     "name" : "李教授",
        //     "hospital" : "中山大学附属第一医院",
        //     "title" : "主任医师",
        //     "status" : "正常使用"
        // }
    ];

    var techdata = [
        // {
        //     "id" : "01",
        //     "username" : "username1",
        //     "ID" : "440022********0000",
        //     "name" : "技师A",
        //     "status" : "正常使用"
        // },
        // {
        //     "id" : "02",
        //     "username" : "username1",
        //     "ID" : "440022********0000",
        //     "name" : "技师B",
        //     "status" : "正常使用"
        // },
        // {
        //     "id" : "03",
        //     "username" : "username1",
        //     "ID" : "440022********0000",
        //     "name" : "技师C",
        //     "status" : "正常使用"
        // },
        // {
        //     "id" : "04",
        //     "username" : "username1",
        //     "ID" : "440022********0000",
        //     "name" : "技师D",
        //     "status" : "正常使用"
        // },
        // {
        //     "id" : "05",
        //     "username" : "username1",
        //     "ID" : "440022********0000",
        //     "name" : "技师E",
        //     "status" : "正常使用"
        // },
        // {
        //     "id" : "06",
        //     "username" : "username1",
        //     "ID" : "440022********0000",
        //     "name" : "技师F",
        //     "status" : "正常使用"
        // },
    ];

    var doccolumn = [{
        "data": "id"
    }, {
        "data": "username"
    }, {
        "data": "name"
    }, {
        "data": "hospital"
    }, {
        "data": "title"
    }, {
        "data": "ID"
    }, {
        "data": "status"
    }, {
        "data": ""
    }];

    var techcolumn = [{
        "data": "id"
    }, {
        "data": "username"
    }, {
        "data": "name"
    }, {
        "data": "ID"
    }, {
        "data": "status"
    }, {
        "data": ""
    }];

    $doctorTable = $("#doctorTable");
    $doctorTable.DataTable({
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
        data: docdata,
        columns: doccolumn,
        pagingType: "full_numbers",
        dom: 'rt',
        columnDefs: [{
            "targets": -1,
            "data": null,
            "defaultContent": '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="deleteDoc">删除</a>'
        }]
    });

    $technicianTalbe = $("#technicianTalbe");
    $technicianTalbe.DataTable({
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
        data: techdata,
        columns: techcolumn,
        pagingType: "full_numbers",
        dom: 'rt',
        columnDefs: [{
            "targets": -1,
            "data": null,
            "defaultContent": '<a href="javascript:void(0);" class="btn btn-warning btn-xs" data-link="deleteTech">删除</a>'
        }]
    });

    $linkDeleteDoc = $('[data-link="deleteDoc"]');
    $linkDeleteTech = $('[data-link="deleteTech"]');
    $deleteModal = $("#deleteModal");
    $confirmDeleteBtn = $("#confirmDeleteBtn");

    $linkDeleteDoc.on('click', function() {
        var $this = $(this);
        var id = $this.parents("tr").children(":first").html();
        $("#deleteId").val(id);
        $deleteModal.modal('show');
    });

    $linkDeleteTech.on('click', function() {
        var $this = $(this);
        var id = $this.parents("tr").children(":first").html();
        $("#deleteId").val(id);
        $deleteModal.modal('show');
    });
    $confirmDeleteBtn.on('click', function() {
        $deleteModal.modal('hide');
    });
});
