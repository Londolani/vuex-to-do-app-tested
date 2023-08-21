<template>
    <div>
        <form @submit.prevent="addTask">
            <label for="task"></label>
            <input name="task" v-model="inputTask" type="text" placeholder="Enter your task here">
            <button>Add Task</button>
        </form>
        <router-view></router-view>
    </div>
</template>

<script>
export default{
    data(){
        return{
            inputTask:'',
        }
    },
    methods:{
        addTask(){
            if(this.inputTask.trim() !== ''){
                this.$emit('newTask', this.inputTask);
                this.inputTask = '';
            }    
        }
    }
}
</script> 