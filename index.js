$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault()

    var url = 'https://test-telega.piastrix24.com/api/get_data',
    request = new Request(url),
    method = 'POST',
    body = $('input[type="email"]').val();

    // request.open(method, url, true);
    //
    // request.setRequestHeader('Access-Control-Allow-Origin', '*');
    // request.setRequestHeader('Access-Control-Allow-Headers', 'content-type');
    // request.setRequestHeader('Content-Type', 'application/json');
    //
    // request.send(body);

    const headers = new Headers({
      'Content-type': 'application/x-www-form-urlencoded',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Cache-Control': 'max-age=0',
      'Access-Control-Allow-Origin': '*'
    })

    fetch(request, {
      method: method,
      // mode: 'cors',
      // credentials: "same-origin",
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Cache-Control': 'max-age=0',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(body)
    })
    .then((response) => {
      console.log(response);
    })
    .then((error) => {
      console.log(error);
    })
  })

})
