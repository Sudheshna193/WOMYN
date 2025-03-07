function checkPeriods() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const cycleLength = document.getElementById('cycleLength').value;
  const lastPeriod = new Date(document.getElementById('lastPeriod').value);

  // Calculate the current date
  const currentDate = new Date();

  // Calculate the difference in days since the last period
  const differenceInDays = Math.floor((currentDate - lastPeriod) / (1000 * 60 * 60 * 24));

  let resultText = `${name}, `;
  let symptoms = [];

  if (differenceInDays < cycleLength - 3) {
    resultText += `your periods seem regular.`;

    // Construct content for regular periods result
    const regularPeriodsContent = `
      <html>
      <head>
        <title>Regular Periods Result</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-image: url('water.jpg');
            background-size: cover;
            background-position: center;
            animation: backgroundAnimation 10s infinite alternate;
            backdrop-filter: blur(5px);
          }
          h2 {
            margin-bottom: 10px;
            color: #333;
          }
          p {
            margin-bottom: 15px;
            line-height: 1.6;
          }
          ul {
            padding-left: 20px;
            margin-bottom: 15px;
          }
          li {
            margin-bottom: 5px;
          }
          .close-button {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: white;
            color: black;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          .close-button:hover {
            background-color: #d291bc;
          }
        </style>
      </head>
      <body>
        <h2>Regular Periods Detected</h2>
        <p>Your periods are regular. Here are some precautions and dietary tips:</p>
        <ul>
          <li>Maintain a healthy weight.</li>
          <li>Manage stress levels.</li>
          <li>Get regular exercise.</li>
          <li>Eat a balanced diet rich in fruits, vegetables, and whole grains.</li>
          <li>Avoid smoking and excessive alcohol consumption.</li>
          <li>Stay hydrated.</li>
        </ul>
        <p>Consider adding more iron-rich foods (like leafy greens and lean meats) and calcium-rich foods (like dairy or fortified plant-based milks) to your diet.</p>
        <button class="close-button" onclick="window.close()">Close Window</button>
      </body>
      </html>
    `;

    // Open the result window for regular periods
    const regularPeriodsWindow = window.open('', '_blank');
    regularPeriodsWindow.document.open();
    regularPeriodsWindow.document.write(regularPeriodsContent);
    regularPeriodsWindow.document.close();

  } else {
    resultText += `you might have irregular periods. Consult a doctor for advice.`;

    // Construct content for symptoms selection window with irregular periods result
    const symptomsWindowContent = `
      <html>
      <head>
        <title>Symptoms Selection</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-image: url('water.jpg');
            background-size: cover;
            background-position: center;
            animation: backgroundAnimation 10s infinite alternate;
            backdrop-filter: blur(5px);
          }
          h2 {
            margin-bottom: 10px;
            color: #333;
          }
          label {
            display: block;
            margin-bottom: 10px;
          }
          .reasons-button {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          .reasons-button:hover {
            background-color: #45a049;
          }
          .close-button {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: white;
            color: black;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          .close-button:hover {
            background-color: #d291bc;
          }
        </style>
        <script>
          function openReasonsWindow() {
            const selectedSymptoms = Array.from(document.querySelectorAll('input[name="symptom"]:checked')).map(symptom => symptom.value);
            const reasonsWindowContent = generateReasonsContent(selectedSymptoms);
            const reasonsWindow = window.open('', '_blank');
            reasonsWindow.document.open();
            reasonsWindow.document.write(reasonsWindowContent);
            reasonsWindow.document.close();
          }

          function generateReasonsContent(selectedSymptoms) {
            let reasonsContent = '<html><head><title>Reasons for Symptoms</title>';
            reasonsContent += '<style>';
            reasonsContent += 'body { font-family: Arial, sans-serif; padding: 20px; }';
            reasonsContent += 'h2 { margin-bottom: 10px; color: #333; }';
            reasonsContent += 'ul { padding-left: 20px; margin-bottom: 15px; }';
            reasonsContent += 'li { margin-bottom: 5px; }';
            reasonsContent += '.close-button { margin-top: 20px; padding: 10px 20px; background-color: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer; }';
            reasonsContent += '.close-button:hover { background-color: #d32f2f; }';
            reasonsContent += '.reasons-button:hover { background-color: #45a049; }';
            reasonsContent += '</style>';
            reasonsContent += '</head>';
            reasonsContent += '<body>';
            reasonsContent += '<h2>Reasons based on selected symptoms:</h2>';
            reasonsContent += '<ul>';
            
            selectedSymptoms.forEach(symptom => {
              switch (symptom) {
                case 'hormonalImbalances':
                  reasonsContent += '<li>Hormonal imbalances, such as polycystic ovary syndrome (PCOS).</li>';
                  break;
                case 'thyroidDisorders':
                  reasonsContent += '<li>Thyroid disorders affecting hormone levels.</li>';
                  break;
                case 'stressFactors':
                  reasonsContent += '<li>Stress and emotional factors disrupting hormonal balance.</li>';
                  break;
                case 'weightChanges':
                  reasonsContent += '<li>Weight changes, especially significant weight gain or loss.</li>';
                  break;
                case 'excessiveExercise':
                  reasonsContent += '<li>Excessive exercise or physical activity.</li>';
                  break;
                case 'medications':
                  reasonsContent += '<li>Certain medications affecting hormonal levels.</li>';
                  break;
                case 'medicalConditions':
                  reasonsContent += '<li>Medical conditions affecting reproductive organs.</li>';
                  break;
                default:
                  break;
              }
            });

            reasonsContent += '</ul>';

            // Add precautions
            reasonsContent += '<h2>Precautions:</h2>';
            reasonsContent += '<ul>';
            reasonsContent += '<li>Maintain a healthy weight.</li>';
            reasonsContent += '<li>Manage stress levels.</li>';
            reasonsContent += '<li>Get regular exercise.</li>';
            reasonsContent += '<li>Eat a balanced diet rich in fruits, vegetables, and whole grains.</li>';
            reasonsContent += '<li>Avoid smoking and excessive alcohol consumption.</li>';
            reasonsContent += '<li>Stay hydrated.</li>';
            reasonsContent += '</ul>';

            // Add diet recommendations
            reasonsContent += '<h2>Diet Recommendations:</h2>';
            reasonsContent += '<p>Consider adding more iron-rich foods (like leafy greens and lean meats) and calcium-rich foods (like dairy or fortified plant-based milks) to your diet.</p>';

            reasonsContent += '<button onclick="window.close()">Close Window</button></body></html>';
            return reasonsContent;
          }
        </script>
      </head>
      <body>
        <h2>Irregular Periods Detected</h2>
        <p>${resultText}</p>
        <h2>Select Symptoms to Check Reasons:</h2>
        <form id="symptomsForm">
          <label><input type="checkbox" name="symptom" value="hormonalImbalances"> Hormonal Imbalances</label><br>
          <label><input type="checkbox" name="symptom" value="thyroidDisorders"> Thyroid Disorders</label><br>
          <label><input type="checkbox" name="symptom" value="stressFactors"> Stress and Emotional Factors</label><br>
          <label><input type="checkbox" name="symptom" value="weightChanges"> Weight Changes</label><br>
          <label><input type="checkbox" name="symptom" value="excessiveExercise"> Excessive Exercise</label><br>
          <label><input type="checkbox" name="symptom" value="medications"> Certain Medications</label><br>
          <label><input type="checkbox" name="symptom" value="medicalConditions"> Medical Conditions</label><br>
        </form>
        <button class="reasons-button" onclick="openReasonsWindow()">Show Reasons</button>
        <button class="close-button" onclick="window.close()">Close Window</button>
      </body>
      </html>
    `;

    const symptomsWindow = window.open('', '_blank');
    symptomsWindow.document.open();
    symptomsWindow.document.write(symptomsWindowContent);
    symptomsWindow.document.close();
  }
}
