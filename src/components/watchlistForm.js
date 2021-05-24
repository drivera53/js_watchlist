class WatchlistForm {
    constructor(){
        this.handleEditDelete = this.handleEditDelete.bind(this)
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
        flatcoinWatchlistAdapter.createWatchlist(nameInput, descriptionInput)
    }

    listenEditDelete() {
        const watchlistCollection = document.getElementById("watchlist_collection")
        watchlistCollection.addEventListener("click", this.handleEditDelete)
    }

    handleEditDelete(event) {
        const div = event.target.parentElement
        console.log(div)
        const action = event.target.dataset.action
        console.log(action)
        switch (action) {
            case "delete":
                flatcoinWatchlistAdapter.deleteWatchlist(div)
                break
            default:
                break
        }
    }
}