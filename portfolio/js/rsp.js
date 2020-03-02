var playerMove;
var comMove;
var playerWins =0;
var comWins = 0;
var numOfGame = 0;

function toggleChoice_Result(){
    $('.result').toggleClass('hidden');
    $('.choice').toggleClass('hidden');
}

function backToChoice(){
    toggleChoice_Result()
    $('#resultText span').remove();
    switch(playerMove){
        case 0:
            $('.playerMoveImg').toggleClass('scissorsImg');
            break;
        case 1:
            $('.playerMoveImg').toggleClass('rockImg');
            break;
        case 2:
            $('.playerMoveImg').toggleClass('paperImg');
            break;
    }
    switch(comMove){
        case 0:
            $('.comMoveImg').toggleClass('scissorsImg');
            break;
        case 1:
            $('.comMoveImg').toggleClass('rockImg');
            break;
        case 2:
            $('.comMoveImg').toggleClass('paperImg');
            break;
    }
}

function playGame(move, img){
    playerMove = move;
    $('.playerMoveImg').toggleClass(img);

    var randomNumber = Math.random();
    if (randomNumber < 0.33){
        comMove = 0;
        $('.comMoveImg').toggleClass('scissorsImg');
    } else if (randomNumber < 0.66){
        comMove = 1;
        $('.comMoveImg').toggleClass('rockImg');
    } else{
        comMove = 2;
        $('.comMoveImg').toggleClass('paperImg');
    }

    var winCheck = (3+playerMove-comMove)%3

    switch(winCheck){
        case 0:
            $('#resultText p').prepend("<span>비겼습니다!</span>");
            break;
        case 1:
            playerWins++;
            $('#resultText p').prepend("<span>당신이 이겼습니다!</span>");
            $('#playerScore span').remove();
            $('#playerScore p').append("<span>"+playerWins+"</span>");
            break;
        case 2:
            comWins++;
            $('#resultText p').prepend("<span>인공지능이 이겼습니다!</span>");
            $('#comScore span').remove();
            $('#comScore p').append("<span>"+comWins+"</span>");
            break;
    }

    toggleChoice_Result();

    if(playerWins == 3 || comWins == 3){
        if(playerWins>comWins) alert("게임종료! 당신의 승리입니다!");
        else  alert("게임종료! 인공지능의 승리입니다!");
        playerWins = 0;
        comWins = 0;
        $('#playerScore span').remove();
        $('#playerScore p').append("<span>"+playerWins+"</span>");
        $('#comScore span').remove();
        $('#comScore p').append("<span>"+comWins+"</span>");
        backToChoice();
    }
}

$('.result').toggleClass('hidden');

$('#scissors').click(function() {
    playGame(0, 'scissorsImg');
});
$('#rock').click(function() {
    playGame(1, 'rockImg');
});
$('#paper').click(function() {
    playGame(2, 'paperImg');
});
$('#continue').click(function() {
    backToChoice();
});