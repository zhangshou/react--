//组件的属性
/**
 * 属性一般由父组件传入,在组件内部可读取,但不能改变
 * this代表当前组件的实例,当render的时候会产生一个组件的实例
 * this.props 是当前组件实例的一个属性对象
 */
var Person=React.createClass({
    render(){
        return (
            <div>
                /*属性可以通过属性对象this.props中取出*/
                姓名:{this.props.name}
                性别:{this.props.gender}
            </div>
        )
    }
});
var props={
    name:'梅西',
    gender:'男'
};
//ReactDOM.render(<Person name='梅西' gender='男'></Person>,document.querySelector('#app'));
//属性可以在使用组件时传入
ReactDOM.render(<Person {...props}></Person>,document.querySelector('#app'));