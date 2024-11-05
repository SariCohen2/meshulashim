// localStorage.clear();
let ind = 0;
let pics = ["url(./pics/general/banner1.jpg)", "url(./pics/general/banner2.jpg)", "url(./pics/general/banner3.jpg)",
    "url(./pics/general/banner4.jpg)", "url(./pics/general/banner5.jpg)", "url(./pics/general/banner6.jpg)", "url(./pics/general/banner7.jpg)",
    "url(./pics/general/banner8.jpg)","url(./pics/general/banner9.jpg)","url(./pics/general/banner10.jpg)","url(./pics/general/banner11.png)"];
setInterval(fun, 2000);
function fun() {
    ind++;
    if (ind == pics.length)
        ind = 0;
    let t = document.getElementById("banner");
    t.style.backgroundImage= pics[ind];
}
const products = [
    {
        name: "פיצה משפחתית לבנה עם פטריות",
        sku: "meels1",
        price: 35,
        img: "./pics/pizza/p1.png",
        descreption: "פיצה חמה",
        noGluten: false,
        existInCart: false
    },
    {
        name: "פיצה אקסטרה עם זיתים",
        sku: "meels2",
        price: 70,
        img: "./pics/pizza/p2.png",
        descreption: "פיצה חמה",
        noGluten: true,
        existInCart: false
    },
    {
        name: "פיצה משפחתית עם זיתים שחורים",
        sku: "meels3",
        price: 45,
        img: "./pics/pizza/p3.png",
        descreption: "פיצה חמה",
        noGluten: false,
        existInCart: false
    },
    {
        name: " פיצה בטטה ועגבניות",
        sku: "meels4",
        price: 50,
        img: "./pics/pizza/p4.png",
        descreption: "פיצה חמה",
        noGluten: false,
        existInCart: false
    },
     {
        name: "פיצה אולטרה חריף ",
        sku: "meels6",
        price: 39,
        img: "./pics/pizza/p6.png",
        descreption: "פיצה חמה",
        noGluten: false,
        existInCart: false
    }, {
        name: "פיצה משפחתית לבנה",
        sku: "meels7",
        price: 42,
        img: "./pics/pizza/p7.png",
        descreption: "פיצה חמה",
        noGluten: false,
        existInCart: false
    }, {
        name: "פיצה משפחתית לבנה",
        sku: "meels8",
        price: 48,
        img: "./pics/pizza/p8.png",
        descreption: "פיצה חמה",
        noGluten: false,
        existInCart: false
    }, {
        name: "פיצה משפחתית לבנה",
        sku: "meels9",
        price: 35,
        img: "./pics/pizza/p9.png",
        descreption: "פיצה חמה",
        noGluten: false,
        existInCart: false
    },
    {
        name: "קליק אוראו",
        sku: "desert1",
        price: 12.9,
        img: "./pics/desert/ך.jpg",
        descreption: "פיצה חמה",
        noGluten: false,
        existInCart: false
    },
    {
        name: "גבינת לוטוס",
        sku: "desert2",
        price: 17,
        img: "./pics/desert/1-–-6.png",
        descreption: "פיצה חמה",
        noGluten: true,
        existInCart: false
    },
    
    {
        name: " שייק פירות",
        sku: "desert3",
        price: 17,
        img: "./pics/desert/shake.png",
        descreption: "פיצה חמה",
        noGluten: true,
        existInCart: false
    },
    {
        name: "קינוח קצפת ותותים ",
        sku: "desert4",
        price: 17,
        img: "./pics/desert/strawb.png",
        descreption: "פיצה חמה",
        noGluten: true,
        existInCart: false
    },
    {
        name: "קנולי פיסטוק",
        sku: "desert5",
        price: 17,
        img: "./pics/desert/pistuk.png",
        descreption: "פיצה חמה",
        noGluten: true,
        existInCart: false
    },
    {
        name: "יולו אנד קוקיז ",
        sku: "desert6",
        price: 20,
        img: "./pics/desert/dr5.jpg",
        descreption: "אחלה שתיה ",
        noGluten: false,
        existInCart: false
    },
    {
        name: "קינוח שוקולד בייגלה ",
        sku: "desert7",
        price: 17,
        img: "./pics/desert/beg.png",
        descreption: "פיצה חמה",
        noGluten: true,
        existInCart: false
    },
    {
        name: "סלט בטטה קריספית",
        sku: "salads1",
        price: 15,
        img: "./pics/salads/s1.png",
        descreption: "משפחת הסלטים של משולשים",
        noGluten: true,
        existInCart: false
    },
    {
        name: "סלט חלומי",
        sku: "salads2",
        price: 23.90,
        img: "./pics/salads/s2.png",
        descreption: "משפחת הסלטים של משולשים",
        noGluten: false,
        existInCart: false
    },
    {
        name: "סלט טונה",
        sku: "salads3",
        price: 12.30,
        img: "./pics/salads/s3.png",
        descreption: "משפחת הסלטים של משולשים",
        noGluten: true,
        existInCart: false
    },
    {
        name: "סלט יווני קלאסי",
        sku: "salads4",
        price: 25,
        img: "./pics/salads/s5.png",
        descreption: "משפחת הסלטים של משולשים",
        noGluten: true,
        existInCart: false
    },
    {
        name: "סלט נבטים",
        sku: "salads5",
        price: 30.5,
        img: "./pics/salads/s4.png",
        descreption: "משפחת הסלטים של משולשים",
        noGluten: false,
        existInCart: false
    },
    {
        name: "סלט אלוף",
        sku: "salads6",
        price: 18.6,
        img: "./pics/salads/s6.png",
        descreption: "משפחת הסלטים של משולשים",
        noGluten: false,
        existInCart: false
    },
    {
        name: " מיץ תפוזים ",
        sku: "drink1",
        price: 18,
        img: "./pics/drink/dr1.png",
        descreption: "אחלה שתיה",
        noGluten: true,
        existInCart: false
    },
    {
        name: "פיוז תה",
        sku: "drink2",
        price: 15,
        img: "./pics/drink/dr2.png",
        descreption: "אחלה שתיה",
        noGluten: true,
        existInCart: false
    },
    {
        name: " קוקה קולה בבקבוק",
        sku: "drink3",
        price: 20,
        img: "./pics/drink/dr31.png",
        descreption: "אחלה שתיה ",
        noGluten: true,
        existInCart: false
    },
    {
        name: "פחית בבקבוק ",
        sku: "drink4",
        price: 20,
        img: "./pics/drink/dr4.png",
        descreption: "אחלה שתיה ",
        noGluten: true,
        existInCart: false
    },
    
    {
        name: " מים ",
        sku: "drink5",
        price: 20,
        img: "./pics/drink/dr5.png",
        descreption: "אחלה שתיה ",
        noGluten: true,
        existInCart: false
    },
    {
        name: "פסטה אלפרדו",
        sku: "pasta1",
        price: 15,
        img: "./pics/pasta/pas1.png",
        descreption:"פסטות של החיים",
        noGluten: false,
        existInCart: false
    },
    {
        name: "רביולי בטטה ברוטב שמנת פטריות",
        sku: "pasta2",
        price: 41,
        img: "./pics/pasta/pas2.png",
        descreption:"פסטות של החיים",
        noGluten: false,
        existInCart: false
    },
    {
        name: "רביולי גבינה ברוטב רוזה",
        sku: "pasta3",
        price: 36,
        img: "./pics/pasta/pas3.png",
        descreption:"פסטות של החיים",
        noGluten: false,
        existInCart: false
    },
    {
        name: "פסטה ארביאטה",
        sku: "pasta4",
        price: 28,
        img: "./pics/pasta/pas4.png",
        descreption:"פסטות של החיים",
        noGluten: false,
        existInCart: false
    },
    {
        name: "פסטה רוזה",
        sku: "pasta5",
        price: 42,
        img: "./pics/pasta/pas5.png",
        descreption:"פסטות של החיים",
        noGluten: false,
        existInCart: false
    },
    {
        name: "פסטה ברוטב עגבניות",
        sku: "pasta6",
        price: 23,
        img: "./pics/pasta/pas6.png",
        descreption:"פסטות של החיים",
        noGluten: false,
        existInCart: false
    }

];
//בדיקה שישמר ה"קיים בסל" גם לאחר טעינה
window.onload = function () {
    const cartProduct = localStorage.getItem("cart");
    let cart = [];
    if (cartProduct) {
        cart = JSON.parse(cartProduct);
        for (prod of products) {
            const current_sku = prod.sku;
            const in_cart = cart.find(obj => {
                return obj.sku === current_sku;
            });
            if (in_cart)
                prod.existInCart = true;
        }
    }
}
//פונקציה שמציירת את המוצר על הדף
const createProducts = (product, type) => {
    if (product.sku.includes(type) || type == 'find'||type=='noGluten') {
        const div = document.createElement("div");
        div.className = "generalProduct";
        if(product.noGluten)
        div.id="gluten";
        div.innerHTML = `<h2>${product.name}</h2>`;
        div.innerHTML += ` <a target="_blank" href="${product.img}">
    <img src="${product.img}" alt="" width="300vw" height="240vh"></a>`;
        div.innerHTML += `<p>${product.descreption}     ${product.price}₪</p>`
        const btn = document.createElement("button");
        btn.className = "btns";
        if (product.existInCart)
            btn.className = "addedToCart";
        if (product.existInCart)
            btn.innerHTML = "!!נוסף לארוחה";
        else
            btn.innerHTML = "הוסף לארוחה"+`<i class='fas fa-cart-plus' style='font-size:24px'></i>`;
        btn.dataset.sku = product.sku;
        //add to cart
        btn.onclick = function addToCart() {
            const cartProduct = localStorage.getItem("cart");
            let cart = [];
            if (cartProduct) {
                cart = JSON.parse(cartProduct);
            }

            const current_sku = this.dataset.sku;
            const in_cart = cart.find(obj => {
                return obj.sku === current_sku;
            });
            product.existInCart = true;
            btn.innerHTML = "!!נוסף לארוחה";
            if (in_cart) {
                in_cart.qty += 1
            } else {
                cart.push({
                    sku: current_sku,
                    qty: 1
                });
            }
            this.classList.add("addedToCart");
            const new_str = JSON.stringify(cart);
            localStorage.setItem("cart", new_str);
        }
        div.append(btn);
        document.querySelector(`#${type}`).append(div);
    }
    return;
}
const displayProducts=(type)=> {
    cleanMain("ok");
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    for (prod of products) {
        createProducts(prod, type);
    }}
