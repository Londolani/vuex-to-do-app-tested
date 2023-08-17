<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>To do List</h1>
    <router-view v-if="$route.path ==='/'">
      <add-task @newTask="taskToAdd"></add-task>
      <task-list v-for="task in taskList" :key="task.id" :name="task.name" :id="task.id"></task-list>
    </router-view>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import AddTask from './components/AddTask.vue'
import TaskList from './components/TaskList.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    AddTask,
    TaskList
  },
  computed:{
    ...mapGetters(['getTasks']),
    taskList(){
      return this.getTasks;
    }
  },methods:{
      ...mapActions(['addTask']),
      taskToAdd(newTask){
        const fullTask = {
          id: new Date().toString(),
          description: '',
          name: newTask
        }
        this.addTask(fullTask)
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
