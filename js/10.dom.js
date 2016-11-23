//给组件加上ref="xxx"后，可在父组件中通过this.refs.xxx获取该DOM元素
var Focus=React.createClass({
    handleClick(){
        this.refs.myInput.focus();
    },
    render(){
        return (
            <div>
                <input type="text" ref='myInput'/>
                <button onClick={this.handleClick}>得到焦点</button>
            </div>
        )
    }
});
ReactDOM.render(<Focus></Focus>,document.querySelector('#app'));