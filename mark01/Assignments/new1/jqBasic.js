var flower = ["rose", "lily", "marrygold", "lotus", "Jasmine", "Sunflower", "Daisy", "Tulip", "magnolia", "Lavender", "Balsam", "Flax", "Butterfly Pea", "Crossandra", "Golden Shower", "Forest Ghost", "Pot Marigold"];
$("#input1").keyup(function () {
    var li = [];
    var tmp = "";
    let inpu = $(this).val();
    inpu = inpu.toLowerCase();
    let len = inpu.length;
    for (let i = 0; i < flower.length; i++) {
        flower[i] = flower[i].toLowerCase();
        tmp = flower[i].slice(0, len);
        if (inpu == tmp) {
            li.push(flower[i]);
        }
    }
    console.log(li);
    lipopulate(li);
});
$("ul").on("click", "li", function () {
    let txt = $(this).text();
    $("#input1").val(txt);
})
function lipopulate(arr) {
    let temp = "";
    for (let i = 0; i < arr.length; i++) {
        temp += '<li class="li">' + arr[i] + '</li>';
    }
    $(".suggestion").html(temp);
}


// task 2 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

var box2 = [{ company: "Akdsf ds", contact: "465865658", country: "india" }, { company: "Sfsfm  dvf", contact: "875484", country: "Australia" }, { company: "Mndfshj ", contact: "2541364", country: "Japan" }, { company: "Gffgh ", contact: "54664", country: "Pak" }, { company: "dfbhdb df", contact: "32535", country: "maraba" }, { company: "dfgd v", contact: "36554", country: "Lanka" }];
populatebox2();
function populatebox2() {
    let tmp = "";
    for (let i = 0; i < box2.length; i++) {
        tmp += '<tr><td>' + box2[i].company + '</td><td>' + box2[i].contact + '</td><td>' + box2[i].country + '</td></tr>'
    }
    $("#tb1").html(tmp);
}

$("#evenbtn").click(function () {
    $("tr").attr("style", "");
    $("tr:odd").attr("style", "background-color:dodgerblue ");
});
$("#oddbtn").click(function () {
    $("tr").attr("style", "");
    $("tr:even").attr("style", "background-color:dodgerblue ");
});



// task 3 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


var cat = ["Cloths", "Electronics"];
var subcat = [["T-shirt", "Trousers"], ["mobile", "tabs"]];
popProdCat();
function popProdCat() {
    $(".box3").html("");
    var temp = "";
    for (let i = 0; i < cat.length; i++) {
        temp = '<li>' + cat[i] + '<button id="add" index="' + i + '" class="button">+</button></li><ul id="' + cat[i] + '"></ul>';
        $(".box3").html($(".box3").html() + temp);
        popSubCat(i);
    }
}
function popSubCat(index) {
    let tempc = "";
    if (subcat[index].length < 1)
        return false;
    for (let ic = 0; ic < subcat[index].length; ic++) {
        tempc += '<li>' + subcat[index][ic] + '<button id="add" catindex="' + index + '" index="' + ic + '" class="subutton">+</button></li>';

    }
    $("#" + cat[index]).html(tempc);
}

$(".box3").on("click", ".button", function () {
    // debugger;
    let id = $(this).attr("index");
    let cate = prompt("Please enter new Category");
    if (cate != null) {
        id = parseInt(id);
        cat.splice(id + 1, 0, cate);
        var arr = [];
        subcat.splice(id + 1, 0, arr);
        popProdCat();
        // console.log(cat);
        // console.log(subcat);


    }
});

$(".box3").on("click", ".subutton", function () {
    let id = $(this).attr("index");
    let index = $(this).attr("catindex");
    let cate = prompt("Please enter new SubCategory");
    if (cate != null) {
        id = parseInt(id);
        subcat[index].splice(id + 1, 0, cate);
        popProdCat();
        // console.log(cat);
        // console.log(subcat);


    }
});

//  Task 4 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

