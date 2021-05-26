class Coin {
    static all = []

    constructor(watchlist_id, {id, coin_api_id, name, symbol, image, current_price, price_change_percentage_1h_in_currency, high_24h, low_24h, total_volume, market_cap, market_cap_rank, circulating_supply}) {
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
        return(`<div class="coin_box" id="coin-${this.id}" data-id=${this.id} data-watchtid=${this.watchlist_id}>
                <p><img src="${this.image}" alt="${this.name}" width="150" height="150"></p>
                <h2>${this.name}</h2>
                <h3>Current Price: $${this.current_price}</h3>
                <p>Price Change 1 Hour: ${this.price_change_percentage_1h_in_currency}%</p>
                <p>24 Hour High: $${this.high_24h}</p>
                <p>24 Hour Low: $${this.low_24h}</p>
                <p>Trading Volume 24 Hours: ${this.total_volume}</p>
                <p>Market Cap: ${this.market_cap}</p>
                <p>Market Cap Rank: #${this.market_cap_rank}</p>
                <p>Circulating Supply: $${this.circulating_supply}</p>
                <button data-action='delete'>Delete</button>
            </div>`
        )
    }

    addToDom() {
        coinCollection.innerHTML += this.render()
    }
}