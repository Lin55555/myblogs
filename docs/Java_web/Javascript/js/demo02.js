//当鼠标悬浮的时候显示背景颜色
function showBGCol(){
   //event：当前发生的事件
   //event.srcElement:事件源
   //
   //alert(event.srcElement);
   //alert(event.srcElement.tagName);
  if(event && event.srcElement && event.srcElement.tagName=="TD"){
     var TD=event.srcElement;
     //获取td的父元素
     var tr=TD.parentElement;
     //如果想要通过js代码设置某节点的样式，则需要加上 .style
     tr.style.backgroundColor="navy";
     //tr.cells 表示获取这个tr里面的所有单元格
     var tds=tr.cells;
     for (var i=0;i<tds.length;i++) {
          tds[i].style.color="white";
     }
  }
}
function clearBGCol(){
     if(event && event.srcElement && event.srcElement.tagName=="TD"){
          var TD=event.srcElement;
          //获取td的父元素
          var tr=TD.parentElement;
          //如果想要通过js代码设置某节点的样式，则需要加上 .style
          tr.style.backgroundColor="transparent";
          //tr.cells 表示获取这个tr里面的所有单元格
          var tds=tr.cells;

          for (var i=0;i<tds.length;i++) {

               tds[i].style.color="gold";
          }


       }
}

function showHand(){
     if(event && event.srcElement && event.srcElement.tagName=="TD"){
          var TD=event.srcElement;
          //获取光标
          TD.style.cursor="hand";

     
       }

}