var Child=React.createClass({
    render(){
        return (
            <ul>
                {
                    this.props.children.map(function (item,index) {
                        return <li key={index}>{item}</li>
                    })
                }

            </ul>
        )
    }
});
ReactDOM.render(
    <Child>
        <a href="www.baidu.com">百度</a>
        <a href="www.qq.com">腾讯</a>
        <a href="www.alibaba.com">阿里</a>
    </Child>,document.getElementById('app')
);