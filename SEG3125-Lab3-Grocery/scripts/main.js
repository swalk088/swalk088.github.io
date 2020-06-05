// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
var cart_open = false
var cart_list = []
var cur_tab = ""


function openInfo(evt, tabName) {

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

}

// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display == "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }


function changeCart() {
    if (cart_open) {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginRight = "0";
        cart_open = false
    } else {
        document.getElementById("mySidebar").style.width = "250px";
        //console.log(document.getElementById("main"))
        document.getElementById("main").style.marginRight = "250px";
        cart_open = true
    }

}





function populateListProductChoices(slct1, slct2) {
    if (slct1 == null) {
        var s1 = slct1;
        var s2 = document.getElementById(slct2);
        cur_tab = slct2
    } else if (slct2 == null) {
        slct2 = cur_tab
        var s1 = document.getElementById(slct1);
        var s2 = document.getElementById(slct2);
    } else {
        var s1 = document.getElementById(slct1);
        var s2 = document.getElementById(slct2);
        cur_tab = slct2
    }

    console.log(s2)
        // s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";

    // obtain a reduced list of products based on restrictions
    optionArray = updateRestrictProductsList(s1);
    console.log(cur_tab)
    tabOptionArray = []
    optionArray.forEach(function(grocery) {
        if (grocery.category == "vegetable" && slct2 == "displayVegetables") {
            tabOptionArray.push(grocery)
        } else if (grocery.category == "fruit" && slct2 == "displayFruit") {
            tabOptionArray.push(grocery)
        } else if (grocery.category == "meat_product" && slct2 == "displayMeatProducts") {
            tabOptionArray.push(grocery)
        } else if (grocery.category == "seafood" && slct2 == "displaySeafood") {
            tabOptionArray.push(grocery)
        } else if (grocery.category == "bakery" && slct2 == "displayBakery") {
            tabOptionArray.push(grocery)
        } else if (grocery.category == "dairy" && slct2 == "displayDairy") {
            tabOptionArray.push(grocery)
        } else if (grocery.category == "frozen_product" && slct2 == "displayFrozenProducts") {
            tabOptionArray.push(grocery)
        }
    })
    if (slct2 == "displayProducts") {
        tabOptionArray = optionArray
    }

    // for each item in the array, create a checkbox element, each containing information such as:
    // <input type="checkbox" name="product" value="Bread">
    // <label for="Bread">Bread/label><br>
    var table = document.createElement("table");
    table.id = "shopping_table"

    for (i = 0; i < tabOptionArray.length; i++) {
        // var product_pic = document.createElement("IMG");
        // product_pic.src = "images/" + productName + ".jpg"

        var row = table.insertRow(0)

        var productName = tabOptionArray[i].name;
        row.id = productName + "Row"
        pic_cell = row.insertCell(0)
        pic_cell.innerHTML = "<img src='images/" + productName + ".jpg' width=100px>";
        name_cell = row.insertCell(1);
        name_cell.innerHTML = productName;
        cost_cell = row.insertCell(2);
        cost_cell.innerHTML = tabOptionArray[i].price;
        quantity_cell = row.insertCell(3);
        quantity_cell.innerHTML = "<input id='quantity" + productName + "' type='number' min='0' value='0'>";
        add_cart_cell = row.insertCell(4);
        add_cart_cell.innerHTML = "<button id='add_cart_" + productName + "' onclick='updateCart(\"" + productName + "\")'>Add Item To Cart</button>";

        // create a breakline node and add in HTML DOM


    }
    var row = table.insertRow(0);
    var pic = row.insertCell(0);
    var item = row.insertCell(1);
    item.innerHTML = "Item";
    var price = row.insertCell(2);
    price.innerHTML = "Price";
    var quantity = row.insertCell(3);
    quantity.innerHTML = "Quantity";
    s2.appendChild(table);
}

function updateCart(groceryName) {
    quantity = document.getElementById("quantity" + groceryName);
    if (parseInt(quantity.value) > 0) {
        products.forEach(function(product) {
            if (product.name == groceryName) {
                var not_found = true;
                cart_list.forEach(function(item) {
                    if (groceryName == item.name) {
                        not_found = false;
                        item.quantity = item.quantity + parseInt(quantity.value);
                        item.price = product.price * item.quantity;
                    }
                });


                if (not_found) {
                    cart_list.push({
                        name: product.name,
                        quantity: parseInt(quantity.value),
                        price: product.price * parseFloat(quantity.value),

                    })
                }
            }
        });
    }
    console.log(cart_list);
    quantity.value = 0;
}

// function displayCategoryItems(category)


// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Table) 
// We build a table to contain the list of selected items, and the total price

function selectedItems() {

    var shopping_table = document.getElementById('shopping_table');
    cart_list = []
        //create list of dict of all items in cart from shopping_table
    for (let i = 1; i < shopping_table.rows.length; i++) {
        var row = shopping_table.rows[i];
        var cells = row.cells;
        var productName = cells[1].innerHTML;
        //console.log(productName);
        var quantity = document.getElementById("quantity" + productName).value;
        //console.log(quantity);
        if (quantity !== '0') {
            cart_list.push({
                name: productName,
                quantity: quantity,
                price: cells[2].innerHTML,
                itemPrice: parseFloat(quantity) * parseFloat(cells[2].innerHTML)
            })
        }

    }
    console.log(cart_list)


    var cart_table = document.createElement("table");
    cart_table.id = "cart_table"
    var c = document.getElementById('displayCart');
    c.innerHTML = "";

    // build list of selected item
    var para = document.createElement("P");
    para.innerHTML = "You selected : ";
    para.appendChild(document.createElement("br"));
    for (let i = 0; i < cart_list.length; i++) {
        row = cart_table.insertRow(0);
        itemPriceCell = row.insertCell(0);
        itemPriceCell.innerHTML = cart_list[i].itemPrice;
        priceCell = row.insertCell(0);
        priceCell.innerHTML = cart_list[i].price;
        quantityCell = row.insertCell(0);
        quantityCell.innerHTML = cart_list[i].quantity;
        nameCell = row.insertCell(0);
        nameCell.innerHTML = cart_list[i].name;
    }

    var row = cart_table.insertRow(0)
    var item = row.insertCell(0);
    item.innerHTML = "Item";
    var quantity = row.insertCell(1);
    quantity.innerHTML = "Quantity";
    var price = row.insertCell(2);
    price.innerHTML = "Price";
    var tot_price = row.insertCell(3);
    tot_price.innerHTML = "Total Price";


    // add paragraph and total price
    c.appendChild(para);
    c.appendChild(cart_table)
    c.appendChild(document.createElement("br"))
    c.appendChild(document.createTextNode("Final Price is: $" + getTotalPrice(cart_list)));

}
populateListProductChoices(null, 'displayProducts')