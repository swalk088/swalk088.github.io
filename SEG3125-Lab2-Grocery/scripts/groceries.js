	// Array of products, each product is an object with different fieldset
	// A set of ingredients should be added to products		 
	var restrictions_list = {
	    vegetarian: false,
	    glutenFree: false,
	    organic: false,
	    nutFree: false,
	}
	var products = [{
	        name: "broccoli",
	        vegetarian: true,
	        glutenFree: true,
	        price: 1.99,
	        organic: true,
	        nutFree: true,
	    },
	    {
	        name: "bread",
	        vegetarian: true,
	        glutenFree: false,
	        price: 2.35,
	        organic: false,
	        nutFree: true,
	    },
	    {
	        name: "salmon",
	        vegetarian: false,
	        glutenFree: true,
	        price: 10.00,
	        organic: true,
	        nutFree: true,
	    },
	    {
	        name: "steak",
	        vegetarian: false,
	        glutenFree: true,
	        price: 10.00,
	        organic: true,
	        nutFree: true,
	    },
	    {
	        name: "strawberry",
	        vegetarian: true,
	        glutenFree: true,
	        price: 3.23,
	        organic: true,
	        nutFree: true,
	    },
	    {
	        name: "apple",
	        vegetarian: true,
	        glutenFree: true,
	        price: 1.75,
	        organic: true,
	        nutFree: true,
	    },
	    {
	        name: "cheese",
	        vegetarian: true,
	        glutenFree: true,
	        price: 9.99,
	        organic: true,
	        nutFree: true,
	    },
	    {
	        name: "eggs",
	        vegetarian: false,
	        glutenFree: true,
	        price: 12.00,
	        organic: true,
	        nutFree: true,
	    },
	    {
	        name: "brownie",
	        vegetarian: true,
	        glutenFree: false,
	        price: 4.25,
	        organic: false,
	        nutFree: false,
	    },
	    {
	        name: "spaghetti",
	        vegetarian: true,
	        glutenFree: false,
	        price: 5.65,
	        organic: false,
	        nutFree: true,
	    },
	    {
	        name: "pepper",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.65,
	        organic: true,
	        nutFree: true,
	    }
	];



	// given restrictions provided, make a reduced list of products
	// prices should be included in this list, as well as a sort based on price

	function updateRestrictProductsList(restriction) {
	    if (restriction !== null) {

	        if ((restriction.value == "Vegetarian")) {
	            restrictions_list.vegetarian = restriction.checked;
	        } else if ((restriction.value == "GlutenFree")) {
	            restrictions_list.glutenFree = restriction.checked;
	        } else if ((restriction.value == "PreferOrganic")) {
	            restrictions_list.organic = restriction.checked;
	        } else if ((restriction.value == "NutAllergy")) {
	            restrictions_list.nutFree = restriction.checked;
	        }

	    }
	    let product_names = [];
	    for (let i = 0; i < products.length; i += 1) {

	        if ((products[i].vegetarian || !restrictions_list.vegetarian) && (products[i].glutenFree || !restrictions_list.glutenFree) && (products[i].organic || !restrictions_list.organic) && (products[i].nutFree || !restrictions_list.nutFree)) {
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


	    return product_names;
	}

	function updateSelectedItemsList(item) {

	}
	// Calculate the total price of items, with received parameter being a list of products
	function getTotalPrice(chosenProducts) {
	    totalPrice = 0;
	    for (let i = 0; i < chosenProducts.length; i += 1) {
	        totalPrice += parseFloat(chosenProducts[i].itemPrice);
	    }
	    return totalPrice;
	}