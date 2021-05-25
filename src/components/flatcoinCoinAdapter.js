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
                    const c = new Coin(coin, div.dataset.id, updated_coin_data)
                    c.addToDom()
                })
            })
        })   
    }

        // // Fetch Watchlist Function
    // getCoinlist(div) {
    //     fetch(this.baseURL + `watchlists/` + div.dataset.id)
    //     .then(resp => {
    //         console.log(resp)
    //         return resp.json()
    //     })
    //     .then(data => {
    //         console.log(data)
    //         data.forEach(coin => {
    //             // console.log(watchlist)
    //             const c = new Coin(coin, div.dataset.id)
    //             //console.log(w)
    //             c.addToDom()
    //         })
    //     })   
    // }
}
