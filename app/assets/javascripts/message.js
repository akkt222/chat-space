$(function(){

  function buildHTML(message){
    // 「もしメッセージに画像が含まれていたら」という条件式
    if (message.image) {
      var html = `
      <div class="message">
      <div class="messages__upper-info">
      <div class="messages__upper-info__talker">
      ${message.name}
      </div>
      <div class="messages__upper-info__date">
      ${message.created_at}
      </div>
      </div>
      <div class="messages__text">
      <p class="messages__text__content">
      ${message.content}
      </p>
      <img class="messages__text__image" src="${message.image}">
      </div>
      </div>
      `
    } else {
      var html = 
      `
      <div class="message">
      <div class="messages__upper-info">
      <div class="messages__upper-info__talker">
      ${message.name}
      </div>
      <div class="messages__upper-info__date">
      ${message.created_at}
      </div>
      </div>
      <div class="messages__text">
      <p class="messages__text__content">
      ${message.content}
      </p>
      </div>
      </div>
      `
    }
    return html
  }
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
    .done(function(message) {
      console.log(message);
      var html = buildHTML(message);
      $('.messages').append(html);
      // $('').val('');resetにする
    })
    .fail(function(){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })
    .always(function(){
      $('.submit-btn').prop('disabled', false);
    })
  })
});