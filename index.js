$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault()
    //create  params
    var url = 'https://test-telega.piastrix24.com/api/get_data',
    method = 'POST',
    body = $('input[type="email"]').val(),
    xhr = new XMLHttpRequest(),
    response = {};

    //make and send request
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`email=${body}`)

    //upon receiving
    xhr.onload = function(){
      response = JSON.parse(this.response);
      // console.log(response);

      //run fn with response object
      generateForm(response)
    }
  })
})

function generateForm(data) {
  //create new form with params
  var newForm = $('<form class="newForm"> </form>').attr({
    name : 'newForm',
    method : 'POST',
    action :'https://pay.piastrix.com/ru/pay',
  });

  //for each key in received object
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      //create input with params from response
      var input = $('<input />').attr({
        type : 'text',
        name : key,
        value : data[key]
      }).appendTo(newForm); //attach to form
    }
  }

  // newForm.appendTo('body'); // append to body for test
  console.log(newForm); //log the form (test feature)

  newForm.submit(); //submit form
}
