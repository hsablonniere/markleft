var halThread = document.getElementById('thread');
var halForm = document.getElementById('post-message');
var halMsgInput = document.getElementById('message-input');

halForm.addEventListener('submit', function halHandleInput(event) {
  event.preventDefault();
  var msgDiv = document.createElement('div');
  msgDiv.className = 'you-message';
  msgDiv.innerHTML = halMsgInput.value;
  halThread.appendChild(msgDiv);

  halHandleMessage(halMsgInput.value);

  halMsgInput.value = '';
}, false);

function halWrite(response) {
  var respDiv = document.createElement('div');
  respDiv.className = 'hal-response';
  halThread.appendChild(respDiv);
  respDiv.scrollIntoView();

  setTimeout(function() {
    halTypeText(respDiv, response);
  }, 500);
}

function halSay(response) {
  try {
    speak.play(response);
  } catch (e) {}
}

function halTypeText(node, text) {
  var time = parseInt(Math.random() * 20 + 55);

  node.innerHTML += text[0];
  node.scrollIntoView();

  if (text.length > 1) {
    setTimeout(function() {
      halTypeText(node, text.substr(1, text.length));
    }, time);
  }
}