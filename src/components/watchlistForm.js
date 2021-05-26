class WatchlistForm {
    constructor(){
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleViewEditDelete = this.handleViewEditDelete.bind(this)
    }

    addCreateForm() {
        const watchlistFormContainer = document.getElementById("watchlist_form_container")
        const form = document.createElement('form')
        form.innerHTML = `<input id="name_input" placeholder='Name' type='text'/><br>
        <input id="description_input" placeholder='Description' type='text'/><br>
        <input id="watchlist_submit" value="Create Watchlist!" type="submit"/>`
        watchlistFormContainer.append(form)

        form.addEventListener("submit", this.handleSubmit)
    }

    handleSubmit(event) {
        event.preventDefault()
        const nameInput = event.target[0]
        const descriptionInput = event.target[1]
        if (editMode){
            flatcoinWatchlistAdapter.editWatchlist(editMode, nameInput, descriptionInput)
        } else {
            flatcoinWatchlistAdapter.createWatchlist(nameInput, descriptionInput)
        }    
    }

    listenViewEditDelete() {
        const watchlistCollection = document.getElementById("watchlist_collection")
        watchlistCollection.addEventListener("click", this.handleViewEditDelete)
    }

    handleViewEditDelete(event) {
        const div = event.target.parentElement
        console.log(div)
        const action = event.target.dataset.action
        console.log(action)
        switch (action) {
            case "delete":
                flatcoinWatchlistAdapter.deleteWatchlist(div)
                break
            case "edit":
                editMode = div
                watchlistFormContainer.style.display = "block"
                newWatchlistBtn.style.display = "none"
                // const watchiListSubmitBtn = document.getElementById("watchlist_submit")
                // watchiListSubmitBtn.value = "Update"
                document.getElementById("watchlist_submit").value = "Update"
                // Populate input
                document.getElementById('name_input').value = div.children[0].innerText
                document.getElementById('description_input').value = div.children[1].innerText
                break
            case "view":
                // Hidding Create New Watchlist
                newWatchlistBtn.style.display = "none"
                // Hidding Watchlist Collection
                watchlistCollection.style.display = "none"
                //Displaying Back to Watchlists btn
                backToWatchlistBtn.style.display = "block"
                // Displaying Coin Form
                // const coinlistForm = new CoinForm
                coinlistForm.addCreateForm(div.children[0].innerText, div.dataset.id)
                // const coinContainer = document.getElementById("coin_form_container")
                coinContainer.style.display = "block"
                // Displaying Coins
                coinCollection.style.display = "block"
                console.log(div)
                // const flatcoinCoinAdapter = new FlatcoinCoinAdapter(`http://127.0.0.1:3000/`)
                flatcoinCoinAdapter.getCoinlist(div)
                // Adding an event listener for delete
                coinlistForm.listenDelete()
                // const newcoinCollection = document.getElementById("coin_collection")
                // newcoinCollection.addEventListener("click", function(){
                //     const div = event.target.parentElement
                //     console.log(div)
                //     const action = event.target.dataset.action
                //     console.log(action)
                // })
            default:
                break
        }
    }
}