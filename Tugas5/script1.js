const studentForm = document.getElementById('student-form');
const studentList = document.getElementById('student-list');

let students = [];
let editIndex = -1;

studentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const studentName = document.getElementById('studentName').value;
    const parentName = document.getElementById('parentName').value;
    const enrollmentDate = document.getElementById('enrollmentDate').value;

    if (editIndex === -1) {
        // Tambah siswa
        students.push({ studentName, parentName, enrollmentDate });
    } else {
        // Edit siswa
        students[editIndex] = { studentName, parentName, enrollmentDate };
        editIndex = -1; // Reset edit index
    }

    renderStudents();
    studentForm.reset();
});

function renderStudents() {
    studentList.innerHTML = '';
    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.studentName}</td>
            <td>${student.parentName}</td>
            <td>${student.enrollmentDate}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editStudent(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteStudent(${index})">Hapus</button>
            </td>
        `;
        studentList.appendChild(row);
    });
}

function editStudent(index) {
    const student = students[index];
    document.getElementById('studentName').value = student.studentName;
    document.getElementById('parentName').value = student.parentName;
    document.getElementById('enrollmentDate').value = student.enrollmentDate;
    editIndex = index;
}

function deleteStudent(index) {
    students.splice(index, 1);
    renderStudents();
}