$(function() {
    var $submitBtn, $cancerUploadBtn;
    var $uploadFile;
    var $hint;
    var $submitModal;

    var ids = [1, 12];
    initialMenuTreeByIds(ids);

    $submitBtn = $("#submitBtn");
    $uploadFile = $("#uploadFile");
    $hint = $("#hint");
    $submitModal = $("#submitModal");
    $cancerUploadBtn = $("#cancerUploadBtn");

    $submitBtn.on('click', function() {
        if ($uploadFile.val() === "") {
            $hint.html("请上传分析报告后提交...");
            setTimeout(function() {
                $hint.html("")
            }, 5000);
        } else {
            $submitModal.modal({
                backdrop: 'static',
                show: true
            });
        }
    });

    $cancerUploadBtn.on('click', function() {
        $uploadFile.val("");
    });
});
