var mainTAble;
var blockTable;
var storblockTable;
var settingTable;
var mapInf = [];
var blockInf = [];
var nextblockInf = [];
var storeblockInf = [];
var settingInf = [];
var timer;

var messageDiv = null;
var blush;
var divi; 

/* 테트리스 블럭 설정 */
var blockConf = {
    blocks: [
        { w: 3, h: 3, c : "red",
            shapes: [
                [
                    [ 0, 0, 0 ],
                    [ 1, 1, 0 ],
                    [ 0, 1, 1 ],
                ],
                [
                    [ 0, 0, 1 ],
                    [ 0, 1, 1 ],
                    [ 0, 1, 0 ],
                ],
                [
                    [ 1, 1, 0 ],
                    [ 0, 1, 1 ],
                    [ 0, 0, 0 ],
                ],
                [
                    [ 0, 1, 0 ],
                    [ 1, 1, 0 ],
                    [ 1, 0, 0 ],
                ],
            ]
        },

        { w: 3, h: 3, c: "blue",
            shapes: [
                [
                    [ 0, 0, 0 ],
                    [ 0, 1, 1 ],
                    [ 0, 1, 1 ],
                ],
                [
                    [ 0, 0, 0 ],
                    [ 1, 1, 0 ],
                    [ 1, 1, 0 ]
                ],
                [
                    [ 1, 1, 0 ],
                    [ 1, 1, 0 ],
                    [ 0, 0, 0 ],
                ],
                [
                    [ 0, 1, 1 ],
                    [ 0, 1, 1 ],
                    [ 0, 0, 0 ],
                ],
            ]
        },
        { w: 3, h: 3, c: "cyan",
            shapes: [
                [
                    [ 0, 0, 0 ],
                    [ 0, 1, 1 ],
                    [ 1, 1, 0 ],
                ],
                [
                    [ 0, 1, 0 ],
                    [ 0, 1, 1 ],
                    [ 0, 0, 1 ],
                ],
                [
                    [ 0, 1, 1 ],
                    [ 1, 1, 0 ],
                    [ 0, 0, 0 ],
                ],
                [
                    [ 1, 0, 0 ],
                    [ 1, 1, 0 ],
                    [ 0, 1, 0],
                ],
            ]
        },
        { w: 3, h: 3, c: "green",
            shapes: [
                [
                    [ 0, 0, 0 ],
                    [ 1, 0, 0 ],
                    [ 1, 1, 1 ],
                ],
                [
                    [ 1, 1, 0 ],
                    [ 1, 0, 0 ],
                    [ 1, 0, 0 ],
                ],
                [
                    [ 1, 1, 1 ],
                    [ 0, 0, 1 ],
                    [ 0, 0, 0 ],
                ],
                [
                    [ 0, 1, 0 ],
                    [ 0, 1, 0 ],
                    [ 1, 1, 0 ],
                ],
            ]
        },
        { w: 3, h: 3, c: "brown",
            shapes: [
                [
                    [ 0, 0, 0 ],
                    [ 0, 0, 1 ],
                    [ 1, 1, 1 ],
                ],
                [
                    [ 0, 1, 0 ],
                    [ 0, 1, 0 ],
                    [ 0, 1, 1 ],
                ],
                [
                    [ 1, 1, 1 ],
                    [ 1, 0, 0 ],
                    [ 0, 0, 0 ],
                ],
                [
                    [ 1, 1, 0 ],
                    [ 0, 1, 0 ],
                    [ 0, 1, 0 ],
                ],
            ]
        },
        { w: 3, h: 3, c: "orange",
            shapes: [
                [
                    [ 0, 0, 0 ],
                    [ 0, 1, 0 ],
                    [ 1, 1, 1 ],
                ],
                [
                    [ 1, 0, 0 ],
                    [ 1, 1, 0 ],
                    [ 1, 0, 0 ],
                ],
                [
                    [ 1, 1, 1 ],
                    [ 0, 1, 0 ],
                    [ 0, 0, 0 ],
                ],
                [
                    [ 0, 0, 1 ],
                    [ 0, 1, 1 ],
                    [ 0, 0, 1 ],
                ],
            ]
        },
        { w: 4, h:4, c: "gray",
            shapes: [
                [
                    [ 0, 0, 0, 1 ],
                    [ 0, 0, 0, 1 ],
                    [ 0, 0, 0, 1 ],
                    [ 0, 0, 0, 1 ],
                ],
                [
                    [ 0, 0, 0, 0 ],
                    [ 0, 0, 0, 0 ],
                    [ 0, 0, 0, 0 ],
                    [ 1, 1, 1, 1 ],
                ],
                [
                    [ 1, 0, 0, 0 ],
                    [ 1, 0, 0, 0 ],
                    [ 1, 0, 0, 0 ],
                    [ 1, 0, 0, 0 ],
                ],
                [
                    [ 1, 1, 1, 1 ],
                    [ 0, 0, 0, 0 ],
                    [ 0, 0, 0, 0 ],
                    [ 0, 0, 0, 0 ],
                ],
            ]
        }
    ]
}
var conf = {
    gameMode: 0, //0 : LineAttack 1 : Point
    w: 12,
    h: 21,
    subW: 5,
    subH: 4,
    frameCnt: 0,
    frameCntSet: 25,
    gameOver: false,
    checkGmode: true,
    checkstoreBlock: false,
    checkstoreBlockr: false,
    cntpreviewBlock : 1,
    storeblockCnt: 3,
    timeCnt: 0,
    Line: 50,
    lineforScoreB: 0,
    lineforScoreD: 0,
    Point: 0,
    
    /*block values*/
    blockPointer: null,
    storeblockPointer: null,
    storeblockPositionX: null,
    storeblockPositionY: null,
    x: null,
    y: null,
    rot: 0,
    changed: false
}
var nextblockPointer=[];
var nextblockPositionX=[];
var nextblockPositionY=[];
var nextBlock=[];
 
