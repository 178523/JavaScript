class tweet {
    content = '';
    constructor() {}

    addTweet(contentNombre, contentTelefono) {
        let f = new Date();
        if ((contentNombre != '') && (contentTelefono != '')) {
            this.content = `Nombre: ${contentNombre} - Teléfono: ${contentTelefono} -Fecha de registro: ${(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear())}`;
            this.createTweet(this.content);
            this.addTweetLS(this.content);
        } else {
            Swal.fire({
                position: 'center',
                type: 'warning',
                title: 'Faltan datos por ingresar',
                showConfirmButton: false,
                timer: 1000
            })
        }
    }

    createTweet(tweet) {
            const li = document.createElement('li');
            li.classList = "list-group-item rounded-pill text-break";

            const btnClose = document.createElement('button');
            btnClose.classList = 'close';

            const spanClose = document.createElement('span');
            spanClose.classList = 'badge badge-pill badge-light text-danger';
            spanClose.setAttribute = ('aria-hidden', 'true');
            spanClose.textContent = 'x';

            btnClose.appendChild(spanClose);
            li.innerText = tweet;
            listaTweets.appendChild(li);
            li.appendChild(btnClose);
            btnClose.appendChild(spanClose);

        }
        //Agregar LocalStorage

    addTweetLS(tweet) {
        let tweets;
        tweets = this.getLocalStorage();
        tweets.push(tweet);
        localStorage.setItem('tweets', JSON.stringify(tweets));
    }

    getLocalStorage() {
        let tweets;

        if (localStorage.getItem('tweets') === null) {
            tweets = [];
        } else {
            tweets = JSON.parse(localStorage.getItem('tweets'));
        }
        return tweets;
    }

    removeTweetLS(tweetD) {
        let tweets = this.getLocalStorage();
        tweets.forEach(function(tweet, index) {
            if (tweetD === tweet) {
                tweets.splice(index, 1);
                console.log(tweets);
            }
        });
        localStorage.setItem('tweets', JSON.stringify(tweets));
    }




}