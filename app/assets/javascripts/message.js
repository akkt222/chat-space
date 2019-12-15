$(function(){
  $(".new_message").on("submit", function(e){
    e.preventDefault()
    console.log("イベント薄荷");
    var fd = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: fd,
      dataType: 'json',
      processData: false,
      contentType: false
    })
  })
});