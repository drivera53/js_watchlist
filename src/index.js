
let editMode = false
let addWatchlist = false;

let divWatchlistCollection = document.querySelector('#watchlist_collection')
const flatcoinWatchlistAdapter = new FlatcoinWatchlistAdapter(`http://127.0.0.1:3000/`)
const watchlistForm = new WatchlistForm

// Creating a global variable for Watchlist Form container
const watchlistFormContainer = document.getElementById("watchlist_form_container")
// Creating a global variable for Coin Collection
const coinCollection = document.getElementById("coin_collection")
// 
const newWatchlistBtn = document.getElementById("new_watchlist_btn")

document.addEventListener("DOMContentLoaded", () => {
    watchlistForm.addCreateForm()
    flatcoinWatchlistAdapter.getWatchlists()
    watchlistForm.listenEditDelete()
    displayWatchlistForm()
    displayCoinCollection()
})

// Display Watchlist NEW and UPDATE form
function displayWatchlistForm() {
    newWatchlistBtn.addEventListener("click", () => {
        addWatchlist = !addWatchlist
        if (addWatchlist) {
            newWatchlistBtn.innerText = "Never mind!"
            watchlistFormContainer.style.display = "block"
            // watchlistForm.addCreateForm()
        } else {
            watchlistFormContainer.style.display = "none"
            newWatchlistBtn.innerText = "Create a new Watchlist!"
        }
    })
}

// Displaying Coin Collection
function displayCoinCollection() {
    coinCollection.style.display = "none"
}




