$(function(){

  var reloadMessages = function() {
    last_message_id = $('.message:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      $.each(messages, function(i, message) {
        insertHTML += buildHTML(message)
      });
      $('.messages').append(insertHTML);
      $('.messages').animate({ scrollBottom: $('.messages')[0].scrollHeight});
    })
    .fail(function() {
      console.log('error');
    });
  };

  var buildHTML = function(message) {
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
    return html;
  };
  function scrollBottom(){
    var target = $('.message').last();
    var position = target.offset().top + $('.messages').scrollTop();
    $('.messages').animate({
      scrollTop: position
    }, 300, 'swing');
  }
  $(".new_message").on("submit", function(e){
    e.preventDefault()
    var fd = new FormData(this);
    var url = $(this).attr("action");

    $.ajax({
      url: url,
      type: 'POST',
      data: fd,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message) {
      var html = buildHTML(message);
      $('.messages').append(html);
      $('form').get(0).reset();
      scrollBottom();
    })
    .fail(function(){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })
    .always(function(){
      $('.submit-btn').prop('disabled', false);
    })
  })
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
  
});