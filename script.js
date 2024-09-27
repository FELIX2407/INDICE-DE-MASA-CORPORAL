let bmiHistory = [];

function calculateBMI() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convertir cm a metros

    if (isNaN(weight) || isNaN(height)) {
        alert('Por favor, ingresa valores válidos.');
        return;
    }

    const bmi = weight / (height * height);
    let category = '';
    let dietRecommendation = '';
    let exerciseRecommendation = '';

    if (bmi < 18.5) {
        category = 'Infrapeso';
        dietRecommendation = 'Aumenta tu ingesta calórica con alimentos nutritivos bajos en azucares y grasas saturadas.';
        exerciseRecommendation = 'Realiza ejercicios de fuerza para ganar masa muscular al menos 3 veces por semana.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Peso Ideal';
        dietRecommendation = 'Mantén una dieta balanceada y saludable.';
        exerciseRecommendation = 'Continúa con una rutina de ejercicios regular e intenta mejorar tu capacidad aerobica y anaerobica.';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Sobrepeso';
        dietRecommendation = 'Reduce la ingesta de calorías y evita alimentos procesados.';
        exerciseRecommendation = 'Aumenta la actividad física anaerobica y de fuerza resistencia con ejercicios cardiovasculares.';
    } else {
        category = 'Obesidad';
        dietRecommendation = 'Consulta a un nutricionista para una dieta adecuada.';
        exerciseRecommendation = 'Realiza ejercicios de bajo impacto y consulta a un deportologo profesional.';
    }

    // Almacenar los datos en el array
    bmiHistory.push({
        firstName,
        lastName,
        gender,
        weight,
        height: height * 100, // Convertir de nuevo a cm
        bmi: bmi.toFixed(2),
        category
    });

    // Actualizar el resultado y las recomendaciones
    document.getElementById('result').innerText = `${firstName} ${lastName}, tu IMC es ${bmi.toFixed(2)} (${category})`;
    document.getElementById('recommendations').innerHTML = `
        <h3>Recomendaciones</h3>
        <p><strong>Dieta:</strong> ${dietRecommendation}</p>
        <p><strong>Ejercicio:</strong> ${exerciseRecommendation}</p>
    `;

    // Actualizar la tabla de historial
    updateHistoryTable();
}

function updateHistoryTable() {
    const historyTable = document.getElementById('historyTable');
    historyTable.innerHTML = `
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Género</th>
            <th>Peso (kg)</th>
            <th>Altura (cm)</th>
            <th>IMC</th>
            <th>Categoría</th>
        </tr>
    `;

    bmiHistory.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.firstName}</td>
            <td>${entry.lastName}</td>
            <td>${entry.gender}</td>
            <td>${entry.weight}</td>
            <td>${entry.height}</td>
            <td>${entry.bmi}</td>
            <td>${entry.category}</td>
        `;
        historyTable.appendChild(row);
    });
}

function generateBMIReport() {
    let report = 'Informe del Índice de Masa Corporal (IMC):\n\n';
    bmiHistory.forEach(entry => {
        report += `Nombre: ${entry.firstName} ${entry.lastName}\n`;
        report += `Género: ${entry.gender}\n`;
        report += `Peso: ${entry.weight} kg\n`;
        report += `Altura: ${entry.height} cm\n`;
        report += `IMC: ${entry.bmi}\n`;
        report += `Categoría: ${entry.category}\n\n`;
    });
    alert(report);
}

document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por tu feedback!');
});


