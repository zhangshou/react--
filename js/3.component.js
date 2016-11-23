//创建一个自定义组件
//自定义组件首字母要大写,如果小写React会当成一个普通的html标签来处理
//使用自定义组件的时候,会执行自定义组件的render方法,并得到一个返回的虚拟DOM,转成真实的DOM之后插入DOM容器内部
var Message=React.createClass({
    render(){
        //此处表示组件渲染时候长什么样
        //返回的虚拟DOM结构有且只能有一个顶级标签
        return <div>hello</div>
    }
});
ReactDOM.render(<Message/>,document.querySelector('#app'));