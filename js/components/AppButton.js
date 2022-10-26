export default {
    template : `
        <button
            type="button"
            :class="{
                'px-5 py-3 mr-3 disabled:cursor-not-allowed text-white rounded-md disabled:bg-slate-400' : true,
                'bg-red-400 hover:bg-red-300' : type === 'primary',
                'bg-blue-400 hover:bg-blue-300' : type === 'secondary',
                'bg-rose-400 hover:bg-rose-300' : type === 'rose',
                'bg-sky-400 hover:bg-sky-300' : type === 'sky',
                'bg-green-400 hover:bg-green-300' : type === 'success',
                'is-loading' : processing
            }"
            :disabled="processing">
            <slot />
        </button>
    `,
    props: {
        type : {
            type : String,
            default : 'primary'
        },
        processing : {
            type : Boolean,
            default : false
        }
    },
}
