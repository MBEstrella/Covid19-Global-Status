const form = document.querySelector('form')
const inputFilter = document.querySelector('input[type="text"]')

form.onsubmit = (e) => {
    e.preventDefault();

    window.location = `/${inputFilter.value}`
}
