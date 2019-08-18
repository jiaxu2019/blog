window.onload = function(){
    //  获取计算机面板
    var panel = document.getElementById("panel");
    //  为计算机面板动态添加点击事件
    panel.onclick = function(e){
    //  参数e用来接收event对象
    //  获取所有的input元素
      var inputs = e.toElement;
    //  获取p元素
      var screen = document.getElementById("screen");
      if(inputs.type == "button"){
    //  如果获取到的是input元素，则开始执行运算逻辑
        if(inputs.value == "C"){
          screen.innerHTML = "";
        } else if(inputs.value == "="){
            try{
              screen.innerHTML = eval(screen.innerHTML);
            } catch(ex){
               screen.innerHTML = "Erroa";
            }
        }else{
            screen.innerHTML +=inputs.value;
        }
      }else{
    //  如果单机的地方不是input元素，则程序不回应
          return;
      }
    }
}