app.controller('chatController',['$scope', ($scope) =>{
    console.log('chat');
}]);

function StartChat(){
    document.getElementById('chatdiv').removeAttribute('style');
    document.getElementById('start').setAttribute('style','display:none');
    hideChatList();
}

function showChatList(){
    document.getElementById('side-1').classList.remove('d-none','d-md-block')
    document.getElementById('side-2').classList.add('d-none');
}

function hideChatList(){
    document.getElementById('side-1').classList.add('d-none','d-md-block')
    document.getElementById('side-2').classList.remove('d-none');
}

function onKeyDown(){
    document.addEventListener('keydown', function (key){
        if (key.KeyCode === 13){
            sendMessage();
        }
    });
}

function sendMessage(){
    const msg =
        '<div class="row justify-content-end">' +
        '<div class="col-8 col-sm-8 col-md-8 col-lg-4">' +
        '<p class="bubble me bg-white text-dark ">' +
        document.getElementById('txtmessage').value()+
        '<span class="time float-right">13:30</span></p>' +
        '</div>' +
        '</div>';

    document.getElementById('messages').innerHTML += msg;
    document.getElementById('messages').value = '';
    document.getElementById('messages').focus();

    document.getElementById('messages').scrollTo(0, document.getElementById('messages').clientHeight)

}