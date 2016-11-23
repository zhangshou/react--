//react.js React
//react-dom.js ReactDom
//jsx是一种将js和html代码混合起来的一种写法
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
