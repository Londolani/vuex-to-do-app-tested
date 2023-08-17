import { mount } from '@vue/test-utils'
import AddTask from '@/components/AddTask.vue'
import { createStore } from 'vuex';

const createVuexStore = (initialState) =>
    createStore({
        state: initialState,
        mutations:{
            addTask(state,newTask){
                state.taskList.push(newTask)
            }
        }
    })

describe('AddTask',()=>{
    test('successfully adds task to store', async()=>{
        const initialState = {
            taskList: [
                { id: 0, name: 'task one', description: 'this is the first task' }
            ]
        };

        const store = createVuexStore(initialState);

       const wrapper = mount(AddTask,{
            global:{
                plugins:[store]
            }
       })
        const input = wrapper.find('input')
        //Act
        await input.setValue('cut my hair')
        wrapper.find('form').trigger('submit.prevent')
        store.commit('addTask', { name: input.element.value })

        expect(store.state.taskList.length).toBe(2)
       expect(store.state.taskList[1].name).toBe('cut my hair')
    })
    test('input validation with an invalid input',()=>{
        const wrapper = mount(AddTask)
        const input = wrapper.find('input')

        input.setValue('')
        wrapper.find('form').trigger('submit.prevent')
        
        expect(wrapper.emitted().inputValue).toBeUndefined()
    })
    test('emitted value with a corrected payload',async()=>{
        const wrapper = mount(AddTask)
        const input = wrapper.find('input')

        await input.setValue('buy groceries') 
        wrapper.find('button').trigger('submit')

        expect(wrapper.emitted().newTask[0][0]).toEqual('buy groceries')
    })
})
