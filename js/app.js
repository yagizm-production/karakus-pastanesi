(function(){
const WA="905344577334";
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const fmt=n=>new Intl.NumberFormat("tr-TR").format(n)+" ₺";
const KEY="karakus_cart_v1";
const Cart={
 get(){try{return JSON.parse(localStorage.getItem(KEY))||[]}catch(e){return[]}},
 set(c){localStorage.setItem(KEY,JSON.stringify(c));document.dispatchEvent(new Event("cartchange"))},
 add(id,size,note){const c=this.get();const k=id+"|"+size+"|"+(note||"");const f=c.find(x=>x.k===k);if(f)f.q++;else c.push({k,id,size,note:note||"",q:1});this.set(c)},
 qty(k,d){let c=this.get();const f=c.find(x=>x.k===k);if(!f)return;f.q+=d;if(f.q<=0)c=c.filter(x=>x.k!==k);this.set(c)},
 rm(k){this.set(this.get().filter(x=>x.k!==k))},
 clear(){this.set([])},
 lines(){return this.get().map(l=>{const p=PRODUCTS.find(x=>x.id===l.id);if(!p)return null;const s=p.sizes.find(z=>z.label===l.size)||p.sizes[0];return {...l,p,unit:s.price,total:s.price*l.q}}).filter(Boolean)},
 sum(){return this.lines().reduce((a,l)=>a+l.total,0)},
 count(){return this.get().reduce((a,l)=>a+l.q,0)}
};
window.Cart=Cart;window.fmt=fmt;window.WA=WA;
function img(p,sm){return "images/"+p.img+(sm?"-sm":"")+".webp"}
function updateBadge(){const n=Cart.count();$$(".cart-count").forEach(e=>{e.textContent=n;e.hidden=n===0})}
function renderDrawer(){
 const box=$("#cart-items");if(!box)return;
 const ls=Cart.lines();
 if(!ls.length){box.innerHTML='<div class="cart-empty"><p>Sepetiniz henüz boş.</p><a class="btn btn-ghost" href="#urunler" data-close-cart>Pastalara göz atın</a></div>';}
 else box.innerHTML=ls.map(l=>`<div class="cart-line"><img src="${img(l.p,true)}" alt="" width="72" height="72"><div class="cl-info"><strong>${l.p.name}</strong><span>${l.size}${l.note?" · Not: "+l.note.replace(/</g,"&lt;"):""}</span><div class="qty"><button aria-label="Azalt" data-q="-1" data-k="${l.k}">−</button><span>${l.q}</span><button aria-label="Artır" data-q="1" data-k="${l.k}">+</button><button class="rm" data-rm="${l.k}">Kaldır</button></div></div><div class="cl-price">${fmt(l.total)}</div></div>`).join("");
 $("#cart-total").textContent=fmt(Cart.sum());
 $("#checkout-link").classList.toggle("disabled",!ls.length);
 $("#checkout-link").setAttribute("aria-disabled",!ls.length);
}
document.addEventListener("cartchange",()=>{updateBadge();renderDrawer()});
function openCart(){const d=$("#drawer");if(!d)return;d.classList.add("open");$("#overlay").classList.add("show");document.body.classList.add("lock");d.setAttribute("aria-hidden","false");$("#drawer .close").focus()}
function closeCart(){const d=$("#drawer");if(!d)return;d.classList.remove("open");$("#overlay").classList.remove("show");document.body.classList.remove("lock");d.setAttribute("aria-hidden","true")}
function toast(m){let t=$("#toast");if(!t){t=document.createElement("div");t.id="toast";t.setAttribute("role","status");document.body.appendChild(t)}t.textContent=m;t.classList.add("show");clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove("show"),2200)}
window.toast=toast;
document.addEventListener("click",e=>{
 const t=e.target.closest("button,a");if(!t)return;
 if(t.matches("[data-open-cart]")){e.preventDefault();openCart()}
 if(t.matches("[data-close-cart]")||t.id==="overlay")closeCart();
 if(t.dataset.q)Cart.qty(t.dataset.k,+t.dataset.q);
 if(t.dataset.rm)Cart.rm(t.dataset.rm);
 if(t.id==="checkout-link"&&t.classList.contains("disabled"))e.preventDefault();
 if(t.matches("[data-menu]")){const n=$("#nav");const o=n.classList.toggle("open");t.setAttribute("aria-expanded",o)}
 if(t.closest("#nav a")){$("#nav").classList.remove("open");$("[data-menu]").setAttribute("aria-expanded","false")}
 if(t.dataset.modal){e.preventDefault();openModal(t.dataset.modal)}
});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCart();$$("dialog[open]").forEach(d=>d.close())}});
$("#overlay")&&$("#overlay").addEventListener("click",closeCart);

