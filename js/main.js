function showAlert(message, status) {
    var alert = document.getElementById('alert');
    var alertMessage = document.getElementById('alert-message');

    // check 'status' and change alert background color by adding class
    if (status === 200) {
        alert.classList.add("success-alert")
    } else {
        alert.classList.add("danger-alert")
    }

    alertMessage.innerHTML = message;
    alert.classList.remove('hidden');
    alert.classList.add('show');
}

function closeAlert() {
    var alert = document.getElementById('alert');
    alert.classList.remove('show');
    alert.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('register-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const release = document.getElementById('release').value.trim();
        const author = document.getElementById('author').value.trim();

        // check blanks
        if (name === '' || release === '' || author === '') {
            showAlert('Por favor, preencha todos os campos.', 400);
            return;
        }

        // save on cache
        series = JSON.parse(localStorage.getItem("series")) || [];
        series.push({"name": name, "release": release, "author": author});
        // update series
        localStorage.setItem("series", JSON.stringify(series));

        showAlert('Série salva!', 200);
        form.reset();
    });
});

