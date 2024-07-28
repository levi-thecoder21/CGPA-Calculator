document.getElementById('gpaBtn').addEventListener('click', function() {
    window.location.href = 'gpa.html';
});

document.getElementById('cgpaBtn').addEventListener('click', function() {
    window.location.href = 'cgpa.html';
});

document.getElementById('generateTableBtn').addEventListener('click', function() {
    const numSubjects = document.getElementById('numSubjects').value;
    const subjectsForm = document.getElementById('subjectsForm');
    const subjectsTable = document.getElementById('subjectsTable').getElementsByTagName('tbody')[0];

    if (numSubjects > 0) {
        subjectsForm.style.display = 'block';
        subjectsTable.innerHTML = ''; 

        for (let i = 0; i < numSubjects; i++) {
            const row = subjectsTable.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);

            cell1.innerHTML = `<input type="text" name="subject${i+1}" required>`;
            cell2.innerHTML = `<input type="number" name="credits${i+1}" min="1" max="5" required>`;
            cell3.innerHTML = `<input type="text" name="grade${i+1}" required>`;
        }
    }
});
