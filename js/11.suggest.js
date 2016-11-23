var Suggest=React.createClass({
    getInitialState:function(){
        return {data:[]}
    },
    handleChange(event){
          var keyword=event.target.value;
        $.ajax({
            url:'https://www.baidu.com/su',
            method:'GET',
            dataType:'jsonp',
            jsonp:'cb',
            data:{wd:keyword},
            context:this,
            success: function (result) {
                this.setState({data:result.s})
            }
        })
    },
    render(){
        return (
            <div className='panel panel-default'>
                <div className='panel-heading'>
                    <input type="text" className='form-control' onChange={this.handleChange}/>
                </div>
                <div className='panel-body'>
                    <ul className='list-group'>
                        {
                            this.state.data.map(function (item,index) {
                                return <li className='list-group-item' key={index}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
});
ReactDOM.render(<Suggest></Suggest>,document.querySelector('#app'));