/* Legal modals */
const LEGAL={
 kvkk:["KVKK Aydınlatma Metni","Bu metin demo amaçlı örnek bir yer tutucudur. Gerçek yayında; veri sorumlusu olarak Karakuş Pastanesi’nin kimliği, kişisel verilerin işlenme amaçları (sipariş alma, teslimat, iletişim), aktarım yapılan taraflar, saklama süreleri ve 6698 sayılı KVKK kapsamındaki haklarınız bu bölümde yer alacaktır."],
 mesafeli:["Mesafeli Satış Sözleşmesi","Bu metin demo amaçlı örnek bir yer tutucudur. Gerçek yayında; 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği uyarınca satıcı/alıcı bilgileri, ürün ve fiyat bilgileri, teslimat ve ödeme koşulları burada yer alacaktır."],
 iade:["İade ve İptal Koşulları","Bu metin demo amaçlı örnek bir yer tutucudur. Kişiye özel hazırlanan ve çabuk bozulabilen gıda ürünlerinde cayma hakkı istisnaları, sipariş iptal/değişiklik süreleri ve hatalı/hasarlı teslimat durumunda izlenecek adımlar işletme tarafından burada belirtilecektir."],
 gizlilik:["Gizlilik Politikası","Bu metin demo amaçlı örnek bir yer tutucudur. Gerçek yayında; sitede toplanan bilgiler, çerez kullanımı, üçüncü taraf hizmetler ve gizlilik tercihleriniz burada açıklanacaktır."]
};
function openModal(k){let d=$("#legal");if(!d){d=document.createElement("dialog");d.id="legal";d.innerHTML='<form method="dialog"><button class="close" aria-label="Kapat">×</button></form><h2></h2><p></p><p class="muted">Demo tasarım · yer tutucu metin</p>';document.body.appendChild(d);d.addEventListener("click",e=>{if(e.target===d)d.close()})}
 d.querySelector("h2").textContent=LEGAL[k][0];d.querySelector("p").textContent=LEGAL[k][1];d.showModal()}

updateBadge();renderDrawer();

