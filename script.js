const mathInput = document.getElementById('mathGrade');
const englishInput = document.getElementById('englishGrade');
const submitButton = document.getElementById('submitButton');
const gradesTable = document.getElementById('gradesTable').querySelector('tbody');

const mathAverageCell = document.getElementById('mathAverage');
const englishAverageCell = document.getElementById('englishAverage');
const overallAverageCell = document.getElementById('overallAverage');

let rowCount = 0;
let mathTotal = 0;
let englishTotal = 0;
let overallTotal = 0;

submitButton.addEventListener('click', () => {
    const mathGrade = parseFloat(mathInput.value);
    const englishGrade = parseFloat(englishInput.value);

    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert('Please enter valid grades for both Math and English.');
        return;
    }

    // Add new row
    rowCount++;
    const average = (mathGrade + englishGrade) / 2;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${mathGrade.toFixed(2)}</td>
        <td>${englishGrade.toFixed(2)}</td>
        <td>${average.toFixed(2)}</td>
    `;
    gradesTable.appendChild(newRow);

    // Update totals
    mathTotal += mathGrade;
    englishTotal += englishGrade;
    overallTotal += average;

    // Update averages
    const mathAverage = mathTotal / rowCount;
    const englishAverage = englishTotal / rowCount;
    const overallAverage = overallTotal / rowCount;

    mathAverageCell.textContent = mathAverage.toFixed(2);
    englishAverageCell.textContent = englishAverage.toFixed(2);
    overallAverageCell.textContent = overallAverage.toFixed(2);

    // Clear input fields
    mathInput.value = '';
    englishInput.value = '';
});
