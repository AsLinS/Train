function add(){
    console.log('value:', $('#name').val());
    $('#goods').append('<li>' + $('#name').val() + '</li>');
    $('#message').html('添加了新商品：' + $('#name').val());
    $("#name").val("");
    if ($('#goods').children().length > 0) {
        $('#delAll').css("visibility", "visible");
    }
    $('#message').removeClass('danger');

    $('#goods li').click(function () {
        $('#message').html('删除了商品：' + $(this).text());
        $('#message').addClass('danger');
        $(this).remove();
        if ($('#goods').children().length == 0) {
            $('#delAll').css("visibility", "hidden");
        }
    })
}

function delAll(){
    $('#message').html('删除了所有商品');
    $('#message').addClass('danger');
    $('#goods li').remove();
    if ($('#goods').children().length == 0) {
        $('#delAll').css("visibility", "hidden");
    }
}