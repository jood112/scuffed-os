function help() {
  window.location.replace("help.html");
}
function esearch() {
  window.location.replace("esearch.html");
}
function games() {
  window.location.replace("play.html");
}
function Close() {
  console.log('closed');
  document.getElementById('changesettings').innerHTML = '';
}
function note() {
  window.location.replace('notepad.html');
}
function settings() {
  document.getElementById('changesettings').innerHTML = "<input id = 'changer' type = 'text' placeholder = 'Type a color or image url' /><button onclick = 'Close()'>Close</button> <a href = 'help.html'><button>How do I use this?</button></a>";
  onkeyup = function() {
    var changecolor = document.getElementById('changer').value;
    document.getElementById('settings').innerHTML = '<style>body{background: ' + changecolor + '; background-size: cover;}</style>';
  }
}