function putBlock(){
    with(conf) {
        for(i=0; i<blockPointer.h; i++)
            for(j=0; j<blockPointer.w; j++)
                if(blockPointer.shapes[rot][i][j] == '1')
                    blockInf[conf.y+i][conf.x+j] = blockPointer.c;        
    }
}
 
function onkeydown() {
  var r;
 
  with(conf) {
 
    if(!blockPointer) return;
 
    switch(event.keyCode) {
        case 37: // left
            if(!checkCollision(blockPointer.shapes[rot], x-1, y)) {
                changed = true;
                x--;
                frameCnt+=5;
            }
        break;
            case 38: // up - rotate
            r = (rot + 1) % blockPointer.shapes.length;
            if(!checkCollision(blockPointer.shapes[r], x, y)) {
                changed = true;
                rot = r;
            }
        break;
        case 39: // right
            if(!checkCollision(blockPointer.shapes[rot], x+1, y)) {
                changed = true;
                x++;
                frameCnt+=5;
            }
        break;
        case 40: // down
            if(!checkCollision(blockPointer.shapes[rot], x, y+1)) {
                changed = true;
                y++;
                frameCnt+=5;
            }
        break;
        case 32: // spacebar - drop
            while(!checkCollision(blockPointer.shapes[rot], x, y+1)) {
                changed = true;
                y++;
            }
            frameCnt=0;
        break;
        case 71: // gMode
            if(checkGmode){
                checkGmode = false;
                document.getElementById('isghostmode').innerHTML="GhostMode<br><font color=red><b>OFF</b></font>";
            }
            else{
                checkGmode = true;
                document.getElementById('isghostmode').innerHTML="GhostMode<br><font color=green><b>ON</b></font>";                
            }
        break;
        case 16: // storeBlock
            checkstoreBlockr = true;
        break;
        case 13:
            if(gameOver)
                location.reload();
    
        }
    }
}
 
 
function storeBlock()    {
    with(conf) {
        if(storeblockCnt==0) return;
        
        if(!checkstoreBlock) {
            storeblockPointer = blockPointer;
            storeblockPositionX = Math.floor((subW - storeblockPointer.w) /2 );
            storeblockPositionY = Math.floor((subH - storeblockPointer.h) /2 );
            blockPointer = null;
            storeblockCnt--;
            document.getElementById('conuntstoring').innerHTML="HOLD : " + (storeblockCnt);
            checkstoreBlock = true;
        } else {
            
            var blockTmp;
            y=0;
            x=Math.floor((conf.w - blockPointer.w) /2 );
            
            blockTmp = blockPointer;
            blockPointer = storeblockPointer;
            storeblockPointer = blockTmp;
            storeblockCnt--;
            document.getElementById('conuntstoring').innerHTML="HOLD : " + (storeblockCnt);
        }
        rot=0;
        drawstoreBlock();
        frameCnt=0;
        checkstoreBlockr = false;
    }
}
 
 
function makeTable(h, w, kindOftable){
    var row, cell;
    var table = [];
    var i, j, k;
    
    for(k=0; k < conf.cntpreviewBlock; k++) {
        table[k] = document.createElement('table')
        nextblockInf.push(new Array());
        
        for(i = 0; i < h; i ++) {
            row = table[k].insertRow();
            
            switch(kindOftable) {
                case 0:    // game table
                    mapInf.push(new Array());
                    blockInf.push(new Array());
                    table[k].id='gametable';
                    break;
                case 1:    // next block table    
                    nextblockInf[k].push(new Array());
                        table[k].id='nextblocktable'+k;
                        table[k].className='subnextblock';
                    break;
                case 2:
                    storeblockInf.push(new Array());
                    table[k].id='storeblocktable'
                    break;
                case 3:
                    settingInf.push(new Array());
                    table[k].id='settingTable'
                    break;
                default :
                    document.write('table making error1');
                    break;
            }
    
            for(j = 0; j < w; j ++) {
                cell = row.insertCell();
                cell.innerHTML = " ";
                switch(kindOftable) {
                    case 0:    // game table
                        mapInf[i].push(cell);
                        blockInf[i].push(null);
                        break;
                    case 1:    // next block table    
                        cell.className='subtablecell';
                        nextblockInf[k][i].push(cell);
                        break;
                    case 2:
                        cell.className='subtablecell';
                        storeblockInf[i].push(cell);
                        break;
                    case 3:
                        cell.className='settingcell';
                        settingInf[i].push(cell);
                        break;
                    default :
                        document.write('table making error2');
                        break;
                }
            }
        }
        if(kindOftable!=1) break;
    }
    return table;
}
 
 
function startGame() {
    var i;
    
    mainTable = makeTable(conf.h, conf.w, 0);
    blockTable = makeTable(conf.subH, conf.subW, 1);
    storeblockTable = makeTable(conf.subH, conf.subW, 2);
    
    document.getElementById('tableForgame').appendChild(mainTable[0]);
    document.getElementById('storeblockdisplay').appendChild(storeblockTable[0]);
    for(i=0; i<conf.cntpreviewBlock; i++){
        document.getElementById('nextBlock').appendChild(blockTable[i]);    
        nextBlock.push(Math.floor(Math.random() * blockConf.blocks.length));
    }
    
    document.body.onkeydown = onkeydown;
    
    if(conf.checkGmode)    document.getElementById('isghostmode').innerHTML="GhostMode<br><font color=green><b>ON</b></font>";
    else    document.getElementById('isghostmode').innerHTML="GhostMode<br><font color=red><b>OFF</b></font>";
        
    document.getElementById('conuntstoring').innerHTML="HOLD : " + conf.storeblockCnt;
    
    document.getElementById('mt').innerHTML='m';
    document.getElementById('st').innerHTML='s';
    document.getElementById('mst').innerHTML='ms';
    
    if(conf.gameMode==0){
        document.getElementById('lineOrPoint').innerHTML="Line Attack<br>"+conf.Line;
        conf.frameCntSet = 25;
    }
 
    else if(conf.gameMode==1){
        document.getElementById('lineOrPoint').innerHTML="Point Hunter<br>"+conf.Point;
        conf.frameCntSet = 30;
    }    
 
    timer = setInterval(repeat, 10);
}
 
