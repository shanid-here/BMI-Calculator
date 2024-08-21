function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const age=document.getElementById('age').value;
    const result = document.getElementById('result');

    if (height === "" || weight === ""||age==="") {
        alert("Please fill all the fields");
    } else {
        const bmi = Math.ceil(weight / ((height / 100) ** 2));

        if (bmi < 18.5) {
            result.innerHTML = `<h2 class="text-center text-info fw-bolder">${bmi} kg/m²</h2><h4 class="text-center text-info fw-bolder">Underweight</h4><p class="my-3 fw-medium fs-4 text-bg-warning">Focus on nutrient-dense foods to gain weight gradually. Regular exercise can help build muscle mass.</p>`;
            document.getElementById("under").style.opacity="1"
        } else if (bmi < 25) {
            result.innerHTML = `<h2 class="text-center text-success fw-bolder">${bmi} kg/m²</h2><h4 class="text-center text-success fw-bolder">Healthy</h4><p class="my-3 fw-medium fs-4 text-bg-warning">Maintain a balanced diet and regular physical activity to sustain overall health.</p>`;
            document.getElementById("normal").style.opacity="1"

        } else if (bmi < 30) {
            result.innerHTML = `<h2 class="text-center text-warning fw-bolder">${bmi} kg/m²</h2><h4 class="text-center text-warning fw-bolder">Overweight</h4><p class="my-3 fw-medium fs-4 text-bg-warning">Adopt healthy eating habits, increase physical activity, and consider consulting a healthcare professional for guidance.</p>`;
            document.getElementById("over").style.opacity="1"

        } else {
            result.innerHTML = `<h2 class="text-center text-danger fw-bolder">${bmi} kg/m²</h2><h4 class="text-center text-danger fw-bolder">Obese</h4><p class="my-3 fw-medium fs-4 text-bg-warning">Focus on gradual weight loss through a combination of diet changes, increased exercise, and professional support.</p>`;
            document.getElementById("obese").style.opacity="1"

        }
        const speech= new SpeechSynthesisUtterance(` your bmi is ${result.innerHTML}`);
        speechSynthesis.speak(speech);
    }
  

}

function allclear(){
    height.value = "" 
     weight.value = "" 
      age.value=""
      result.innerHTML=""
}
