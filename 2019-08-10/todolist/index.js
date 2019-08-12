var dom = document.getElementById('btn');
var inputVal = document.getElementById('inputVal');
var ulList = document.getElementById('ulList');
var arrList = [];
var mysearch = document.getElementById('mysearch');

function zf(){
    var str = '';

    for(var i = 0; i < arrList.length; i++){
        str += `<li class="list-group-item">
            <span>${arrList[i]}</span>
            <span class="glyphicon glyphicon-remove" onclick="removeLi(${i})" style="cursor:pointer;"></span>
            </li>`;
    }

    ulList.innerHTML = str || '暂无数据';
    inputVal.value = '';
}

function removeLi(index){
    arrList.splice(index,1);
    zf();
}

dom.onclick = function(){
  if(!inputVal.value){
      alert('不能为空')
      return;
  }
  arrList.push(inputVal.value);
  zf();
}

inputVal.oninput = function(){
    var value = inputVal.value;
    if(!value) zf();
}

mysearch.onclick = function(){
   var value = inputVal.value;
 
   if(!value) return;
  
   var result = arrList.filter(function(it,index,arr){
      if(!it.indexOf(value)) return it;
   })

   var str = '';

   for(var i = 0; i < result.length; i++){
       str += `<li class="list-group-item">
           <span>${result[i]}</span>
           <span class="glyphicon glyphicon-remove" onclick="removeLi(${i})" style="cursor:pointer;"></span>
           </li>`;
   }

   ulList.innerHTML = str || '暂无数据';
}

window.onload = function(){
  if(!(ulList.children && ulList.children.length > 0)){
    ulList.innerHTML = '暂无数据'
  }
}