var maxZ=1000; //제일 큰 값을/스타트값을 1000이라고 정의해놓음. //
    
window.onload=function(){
var add = document.getElementById("add"); //add라는 변수를 add ele와 연결시킴//
add.onclick = addSquare; 
    
var colors = document.getElementById("colors");
colors.onclick = changeColors; //함수와 문서를 연결하고 온클릭이 일어났을 EO 이걸 불러내라는 것을 정의해놓음
var squareCount=parseInt(Math.random()*21)+30; //랜덤넘버를 만드는 방법. 30~50사이의 값이 나오도록.
                                    -->//30이라는 함수를 call하는 것. --> 핸덤숫자만큼의 하나의 스퀘어를 만드는 함수라면 30개의 상자가 생김
for(var i=0; i < squareCount; i++)
    {addSquare()};
}


 
function changeColors(){
 var squares = document.querySelectorAll("#squarearea div");
 for (var i=0; i<squares.length; i++){
squares[i].style.backgroundColor = getRandomColor();
     }
     }

function addSquare() {
 var square=document.createElement("div");
    square.className="square";
    square.style.left=parseInt(Math.random()*650)+"px";
    square.style.top=parseInt(Math.random()*250)+"px";
    square.style.backgroundcolor=getRandomColor();
    square.onclick=squareClick;
    var squareArea=document.getElementById("squarearea");
    squareArea.appendChild(square);
}
    //appendchild - 다큐먼트 안에 div를 만들고 지우고 변경할 수도 있는데 스퀘어 영역 안에 스퀘어를 만드는 방법임. 여기에서 위치랑 색깔을 랜덤으로 정해주고 스퀘어 에어리어 엘리먼트 안에 차일드로 assign하는것. 

function getRandomColor(){  //랜덤 컬러코드 assign//
    var letters="0123456789abcdef";
    var result="#";
    for (var i=0;i<6; i++) {
        result +=letters.charAt(parseInt(Math.random()*letters.length)); //캐릭터 앳을 통해서 랜덤컬러를 줄 수 있도록함
    }
    return result;
}
    
function squareClick(){
    var oldZ = parseInt(this.style.zIndex);
    if (oldZ == maxZ) { //제일 앞의 있을 경우에는 리무브 차일드로 없애버림//
        this.parentNode.removeChild(this); //패런트 노드안의 차일드를 리무브를 한다
} else{
    maxZ++;  //maxz++=maxZ+1//
    this.style.zIndex=maxZ; //그냥 처음 눌렀을때는 맨 앞으로 가져오기, 이걸 다시 눌렀을 때는 )리무브하기.
    
}
        
    } 
