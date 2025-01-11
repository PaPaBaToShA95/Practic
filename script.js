let matResult = document.getElementById("result");

function imt(id = "weight") {
    let userWeight = parseFloat(document.getElementById('weight').value);
    let userHeight = parseFloat(document.getElementById('height').value);
    let matResult = document.getElementById('result');
    bodyback = document.getElementById("imtbody")
    if (!isNaN(userWeight) && !isNaN(userHeight) && userHeight > 0) {
        let userResult = (userWeight / (userHeight * userHeight)).toFixed(2);


        let weightStatus;
        if (userResult < 18.5) {
            weightStatus = ' (недостатня вага)';
            bodyback.style.backgroundColor = "rgb(0, 187, 255)";
        } else if (userResult >= 18.5 && userResult <= 24.9) {
            weightStatus = ' (нормальна вага)';
            bodyback.style.backgroundColor = "rgb(0, 255, 51)";
        } else if (userResult >= 25 && userResult <= 29.9) {
            weightStatus = ' (надмірна вага)';
            bodyback.style.backgroundColor = "rgb(221, 255, 0)";
        } else {
            weightStatus = ' (ожиріння)';
            bodyback.style.backgroundColor = "rgb(255, 0, 0)";
        }


        matResult.textContent = `Ваш ІМТ: ${userResult}${weightStatus}`;
    } else {
        matResult.textContent = 'Будь ласка, введіть коректні числові значення';
        bodyback.style.backgroundColor = "rgb(255, 255, 255)";
    }
}
