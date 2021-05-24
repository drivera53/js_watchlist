class Watchlist {
    static all = []

    constructor({id, name, description, created_at}) {
        this.id = id
        this.name = name
        this.description = description
        this.created_at = created_at
        Watchlist.all.push(this)    
    }

    // render() {
    //     return(`<div class="box" id="watchlist-${this.id}" data-id=${this.id}>
    //             <h2>${this.name}</h2>
    //             <p>${this.description}</p>
    //             <p>${this.created_at}</p>
    //             <button data-action='view'>View</button>
    //             <p><button data-action='edit'>Edit</button> <button data-action='delete'>Delete</button></p>
    //         </div>`
    //     )
    // }

    render() {
        return(`<div class="box" id="watchlist-${this.id}" data-id=${this.id}>
                <h2>${this.name}</h2>
                <p>${this.description}</p>
                <p>${this.created_at}</p>
                <button data-action='view'>View</button>
                <button data-action='edit'>Edit</button> 
                <button data-action='delete'>Delete</button>
            </div>`
        )
    }

    // addToDom_old(){
    //     // h2 tag with Watchlist's name
    //     let h2 = document.createElement('h2')
    //     h2.innerText = this.name

    //     // Create a div box
    //     let divBox = document.createElement('div')
    //     divBox.setAttribute('class', 'box')
    //     divBox.append(h2)
    //     divWatchlistCollection.append(divBox)
    // }

    addToDom() {
        divWatchlistCollection.innerHTML += this.render()
    }


}

// function renderWatchlists(watchlist) {
//     // h2 tag with Watchlist's name
//     let h2 = document.createElement('h2')
//     h2.innerText = watchlist.name

//     // P tag for description
//     let p = document.createElement('p')
//     p.innerText = watchlist.description

//     // Create a div box
//     let divBox = document.createElement('div')
//     divBox.setAttribute('class', 'box')
//     divBox.append(h2, p)
//     divWatchlistCollection.append(divBox)
// }