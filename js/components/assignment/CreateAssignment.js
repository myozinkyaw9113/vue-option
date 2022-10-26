import AppButton from "../AppButton.js"
// import InputText from "../input/InputText.js"

export default {

    components : {
        'app-button': AppButton,
        // 'input-text': InputText
    },

    template : `
        <div class="flex gap-4">

            <form @submit.prevent="create">

            <input
                type="text"
                v-model="newAssignment"
                placeholder="New assignment..."
                class="p-2 border-slate-400 border-2
                focus:border-slate-400"
            />

            </form>

            <app-button @click="create" type="success">Create</app-button>

        </div>
    `,

    data() {
        return {
            newAssignment: null,
        }
    },

    methods: {
        create() {
            this.$emit('create', this.newAssignment)
            this.newAssignment = null
        }
    },

}
