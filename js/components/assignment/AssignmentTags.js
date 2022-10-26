export default {

    props : {
        initialTags : {
            type : Array
        },
        currentTag : {
            type : String
        },

        modelValue : {
            type : String
        }
    },

    template : `
        <button
            @click="$emit('update:modelValue', tag)"
            class="px-3 py-1 border-2 bg-slate-300 rounded-md text-sm"
            :class="{
                'border-red-300' : tag == modelValue,
                'bg-red-300 border-red-300' : tag === 'reset'
            }"
            v-for="tag in tags"
        >
        {{ tag }}
        </button>
    `,

    // data() {
    //     return {
    //         currentTag : 'reset',
    //     }
    // },

    computed : {
        tags() {
            return [
                ...new Set(this.initialTags),
                'reset'
            ]
        },
    }

}
