import {getStudentInfo} from './blocks/student/student';
import {getPockemonInfo} from './blocks/pokemon/pokemon';

window.addEventListener('DOMContentLoaded', _ => getStudentInfo(), {once: true});

document
    .getElementById('student')
    .addEventListener('click', () => {
        getStudentInfo();
    });

document
    .getElementById('pokemon')
    .addEventListener('click', async () => {
        await getPockemonInfo();
    });