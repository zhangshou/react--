/*是一种JS和HTML混合的语法,将组件的结构、数据甚至样式都聚合在一起定义组件,会编译成普通的Javascript。

    遇到HTML标签(以 < 开头)，就用HTML规则解析
    遇到代码块(以 { 开头)，就用JavaScript规则解析
    使用样式时可以让style等于一个样式对象
    使用样式类时只能使用className=类名,因为class是Javascript关键字*/

var names=['梅西','内马尔','苏亚雷斯'];
var style={backgroundColor:'red'};
ReactDOM.render(
    <nl>
        {
            names.map(function (item,index) {
                return <li style={style} key={index}>{item}</li>
            })
        }
    </nl>,document.getElementById('app')
);