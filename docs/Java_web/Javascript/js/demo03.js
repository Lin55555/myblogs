window.onload=function(){
     //alert(hello world);
     //当加载完成后去绑定事件
     var TB_fruit=window.document.getElementById("fruit_tb1");
     //获取表格中所有的行
     var rows=TB_fruit.rows;
     for(var i=1;i<rows.length-1;i++){
          var tr=rows[i];
          //1.邦定鼠标悬浮设置背景颜色的事件
          tr.onmouseover=showBGCol;
          tr.onmouseout=clearBGCol;

          //2.获取tr下面的所有单元格
          var cells=tr.cells;
          //3.绑定单价单元格鼠标悬浮时手势变为 hand的事件
          var priceTD=cells[1];
          priceTD.onmouseover=showHand;
          //4.修改单价
          priceTD.clickon=editPrice;
     }
}
//编辑单价
function editPrice(){
     if(event && event.srcElement && event.srcElement.tagName=="TD"){
          var priceTD=event.srcElement;
          //目的是判断该节点是否存在，且节点的类型为文本节点。
          if(priceTD.firstChild && priceTD.firstChild.nodeType==3){
               //innetText表示的是设置或者获取当前节点的内部文本
               var oldPrice=priceTD.innerText;
               //innerHtml表示设置当前节点中的内部html
               priceTD.innerHTML="<input type='text' size='4'/>";
               var input=priceTD.firstChild;
               if(input.tagName=="INPUT"){
                    input.value=oldPrice;
                    //选中输入框的文本
                    input.select();
                    //4.绑定输入框失去焦点事件，更新价格
                    input.onblur=updatePrice; 
               }
          }
       }
}
//6.更新总计
function updateZJ(){
     var fruit_tb=document.getElementById("fruit_tb1");
     var rows=fruit_tb.rows;
     var sum=0;
     for(var i=1;i<rows.length-1;i++){
          var tr=rows[i];
          var xj=parseInt(tr.cells[3].innerText);
          sum=sum+xj;
     }
     rows[rows.length-1].cells[1].innerText=sum;
}
//5.更新当前行的小记
function updateXJ(tr){
if(tr && tr.tagName=="TR"){
     var tds=tr.cells;
     var price=tds[1].innerText;
     var count=tds[2].innerText;
     //需要进行类型转换
     var price=parseInt(price);
     var count=parseInt(count);
     var XJ= price*count;
     tds[3].innerText=XJ;
     updateZJ();
}
}
//4.单元格失去焦点之后，进行更新价格事件的操作
function updatePrice(){
     if(event && event.srcElement && event.srcElement.tagName=="INPUT"){
     var input=event.srcElement;
     var newPrice=input.value;
     //拿到input的父节点，然后再对父节点进行操作
     var priceTD=input.parentElement;
     priceTD.innerText=newPrice;
     //5.更新当前行的小记，td的父元素是指tr，将tr传递进去
     updateXJ(priceTD.parentElement);
     }
}
//3.当鼠标悬浮的时候显示背景颜色
function showBGCol(){
   //event：当前发生的事件
   //event.arcElement:事件源
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
//1.当鼠标悬停时能不能
function showHand(){
     if(event && event.srcElement && event.srcElement.tagName=="TD"){
          var TD=event.srcElement;
          //获取光标
          TD.style.cursor="hand";
       }
}