//react.js React
//react-dom.js ReactDom
//jsx��һ�ֽ�js��html������������һ��д��
/*ReactDOM.render(
    <h1>hello</h1>,
    document.getElementById('app')
);*/

var count=0;
function render(ele,container){
    container.innerHTML=ele;
}
document.body.onclick= function () {
    render('<h1>'+(++count)+'</h1>',document.getElementById('app'))
};
