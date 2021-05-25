class Coin {
    static all = []

    constructor({id}, watchlist_id) {
        this.id = id
        this.watchlist_id = watchlist_id
        Coin.all.push(this)    
    }

    render() {
        return(`<div class="box" id="coin-${this.id}" data-id=${this.id}>
                <h2>Coin ID: ${this.id}</h2>
                <p>Watchlist ID: ${this.watchlist_id}</p>
                <button data-action='view'>View</button>
                <button data-action='edit'>Edit</button> 
                <button data-action='delete'>Delete</button>
            </div>`
        )
    }

    addToDom() {
        coinCollection.innerHTML += this.render()
    }
}