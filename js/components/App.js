import AppButton from './AppButton.js'
import Assignments from './assignment/Assignments.js'

export default {

    components: {
        'app-button' : AppButton,
        'assignments' : Assignments
    },

    template: `
        <div class="mb-7">
            <h1 class="text-xl font-bold mb-3">{{ greeting }} ({{ greeting.length }})</h1>
            <input type="text" v-model="greeting" class="border-2 border-slate-400 p-2">
        </div>

        <hr class="mb-5">

        <div class="mb-7">
            <button :class="active ? 'bg-red-500' : 'bg-slate-800'" class="py-3 px-5 rounded-md text-white" @click="toggle">Click</button>
        </div>

        <hr class="mb-5">

        <div class="mb-7">
            <h1 class="text-xl font-bold mb-3">Components</h1>
            <app-button type="success">Success</app-button>
            <app-button >Primary</app-button>
            <app-button type="secondary">Secondary</app-button>
            <app-button type="rose">Rose</app-button>
            <app-button type="sky">Sky</app-button>
            <app-button :processing="true">Disabled</app-button>
        </div>

        <hr class="mb-5">

        <div class="mb-7">

            <assignments></assignments>

        </div>

        <hr class="mb-5">
    `,

    data() {
        return {
            greeting: 'Hello, world',
            active: false,
        }
    },

    methods : {
        toggle() {
            this.active = ! this.active
        }
    },
}
