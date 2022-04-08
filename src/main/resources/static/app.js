var stompClient = null;
var id = 0;
var chatroomid = 0;

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function connect() {
    var socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (greeting) {
            showGreeting(JSON.parse(greeting.body));
        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendName() {
    id += 1;
    chatroomid += 1;
    stompClient.send("/app/hello", {}, JSON.stringify( {'id': id , 'name': $("#name").val(), 'title': $("#title").val(), 'chatroom': chatroomid}));
}

function showGreeting(greeting) {
    if(greeting.message.chatroom === 1){
        $("#greetings").append("<tr><td> id  :"+ greeting.message.id + " " + greeting.message.name + " " + greeting.message.title + "</td></tr>");
    }else{
        $("#greetings2").append("<tr><td> id  :"+ greeting.message.id + " " + greeting.message.name + " " + greeting.message.title + "</td></tr>");
    }
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendName(); });
});

