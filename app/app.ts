function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement!.innerHTML = 'Welcome';
}

document.getElementById('startGame')!.addEventListener('click', startGame);