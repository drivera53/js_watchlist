class FlatcoinCoinAdapter {
    
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    // Testing new 
    getCoinlist(div) {
        fetch(this.baseURL + `watchlists/` + div.dataset.id)
        .then(resp => {
            console.log(resp)
            return resp.json()
        })
        .then(data => {
            console.log(data)
            data.forEach(coin => {
                fetch(`http://127.0.0.1:3000/coins/${coin.id}`)
                .then(resp => {
                console.log(resp)
                return resp.json()
                })
                .then(updated_coin_data => {
                    const c = new Coin(div.dataset.id, updated_coin_data)
                    c.addToDom()
                })
            })
        })   
    }

    // Create new WatchlistCoin joining table
    createWatchlistCoin(coinInput, watchlist_id) {
        fetch(this.baseURL + `watchlist_coins`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                coin_name: coinInput.value,
                watchlist_id: watchlist_id.value
            }) 
        })
        .then(resp => {
            console.log(resp)
            return resp.json()
        })
        .then(data => {
            console.log(data)
            if (data.status === 201) {
                console.log(data.watchlist_coin.coin_id)
                fetch(`http://127.0.0.1:3000/coins/${data.watchlist_coin.coin_id}`)
                .then(resp => {
                console.log(resp)
                return resp.json()
                })
                .then(updated_coin_data => {
                    const c = new Coin(watchlist_id, updated_coin_data)
                    c.addToDom()
                })
            } else {
                alert(data.errors)
            }
        coinInput.value = ""
        //     descriptionInput.value = ""
        //     watchlistFormContainer.style.display = "none"
        //     newWatchlistBtn.innerText = "Create a new Watchlist!"
        })
        .catch(err => console.error(err)) 
    }

    deleteCoinFromWatchlist(div) {
        fetch(this.baseURL + `watchlist_coins/special_delete/${div.dataset.id}/${div.dataset.watchtid}`, {
        // fetch(this.baseURL + `/watchlist_coins/special_delete/1/1`, {
            method: "DELETE"
        })

        .then(resp => {
            // console.log(resp)
            return resp.json()
        })
        .then(data => {
            // console.log(data)
            if(data.message === "Successfully deleted" ){
                div.remove()
                // alert(data.message)
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
    }


}
