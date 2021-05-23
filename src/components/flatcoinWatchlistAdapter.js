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

    createWatchlist(nameInput, descriptionInput) {
        fetch(this.baseWatchlistURL + `watchlists`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: nameInput.value,
                description: descriptionInput.value
            }) 
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 201) {
                const s = new Watchlist(data.store)
                s.addToDom()
            } else {
                alert(data.errors)
            }
            nameInput.value = ""
            descriptionInput.value = ""
        })
    }
}