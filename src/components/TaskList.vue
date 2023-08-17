<template>
    <div>
        <!--<router-link :to=" '/description/' + id">
            <p v-if="!strike">{{ name }}</p>
            <strike  v-if="strike"><p>{{ name }}</p></strike>
        </router-link>-->
        <button @click="$router.push('/description/' + id)"><p v-if="!strike">{{ name }}</p>
            <strike  v-if="strike"><p>{{ name }}</p></strike></button> <br>
        <button @click="markAsDone" class="strike-button">{{ strike ? 'undo': 'done'}}</button>
        <button @click="taskToRemove(id)" class="remove-button">remove</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default{
    props:['id','name'],
    data(){
        return{
            strike: false
        }
    },
    methods:{
        ...mapActions(['removeTask']),
        markAsDone(){
            this.strike = !this.strike;
        },
        taskToRemove(taskId){
            this.removeTask(taskId);
        }
    }
}
</script>