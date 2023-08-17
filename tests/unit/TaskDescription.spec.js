import { mount } from '@vue/test-utils';
import TaskDescription from '@/components/TaskDescription.vue'; 
import App from '@/App.vue'

import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: { template: App } } 
    ]
});

const store = createStore({
    getters: {
        getTaskById: () => (taskId) => ({
            id: taskId,
            name: 'cut my hair',
            description: 'cutting my hair by the barbershop'
        })
    }
});

describe('TaskDescription', () => {
    test('navigates back to home route on button click', async () => {
        const wrapper = mount(TaskDescription, {
            global: {
                plugins: [router, store]
            }
        });

        await wrapper.find('button').trigger('click');

        expect(wrapper.vm.$route.path).toBe('/');
    });
    test('displays correct information from getters', async()=>{
        const wrapper = mount(TaskDescription, {
            global: {
                plugins: [router,store]
            }
        });
        expect(wrapper.find('h3').text()).toBe('cut my hair')
        expect(wrapper.find('p').text()).toBe('cutting my hair by the barbershop')
    })

});
