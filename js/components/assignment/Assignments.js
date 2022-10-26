import AssignmentList from "./AssignmentList.js"
import CreateAssignment from "./CreateAssignment.js"

export default {

    components: {
        'assignment-list' : AssignmentList,
        'create-assignment' : CreateAssignment
    },

    template: `

        <assignment-list :assignments="filter.inProgress" title="In Progress"></assignment-list>

        <assignment-list :assignments="filter.completed"
            can-hide
            v-if="showCompleted"
            title="Completed"
            @toggle="showCompleted = ! showCompleted"
        >
        </assignment-list>

        <create-assignment @create="create"></create-assignment>

    `,

    data() {
        return {
            showCompleted: true,
            assignments: [
                {id : 1, name : 'Read the exercise', complete : false, tag : 'English'},
                {id : 2, name : 'Write the exercise', complete : false, tag : 'Math'},
                {id : 3, name : 'Do the exercise', complete : false, tag : 'Math'},
                {id : 1, name : 'Work out', complete : true, tag : 'Exercise'},
                {id : 2, name : 'Train running', complete : true, tag : 'Exercise'},
                {id : 3, name : 'Sleep well', complete : true, tag : 'Mental'},
            ],
        }
    },

     // created() {
    //     fetch("http://localhost:3001/assignments")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             this.assignments = data
    //         })
    // },

    computed : {
        filter() {
            return {
                inProgress : this.assignments.filter(a => ! a.complete),
                completed : this.assignments.filter(a => a.complete)
            }
        },
    },

    methods: {
        create(name) {
            this.assignments.push({
                id : this.assignments.length + 1,
                name : name,
                complete : false
            })
        }
    },
}

