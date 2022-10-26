import Assignment from './Assignment.js'
import AssignmentTags from './AssignmentTags.js'
import AppButton from '../AppButton.js'

export default {

    props : {
        title : {
            type : String
        },
        assignments : {
            type : Array
        },
        canHide : {
            type : Boolean,
            default : false
        }
    },

    components : {
        'assignment' : Assignment,
        'assignment-tags' : AssignmentTags,
        'app-button' : AppButton
    },

    template: `
        <div class="mb-5" style="max-width:500px;" v-if="assignments.length">

            <div class="flex justify-between">
                <h1 class="text-xl font-bold mb-3">{{ title }} ({{ assignments.length }})</h1>
                <button class="px-3 rounded-md bg-gray-300"
                    v-show="canHide"
                    @click="$emit('toggle')"
                >
                    &times
                </button>
            </div>

            <div class="my-3 flex gap-3">

                <assignment-tags
                    :initial-tags="assignments.map(a => a.tag)"
                    @change="catchTag"
                    v-model="currentTag"
                >
                </assignment-tags>

            </div>

            <ul>
                <assignment
                    v-for="assignment in filterAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment>
            </ul>

        </div>
    `,

    data() {
        return {
            currentTag : 'reset',
        }
    },

    methods: {
        catchTag(value) {
            this.currentTag = value
        }
    },

    computed : {

        filterAssignments() {
            if (this.currentTag === 'reset') {
                return this.assignments
            }
            return this.assignments.filter(a => a.tag === this.currentTag)
        }
    }
}
