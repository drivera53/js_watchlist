
let addWatchlist = false;

let divWatchlistCollection = document.querySelector('#watchlist_collection')
const flatcoinWatchlistAdapter = new FlatcoinWatchlistAdapter(`http://127.0.0.1:3000/`)
const watchlistForm = new WatchlistForm

document.addEventListener("DOMContentLoaded", () => {
    watchlistForm.addCreateForm()
    flatcoinWatchlistAdapter.getWatchlists()
    watchlistForm.listenEditDelete()
})

// Find a place where to put this

const watchlistFormContainer = document.getElementById("watchlist_form_container")
const newWatchlistBtn = document.getElementById("new_watchlist_btn")

newWatchlistBtn.addEventListener("click", () => {
    addWatchlist = !addWatchlist
    if (addWatchlist) {
        watchlistFormContainer.style.display = "block"
        // watchlistForm.addCreateForm()
    } else {
        watchlistFormContainer.style.display = "none"
    }
})

