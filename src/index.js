let editMode = false
let addWatchlist = false

let divWatchlistCollection = document.querySelector('#watchlist_collection')
const flatcoinWatchlistAdapter = new FlatcoinWatchlistAdapter(`http://127.0.0.1:3000/`)
const flatcoinCoinAdapter = new FlatcoinCoinAdapter(`http://127.0.0.1:3000/`)
const watchlistForm = new WatchlistForm
const coinlistForm = new CoinForm

//Creating a global variable for Back to watchlist btn
const backToWatchlistBtn = document.getElementById("back_watchlist_btn")
// Creating a global variable for Watchlist Collection
const watchlistCollection = document.getElementById("watchlist_collection")
// Creating a global variable for Watchlist Form container
const watchlistFormContainer = document.getElementById("watchlist_form_container")
// Creating a global variable for Coin Collection
const coinCollection = document.getElementById("coin_collection")
// Creating a global variable for New Watchlist Btn
const newWatchlistBtn = document.getElementById("new_watchlist_btn")
// Creating a global variable for Coin Container
const coinContainer = document.getElementById("coin_form_container")
// Creating a global varial for Watch list created Confirmation Container
const confirmationContainer = document.getElementById("watchlist_created_confirmation")
// Creating a global varial for Watch list deleted Confirmation Container
const confirmationDeleteContainer = document.getElementById("watchlist_deleted_confirmation")
// Creating a global varial for Watch list updated Confirmation Container
const confirmationUpdateContainer = document.getElementById("watchlist_updated_confirmation")

// DOM
document.addEventListener("DOMContentLoaded", () => {
    watchlistForm.addCreateForm()
    flatcoinWatchlistAdapter.getWatchlists()
    watchlistForm.listenViewEditDelete()
    displayWatchlistForm()
    displayCoinCollection()
    displayGoBackWatchlists()
    handleGoBackWatchlists()
})

// Display Watchlist NEW and UPDATE form
function displayWatchlistForm() {
    newWatchlistBtn.addEventListener("click", () => {
        addWatchlist = !addWatchlist
        if (addWatchlist) {
            newWatchlistBtn.innerText = "Never mind!"
            watchlistFormContainer.style.display = "block"
            editMode = false
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

// Displaying 'Go back to Watchilists!' btn
function displayGoBackWatchlists() {
    backToWatchlistBtn.style.display = "none"
}

// 
function handleGoBackWatchlists() {
    backToWatchlistBtn.addEventListener("click", () => {
        console.log("Go back baby")
        // Displaying Create New Watchlist
        newWatchlistBtn.style.display = "block"
        // Displaying Watchlist Collection
        watchlistCollection.style.display = "block"
        //Hiding Back to Watchlists btn
        backToWatchlistBtn.style.display = "none"
        // 
        coinContainer.style.display = "none"
        // Displaying Coins
        coinCollection.style.display = "none"

    })
}

// Testing area
// confirmationContainer.hide()
// setTimeout(function(){confirmationContainer.style.display = "none"}, 1000)





