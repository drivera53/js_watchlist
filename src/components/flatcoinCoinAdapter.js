class FlatcoinCoinAdapter {
    
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    // Fetch Watchlist Function
    getCoinlist(div) {
        fetch(this.baseURL + `watchlists/` + div.dataset.id)
        .then(resp => {
            console.log(resp)
            return resp.json()
        })
        .then(data => {
            console.log(data)
            data.forEach(coin => {
                // console.log(watchlist)
                const c = new Coin(coin, div.dataset.id)
                //console.log(w)
                c.addToDom()
            })
        })
        // .then(res => res.json())
        // .then(watchlists => {
        //     watchlists.forEach(watchlist => {
        //         // console.log(watchlist)
        //         const w = new Watchlist(watchlist)
        //         //console.log(w)
        //         w.addToDom()
        //     })
        // })    
    }


}