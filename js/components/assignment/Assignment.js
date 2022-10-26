export default {

    props : {
        assignment : {
            type : Object
        }
    },

    template: `
        <li>
            {{ assignment.name }}
            <input type="checkbox" v-model="assignment.complete" />
        </li>
    `,

}
