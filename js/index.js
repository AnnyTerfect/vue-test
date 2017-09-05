var app=new Vue(
{
    el:"#app",
    data:
    {
        message:"1234"
    }
});
var app1 = new Vue({
    el: '#app1',
    data:
    {
        inputs:[]
    }
});
for(i=0;i<5;i++)
{
    app1.inputs.push({message:''});
}
