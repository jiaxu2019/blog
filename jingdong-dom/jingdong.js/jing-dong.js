//  封装一个代替getElementById()的方法
function byId(id){
    return typeof(id) === "string"?document.getElementById(id):id;
}var index = 0,
     timer = null,
     picks = byId("banner").getElementsByTagName("div"),
     dote = byId("dote").getElementsByTagName("span"),
     prev = byId("prev"),
     next = byId("next"),
     len = picks.length,
     menu = byId("menu-content"),
     subMenu = byId("sub-menu");
     innerBox = subMenu.getElementsByClassName("inner-box"),
     menuItems = menu.getElementsByClassName("menu-item");
     console.log(len);
function slideImg(){
    var main = byId("main");
    //  划过清除定时器，离开继续
    main.onmouseover = function(){
    //  划过清除定时器
    if(timer) clearInterval(timer);
    }
    main.onmouseout = function(){
        timer = setInterval(function(){
            index++;
            if(index >= len){
                index = 0;    
            }
            changeImg();
        },3000);
    }
    main.onmouseout();
    //  自动在main上触发鼠标离开的事件
    for(var d=0;d<len;d++){
        dote[d].id = d;
        dote[d].onclick = function(){
            //  改变index为当前span的id值
            index = this.id;
            //  调用changeImg函数，实现切换图片
            changeImg();
        }
    }

    //  下一张
    next.onclick = function(){
        index++;
        if(index >= len) index = 0;
        console.log(index);
        changeImg();
    }
    prev.onclick = function(){
        index--;
        if(index<0) index = len-1;
        console.log(index);
        changeImg();
    }

    //  导航菜单
    //  遍历主菜单，且绑定事件
    for(var m = 0;m<menuItems.length;m++){
        //  每一个menu-item定义date-index属性 作为索引 
        menuItems[m].setAttribute("data-index",m);
        // innerBox[m].style.display =  'none';
        menuItems[m].onmouseover = function(){
            var idx = this.getAttribute("data-index");
            subMenu.className ="sub-menu";
            innerBox[idx].style.display = 'block';
        }
    }
}
function changeImg(){
    // 切换图片
    // 遍历banner下面有的div及dote下所有的span,将div隐藏,将span清除类
    for(var i=0;i<len;i++){
        picks[i].style.display = "none";
        dote[i].className = "";
    }
    //  根据index索引找到当前div，将其显示出来
    picks[index].style.display = 'block';
    dote[index].className = "active";
}
slideImg();  