/* ===== Home page ===== */
const grid=$("#product-grid");
if(grid){
 const chips=$("#chips");
 chips.innerHTML=['<button class="chip active" data-f="all">Tümü</button>'].concat(CATS.map(c=>`<button class="chip" data-f="${c.id}">${c.name}</button>`)).join("");
 $("#cat-grid").innerHTML=CATS.map(c=>`<a class="cat" href="#urunler" data-cat="${c.id}"><img loading="lazy" src="images/${c.img}-sm.webp" alt="" width="520" height="520"><span><em>${c.name}</em><small>Keşfet →</small></span></a>`).join("");
 function card(p){
  const from=Math.min(...p.sizes.map(s=>s.price));
  const multi=p.sizes.length>1;
  return `<article class="card" data-cat="${p.cat}" id="${p.id}">
   <div class="card-img"><img loading="lazy" decoding="async" src="${img(p,true)}" srcset="${img(p,true)} 520w, ${img(p)} 1200w" sizes="(min-width:1000px) 25vw,(min-width:640px) 45vw,92vw" width="520" height="520" alt="${p.name}">${p.badge?`<span class="badge">${p.badge}</span>`:""}</div>
   <div class="card-body"><h3>${p.name}</h3><p>${p.desc}</p>
   ${multi?`<label class="sr" for="s-${p.id}">Boyut</label><select id="s-${p.id}" class="size">${p.sizes.map(s=>`<option value="${s.label}" data-price="${s.price}">${s.label} — ${fmt(s.price)}</option>`).join("")}</select>`:`<div class="size one">${p.sizes[0].label}</div>`}
   ${p.fixed?"":`<input class="note" type="text" maxlength="60" placeholder="Pasta üzerine yazı (isteğe bağlı)" aria-label="Pasta üzerine yazı">`}
   <div class="card-foot"><div class="price"><strong data-price>${multi?fmt(from):fmt(p.sizes[0].price)}</strong>${p.fixed?`<span class="tag real">Kampanya fiyatı</span>`:`<span class="tag">ÖRNEK FİYAT</span>`}</div><button class="btn btn-sm add" data-id="${p.id}">Sepete Ekle</button></div></div></article>`;
 }
 grid.innerHTML=PRODUCTS.map(card).join("");
 grid.addEventListener("change",e=>{if(e.target.matches(".size")){const o=e.target.selectedOptions[0];e.target.closest(".card").querySelector("[data-price]").textContent=fmt(+o.dataset.price)}});
 grid.addEventListener("click",e=>{const b=e.target.closest(".add");if(!b)return;const c=b.closest(".card");const s=c.querySelector("select.size");const p=PRODUCTS.find(x=>x.id===b.dataset.id);const size=s?s.value:p.sizes[0].label;const n=c.querySelector(".note");Cart.add(p.id,size,n?n.value.trim():"");if(n)n.value="";toast("Sepete eklendi: "+p.name);b.classList.add("done");setTimeout(()=>b.classList.remove("done"),900)});
 function filter(f){$$(".chip",chips).forEach(c=>{const a=c.dataset.f===f;c.classList.toggle("active",a);c.setAttribute("aria-pressed",a)});$$(".card",grid).forEach(c=>c.hidden=!(f==="all"||c.dataset.cat===f))}
 chips.addEventListener("click",e=>{const c=e.target.closest(".chip");if(c)filter(c.dataset.f)});
 $("#cat-grid").addEventListener("click",e=>{const a=e.target.closest(".cat");if(a)filter(a.dataset.cat)});
 // gallery
 const gids=["018","005","020","021","015","023","016","022","009","019","004","017"];
 $("#gallery-grid").innerHTML=gids.map(i=>{const p=PRODUCTS.find(x=>x.img===i);return `<button class="g" data-big="images/${i}.webp" aria-label="${p.name} — büyüt"><img loading="lazy" src="images/${i}-sm.webp" alt="${p.name}" width="520" height="520"></button>`}).join("");
 const lb=$("#lightbox");
 $("#gallery-grid").addEventListener("click",e=>{const g=e.target.closest(".g");if(!g)return;lb.querySelector("img").src=g.dataset.big;lb.querySelector("img").alt=g.querySelector("img").alt;lb.showModal()});
 lb.addEventListener("click",()=>lb.close());
 // custom order form
 $("#custom-form").addEventListener("submit",e=>{e.preventDefault();const f=new FormData(e.target);
  const t=["*Özel Pasta Talebi* (Karakuş Pastanesi web sitesi)","Ad Soyad: "+f.get("ad"),"Telefon: "+f.get("tel"),"Pasta türü: "+f.get("tur"),"Kişi sayısı: "+f.get("kisi"),"İstenen tarih: "+f.get("tarih"),"Bütçe: "+(f.get("butce")||"-"),"Pasta üzerindeki yazı: "+(f.get("yazi")||"-"),"Tasarım fikri / notlar: "+(f.get("not")||"-")].join("\n");
  const url="https://wa.me/"+WA+"?text="+encodeURIComponent(t);
  const r=$("#custom-result");r.hidden=false;r.innerHTML='Talebiniz hazır. WhatsApp ile göndermek için: <a class="btn btn-wa" target="_blank" rel="noopener" href="'+url+'">WhatsApp’ta Gönder</a><br><small>Demo: talep yalnızca siz WhatsApp’ta gönder’e bastığınızda iletilir.</small>';
  window.open(url,"_blank","noopener");});
 const d=$("#custom-form [name=tarih]");if(d){const t=new Date();t.setDate(t.getDate()+2);d.min=t.toISOString().slice(0,10)}
}
/* header shadow */
const h=$(".site-header");if(h){const f=()=>h.classList.toggle("scrolled",scrollY>8);f();addEventListener("scroll",f,{passive:true})}
})();
