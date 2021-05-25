class CoinForm {
    // constructor(){
    //     this.handleSubmit = this.handleSubmit.bind(this)
    //     this.handleViewEditDelete = this.handleViewEditDelete.bind(this)
    // }

    addCreateForm(watchlist_name) {
        const coinFormContainer = document.getElementById("coin_form_container")
        const title = document.createElement('div')
        title.innerHTML = `<h2>Watchlist: ${watchlist_name}</h2>`
        coinFormContainer.append(title)
        const form = document.createElement('form')
        form.innerHTML = `<input id="coin_input" placeholder='Coin' type='text'/><br>
        <input id="coin_submit" value="Add Coin to Watchlist!" type="submit"/>`
        coinFormContainer.append(form)

        // form.addEventListener("submit", this.handleSubmit)
        // form.addEventListener("submit", event => {
        //     event.preventDefault()
        //     const nameInput = event.target[0]
        //     const descriptionInput = event.target[1]
        //     flatcoinWatchlistAdapter.createWatchlist(nameInput, descriptionInput)
        // })
    }
}