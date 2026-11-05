import Americano from "../assets/americano.jpg";
import CafeLatte from "../assets/cafelatte.jpg";
import Cappuccino from "../assets/cappuccino.jpg";
import Caramel from "../assets/caramel.jpg";
import ColdBrew from "../assets/coldbrew.jpg";
import Expresso from "../assets/expresso.jpg";
import IcedCaramel from "../assets/icedcaramel.jpg";
import Macha from "../assets/macha.jpg";

const coffeeMenu = [
    {
        id: 1,
        name: "Americano",
        image: Americano,
        description: "Bold espresso topped with hot water for a smooth, clean cup. Light on the palate with a rich roasted aroma, perfect for slow mornings or a quick afternoon pick-me-up.",
        price: 130.00,
        category: "Coffee",
        badge: true
    },
     {
        id: 2,
        name: "Cafe Latte",
        image: CafeLatte,
        description: "Smooth espresso blended with silky steamed milk and finished with a light layer of foam. Mellow and comforting, with just enough coffee flavor to keep every sip balanced.",
        price: 160.00,
        category: "Coffee",
        badge: true
    },
     {
        id: 3,
        name: "Cappuccino",
        image: Cappuccino,
        description: "Equal parts espresso, steamed milk, and thick velvety foam, dusted with cocoa on top. A stronger coffee taste than a latte with a light, airy texture.",
        price: 165.00,
        category: "Coffee",
        badge: true
    },
     {
        id: 4,
        name: "Espresso",
        image: Expresso,
        description: "A concentrated shot of rich, full-bodied coffee topped with a golden crema. Intense and aromatic, made for those who like their coffee strong and straight to the point.",
        price: 175.00,
        category: "Coffee",
        badge: false
    },
     {
        id: 5,
        name: "Caramel Latte",
        image: Caramel,
        description: "Creamy latte sweetened with buttery caramel syrup and finished with a soft layer of milk foam. Smooth and indulgent, a sweet treat for caramel lovers.",
        price: 180.00,
        category: "Coffee",
        badge: false
    },
     {
        id: 6,
        name: "Matcha",
        image: Macha,
        description: "Earthy green tea whisked until smooth and finished with creamy milk. Lightly sweet with a gentle bitterness, refreshing and calming at any time of the day.",
        price: 150.00,
        category: "Pastry",
        badge: true
    },
     {
        id: 7,
        name: "Cold Brew",
        image: ColdBrew,
        description: "Coffee steeped slowly in cold water for hours for a mellow, low-acid taste. Served over ice, it is crisp, refreshing, and naturally smooth without any bitterness.",
        price: 180.00,
        category: "Tea",
        badge: false
    },
     {
        id: 8,
        name: "Iced Caramel Macchiato",
        image: IcedCaramel,
        description: "Chilled vanilla-sweetened milk marked with a shot of espresso and finished with a generous caramel drizzle. Layered, sweet, and refreshing from the first sip to the last.",
        price: 190.00,
        category: "Tea",
        badge: true
    }
];

export default coffeeMenu;