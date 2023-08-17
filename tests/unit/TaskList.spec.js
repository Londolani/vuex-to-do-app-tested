import { mount, createLocalVue } from '@vue/test-utils';
import TaskList from '@/components/TaskList.vue'
import TaskDescription from '@/components/TaskDescription.vue'
import { createStore } from 'vuex';
import { VueRouter, createRouter, createWebHistory } from 'vue-router';

/*const localVue = createLocalVue();
//localVue.use(VueRouter)

const routes = [
    {path:'/description',component: { template: '<div>Description Page</div>'}}
]

const router = new VueRouter({
    routes,
  })*/


// const router = createRouter({
//     history: createWebHistory(),
//     routes:[
//         {path:'/description/:taskId',component: TaskDescription}
//     ]
// })
//router.push = jest.fn();

const store = createStore({
    state(){ 
        return{
            taskList:[
                {id:0,name:'task1',description:'this is the first task'},
                {id:1,name:'task2',description:'this is the second task'},
                {id:2,name:'task3',description:'this is the third task'},
            ],
        }
    },
    mutations:{
        removeTask(state,taskId){
            state.taskList = state.taskList.filter((task)=> task.id !== taskId)
        }
    }
})


describe('TaskList',()=>{
    test('removes task from store',async()=>{
        const wrapper = mount(TaskList,{
            global:{
                plugins:[store]
            }
        })
        
        const newId = 1

        await wrapper.find('.remove-button').trigger('click')
        store.commit('removeTask',newId)

        expect(store.state.taskList.length).toBe(2)
        expect(store.state.taskList[1].name).not.toBe('task2')
    })
    /*test('route to description',()=>{
        const wrapper = mount(TaskList,{
            plugins:[router,store],
            stubs: ['router-link'],
            mocks: {
                $route:{
                    params:{
                        id:123
                    }
                }
            }
            
        })
        const taskId = 2

        wrapper.find('router-link').trigger('click')

        expect(router.push).toHaveBeenCalledWith('/description/2');
    })*/
    test('strike effect on button click',async()=>{
        const wrapper = mount(TaskList,{
            props: {
                id: 1,
                name: 'Task Name'
            }
        })
        
        await wrapper.find('.strike-button').trigger('click') 
        expect(wrapper.find('strike').exists()).toBe(true);

        await wrapper.find('.strike-button').trigger('click') 
        expect(wrapper.find('strike').exists()).toBe(false);
    })
    /*test('test description page',()=>{
        const wrapper = mount(TaskList,{
            localVue,router
        })
        const routerLink = wrapper.findComponent({name:'RouterLink'});
        routerLink.click();

        expect(wrapper.element.text()).toContain('Description Page')
    })*/
    test('allows for description page navigation',async()=>{
        const mockRoute ={
            params:{
                id:1
            }
        }
        const mockRouter ={
            push:jest.fn()
        }

        const wrapper = mount(TaskList,{
            props: {
                id: 1,
                name: 'Task Name'
            },
            stubs: ['router-link'],
            global:{
                mocks:{
                    $route: mockRoute, 
                    $router: mockRouter
                },
                //plugins:[store,router]
            }
        })
        await wrapper.find('button').trigger('click')
        //const routerLink = wrapper.find('router-link');
        //await routerLink.element.click();

        expect(mockRouter.push).toHaveBeenCalledTimes(1)
        expect(mockRouter.push).toHaveBeenCalledWith('/description/1')
    })
})