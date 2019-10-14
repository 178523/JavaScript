const listaTweets = document.getElementById('lista-tweets');
let tweetToDelete = '';
evento();

function evento() {
    document.addEventListener('DOMContentLoaded', LocalStorageReady);
    document.querySelector('#formulario').addEventListener('submit', addTweet);
    listaTweets.addEventListener('click', removeTweet);
}
let Tweet = new tweet();

function addTweet() {
    let contentNombre = document.getElementById('nombre').value.trim();
    let contentTelefono = document.getElementById('telefono').value.trim();
    Tweet.addTweet(contentNombre, contentTelefono);




    document.getElementById('nombre').value = '';
    document.getElementById('telefono').value = '';

}

function removeTweet(event) {
    event.preventDefault();
    if (event.target.tagName === 'SPAN') {
        tweetToDelete = event.target.parentElement.parentElement.textContent.slice(0, -1);


        Swal.fire({
            title: 'Advertencia',
            text: `Se Eliminará el contacto "${tweetToDelete}"`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
        }).then((result) => {
            if (result.value) {
                event.target.parentElement.parentElement.remove();

                Tweet.removeTweetLS(tweetToDelete);
                Swal.fire({
                    position: 'center',
                    type: 'success',
                    title: `Se ha eliminado "${tweetToDelete}"`,
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        })
    }
}

function LocalStorageReady() {
    let tweets = Tweet.getLocalStorage();
    tweets.forEach(function(tweet) {
        Tweet.createTweet(tweet);
    });
}