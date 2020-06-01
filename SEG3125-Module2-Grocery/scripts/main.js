// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

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



// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    if (slct1 == null) {
        var s1 = slct1;
        var s2 = document.getElementById(slct2);
    } else {
        var s1 = document.getElementById(slct1);
        var s2 = document.getElementById(slct2);
    }

    //console.log(s1.checked)
    // s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";

    // obtain a reduced list of products based on restrictions
    optionArray = updateRestrictProductsList(s1);

    // for each item in the array, create a checkbox element, each containing information such as:
    // <input type="checkbox" name="product" value="Bread">
    // <label for="Bread">Bread/label><br>
    var table = document.createElement("table");
    table.id = "shopping_table"

    for (i = 0; i < optionArray.length; i++) {
        // var product_pic = document.createElement("IMG");
        // product_pic.src = "product_pictures/" + productName + ".jpg"

        var row = table.insertRow(0)

        var productName = optionArray[i].name;
        row.id = productName + "Row"
        pic_cell = row.insertCell(0)
        pic_cell.innerHTML = "<img src='product_pictures/" + productName + ".jpg' width=100px>";
        name_cell = row.insertCell(1);
        name_cell.innerHTML = productName;
        cost_cell = row.insertCell(2);
        cost_cell.innerHTML = optionArray[i].price;
        quantity_cell = row.insertCell(3);
        quantity_cell.innerHTML = "<input id='quantity" + productName + "' type='number' min='0' value='0'>";



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
    c.appendChild(document.createTextNode("Final Price is: $" + getTotalPrice(cart_list)));

}