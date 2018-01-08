$(document).ready(function(){
  var quote;
  var author;
  function getNewQuote(){
    $.ajax({
      url:'https://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response){
        quote = response.quoteText;
        author = response.quoteAuthor
       $(".quote").text('"'+ quote +'"');
        $(".author").text("-"+author);
    }

    });
  }
  getNewQuote();
  $("#twitter").on("click",function(){
  window.open("https://twitter.com/intent/tweet?text=" + quote+" - " + author);
});

  $("#quote").on("click",function(){
    getNewQuote();
  });
});
