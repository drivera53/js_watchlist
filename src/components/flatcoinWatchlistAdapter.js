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
        // .then(resp => {
        //     console.log(resp)
        //     if(resp['status'] === 201){
        //         const s = new Watchlist(data.store)
        //         s.addToDom()
        //     } else {
        //         alert(resp['status'])
        //     }
        //     nameInput.value = ""
        //     descriptionInput.value = ""

        // })
        .then(res => res.json())
        .then(data => {
            console.log(data.status)
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

    deleteWatchlist(div) {
        fetch(this.baseURL + `watchlists/` + div.dataset.id, {
        // fetch(this.baseURL + `watchlists/90`, {
            method: "DELETE"
        })
        .then(resp => {
            console.log(resp)
            console.log(resp['status'])
            if(resp['status'] === 204){
                div.remove()
            } else {
                alert(resp['status'])
            }
            
        })

        .then(data => {
            console.log(data)
        })
        // .then(resp => resp.json())
        // .then(data => {
        //     console.log(data)
        //     if(data.status === 204){
        //         div.remove()
        //     } else {
        //         alert(data.message)
        //     }
        // })
        // .catch(err => console.error(err))
    }

}