/*import { mount,shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import AddTask from '@/components/AddTask.vue'
import App from '@/App.vue'
import router from '@/main.js'
import store from '@/store/store.js'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('vue router',()=>{
  it('test the home route',async()=>{
    const $route = {
      path: '/',
      params: {
        id: 123,
      },

    }

    //router.push('/')
    await router.isReady()

    const wrapper = mount(App,{
      mocks: {
        $route
      }
    })

    /*const wrapper = mount(App,{
      global:{
        plugins:[router]
      }
    })*/
    //expect(wrapper.html()).toContain('To do List')
    //expect(wrapper.text()).toContain('123');
   //expect(store.state.tasks).toContain('buy groceries')
  /*})
})

describe('AddTask.vue',()=>{
  test('adds task to store',async()=>{
    //Arrange 
    //const wrapper = mount(AddTask)
    const wrapper = shallowMount(AddTask, {
      global: {
        plugins: [store],
      },
    });
    const appWrapper = mount(App)
    const input = wrapper.find('input')
    //Act
    await input.setValue('cut my hair')
    wrapper.find('form').trigger('submit.prevent')
    //Assert
    expect(store.state.tasks).toContain('cut my hair')
  })

  test('emitted value with correct payload', async ()=>{
    const wrapper = mount(AddTask)
    const input = wrapper.find('input')

    await input.setValue('buy groceries') 
    wrapper.find('button').trigger('submit')

    expect(wrapper.emitted().newTask[0][0]).toEqual('buy groceries')

  })

  test('does not emit inputValue event on button click without input', async () => {
    const wrapper = mount(AddTask)
    
    wrapper.find('button').trigger('click')
    
    expect(wrapper.emitted().inputValue).toBeUndefined()
  })
  test('input task should be updated using v-model', async () => {
    const wrapper = mount(AddTask)
  
    await wrapper.find('input').setValue('test')
    expect(wrapper.vm.inputTask).toBe('test')
    await wrapper.find('input').setValue('testing')
    expect(wrapper.vm.inputTask).toBe('testing')
  })
})

test('vuex store', async() =>{

  store.commit('addTask', 'buy groceries');

  expect(store.state.tasks).toContain('buy groceries')
})
describe('AddTask.vue', () => {
  test('adds task to store', async () => {
    // Arrange
    const appWrapper = mount(App, {
      global: {
        plugins: [router]
      }
    });

    // Push the route you want to test
    router.push('/'); // Make sure this path matches one of your defined routes
    await router.isReady();

    // Now you can mount the AddTask component and interact with it
    const wrapper = mount(AddTask, {
      global: {
        plugins: [router]
      }
    });

    const input = wrapper.find('input');
    await input.setValue('cut my hair');
    wrapper.find('form').trigger('submit.prevent');

    // Assert
    expect(appWrapper.html()).toContain('cut my hair');
  });
});*/