function blockSetting(){
    var presentBlock;
    var i;
    
    with(blockConf) {
        with(conf) {
            presentBlock = nextBlock[0];
            
            for(i=0; i<cntpreviewBlock-1; i++)
                if(cntpreviewBlock != '1')    nextBlock[i] = nextBlock[i+1];
            
            nextBlock[cntpreviewBlock-1] = Math.floor(Math.random() * blockConf.blocks.length);
            blockPointer = blocks[presentBlock];
            
            for(i=0; i<cntpreviewBlock; i++){
                nextblockPointer[i] = blocks[nextBlock[i]];
                nextblockPositionX[i] = Math.floor((subW - nextblockPointer[i].w) /2 );
                nextblockPositionY[i] = Math.floor((subH - nextblockPointer[i].h) /2 );
            }
            
            x = Math.floor((conf.w - blockPointer.w) /2 );
            y = 0;
            rot=0;
 
        }
    }
}
 
function checkCollision(block, x, y) {
    var i,j;
    if(!block)    alert('error');
 
    for(i=0; i<block.length; i++)
        for(j=0; j<block[0].length; j++) {
            if(block[i][j] == 0)
                continue;
            else if(i+y >= conf.h || x+j >= conf.w || x+j < 0)
                return true;
            else if(blockInf[y+i][x+j])
                return true;
 
        }
 
    return false;
    
}
 
