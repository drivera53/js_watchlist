// Handle all fetch requests

class FlatcoinWatchlistAdapter {
    
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    // Fetch Watchlist Function
    getWatchlists() {
        fetch(this.baseURL + `watchlists`)
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

    // Create new Watchlist
    createWatchlist(nameInput, descriptionInput) {
        fetch(this.baseURL + `watchlists`, {
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
        .then(resp => {
            console.log(resp)
            return resp.json()
        })
        .then(data => {
            console.log(data)
            if (data.status === 201) {
                const s = new Watchlist(data.watchlist)
                s.addToDom()
            } else {
                alert(data.errors)
            }
            nameInput.value = ""
            descriptionInput.value = ""
            watchlistFormContainer.style.display = "none"
        })
        .catch(err => console.error(err)) 
    }

    // Delete Watchlist
    deleteWatchlist(div) {
        fetch(this.baseURL + `watchlists/` + div.dataset.id, {
            method: "DELETE"
        })

        .then(resp => {
            console.log(resp)
            return resp.json()
        })
        .then(data => {
            console.log(data)
            if(data.message === "Successfully deleted" ){
                div.remove()
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
    }

}