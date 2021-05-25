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
        // form.addEventListener("submit", event => {
        //     event.preventDefault()
        //     const nameInput = event.target[0]
        //     const descriptionInput = event.target[1]
        //     flatcoinWatchlistAdapter.createWatchlist(nameInput, descriptionInput)
        // })
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

    listenEditDelete() {
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
                // const watchiListSubmitBtn = document.getElementById("watchlist_submit")
                // watchiListSubmitBtn.value = "Update"
                document.getElementById("watchlist_submit").value = "Update"
                // Populate input
                document.getElementById('name_input').value = div.children[0].innerText
                document.getElementById('description_input').value = div.children[1].innerText
                break
            case "view":
                coinCollection.style.display = "block"
                console.log(div)
                const flatcoinCoinAdapter = new FlatcoinCoinAdapter(`http://127.0.0.1:3000/`)
                flatcoinCoinAdapter.getCoinlist(div)
            default:
                break
        }
    }
}