function gMode() {
 
    with(conf){
    if(!blockPointer || gameOver) return;
    
        var i, j;
        var k=0;
        var gmodeY=y;
        
        while(!checkCollision(blockPointer.shapes[rot], x, gmodeY+1)) gmodeY++;
        
        for(i=0; i < blockPointer.h; i++){
            for(j=0; j < blockPointer.w; j++)
                if(blockPointer.shapes[rot][i][j] == '1')
                    mapInf[gmodeY+k][x+j].style.backgroundColor = "white";
            k++;
        }
                    
    }
}
 
function drawDisplay() {
    var i,j;
    var k=0;
    
    with(conf) {
        if(!blockPointer || gameOver) return;
        
        for(i=0; i<h; i++)
            for(j=0; j<w; j++)
                mapInf[i][j].style.backgroundColor = blockInf[i][j] || "#333";
        
        if(checkGmode) gMode();
        
        for(i=0; i<blockPointer.h; i++)
            for(j=0; j<blockPointer.w; j++)
                if(blockPointer.shapes[rot][i][j] == '1')
                    mapInf[y+i][x+j].style.backgroundColor = blockPointer.c;
    }
    
}
 
function drawstoreBlock() {
    with(conf) {
        if(gameOver) return;
        
        for(i=0; i<subH; i++)
            for(j=0; j<subW; j++)
                storeblockInf[i][j].style.backgroundColor = "#eee";
                
        if(checkstoreBlock)
            for(i=0; i<storeblockPointer.h; i++)
                for(j=0; j<storeblockPointer.w; j++)
                    if(storeblockPointer.shapes[0][i][j] == '1')
                        storeblockInf[storeblockPositionY + i][storeblockPositionX + j].style.backgroundColor = storeblockPointer.c;                        
    }
}
 
function drawnextBlock() {
    with(conf) {
        if(!blockPointer || gameOver) return;
        
        for(k=0; k<cntpreviewBlock; k++)
            for(i=0; i<subH; i++)
                for(j=0; j<subW; j++)
                    nextblockInf[k][i][j].style.backgroundColor = "#333";
        
        for(k=0; k<cntpreviewBlock; k++)
            for(i=0; i<nextblockPointer[k].h; i++)
                for(j=0; j<nextblockPointer[k].w; j++)
                    if(nextblockPointer[k].shapes[0][i][j] == '1')
                        nextblockInf[k][nextblockPositionY[k] + i][nextblockPositionX[k] + j].style.backgroundColor = nextblockPointer[k].c;    
                    
    }
}
 
    
function repeat() {
    with(conf) {
        if(gameOver) return;
        
        timeCnt++;
        document.getElementById('m').innerHTML=Math.floor(Math.floor(timeCnt%60000)/6000);
        document.getElementById('s').innerHTML=Math.floor(Math.floor(timeCnt%6000)/100);
        document.getElementById('ms').innerHTML=Math.floor(timeCnt%100);
        
        if(gameMode == 1 && frameCntSet != 10)
            if(Math.floor(timeCnt%100) == 0)
                if(Math.floor(Math.floor(timeCnt%6000)/100)%10 == 0)
                    frameCntSet-=1;
        
        if(frameCnt-- <= 0) {
            runGame();
            if(checkstoreBlockr)
                storeBlock();
            drawDisplay();
            frameCnt = frameCntSet;
        } else if(changed = true){
            if(checkstoreBlockr)
                storeBlock();
            drawDisplay();
            changed = false;
        }
    }
}
 
