
function aboutPageLoad() {
    const content = document.querySelector("#content") 

    const mainCard = document.createElement("div")
    mainCard.classList.add("main-card", "about-main-card")
    content.appendChild(mainCard)

    const title = document.createElement("h2")
    title.classList.add("about-title")
    title.textContent = "About"
    mainCard.appendChild(title)

    const p1 = document.createElement("p")
    p1.classList.add("about-text")
    p1.textContent = "Welcome to our restaurant, where authentic Italian tradition meets warm hospitality. We believe that great food starts with quality ingredients, careful preparation, and recipes that have stood the test of time. Every dish on our menu is crafted with passion, bringing together rich flavors, fresh herbs, and handmade pasta to create an unforgettable dining experience."

    const p2 = document.createElement("p")
    p2.classList.add("about-text")
    p2.textContent = "Our kitchen is inspired by the family-owned trattorias found throughout Italy, where meals are more than just food—they are moments shared with friends and loved ones. From our creamy Carbonara and fresh Pesto Genovese to our slow-cooked Bolognese and homemade Lasagna, every plate is prepared with attention to detail and a love for authentic Italian cooking."

    const p3 = document.createElement("p")
    p3.classList.add("about-text")
    p3.textContent = "We carefully select fresh ingredients every day to ensure every meal is served at its very best. Our chefs combine traditional techniques with a modern touch, creating dishes that are both comforting and full of character. Whether you're joining us for a quick lunch, a romantic dinner, or a family celebration, our goal is to make every visit special."

    const p4 = document.createElement("p")
    p4.classList.add("about-text")
    p4.textContent = "Thank you for choosing to dine with us. We look forward to serving you and hope every visit leaves you with wonderful memories, delicious food, and a reason to return again soon. Buon appetito!"

    mainCard.append(p1, p2, p3, p4)
}

export { aboutPageLoad }