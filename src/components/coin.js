class Coin {
    static all = []

    constructor({id}, watchlist_id, {coin_api_id, name, symbol, image, current_price, price_change_percentage_1h_in_currency, high_24h, low_24h, total_volume, market_cap, market_cap_rank, circulating_supply}) {
        this.id = id
        this.watchlist_id = watchlist_id
        this.coin_api_id = coin_api_id
        this.name = name
        this.symbol = symbol
        this.image = image
        this.current_price = current_price
        this.price_change_percentage_1h_in_currency = price_change_percentage_1h_in_currency
        this.high_24h = high_24h
        this.low_24h = low_24h
        this.total_volume = total_volume
        this.market_cap = market_cap
        this.market_cap_rank = market_cap_rank
        this.circulating_supply = circulating_supply
        Coin.all.push(this)    
    }

    render() { 
        return(`<div class="coin_box" id="coin-${this.id}" data-id=${this.id}>
                <h2>Coin ID: ${this.id}</h2>
                <h2>Coin ID: ${this.name}</h2>
                <p>Watchlist ID: ${this.watchlist_id}</p>
                <button data-action='delete'>Delete</button>
            </div>`
        )
    }

    addToDom() {
        coinCollection.innerHTML += this.render()
    }
}