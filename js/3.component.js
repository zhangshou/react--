//����һ���Զ������
//�Զ����������ĸҪ��д,���СдReact�ᵱ��һ����ͨ��html��ǩ������
//ʹ���Զ��������ʱ��,��ִ���Զ��������render����,���õ�һ�����ص�����DOM,ת����ʵ��DOM֮�����DOM�����ڲ�
var Message=React.createClass({
    render(){
        //�˴���ʾ�����Ⱦʱ��ʲô��
        //���ص�����DOM�ṹ����ֻ����һ��������ǩ
        return <div>hello</div>
    }
});
ReactDOM.render(<Message/>,document.querySelector('#app'));