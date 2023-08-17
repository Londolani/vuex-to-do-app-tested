<template>
    <div>
        <h3>{{ taskList.name }}</h3>
        <h4>Task Description</h4>
        <p>{{ taskList.description }}</p>
        <button @click="$router.push('/')">Back</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
    computed:{
        ...mapGetters(['getTaskById']),
        taskList(){
            return this.getTaskById(this.$route.params.taskId);
        }
    }
}
</script>