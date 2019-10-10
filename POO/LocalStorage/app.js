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
    let contentTweet = document.getElementById('tweet').value.trim();
    Tweet.addTweet(contentTweet);

    document.getElementById('tweet').value = '';

}

function removeTweet(event) {
    event.preventDefault();
    if (event.target.tagName === 'SPAN') {
        tweetToDelete = event.target.parentElement.parentElement.textContent.slice(0, -1);


        Swal.fire({
            title: 'Advertencia',
            text: `Se Eliminará el Tweet "${tweetToDelete}"`,
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