var box4=[];
var row=1;
$(".box4").on("click","#btnplus",function()
{
  let classes=  $("#class").val();
  let board=  $("#board").val();
  let marks=  $("#marks").val();
  let division=  $("#division").val();

  var index=$(this).attr("index");
   
    let txt='<div class="col col'+row+'"><h4 style="margin-left:10px">Qualification '+row+'</h4><div class="row"><input class="input4" value="'+classes+'" placeholder="Enter class" id="class'+row+'" type="text"><input placeholder="Enter board" value="'+board+'" id="board'+row+'" class="input4" type="text"><input placeholder="Enter marks" value="'+marks+'" id="marks'+row+'" class="input4" type="text"><input placeholder="Enter division" value="'+division+'" id="division'+row+'" class="input4" type="text"> <button id="btnplus" class="input4 btn4" index="'+row+'">+</button><button  id="btnminus" index="'+row+'" class="input4 btn4">-</button></div>';
    $(".col"+index).after(txt);
    row++;
    $("#class").val("");$("#board").val("");$("#marks").val("");$("#division").val("");
});

$(".box4").on("click","#btnminus",function()
{
    var index=$(this).attr("index");
    // alert(index)
;    $(".col"+index).remove();
    if(row>1)
    row--;
});


// Task 5& &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

$(".box5").on("keyup","input",function()
{
    let pass=$(".password").val();
    let confirmPass=$(".confirmPassword").val();
    if(pass!=confirmPass)
      $("#notify5").text("Password did't match!");
      else
      $("#notify5").text("");
});


// Task 6 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

$(".box6").on("click","#btnbox6",function()
{
    let fname=$(".fname").val();
    let lname=$(".lname").val();
    $(".fname").toggleClass('focus');
    $(".lname").toggleClass('focus');
    $(".fname").removeClass('focus');
    $(".lname").removeClass('focus');

    let err=0;
    if(lname=="")
    {

        alert('Last name cannot be empty!');
        $(".lname").focus();
        $(".lname").addClass('focus');
        err++;
    }   
    if(fname=="")
    {
        alert('First name cannot be empty!');
        $(".fname").focus();
        $(".fname").addClass('focus');
        err++;
    }
    
    if(err==0)
    {
      alert('Success');
    }
});



// Task 8 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


 $("#clickp").click(function()
 {
    alert("Clicked me");
 });

 // Task 9 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

  var prod9=["Duffle Bag","T-Shirts"];
  var colPrice=[{"small":1000,"medium":2000,"large":2500},{"small":1200,"medium":2540,"large":3500}];
  pop9();
 $("#tbody9").on("change","select",function ()
 {
     let index=$(this).attr("index");
     let key=$(this).val();
     index=parseInt(index);
     $("#price9"+index).text(colPrice[index][key]);
    //  pop9();
 });




  function pop9(){
    let tmp="";
    for(let i=0;i<prod9.length;i++)
    {
        tmp+=' <tr><td>'+prod9[i]+'</td><td><select class="selector" index="'+i+'" id="select9'+i+'">'+options(i)+'</select></td><td id="price9'+i+'">'+colPrice[i].small+'/-</td></tr>';
    }
    $("#tbody9").html(tmp);
    function options(index)
    {
        let opt="";
        $.each(colPrice[index], function(key,val) {
          
         opt+='<option index="'+index+'" value="'+key+'">'+key+'</option>';
        });
        return opt;
        
    }
  }

//   Task 10 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
var cntCrousal=1;
$(".box10").on("click","button",function ()
{
    if($(this).text()=="Previous")
    {
        if(cntCrousal==6)
        cntCrousal=0;
        cntCrousal++;
        $(".crousal").attr("src","img"+cntCrousal+".jpg")
    }
    if($(this).text()=="Next")
    {
        if(cntCrousal==1)
        cntCrousal=7;
        cntCrousal--;
        $(".crousal").attr("src","img"+cntCrousal+".jpg")
    }
})