function runGame() {
    var i, j;
    
    with(conf) {
        if(!blockPointer){
            blockSetting();
            drawnextBlock() 
            return;
        }
        
        if(checkCollision(blockPointer.shapes[rot], x, y+1) && y==0){
            if(gameMode == 1)
                createMessageBox("Your Score<br>" + Point + "<br><font size=2>RE? -> PRESS ENTER</font>", "green", "50px","black", false);
            else
                createMessageBox("Game Over<br><font size=2>RE? -> PRESS ENTER</font>", "red", "50px","black", false);
            gameOver = true;
            clearInterval(timer);
        } else {
            if(!checkCollision(blockPointer.shapes[rot], x, y+1))y++;
            else {
                putBlock();
                checkLine();    
                blockPointer = null;
                blockSetting();
                drawnextBlock() 
            }
        } 
    }
}
 
function checkgameOver(){
    with(conf) {
 
    if(gameMode==0 && Line<=0){
        drawDisplay();
        conf.gameOver = true;
        document.getElementById('lineOrPoint').innerHTML="Line Attack<br>"+conf.Line;
        clearInterval(timer);
        createMessageBox("Game Clear!<br>" + Math.floor(Math.floor(timeCnt%60000)/6000) + " : " + Math.floor(Math.floor(timeCnt%6000)/100) + " : " + Math.floor(timeCnt%100), "green", "50px","black", false);
        return;
    }
    
    }
}
 
function clearLine(line){
 
    var i,j,k;
 
    for(i=0; i<line.length; i++){
        conf.Line--;
        for(j=line[i]; j>0; j--)
            for(k=0; k<conf.w; k++)
                blockInf[j][k] = blockInf[j-1][k];
        checkgameOver();
    }
    
}
 
