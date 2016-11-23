var Person=React.createClass({
    //状态只能有内部初始化,而且只能在内部修改
    //getInitialState用来定义初始状态
    getInitialState(){
        return {happy:true};//返回初始化状态对象
    },
    handleClick(){
        //setState可以整体修改状态对象,新的状态对象会覆盖老的状态对象
        //当状态修改会重新执行render方法
        this.setState({happy:!this.state.happy})
    },
    render(){
        var heart=this.state.happy?'开心':'伤心';
        return (
            <div>
                姓名:{this.props.name}
                心情:{heart}
                <button onClick={this.handleClick}>变心</button>
            </div>
        )
    }
});
ReactDOM.render(<Person name='梅西'></Person>,document.getElementById('app'));

/*
常用的事件

剪贴板事件 onKeyDown onKeyPress onKeyUp
键盘事件 onFocus onBlur
焦点事件 onChange onInput onSubmit
鼠标事件 onClick onDoubleClick onMouseDown onMouseEnter onMouseLeave*/
