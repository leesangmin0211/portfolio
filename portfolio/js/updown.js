window.onload = function(){
    //프로그램에 사용 될 요소들을 화면에서 DOM으로 참조함.
    var btns1 = document.getElementById("btn");
    var text1 = document.getElementById("text");
    var devNum1 = document.getElementById("devNum");
   //개발자가 입력 할 번호를 저장할 변수.
    devNum.innerHTML="0";
   //시스템이 난수를 발생시켜, 임의의 번호를 저장
   var num = 1 + Math.abs(Math.floor(Math.random()*1000));
    //입력 값의 범위를 지정하기 위한 변수
    var min = 1;
    var max = 1000;
    //개발자로부터 숫자를 입력받기 위한 버튼을 생성
    for(var i=0; i<10; i++) {
        var btn= document.createElement("button");
        btn.innerHTML=""+i;
        btn.onclick=function(e) {
            var number = parseInt(devNum.innerHTML);
            var num = parseInt(this.innerHTML);
            devNum.innerHTML = number * 10 + num;
        };
        btns1.appendChild(btn);
    }
    //결과 확인 버튼 생성
    var okBtn = document.createElement("button");
    okBtn.innerHTML="OK";
    //결과 확인 버튼 눌렀을때, 이벤트 처리 부분.
    okBtn.onclick = function(e) {
        var number = parseInt(devNum.innerHTML);
        if(number < min || number > max) {
            text1.value += "입력한 숫자" + number + "는 범위에 맞지 않습니다. \n";
            devNum.innerHTML = "0"
        }else if(number==num) {
            text1.value += number + " 정답입니다^^ \n계속 하실려면 새로고침 하세요..";
            devNum.innerHTML = "0"
        }else if(number < num) {
            text1.value += number + "은(는) 정답이 아닙니다.. ㅠ.ㅠ \n";
            min=number;
            text1.value += min+" 초과 "+max+" 미만 \n";
            devNum.innerHTML = "0"
        }else if(number > num) {
            text1.value += number + "은(는) 정답이 아닙니다.. ㅠ.ㅠ \n";
            max=number;
            text1.value +=min+" 초과 "+max+" 미만 \n";
            devNum.innerHTML = "0"
        }
    };
    btns1.appendChild(okBtn);
};