function postDebate() {
  var topic = document.getElementById('topic').value;
  var tags = document.getElementById('tags').value;
  var argument = document.getElementById('argument').value;

  var debateObject = {
    "topic": topic,
    "tags": tags,
    "argument": argument
  };
  console.log(topic, tags, argument);

  $.ajax({
    type: 'POST',
    data: JSON.stringify(debateObject),
    contentType: "application/json",
        //contentType: "application/x-www-form-urlencoded",
        dataType:'json',
        url: 'http://localhost:27017/post',                      
        success: function(data) {
          console.log(JSON.stringify(data), "This is the debateObject");                               
        },
        error: function(error) {
          console.log(error);
        }
      });
}