//פונקציה ליצור דף הסל קניות
const displayCart=(w)=> {
    cleanMain(w);
    const cartProduct = localStorage.getItem("cart");
    if (!cartProduct || cartProduct.length < 6) {
        document.getElementById("cart").innerHTML =")-:עדיין לא הוספת כלום לצלחת";
        return;
    }
    const allCart = JSON.parse(cartProduct);
    let total = 0;
    for (item of allCart) {
        const product = products.find(obj => {
            return obj.sku === item.sku;
        });
        total+= product.price * item.qty;
        document.querySelector("#cart").innerHTML += `<div class="cartProducts">
        <img src="${product.img}"width="20%" height="20%"alt="" ><br>
        שם המוצר: ${product.name} <br>
       מחיר למוצר בודד: ${product.price}₪ 
        <br> 
        סה"כ: ${product.price * item.qty}₪<br> 
        <div class="pagination">
        <span onclick="funPlus('${item.sku}','p')">+</span>
        <span> ${item.qty}</span>
        <span onclick="funPlus('${item.sku}','m')">-</span>
        </div>
        <button class="delete" onclick="deleteFromCart('${item.sku}')"><i class="fa fa-trash"></i>
        </button><br> 
    </div>
    `;
    }
    document.querySelector("#cart").style.textAlign="right";
    document.querySelector("#cart").innerHTML += `<div>סה"כ: ${total}₪</div>`;
    const pay = document.createElement("button");
    pay.innerHTML = "---לתשלום";
    pay.className = "btns";
    pay.style.marginTop = "20px";
    pay.style.width="50%"
    document.getElementById("cart").append(pay);
    pay.onclick = function () { forPay(total) };
}
//פונקצית לתשלום
const forPay=(total)=> {
    document.getElementById("cart").innerHTML = "";
    let payDiv = document.createElement("div");
    payDiv.id = "payDiv";
    document.getElementById("cart").append(payDiv);
    payDiv.innerHTML = `
        <div class="container">
            <form>
                <div class="row">
                    <div class="col-50">
                        <h3>פרטי הזמנה</h3>
                        <label  for="">שם<i class="fa fa-fw fa-user"></i> </label>
                        <input type="text" required="required"  class="required" name="firstname" placeholder="ישראל ישראלי">
                        <label   for="">אמייל<i class="fa fa-fw fa-envelope"></i> </label>
                        <input type="email" required="required" class="required" name="email" placeholder="123@example.com">
                        <label   for="">כתובת<i class="fa fa-fw fa-home"></i></label>
                        <input type="text" required="required" class="required" name="address" placeholder="לדוג' רחוב לוי אשכול ירושלים">
                        <div class="col-50">
                            <h3>תשלום</h3>
                            <label for="fname"> <i class='fab fa-cc-visa' ></i> 
                             <i class='fab fa-cc-amazon-pay' ></i> 
                            <i class='fab fa-cc-diners-club' ></i> 
                            <i class='fas fa-credit-card'></i>
                            <i class='fab fa-cc-apple-pay'></i>אמצעי תשלום </label>
                            <label for="">שם בעל הכרטיס</label>
                            <input type="text"  required="required" class="required" id="cname" name="cardname" placeholder="ישראל ישראלוב">
                            <label for="">מספר כרטיס אשראי</label>
                            <input type="number"  required="required" class="required" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
                            <label for="">תוקף חודש כרטיס</label>
                            <input type="month"  required="required" class="required" id="expmonth" name="expmonth" placeholder="September">
                            <div class="row">
                                <div class="col-50">
                                    <label for="">שנת תוקף כרטיס</label>
                                    <input type="text"  required="required" class="required" id="expyear" name="expyear" placeholder="2018">
                                </div>
                                <div class="col-50">
                                    <label for="">CVV</label>
                                    <input type="number" id="cvv" class="required" required="required" name="cvv" placeholder="352">
                                </div>
                            </div>
                    <input type="submit" id="sub" onclick="finalPay(${total});" value="המשך לתשלום"  class="btn">
            </form>
        </div>
    </div>
`
}

