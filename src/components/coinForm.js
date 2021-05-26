class CoinForm {
    constructor(){
        this.handleSubmit = this.handleSubmit.bind(this)
    //     this.handleViewEditDelete = this.handleViewEditDelete.bind(this)
    }

    addCreateForm(watchlist_name, watchlist_id) {
        const coinFormContainer = document.getElementById("coin_form_container")
        const title = document.createElement('div')
        title.innerHTML = `<h2>Watchlist: ${watchlist_name}</h2>`
        coinFormContainer.append(title)
        const form = document.createElement('form')
        form.innerHTML = `<input id="coin_input" placeholder='Coin' type='text'/><br>
        <input type="hidden" id="watchlist_id" name=${watchlist_id} value=${watchlist_id}>
        <input id="coin_submit" value="Add Coin to Watchlist!" type="submit"/>`
        coinFormContainer.append(form)

        form.addEventListener("submit", this.handleSubmit)
    }

    handleSubmit(event) {
        event.preventDefault()
        const coinInput = event.target[0]
        const watchlist_id = event.target[1]
        console.log(coinInput)
        console.log(watchlist_id)
        const flatcoinCoinAdapter = new FlatcoinCoinAdapter(`http://127.0.0.1:3000/`)
        flatcoinCoinAdapter.createWatchlistCoin(coinInput, watchlist_id)
    }

    listenDelete() {
        // const coinCollection = document.getElementById("coin_collection")
        coinCollection.addEventListener("click", this.handleDelete)
    }

    handleDelete(event) {
        const div = event.target.parentElement
        console.log(div)
        const action = event.target.dataset.action
        console.log(action)
        switch (action) {
            case "delete":
                flatcoinCoinAdapter.deleteCoinFromWatchlist(div)
                break
            default:
                break
        }
    }

}