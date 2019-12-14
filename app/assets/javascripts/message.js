$(function(){
  $(".new_message").on("submit", function(e){
    e.preventDefault()
    console.log("イベント薄荷");
    $.ajax({
      url: 取得したリクエストURL,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: 取得したFormData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
  })
});