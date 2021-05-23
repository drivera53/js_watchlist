
let divWatchlistCollection = document.querySelector('#watchlist_collection')
const flatcoinWatchlistAdapter = new FlatcoinWatchlistAdapter(`http://127.0.0.1:3000/`)

document.addEventListener("DOMContentLoaded", () => {
    flatcoinWatchlistAdapter.getWatchlists()
})

