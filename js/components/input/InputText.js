export default {

    props : {
        placeholder : {
            type : String
        },
    },

    template : `

        <input
            type="text"
            :placeholder="placeholder"
            class="p-2 border-slate-400 border-2
            focus:border-slate-400"
        />

    `,

}
