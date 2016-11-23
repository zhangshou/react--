//多个简单的组件嵌套，可构成一个复杂的复合组件，从而完成复杂的交互逻辑
var Panel=React.createClass({
    render(){
        return (
            <div className='panel panel-default'>
                <PanelHead head={this.props.head}></PanelHead>
                <PanelBody body={this.props.body}></PanelBody>
                <PanelFooter footer={this.props.footer}></PanelFooter>
            </div>
        )
    }
});
var PanelHead=React.createClass({
    render(){
        return (
            <div className='panel-heading'>
                {this.props.head}
            </div>
        )
    }
});
var PanelBody=React.createClass({
    render(){
        return (
            <div className='panel-body'>
                {this.props.body}
            </div>
        )
    }
});

var PanelFooter=React.createClass({
    render(){
        return (
            <div className='panel-footer'>
                {this.props.footer}
            </div>
        )
    }
});
ReactDOM.render(<Panel head='头部' body='身体' footer='尾部'></Panel>,document.querySelector('#app'));