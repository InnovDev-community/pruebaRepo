'use strict'

window.onload = () => {
    let form = document.getElementById('form-user')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        do_Http_request('POST', new FormData(form), 'php/script.php', () => { alert('done') })
    })

    function do_Http_request(method, data, url, callback) {
        var xmlhttp = new XMLHttpRequest()

        xmlhttp.addEventListener('load', (event) => { console.log(event.target.responseText) })
        xmlhttp.addEventListener('error', (event) => { alert('error') })
        xmlhttp.open(method, url, true)
        xmlhttp.send(data)
    }
}
