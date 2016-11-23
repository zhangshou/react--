/*
* 1.定义初始化状态
* 2.给input绑定onChange事件,在方法里通过形参event得到event.target.value,
* */
var Input=React.createClass({
    getInitialState(){
        return {val:''}
    },
    handleChange(event){
        this.setState({val:event.target.value})
    },
    render(){
        return (
            <div>
                <input type="text" value={this.state.val} onChange={this.handleChange}/>
                <p>{this.state.val}</p>
            </div>
        )
    }
});
ReactDOM.render(<Input/>,document.getElementById('app'));