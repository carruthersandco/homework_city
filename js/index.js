// wait till all dom elements loaded then run start function

// start function runs the .on(submit) changeBackground function

// changeBackground function will:
// - store user input into variable city
// - if var city == 'New York' or 'New York City' or 'NYC' make the background of the page nyc.jpg
//  else if var city ==  'San Francisco' or 'SF' or 'Bay Area' make the background of the page sf.jpg
//  else if var city ==  'Los Angeles' or 'LA' or 'LAX' make the background of the page la.jpg
//  else if var city ==  'Austin' or 'ATX' make the background of the page austin.jpg
//  else if var city ==  'Sydney' or 'SYD' make the background of the page sydney.jpg
//  else display error message
// - reset input text to placeholder


$(document).ready(start);

var city = 'default';

function start() {
  console.log('hi');
  $('#submit-btn').click(changeBackground);
}

function changeBackground(event) {
  event.preventDefault();
  console.log('hi again');
  city = getCityValue();
  console.log(city);
  checkIfValidCity();
  changeBodyImage();
  $('#city-input')[0].reset();
}

function getCityValue() {
  var rawInput = $('#city-type').val()
  var lowerCaseString = rawInput.toLowerCase()
  var cleanInput = lowerCaseString.trim();
  console.log(cleanInput);
  if (cleanInput == 'new york' || cleanInput == 'new york city' || cleanInput == 'nyc') {
    return 'New York';
  } else if (cleanInput == 'san francisco' || cleanInput == 'san fran' || cleanInput == 'sf' || cleanInput == 'bay area') {
    return 'San Francisco';
  } else if (cleanInput == 'los angeles' || cleanInput == 'la' || cleanInput == 'lax') {
    return 'Los Angeles';
  } else if (cleanInput == 'austin' || cleanInput == 'atx') {
    return 'Austin';
  } else if (cleanInput == 'sydney' || cleanInput == 'syd') {
    return 'Sydney';
  } else {
    console.log('error');
    return 'Error';
  }
}

function checkIfValidCity() {
  if (city == 'Error') {
    $('#error').css('display', 'block');
  } else $('#error').css('display', 'none');
}

function changeBodyImage() {
  console.log('changebodyimage');
  if (city == 'New York') {
    console.log('changebodyimageNewYork');
    $('body').css('background-image', 'url(images/nyc.jpg)');
  }
  if (city == 'San Francisco') {
    console.log('changebodyimageSanFran');
    $('body').css('background-image', 'url(images/sf.jpg)');
  }
  if (city == 'Los Angeles') {
    console.log('changebodyimageLosAngeles');
    $('body').css('background-image', 'url(images/la.jpg)');
  }
  if (city == 'Austin') {
    console.log('changebodyimageaustin');
    $('body').css('background-image', 'url(images/austin.jpg)');
  }
  if (city == 'Sydney') {
    console.log('changebodyimageSYdney');
    $('body').css('background-image', 'url(images/sydney.jpg)');
  }
}
