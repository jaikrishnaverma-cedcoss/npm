var arr = [];

$(document).ready(function () {

    $("#add_product").click(function () {
        addProduct();
    });


    $("tbody").on("click", "a.delete", (function () {
        let tr = this.closest("tr");
        let node = Array.from(tr.closest('tbody').children)
        let index = node.indexOf(tr);
        arr.splice(index, 1);
        populate(arr);

    }));

    $("tbody").on("click", "a.edit", (function () {
        let tr = this.closest("tr");
        let node = Array.from(tr.closest('tbody').children)
        let index = node.indexOf(tr);
        // { "sku": sku, "name": name, "price": price, "quantity": quantity };


        $("#product_sku").val(arr[index].sku);
        $("#product_name").val(arr[index].name);
        $("#product_price").val(arr[index].price);
        $("#product_quantity").val(arr[index].quantity);
        $("#add_product").attr("index", index);
        $("#add_product").val("Update Product");
    }));


    function addProduct() {
        let sku = $("#product_sku").val();
        let name = $("#product_name").val();
        let price = $("#product_price").val();
        let quantity = $("#product_quantity").val();
        if ($("#add_product").val() == "Add Product") {
            $("#product_sku").attr("style", "");
            $("#product_name").attr("style", "");
            $("#product_price").attr("style", "");
            $("#product_quantity").attr("style", "");
            $(".error").hide();
            $(".success").hide();
            $(".errorp").text("");
            let flag = 1;
            let temp = "";
            let x;
            if (sku == "" || isNaN(sku)) {
                x = "";
                $("#product_sku").attr("style", "border:2px solid red");
                $(".error").show();
                if (sku == "") {
                    x += flag + ". SKU field is empty. ";
                    flag++;
                }
                if (isNaN(sku)) {
                    x += flag + ". SKU field should be integer. ";
                    flag++;
                }

                temp = $(".errorp").text();
                temp += x;
                $(".errorp").text(temp);
                // flag++;
            }
            if (name == "" || !(isNaN(name))) {
                x = "";
                $("#product_name").attr("style", "border:2px solid red");
                $(".error").show();
                if (name == "") {
                    x += flag + ". Name field is empty. ";
                    flag++;
                }
                if (!(isNaN(name))) {
                    x += flag + ". Name field should be string ";
                    flag++;
                }
                temp = $(".errorp").text();
                temp += x;
                $(".errorp").text(temp);
                // flag++;
            }
            if (price == "") {
                $("#product_price").attr("style", "border:2px solid red");
                $(".error").show();
                let x = flag + ". Price field is empty. ";
                temp = $(".errorp").text();
                temp += x;
                $(".errorp").text(temp);
                flag++;
            }
            if (quantity == "") {
                $("#product_quantity").attr("style", "border:2px solid red");
                $(".error").show();
                let x = flag + ". Quantity field is empty. ";
                temp = $(".errorp").text();
                temp += x;
                $(".errorp").text(temp);
                // flag++;
            }
            if (flag == 1) {
                let obj = { "sku": sku, "name": name, "price": price, "quantity": quantity };
                arr.push(obj);
                populate(arr);
                $(".success").show();
                $("#product_sku").val('');
                $("#product_name").val('');
                $("#product_price").val('');
                $("#product_quantity").val('');
              }
        }
        else {
            let index = parseInt($("#add_product").attr("index"));

            arr[index].sku = sku;
            arr[index].name = name;
            arr[index].price = price;
            arr[index].quantity = quantity;
            $("#add_product").val("Add Product");
            populate(arr);
            $("#product_sku").val('');
            $("#product_name").val('');
            $("#product_price").val('');
            $("#product_quantity").val('');
             }
       
    }


    function populate(data) {
        let str = "";
        for (let i = 0; i < data.length; i++) {
            str += '<tr><td>' + data[i].sku + '</td><td>' + data[i].name + '</td><td>$' + data[i].price + '</td><td>' + data[i].quantity + '</td><td><a href="#" class="edit">Edit</a><a href="#" id="' + i + 'delete" class="delete">Delete</a></td></tr>';
        }
        $("tbody").html(str);

    }

    $(".close").click(function ()
    {
        let div=this.closest("div");
        div.style.display="none";

    });
});