/* ---------- предпросмотр черновика из admin.html ---------- */
const PREVIEW=new URLSearchParams(location.search).get("preview")==="1";
function nkDB(){return new Promise((res,rej)=>{const r=indexedDB.open("nk_admin",1);r.onupgradeneeded=()=>r.result.createObjectStore("kv");r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
async function nkGet(k){const db=await nkDB();return new Promise((res,rej)=>{const q=db.transaction("kv").objectStore("kv").get(k);q.onsuccess=()=>res(q.result);q.onerror=()=>rej(q.error)})}
function fixPreviewLinks(){
 if(!PREVIEW)return;
 document.querySelectorAll('a[href^="index.html"]').forEach(a=>{const h=a.getAttribute("href");if(h.includes("preview=1"))return;const i=h.indexOf("#");a.setAttribute("href","index.html?preview=1"+(i>=0?h.slice(i):""))});
}

const translations={
ru:{badgeNew:"Новинка!",newsTitle:"Новинки",ppAbout:"Описание",backToCatalog:"← Весь каталог",priceFrom:"от",variantsTitle:"Модели и цены",addToCartBtn:"В корзину",askManager:"Уточнить у менеджера",details:"Подробнее ›",notFound:"Товар не найден.",topline:"ДВЕРИ · ПАНЕЛИ · ИНТЕРЬЕРНЫЕ РЕШЕНИЯ",navCatalog:"Каталог",navAbout:"О нас",navShowroom:"Шоурум",navContacts:"Контакты",cart:"Корзина",heroEyebrow:"Архитектура вашего пространства",heroTitle:"Детали, которые создают интерьер.",heroText:"Двери, декоративные панели и интерьерные конструкции, созданные для современных пространств.",heroCta:"Смотреть каталог",heroContact:"Связаться с нами",catalogEyebrow:"Подборка NEWIKAN",catalogTitle:"Каталог продукции",catalogText:"Выберите изделие, откройте его страницу и добавьте в корзину. Для нестандартных размеров и отделки менеджер рассчитает стоимость индивидуально.",filterAll:"Все товары",filterHidden:"Скрытые двери",filterMdf:"Двери МДФ",filterPanels:"Панели",filterPartitions:"Перегородки",aboutEyebrow:"Почему NEWIKAN",aboutTitle:"Продумано до детали.",benefit1Title:"Современный дизайн",benefit1Text:"Чистые линии, спокойные оттенки и решения, которые поддерживают архитектуру интерьера.",benefit2Title:"Под ваш проект",benefit2Text:"Поможем подобрать размеры, отделку и сочетания под задачу вашего пространства.",benefit3Title:"Связь с менеджером",benefit3Text:"Уточним наличие, сроки, доставку и итоговую стоимость до подтверждения заказа.",showroomEyebrow:"Посетите нас",showroomTitle:"Увидеть материалы вживую.",showroomText:"Приходите в шоурум NEWIKAN в Ташкенте, чтобы оценить фактуры, оттенки и варианты сочетаний. Напишите нам, чтобы уточнить адрес и договориться о визите.",cityLine:"Ташкент, Узбекистан",showroomCta:"Написать менеджеру",contactEyebrow:"Остались вопросы?",contactTitle:"Обсудим ваш проект.",contactText:"Оставьте заявку через WhatsApp или Telegram. Менеджер поможет с выбором, расчётом и оформлением заказа.",footerText:"Двери и интерьерные решения. Ташкент, Узбекистан.",cartTitle:"Ваша корзина",close:"Закрыть ✕",total:"Итого по известным ценам",cartNotice:"Товары с индивидуальной стоимостью будут рассчитаны менеджером. Заказ отправляется в WhatsApp — оплата на сайте пока не подключена.",sendOrder:"Отправить заявку менеджеру",name:"Ваше имя",phone:"Номер телефона",note:"Комментарий к заказу (размеры, цвет и т. д.)",added:"Добавлено в корзину",empty:"Корзина пока пуста.",remove:"Удалить",unit:"шт.",custom:"Цена по запросу",each:"за шт.",requestPrice:"Стоимость уточнит менеджер",noProducts:"В этой категории пока нет товаров."},
uz:{badgeNew:"Yangi!",newsTitle:"Yangiliklar",ppAbout:"Tavsif",backToCatalog:"← Butun katalog",priceFrom:"dan",variantsTitle:"Modellar va narxlar",addToCartBtn:"Savatga",askManager:"Menejerdan so‘rash",details:"Batafsil ›",notFound:"Mahsulot topilmadi.",topline:"ESHIKLAR · PANELLAR · INTERYER YECHIMLARI",navCatalog:"Katalog",navAbout:"Biz haqimizda",navShowroom:"Showroom",navContacts:"Aloqa",cart:"Savat",heroEyebrow:"Makoningiz arxitekturasi",heroTitle:"Interyerni yaratadigan detallar.",heroText:"Zamonaviy makonlar uchun eshiklar, dekorativ panellar va interyer konstruksiyalari.",heroCta:"Katalogni ko‘rish",heroContact:"Biz bilan bog‘lanish",catalogEyebrow:"NEWIKAN tanlovi",catalogTitle:"Mahsulotlar katalogi",catalogText:"Mahsulotni tanlang, sahifasini oching va savatga qo‘shing. Nostandart o‘lcham va pardoz narxini menejer hisoblab beradi.",filterAll:"Barcha mahsulotlar",filterHidden:"Yashirin eshiklar",filterMdf:"MDF eshiklar",filterPanels:"Panellar",filterPartitions:"To‘siqlar",aboutEyebrow:"Nega NEWIKAN",aboutTitle:"Har bir detal o‘ylangan.",benefit1Title:"Zamonaviy dizayn",benefit1Text:"Interyer arxitekturasiga mos toza chiziqlar va sokin ranglar.",benefit2Title:"Loyihangiz uchun",benefit2Text:"Makoningizga mos o‘lcham, pardoz va ranglarni tanlashga yordam beramiz.",benefit3Title:"Menejer bilan aloqa",benefit3Text:"Buyurtmani tasdiqlashdan oldin mavjudlik, muddat, yetkazib berish va yakuniy narxni aniqlaymiz.",showroomEyebrow:"Bizga tashrif buyuring",showroomTitle:"Materiallarni yaqindan ko‘ring.",showroomText:"NEWIKAN showroomiga kelib, faktura, rang va uyg‘unlik variantlarini ko‘ring. Manzilni aniqlash va tashrifni kelishish uchun bizga yozing.",cityLine:"Toshkent, O‘zbekiston",showroomCta:"Menejerga yozish",contactEyebrow:"Savollaringiz bormi?",contactTitle:"Loyihangizni muhokama qilamiz.",contactText:"WhatsApp yoki Telegram orqali so‘rov qoldiring. Menejer tanlov, hisob-kitob va buyurtma berishda yordam beradi.",footerText:"Eshiklar va interyer yechimlari. Toshkent, O‘zbekiston.",cartTitle:"Savatingiz",close:"Yopish ✕",total:"Ma’lum narxlar bo‘yicha jami",cartNotice:"Individual narxli mahsulotlarni menejer hisoblaydi. Buyurtma WhatsApp orqali yuboriladi — saytda to‘lov hali ulanmagan.",sendOrder:"Menejerga so‘rov yuborish",name:"Ismingiz",phone:"Telefon raqamingiz",note:"Buyurtma haqida izoh (o‘lcham, rang va h.k.)",added:"Savatga qo‘shildi",empty:"Savatingiz hozircha bo‘sh.",remove:"O‘chirish",unit:"dona",custom:"Narx so‘rov bo‘yicha",each:"dona uchun",requestPrice:"Narxni menejer aniqlaydi",noProducts:"Bu turkumda hozircha mahsulot yo‘q."},
en:{badgeNew:"New!",newsTitle:"New arrivals",ppAbout:"Description",backToCatalog:"← Full catalog",priceFrom:"from",variantsTitle:"Models & prices",addToCartBtn:"Add to cart",askManager:"Ask a manager",details:"Details ›",notFound:"Product not found.",topline:"DOORS · PANELS · INTERIOR SOLUTIONS",navCatalog:"Catalog",navAbout:"About",navShowroom:"Showroom",navContacts:"Contact",cart:"Cart",heroEyebrow:"Architecture for your space",heroTitle:"Details that shape an interior.",heroText:"Doors, decorative panels and interior structures designed for contemporary spaces.",heroCta:"Explore catalog",heroContact:"Contact us",catalogEyebrow:"The NEWIKAN edit",catalogTitle:"Product catalog",catalogText:"Choose an item, open its page and add it to your cart. Our manager will quote custom sizes and finishes individually.",filterAll:"All products",filterHidden:"Hidden doors",filterMdf:"MDF doors",filterPanels:"Panels",filterPartitions:"Partitions",aboutEyebrow:"Why NEWIKAN",aboutTitle:"Considered down to the detail.",benefit1Title:"Contemporary design",benefit1Text:"Clean lines, calm tones and solutions that complement the architecture of your interior.",benefit2Title:"Made for your project",benefit2Text:"We help select dimensions, finishes and combinations for your space.",benefit3Title:"Manager support",benefit3Text:"We confirm availability, lead times, delivery and final cost before your order is approved.",showroomEyebrow:"Visit us",showroomTitle:"Experience the materials in person.",showroomText:"Visit the NEWIKAN showroom in Tashkent to explore textures, tones and combinations. Message us to confirm the address and arrange a visit.",cityLine:"Tashkent, Uzbekistan",showroomCta:"Message a manager",contactEyebrow:"Have a question?",contactTitle:"Let’s discuss your project.",contactText:"Send a request via WhatsApp or Telegram. Our manager can help with selection, pricing and ordering.",footerText:"Doors and interior solutions. Tashkent, Uzbekistan.",cartTitle:"Your cart",close:"Close ✕",total:"Total for items with listed prices",cartNotice:"Custom-priced items will be quoted by our manager. Requests are sent via WhatsApp — online payment is not connected yet.",sendOrder:"Send request to manager",name:"Your name",phone:"Phone number",note:"Order notes (size, color, etc.)",added:"Added to cart",empty:"Your cart is empty for now.",remove:"Remove",unit:"pcs",custom:"Price on request",each:"per item",requestPrice:"Manager will confirm the price",noProducts:"No products in this category yet."}
};
let lang="ru";let cart={};try{cart=JSON.parse(localStorage.getItem("nk_cart")||"{}")||{}}catch(e){cart={}}
const $=id=>document.getElementById(id);
function t(k){return translations[lang][k]||translations.ru[k]||k}
function money(n){return new Intl.NumberFormat(lang==="en"?"en-US":"ru-RU").format(n)+" "+(lang==="en"?"UZS":"сум")}

/* ---------- помощники каталога ---------- */
function tr(v){return v&&typeof v==="object"?(v[lang]||v.ru||""):(v||"")}
function getItem(id){
 for(const p of products){
  if(p.id===id)return{id,name:tr(p.name),price:p.price||null};
  for(const v of (p.variants||[]))if(v.id===id)return{id,name:tr(p.name)+" — "+tr(v.name),price:v.price||null};
 }
 return null;
}
function richText(str){
 const e=x=>String(x).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
 return String(str||"").trim().split(/\n\s*\n/).map(b=>{
  const lines=b.split("\n").map(l=>l.trim()).filter(Boolean);if(!lines.length)return"";
  if(lines.every(l=>/^[-•]\s+/.test(l)))return"<ul>"+lines.map(l=>"<li>"+e(l.replace(/^[-•]\s+/,""))+"</li>").join("")+"</ul>";
  return"<p>"+lines.map(e).join("<br>")+"</p>";
 }).join("");
}
function productUrl(p){return "product.html?id="+encodeURIComponent(p.id)+(PREVIEW?"&preview=1":"")}
function typeLabel(p){return p.type==="hidden"?t("filterHidden"):p.type==="mdf"?t("filterMdf"):p.type==="panel"?t("filterPanels"):t("filterPartitions")}
function captionFor(p){return p.type==="hidden"?"HIDDEN / FLUSH":p.type==="panel"?"SURFACE / DETAIL":p.type==="partition"?"SPACE / DIVIDE":"INTERIOR / DOOR"}
function visualHTML(p,img){
 const src=img!==undefined?img:p.image;
 return src?`<div class="product-visual has-img"><img src="${src}" alt="${tr(p.name)}" loading="lazy"></div>`
  :`<div class="product-visual" role="img" aria-label="${tr(p.name)}"><span class="art-caption">${captionFor(p)}</span></div>`;
}
function minVariantPrice(p){const ps=(p.variants||[]).map(v=>v.price).filter(Boolean);return ps.length?Math.min(...ps):null}
function priceHTML(p){
 let value=p.price,from=!!p.priceFrom;
 if(!value){value=minVariantPrice(p);from=!!value}
 if(!value)return `${t("custom")}<small>${t("requestPrice")}</small>`;
 return `${from?t("priceFrom")+" ":""}${money(value)}<small>${t("each")}</small>`;
}
function cardPrice(p){let v=p.price,f=!!p.priceFrom;if(!v){v=minVariantPrice(p);f=!!v}return v?(f?t("priceFrom")+" ":"")+money(v):t("requestPrice")}
function waLink(p){return "https://wa.me/998909772833?text="+encodeURIComponent("NEWIKAN: "+tr(p.name))}

function renderCart(){
 try{localStorage.setItem("nk_cart",JSON.stringify(cart))}catch(e){}
 const entries=Object.entries(cart).filter(([id,q])=>q>0&&getItem(id));let total=0;
 $("cartItems").innerHTML=entries.length?entries.map(([id,q])=>{const p=getItem(id);if(p.price)total+=p.price*q;return `<div class="cart-row"><div><strong>${p.name}</strong><small>${p.price?money(p.price):t("custom")}</small><div class="qty"><button onclick="changeQty('${id}',-1)" aria-label="decrease">−</button><span>${q} ${t("unit")}</span><button onclick="changeQty('${id}',1)" aria-label="increase">+</button></div></div><div><button class="remove" onclick="removeItem('${id}')">${t("remove")}</button></div></div>`}).join(""):`<div class="empty">${t("empty")}</div>`;
 $("cartTotal").textContent=money(total);$("cartCount").textContent=entries.reduce((s,[,q])=>s+q,0);
}
function addToCart(id){cart[id]=(cart[id]||0)+1;renderCart();showToast(t("added"));}function changeQty(id,d){cart[id]=(cart[id]||0)+d;if(cart[id]<=0)delete cart[id];renderCart()}function removeItem(id){delete cart[id];renderCart()}
function showToast(msg){const el=$("toast");el.textContent=msg;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),1800)}
function openCart(){$("cartOverlay").classList.add("open");document.body.style.overflow="hidden"}function closeCart(){$("cartOverlay").classList.remove("open");document.body.style.overflow=""}
function setLanguage(next){lang=next;try{localStorage.setItem("nk_lang",lang)}catch(e){}document.documentElement.lang=lang;document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(t(k))el.textContent=t(k)});document.querySelectorAll("[data-placeholder]").forEach(el=>el.placeholder=t(el.dataset.placeholder));$("customerLang").value=lang;if(window.renderPage)renderPage();renderCart();fixPreviewLinks()}
$("language").addEventListener("change",e=>setLanguage(e.target.value));
$("openCart").addEventListener("click",openCart);$("closeCart").addEventListener("click",closeCart);$("cartOverlay").addEventListener("click",e=>{if(e.target===$("cartOverlay"))closeCart()});
$("checkout").addEventListener("submit",e=>{e.preventDefault();const entries=Object.entries(cart).filter(([id,q])=>q>0&&getItem(id));if(!entries.length){showToast(t("empty"));return}const name=$("customerName").value.trim(),phone=$("customerPhone").value.trim(),note=$("customerNote").value.trim();const lines=entries.map(([id,q])=>{const p=getItem(id);return `• ${p.name} × ${q} — ${p.price?money(p.price):t("custom")}`});const known=entries.reduce((s,[id,q])=>s+(getItem(id).price||0)*q,0);const msg=`NEWIKAN — ${lang==="ru"?"Заявка с сайта":lang==="uz"?"Saytdan buyurtma":"Website order request"}%0A${encodeURIComponent(lines.join("\n"))}%0A${encodeURIComponent("Total (listed prices): "+money(known))}%0A${encodeURIComponent("Name: "+name)}%0A${encodeURIComponent("Phone: "+phone)}%0A${encodeURIComponent("Notes: "+(note||"-"))}`;window.open("https://wa.me/998909772833?text="+msg,"_blank","noopener");});
async function initSite(){
 if(PREVIEW){
  try{const d=await nkGet("draft");if(d&&d.length)products=d}catch(e){}
  const b=document.createElement("div");b.textContent="ПРЕДПРОСМОТР · так сайт будет выглядеть после загрузки ваших изменений";
  b.style.cssText="position:fixed;left:0;right:0;bottom:0;z-index:50;background:#b8a88a;color:#202321;font:600 12px Arial;letter-spacing:.06em;text-align:center;padding:9px 12px";
  document.body.appendChild(b);
 }
 $("year").textContent=new Date().getFullYear();
 let saved="ru";try{saved=localStorage.getItem("nk_lang")||"ru"}catch(e){}
 if(!translations[saved])saved="ru";
 $("language").value=saved;setLanguage(saved);renderCart();
}
