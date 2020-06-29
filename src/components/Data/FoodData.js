export const foodItems = [
    {
        name: "Cheeze Pizza",
        img: "/img/stockpizza9.jpg",
        section: "Pizza"
    },
    {
        name: "Pepperoni Pizza",
        img: "/img/stockpizza17.jpg",
        section: "Pizza"
    }, 
    {
        name: "Meatball Pizza",
        img: "/img/stockpizza5.jpg",
        section: "Pizza"
    },
    {
        name: "Pineapple Pizza",
        img: "img/stockpizza16.jpg",
        section: "Pizza"
    },
    {
        name: "Bacon Pizza",
        img: "img/stockpizza15.jpg",
        section: "Pizza"
    },
    {
        name: "Vegan Pizza",
        img: "img/stockpizza12.jpg",
        section: "Vegan"
    },
    {
        name: "Frosting Pizza",
        img: "img/stockpizza11.jpg",
        section: "Pizza"
    },
    {
        name: "Spicy Pizza",
        img: "img/stockpizza10.jpg",
        section: "Pizza"
    },
    {
        name: "Mushroom Pizza",
        img: "img/stockpizza9.jpg",
        section: "Vegan"
    },
    {
        name: "Bits of Pizza",
        img: "img/stockpizza8.jpg",
        section: "Vegan"
    },
]

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});