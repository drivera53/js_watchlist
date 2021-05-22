// 
let divWatchlistCollection = document.querySelector('#watchlist_collection')

// Fetch Watchlist Function
function getWatchlists() {
    return fetch('http://127.0.0.1:3000/watchlists')
      .then(res => res.json())
}

// Test => console.log(getWatchlists())

function renderWatchlists(watchlist) {
    // h2 tag with Watchlist's name
    let h2 = document.createElement('h2')
    h2.innerText = watchlist.name

    // P tag for description
    let p = document.createElement('p')
    p.innerText = watchlist.description

    // Create a div box
    let divBox = document.createElement('div')
    divBox.setAttribute('class', 'box')
    divBox.append(h2, p)
    divWatchlistCollection.append(divBox)
}


// Calling functions to Fetch Watchlists and Displaying them
getWatchlists().then(watchlists => {
    watchlists.forEach(watchlist => {
      renderWatchlists(watchlist)
    })
})