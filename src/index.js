
let divWatchlistCollection = document.querySelector('#watchlist_collection')
const flatcoinWatchlistAdapter = new FlatcoinWatchlistAdapter(`http://127.0.0.1:3000/`)
const watchlistForm = new WatchlistForm

document.addEventListener("DOMContentLoaded", () => {
    flatcoinWatchlistAdapter.getWatchlists()
    watchlistForm.addCreateForm()
})

