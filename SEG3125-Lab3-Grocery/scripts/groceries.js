	// Array of products, each product is an object with different fieldset
	// A set of ingredients should be added to products		 
	var user_preferences = {
	        vegetarian: false,
	        glutenFree: false,
	        organic: false,
	        nutFree: false,
	    }
	    // Categopries vegetables, meat_product, seafood_product, carbohydrates, dairy, frozen_foods, fruit,
	var products = [{
	        name: "broccoli",
	        vegetarian: true,
	        glutenFree: true,
	        price: 1.99,
	        organic: true,
	        nutFree: true,
	        category: "vegetable",
	    },
	    {
	        name: "bread",
	        vegetarian: true,
	        glutenFree: false,
	        price: 2.35,
	        organic: false,
	        nutFree: true,
	        category: "bakery",
	    },
	    {
	        name: "salmon",
	        vegetarian: false,
	        glutenFree: true,
	        price: 10.00,
	        organic: true,
	        nutFree: true,
	        category: "seafood",
	    },
	    {
	        name: "steak",
	        vegetarian: false,
	        glutenFree: true,
	        price: 10.00,
	        organic: true,
	        nutFree: true,
	        category: "meat_product",
	    },
	    {
	        name: "strawberry",
	        vegetarian: true,
	        glutenFree: true,
	        price: 3.23,
	        organic: true,
	        nutFree: true,
	        category: "fruit",
	    },
	    {
	        name: "apple",
	        vegetarian: true,
	        glutenFree: true,
	        price: 1.75,
	        organic: true,
	        nutFree: true,
	        category: "fruit",
	    },
	    {
	        name: "cheese",
	        vegetarian: true,
	        glutenFree: true,
	        price: 9.99,
	        organic: true,
	        nutFree: true,
	        category: "dairy",
	    },
	    {
	        name: "eggs",
	        vegetarian: true,
	        glutenFree: true,
	        price: 12.00,
	        organic: true,
	        nutFree: true,
	        category: "meat_product",
	    },
	    {
	        name: "brownie",
	        vegetarian: true,
	        glutenFree: false,
	        price: 4.25,
	        organic: false,
	        nutFree: false,
	        category: "bakery",
	    },
	    {
	        name: "spaghetti",
	        vegetarian: true,
	        glutenFree: false,
	        price: 5.65,
	        organic: false,
	        nutFree: true,
	        category: "pasta",
	    },
	    {
	        name: "pepper",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.65,
	        organic: true,
	        nutFree: true,
	        category: "vegetable",
	    }
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