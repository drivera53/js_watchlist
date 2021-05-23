// Handle all fetch requests

class FlatcoinWatchlistAdapter {
    
    constructor(baseURL) {
        this.baseWatchlistURL = baseURL
    }

    // Fetch Watchlist Function
    getWatchlists() {
        fetch(this.baseWatchlistURL + `watchlists`)
        .then(res => res.json())
        .then(watchlists => {
            watchlists.forEach(watchlist => {
                // console.log(watchlist)
                const w = new Watchlist(watchlist)
                //console.log(w)
                w.addToDom()
            })
        })    
    }
}