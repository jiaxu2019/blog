new Vue({
    el:'#app',
    data:{
        inputVal:'',
        mylist:['A','B','C']
    },
    methods:{
        remove(index){
            this.mylist.splice(index,1)
        },
        add() {
            this.mylist.push(this.inputVal)
            this.inputVal = '';
        }
    }
})