import axios from "axios"
export const subjectInfo = () => {
    return (
        axios.get('./broadsheet-sample/student-report-sheet.json')
    // .then(result => {
    //     result
    // })
)
}

