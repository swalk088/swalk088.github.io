	// Array of products, each product is an object with different fieldset
	// A set of ingredients should be added to products		 
	var user_preferences = {
	        vegetarian: false,
	        glutenFree: false,
	        organic: false,
	        nutFree: false,
	    }
	    // Categories vegetables, meat_product, seafood_product, bakery, dairy, frozen_foods, fruit, beverage
	var products = [{
	        id: "broccoli",
	        name: "Broccoli",
	        vegetarian: true,
	        glutenFree: true,
	        price: 1.99,
	        organic: true,
	        nutFree: true,
	        category: "vegetable",
	    },
	    {
	        id: "bread",
	        name: "Bread",
	        vegetarian: true,
	        glutenFree: false,
	        price: 2.35,
	        organic: false,
	        nutFree: true,
	        category: "bakery",
	    },
	    {
	        id: "salmon",
	        name: "Salmon Fillet",
	        vegetarian: false,
	        glutenFree: true,
	        price: 10.00,
	        organic: true,
	        nutFree: true,
	        category: "seafood",
	    },
	    {
	        id: "steak",
	        name: "New York Strip",
	        vegetarian: false,
	        glutenFree: true,
	        price: 10.00,
	        organic: true,
	        nutFree: true,
	        category: "meat_product",
	    },
	    {
	        id: "strawberry",
	        name: "Strawberries",
	        vegetarian: true,
	        glutenFree: true,
	        price: 3.23,
	        organic: true,
	        nutFree: true,
	        category: "fruit",
	    },
	    {
	        id: "apple",
	        name: "Apples",
	        vegetarian: true,
	        glutenFree: true,
	        price: 1.75,
	        organic: true,
	        nutFree: true,
	        category: "fruit",
	    },
	    {
	        id: "cheese",
	        name: "Cheddar Cheese",
	        vegetarian: true,
	        glutenFree: true,
	        price: 9.99,
	        organic: true,
	        nutFree: true,
	        category: "dairy",
	    },
	    {
	        id: "eggs",
	        name: "Egg Carton",
	        vegetarian: true,
	        glutenFree: true,
	        price: 12.00,
	        organic: true,
	        nutFree: true,
	        category: "meat_product",
	    },
	    {
	        id: "brownie",
	        name: "Two Bite Brownie",
	        vegetarian: true,
	        glutenFree: false,
	        price: 4.25,
	        organic: false,
	        nutFree: false,
	        category: "bakery",
	    },
	    {
	        id: "spaghetti",
	        name: "Spaghetti",
	        vegetarian: true,
	        glutenFree: false,
	        price: 5.65,
	        organic: false,
	        nutFree: true,
	        category: "pasta",
	    },
	    {
	        id: "pepper",
	        name: "Red Pepper",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.65,
	        organic: true,
	        nutFree: true,
	        category: "vegetable",
	    },
	    {
	        id: "croissant",
	        name: "Croissant",
	        vegetarian: true,
	        glutenFree: false,
	        price: 2.65,
	        organic: false,
	        nutFree: false,
	        category: "bakery",
	    },
	    {
	        id: "pear",
	        name: "Pears",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.65,
	        organic: true,
	        nutFree: true,
	        category: "fruit",
	    },
	    {
	        id: "sausage",
	        name: "Italian Sausage",
	        vegetarian: false,
	        glutenFree: true,
	        price: 2.65,
	        organic: false,
	        nutFree: true,
	        category: "meat_product",
	    },
	    {
	        id: "bacon",
	        name: "Smoked Bacon",
	        vegetarian: false,
	        glutenFree: true,
	        price: 2.65,
	        organic: false,
	        nutFree: true,
	        category: "meat_product",
	    },
	    {
	        id: "lettuce",
	        name: "Head of Romaine",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.65,
	        organic: true,
	        nutFree: true,
	        category: "vegetable",
	    },
	    {
	        id: "cucumber",
	        name: "Cucumber",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.65,
	        organic: true,
	        nutFree: true,
	        category: "vegetable",
	    },
	    {
	        id: "bagel",
	        name: "Sesame Bagel",
	        vegetarian: true,
	        glutenFree: false,
	        price: 2.65,
	        organic: false,
	        nutFree: false,
	        category: "bakery",
	    },
	    {
	        id: "chocolate_milk",
	        name: "Skim Chocolate Milk",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.65,
	        organic: false,
	        nutFree: true,
	        category: "dairy",
	    },
	    {
	        id: "milk",
	        name: "2% Milk",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.65,
	        organic: false,
	        nutFree: true,
	        category: "dairy",
	    },
	    {
	        id: "orange_juice",
	        name: "Orange Juice",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.65,
	        organic: true,
	        nutFree: true,
	        category: "beverage",
	    },
	    {
	        id: "butter",
	        name: "Salted Butter",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.65,
	        organic: false,
	        nutFree: true,
	        category: "dairy",
	    },
	    {
	        id: "yoghurt",
	        name: "Strawberry Yoghurt",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.65,
	        organic: false,
	        nutFree: true,
	        category: "dairy",
	    },
	    {
	        id: "ginger_ale",
	        name: "Gingerale",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.65,
	        organic: false,
	        nutFree: true,
	        category: "beverage",
	    },
	    {
	        id: "maple_cookies",
	        name: "Maple Cookies",
	        vegetarian: true,
	        glutenFree: false,
	        price: 2.65,
	        organic: false,
	        nutFree: false,
	        category: "bakery",
	    },
	    {
	        id: "pecan_pie",
	        name: "Pecan Pie",
	        vegetarian: true,
	        glutenFree: false,
	        price: 2.65,
	        organic: false,
	        nutFree: false,
	        category: "bakery",
	    },
	    {
	        id: "chocolate_chips",
	        name: "Chocolate Chips",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.65,
	        organic: false,
	        nutFree: false,
	        category: "cooking_products",
	    },
	    {
	        id: "potato_chips",
	        name: "Potato Chips",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.65,
	        organic: false,
	        nutFree: true,
	        category: "snacks",
	    },
	    {
	        id: "orange",
	        name: "Orange",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.65,
	        organic: true,
	        nutFree: true,
	        category: "fruit",
	    },
	    {
	        id: "raspberry",
	        name: "Raspberries",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.65,
	        organic: true,
	        nutFree: true,
	        category: "fruit",
	    },
	    {
	        id: "fuzzy_peaches",
	        name: "Fuzzy Peaches",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.65,
	        organic: false,
	        nutFree: true,
	        category: "snacks",
	    },
	    {
	        id: "flour",
	        name: "White Flour",
	        vegetarian: true,
	        glutenFree: false,
	        price: 2.65,
	        organic: false,
	        nutFree: true,
	        category: "cooking_products",
	    },
	    {
	        id: "vegetable_oil",
	        name: "Vegetable Oil",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.65,
	        organic: false,
	        nutFree: true,
	        category: "cooking_products",
	    },
	    {
	        id: "popcorn",
	        name: "Buttered Popcorn",
	        vegetarian: true,
	        glutenFree: false,
	        price: 2.65,
	        organic: false,
	        nutFree: true,
	        category: "snacks",
	    },

	];



	// given restrictions provided, make a reduced list of products
	// prices should be included in this list, as well as a sort based on price

	function updateRestrictProductsList(restriction) {
	    if (restriction !== null) {

	        if ((restriction.value == "Vegetarian")) {
	            user_preferences.vegetarian = restriction.checked;
	        } else if ((restriction.value == "GlutenFree")) {
	            user_preferences.glutenFree = restriction.checked;
	        } else if ((restriction.value == "PreferOrganic")) {
	            user_preferences.organic = restriction.checked;
	        } else if ((restriction.value == "NutAllergy")) {
	            user_preferences.nutFree = restriction.checked;
	        }

	    }
	    let product_names = [];
	    for (let i = 0; i < products.length; i += 1) {

	        if ((products[i].vegetarian || !user_preferences.vegetarian) && (products[i].glutenFree || !user_preferences.glutenFree) && (products[i].organic || !user_preferences.organic) && (products[i].nutFree || !user_preferences.nutFree)) {
	            product_names.push(products[i])
	        }
	    }
	    for (let i = 0; i < product_names.length; i += 1) {
	        for (let j = i + 1; j < product_names.length; j += 1) {
	            if (product_names[i].price < product_names[j].price) {
	                temp = product_names[i]
	                product_names[i] = product_names[j]
	                product_names[j] = temp
	            }
	        }
	    }

	    console.log(user_preferences)
	    console.log(product_names)
	    return product_names;
	}


	// Calculate the total price of items, with received parameter being a list of products
	function getTotalPrice(chosenProducts) {
	    totalPrice = 0;
	    for (let i = 0; i < chosenProducts.length; i += 1) {
	        totalPrice += parseFloat(chosenProducts[i].price);
	    }
	    return totalPrice;
	}