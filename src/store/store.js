import { createStore } from 'vuex'

const store = createStore({
    state(){
        return{
            tasks:[
                {id:0,name:'task1',description:'this is the first task'},
                {id:1,name:'task2',description:'this is the second task'},
                {id:2,name:'task3',description:'this is the third task'},
            ],
        }    
    },
    mutations:{
        addTask(state,newTask){
            state.tasks.push(newTask);
        },
        removeTask(state,taskId){
            state.tasks = state.tasks.filter( (task)=> task.id !==taskId);
        }
    },
    actions:{
        addTask({commit},newTask){
            commit('addTask',newTask)
        },
        removeTask({commit},taskId){
            commit('removeTask',taskId)
        }
    },
    getters:{
        getTasks: (state) => state.tasks,
        getTaskById: (state) =>  (id) => {
            const task = state.tasks[id] ? state.tasks[id] : null;
            return task
        },
    }
})

//export { getters }

export default store;