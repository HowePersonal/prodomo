import { compareAsc, format } from 'date-fns'

export default function history() {
    let historyDiv = document.getElementById('historyDiv');

    let x = format(new Date(2023, 0, 3), 'yyyy-MM-dd')
    return x;

}

function createGraph() {

}