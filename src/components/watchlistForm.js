class WatchlistForm {

    addCreateForm() {
        const watchlistFormContainer = document.getElementById("watchlist_form_container")
        const form = document.createElement('form')
        form.innerHTML = `<input id="name_input" placeholder='Name' type='text'/><br>
        <input id="description_input" placeholder='Description' type='text'/><br>
        <input id="watchlist_submit" value='Create Watchlist!' type='submit'/>`
        watchlistFormContainer.append(form)

        form.addEventListener("submit", this.handleSubmit)
    }

    handleSubmit(event) {
        event.preventDefault()
        const nameInput = event.target[0]
        const descriptionInput = event.target[1]
        flatcoinWatchlistAdapter.createWatchlist(nameInput, descriptionInput)
    }
}