



function mainPageLoad() {
    console.log("page-load loaded");
    const content = document.querySelector("#content")

    const mainCard = document.createElement("div")
    mainCard.classList.add("main-card")
    
    const h1 = document.createElement("h1")
    h1.textContent = "Vero Pasta"
    mainCard.appendChild(h1)

    const card1 = document.createElement("div")
    card1.classList.add("card")
    card1.textContent = "Welcome to Vero Pasta — authentic Italian flavors made with fresh ingredients, traditional recipes, and a passion for great food. Enjoy homemade pasta, rich sauces, and a warm atmosphere that brings a taste of Italy to your table."
    mainCard.appendChild(card1)

    const card2 = document.createElement("div")
    card2.classList.add("card")
    mainCard.appendChild(card2)

    const h2 = document.createElement("h2")
    h2.textContent = "Opening Hours"
    card2.appendChild(h2)

    const hours = document.createElement("div")
    hours.classList.add("hours")
    card2.appendChild(hours)

    const openingHours = [
        ["Monday", "11:30 - 22:00"],
        ["Tuesday", "11:30 - 22:00"],
        ["Wednesday", "11:30 - 22:00"],
        ["Thursday", "11:30 - 22:00"],
        ["Friday", "11:30 - 23:00"],
        ["Saturday", "12:00 - 23:00"],
        ["Sunday", "12:00 - 21:00"]
    ]

    for (const [day, time] of openingHours) {
        const p = document.createElement("p")
        const span = document.createElement("span")

        p.textContent = `${day}: `
        span.textContent = time
        
        p.appendChild(span)
        hours.appendChild(p)
    }

    const card3 = document.createElement("div")
    card3.classList.add("card")
    card3.classList.add("card3")
    mainCard.appendChild(card3)

    const h2L = document.createElement("h2")
    h2L.textContent = "Location"
    card3.appendChild(h2L)

    const street = document.createElement("p")
    street.textContent = "Via Roma 24, 12345 Florence, Italy"
    card3.appendChild(street)

    

    content.appendChild(mainCard)
}

export { mainPageLoad }