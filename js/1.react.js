//react.js React
//react-dom.js ReactDom
//jsx��һ�ֽ�js��html������������һ��д��
ReactDOM.render(
    <h1>hello</h1>,
    document.getElementById('app')
);

function render(ele,container){
    container.innerHTML=ele;
}
render('<h1>hello</h1>',document.getElementById('app'))