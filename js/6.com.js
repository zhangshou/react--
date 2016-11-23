/*
* 编写一个自定义组件,是一个div
* 宽,高,背景色由父组件通过属性传入
* 给div增加一个鼠标移入移出事件,鼠标移入时,给div增加5px dashed red边框,如果鼠标移出时去掉吃边框
*
* */

var Div=React.createClass({
    getInitialState(){
        return {border:''};
    },
    handleMouseOver(){
        this.setState({border:'5px solid red'})
    },
    handleMouseOut(){
        this.setState({border:''})
    },
    render(){
        return (
            <div className={this.state.border} style={Object.assign({},this.props,this.state)} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                {this.props.children}
            </div>
        )
    }
});
var props={
    width:'100px',
    height:'100px',
    backgroundColor:'lightblue',
    color:'lightgreen'
};
ReactDOM.render(<Div {...props}>hello</Div>,document.querySelector('#app'));