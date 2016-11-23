var Comment=React.createClass({
    getInitialState(){
        return {comments:[]}
    },
    handleClick(event){
        this.state.comments.push(this.refs.myInput.value);
        this.setState({comments:this.state.comments})
    },
    render(){
        return (
            <div className='panel panel-default'>
                <div className='panel-heading text-center'>
                    <h4>个人留言板</h4>
                </div>
                <div className='panel-body'>
                    <ul className='list-group'>
                        {
                            this.state.comments.map(function (item,index) {
                                return <li className='list-group-item' key={index}>{item}</li>
                            })
                        }
                    </ul>
                </div>
                <div className='panel-footer'>
                    <div className='row'>
                        <div className='col-xs-11'>
                            <input type="text" ref='myInput' className='form-control' />
                        </div>
                        <div className='col-xs-1'>
                            <button className='btn btn-primary' onClick={this.handleClick}>留言</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
ReactDOM.render(<Comment></Comment>,document.querySelector('#app'));