//פונקציה להגדלת והקטנת כמות המוצר שהוזמן
const funPlus=(sku, type)=> {
    const cartProduct = localStorage.getItem("cart");
    let cart = [];
    cart = JSON.parse(cartProduct);
    const current_sku = sku;
    const in_cart = cart.find(obj => {
        return obj.sku === current_sku;
    });
    if (type == 'p')
        in_cart.qty++;
    else if (in_cart.qty > 1)
        in_cart.qty--;
    const new_str = JSON.stringify(cart);
    localStorage.setItem("cart", new_str);
    displayCart("not");
}
//פונקצית הסרה מהסל
const deleteFromCart=(sku)=> {
    const cartProduct = localStorage.getItem("cart");
    let cart = [];
    cart = JSON.parse(cartProduct);
    let index;
    for (let i = 0; i < cart.length; i++)
        if (sku == cart[i].sku)
            index = i;
    products.forEach(f);
    function f(value, key) {
        if (sku == value.sku)
            products[key].existInCart = false;
    }

    cart.splice(index, 1);
    const tempStr = JSON.stringify(cart);
    localStorage.setItem("cart", tempStr);
    displayCart("ok");
}
//פונקציה לחיפוש מוצר ספציפי
const search=()=> {
    cleanMain("ok");
    var input = document.getElementById("search");
    var filter = input.value;
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.includes(filter)||products[i].descreption.includes(filter))
            createProducts(products[i], 'find');
    }
}
//פונקציה למחיקת כל הדיבים שלא מוצגים כעת
function cleanMain(w) {
    document.getElementById("meels").innerHTML = "";
    document.getElementById("cart").innerHTML = "";
    document.getElementById("salads").innerHTML = "";
    document.getElementById("drink").innerHTML = "";
    document.getElementById("desert").innerHTML = "";
    document.getElementById("find").innerHTML = "";
    document.getElementById("noGluten").innerHTML = "";
    document.getElementById("pasta").innerHTML = "";
    document.getElementById("banner").style.display = "none";
    if(w=="ok")
    window.scrollTo({top:0,behavior:'smooth'});
}
//פונקצית להצגת הבאנר בדף הבית
const displayBanner = () => {
    cleanMain("ok");
    document.getElementById("banner").style.display = "block";
}
//פונקציה להדגשת הקישור של העמוד הנוכחי
const currentPage = (type) => {
    var i, pages;
    pages = document.getElementsByClassName("pages");
    for (i = 0; i < pages.length; i++) {
        if (pages[i].innerHTML.includes(type))
            pages[i].style.backgroundColor = "rgb(88, 83, 83)";
        else
            pages[i].style.backgroundColor = "transparent";

    }
}
const finalPay = (total) => {
    let r=document.getElementsByClassName("required");
    for(var i=0;i<r.length;i++)
        if(r[i].value==='')
        {
            alert("בבקשה הכנס את כל השדות הדרושים");
        displayCart("ok");
        return false;
        }
    let pay = prompt("האם תרצה לשלם? כן/לא\n\nהסכום לתשלום הינו: " + total);
    if ((pay.includes("כן")||pay.includes("ודאי"))) {
        for (prod of products)
        deleteFromCart(prod.sku);
    alert("\n...התשלום בוצע בהצלחה המשלוח בדרך");   }}

const noGluten=()=>{
cleanMain("ok");
 products.map(myFunc);
 function myFunc(value, index, products)
 {
    if(value.noGluten)
    createProducts(value,'noGluten');
    return;
 }
}
window.onscroll = function() {scrolling()};

const scrolling=()=> {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

}