function checkLine(){
    var i, j;
    var line=[];
    var sum=1;
    
    for(i=0; i<conf.h; i++){
        for(j=0; j<conf.w; j++){
            if(blockInf[i][j]){
                if(++sum==conf.w){
                    line.push(i);
                }
            }
        }
    sum=0;
    }
    
/* 점수부분.... 개더럽다... */    
    if(conf.gameMode==1){
        if(line.length>0){
            
            conf.lineforScoreB++;
            if(line.length==4){
                createMessageBox("<b>TRIPLE!!<br>PLUS +300<b>", "purple", "25px", "white", true);
                conf.Point+=300;
                conf.lineforScoreD++;
            }
            
            switch(conf.lineforScoreB){
                case 1:
                    conf.Point+=10;
                    break;
                case 2:
                    if(conf.lineforScoreD == 2){
                        createMessageBox("<b>짝대기 더블!!!<br>PLUS +450<b>", "yellow", "25px", "white", true);
                        conf.Point+=450;
                        break;
                    }
                    createMessageBox("<b>올 두번연속?!!<br>PLUS +50<b>", "yellow", "25px", "black", true);
                    conf.Point+=50;
                    break;
                case 3:
                    if(conf.lineforScoreD == 3){
                        createMessageBox("<b>짜대기 트리플 미친ㅋㅋ!!!<br>PLUS +600<b>", "green", "25px", "white", true);
                        conf.Point+=600;
                        break;
                    }
                    createMessageBox("<b>세번이나 연속??!!<br>PLUS +150<b>", "green", "30px", "black", true);
                    conf.Point+=150;
                    break;
                case 4:
                    if(conf.lineforScoreD == 4){
                        createMessageBox("<b>이거 운이지??!!!!!<br>PLUS +800<b>", "blue", "25px", "black", true);
                        conf.Point+=800;
                        break;
                    }
                    createMessageBox("<b>네번미친ㅋㅋㅋ!!<br>PLUS +250<b>", "blue", "35px", "black", true);
                    conf.Point+=250;
                    break;
                default:
                    if(conf.lineforScoreD > 4){
                        createMessageBox("<b>로또사라!!!<br>PLUS +1000<b>", "yellow", "25px", "white", true);
                        conf.Point+=1000;
                        break;
                    }
                    createMessageBox("<b>니 개쩐다!!!<br>PLUS +400<b>", "red", "40px", "white", true);
                    conf.Point+=400;
                    break;
            }
            
            clearLine(line);
        } else {
            conf.lineforScoreB=0;
            conf.lineforScoreD=0;
        }
    } else if(line.length>0){
        clearLine(line);
    }
    
    if(conf.gameMode==0)
        document.getElementById('lineOrPoint').innerHTML="Line Attack<br>"+conf.Line;
    else if(conf.gameMode==1)
        document.getElementById('lineOrPoint').innerHTML="Point Hunter<br>"+conf.Point;
}
 
 
var menu =[
    {Name : 'GAME MODE', state : ["50 LINE","Point"], select: 0},
    {Name : 'GHOST MODE', state : ["OFF","ON"], select: 0},
    {Name : 'BLOCK PREVIEW', state : [conf.cntpreviewBlock]},
    {Name : 'HOLDING', state : [conf.storeblockCnt]},
    {Name : 'START', state : ['GAME']}
]
 
 
/*메뉴부분 조작.. 대충짰더니 버그가 있는데 중요하지 않으므로 고치지 않겠음..*/
function keyforSetting() {
with(conf){
    switch(event.keyCode) {
        case 37: // left
        x++;
            x=x%menu[y].state.length;
            if(y==2){
                if(cntpreviewBlock--==1) cntpreviewBlock=5;
                menu[y].state[x] = cntpreviewBlock;
            }
            if(y==3){
                if(storeblockCnt--==0) storeblockCnt=999;
                menu[y].state[x] = storeblockCnt;
            }
            
            settingInf[y][1].innerHTML=menu[y].state[x];
            menu[y].select = x;
 
        break;
        case 38: // up - rotate
            if(y==0){
                y=4;
                settingInf[y][0].id='settingSelect';
                settingInf[y][1].id='settingSelect';
                settingInf[0][0].id='';
                break;
            }
            settingInf[y][0].id='';
            settingInf[y][1].id='';
            settingInf[y-1][0].id='settingSelect';
            y--;
 
        break;
        case 39: // right
            x++;
            x=x%menu[y].state.length;
            if(y==2){
                if(cntpreviewBlock++==5) cntpreviewBlock=1;
                menu[y].state[x] = cntpreviewBlock;
            }
            if(y==3){
                if(storeblockCnt++==999) storeblockCnt=0;
                menu[y].state[x] = storeblockCnt;
            }
            
            settingInf[y][1].innerHTML=menu[y].state[x];
            menu[y].select = x;
 
        break;
        case 40: // down
            if(y==4){
                y=0;
                settingInf[4][1].id='';
                settingInf[y][0].id='settingSelect';
                settingInf[4][0].id='';
                break;
            }
            if(y==3) {
                settingInf[4][1].id='settingSelect';
            }
            settingInf[y][0].id='';
            settingInf[y+1][0].id='settingSelect';
            y++;
        break;
        
        case 13:
            if(y==4){
                x=0;
                y=0;
                clearInterval(timer);
                document.getElementById('select').removeChild(settingTable[0]);
                checkGmode = menu[1].select;
                gameMode = menu[0].select;
                startGame();
            }
        break;
        }
}
 
}
 
function setting() {
    var i, j;
    document.body.onkeydown = keyforSetting;
    
    settingTable = makeTable(5, 2, 3);
    document.getElementById('select').appendChild(settingTable[0]);
 
    for(i=0; i<menu.length; i++)
            settingInf[i][0].innerHTML=menu[i].Name;
 
    for(i=0; i<menu.length; i++)
            settingInf[i][1].innerHTML=menu[i].state[0];
 
    settingInf[0][0].id='settingSelect';
    
    settingTable[0].style.width='500px';
    
    conf.y = 0;
 
}
 
function createMessageBox(text, color, size, backgroundcolor, isappear){
    if(messageDiv){
        clearInterval(blush)
        document.body.removeChild(messageDiv);
    }
    messageDiv = document.createElement('div');
    messageDiv.innerHTML=text;
    messageDiv.id="messageBox";
    messageDiv.style.opacity=0;
    messageDiv.style.color=color;
    messageDiv.style.fontSize=size;
    messageDiv.style.backgroundColor=backgroundcolor;
    document.body.appendChild(messageDiv);
    if(isappear){
        divi=10;
        blush=setInterval("if(divi<0){clearInterval(blush);document.body.removeChild(messageDiv);messageDiv=null}    messageDiv.style.opacity=divi/10; divi--; ", 150);
    } else    {
        divi=0;
        blush=setInterval("if(divi>10)clearInterval(blush);    messageDiv.style.opacity=divi/10; divi++; ", 100);
    }
}
