

function menuPageLoad() {
    const content = document.querySelector("#content") 

    const menuContainer = document.createElement("div")
    menuContainer.classList.add("menu-container")

    const dishes = [
    {
        name: "Carbonara",
        description: "Classic Italian pasta with pancetta, egg, and pecorino",
        price: "14€"
    },
    {
        name: "Spaghetti Bolognese",
        description: "Rich meat sauce with slow-cooked tomatoes",
        price: "15€"
    },
    {
        name: "Pesto Genovese",
        description: "Fresh basil pesto with parmesan and pine nuts",
        price: "13€"
    },
    {
    name: "Chicken Alfredo",
    description: "Creamy parmesan sauce with grilled chicken and fettuccine",
    price: "17€"
    },
    {
        name: "Lasagna",
        description: "Homemade layers of pasta with beef ragù and béchamel",
        price: "16€"
    },
    {
        name: "Cacio e Pepe",
        description: "Roman pasta with pecorino cheese and black pepper",
        price: "14€"
    },
    ]

    for (let i=0;i < dishes.length;i++) {
        const dish = dishes[i]

        const card = document.createElement("div")
        card.classList.add("menu-card")

        const title = document.createElement("h2")
        title.classList.add("dish-title")
        title.textContent = dish.name
        card.appendChild(title)

        const descriptionImagebox = document.createElement("div")
        descriptionImagebox.classList.add("description-image-box")
        card.appendChild(descriptionImagebox)

        const descriptionBox = document.createElement("div")
        descriptionBox.classList.add("description-box")
        descriptionImagebox.appendChild(descriptionBox)

        const description = document.createElement("p")
        description.textContent = `${dish.description}`
        descriptionBox.appendChild(description)

        const price = document.createElement("p")
        price.textContent = `Price: ${dish.price}`
        descriptionBox.appendChild(price)

        const imageName = `img${i}` 
        const image = document.createElement("div")
        image.classList.add(imageName, "img")
        descriptionImagebox.appendChild(image)

        menuContainer.appendChild(card)
    }

    content.appendChild(menuContainer)
}

export { menuPageLoad }