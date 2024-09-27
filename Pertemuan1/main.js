let todoName = document.getElementById('todo-name');
let btnSimpan = document.getElementById('btn-save');
let todoContainer = document.querySelector('.list-group');

btnSimpan.addEventListener('click', function () {
    if (todoName.value === '') {
        alert('Nama tidak boleh kosong');
    } else {
        let todoHTML = `
        <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
            <label class="form-check-label" for="firstCheckbox">
            <span>${todoName.value}</span>
            <button class="btn-hapus">x</button>
          </label>
        </li>
        `;
        todoContainer.innerHTML += todoHTML;
        todoName.value = '';
        todoName.focus();
    }
});

// Event delegation untuk hapus elemen
todoContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-hapus')) {
        // Menghapus elemen <li> yang merupakan parent dari checkbox, label, dan button
        event.target.closest('li').remove();
    }
});