var explainContainer=document.getElementById("explain");
var btn=document.getElementById("btn");

btn.addEventListener("click",function(){
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://miso-mis.github.io/DIGB313/final.json')
ourRequest.onlode=function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
};
ourRequest.send();
});

function renderHTML(data){
    var htmlString="";
    
    for (i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + data[i].destination
    + data[i].city }
 explainContainer.insertAdjacentHTML('beforeend',htmlString);
};

function initMap() {
  var uluru = {lat:41.9102433, lng:12.2564915};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}