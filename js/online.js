var id=function(o){return document.getElementById(o)}
var scroll=function (o){
var space=id(o).offsetTop;
id(o).style.top=space+'px';
void function(){
var goTo = 0;
var roll=setInterval(function(){
var height =document.documentElement.scrollTop+document.body.scrollTop+space;
var top = parseInt(id(o).style.top);
if(height!= top){
goTo = height-parseInt((height - top)*0.8);//这里设置返回快慢,可以使是小数
id(o).style.top=goTo+'px';
}
//else{if(roll) clearInterval(roll);}
},20);//这里设置弹出大小,须是整数
}()
}
scroll('online_box');
scroll('cate_tree');