(function(){
const $=(s,r=document)=>r.querySelector(s);
const SHIP=90, FREE=1500;
function render(){
 const ls=Cart.lines();
 const f=$("#order-form"),empty=$("#empty");
 if(!ls.length&&!window._done){f.hidden=true;empty.hidden=false;$("#summary").hidden=true;return}
 $("#summary-lines").innerHTML=ls.map(l=>`<li><img src="images/${l.p.img}-sm.webp" alt="" width="56" height="56"><div><strong>${l.p.name}</strong><span>${l.size} × ${l.q}${l.note?" · “"+l.note.replace(/</g,"&lt;")+"”":""}</span></div><b>${fmt(l.total)}</b></li>`).join("");
 const pick=f.teslimat.value==="gelal";const sub=Cart.sum();const ship=pick||sub>=FREE?0:SHIP;
 $("#s-sub").textContent=fmt(sub);$("#s-ship").textContent=ship?fmt(ship):(pick?"Gel-al · ücretsiz":"Ücretsiz");$("#s-total").textContent=fmt(sub+ship);
 $("#addr-wrap").hidden=pick;$$("#addr-wrap [data-req]").forEach(i=>i.required=!pick);
 f._total=sub+ship;f._ship=ship;
}
function $$(s){return [...document.querySelectorAll(s)]}
const f=$("#order-form");
f.addEventListener("change",render);document.addEventListener("cartchange",render);
const d=f.tarih;{const t=new Date();t.setDate(t.getDate()+1);d.min=t.toISOString().slice(0,10)}
f.addEventListener("submit",e=>{e.preventDefault();
 if(!f.reportValidity())return;
 const ls=Cart.lines();if(!ls.length)return;
 const fd=new FormData(f);const no="KP-"+Date.now().toString(36).toUpperCase().slice(-6);
 const pay={kapida:"Kapıda ödeme",havale:"Havale / EFT",kart:"Kredi kartı (demo)"}[fd.get("odeme")];
 const pick=fd.get("teslimat")==="gelal";
 const lines=ls.map(l=>`• ${l.p.name} (${l.size}) × ${l.q} = ${fmt(l.total)}${l.note?" — Yazı: "+l.note:""}`);
 const msg=[`*Yeni Sipariş ${no}* (web sitesi demo)`,...lines,`Toplam: ${fmt(f._total)}${f._ship?" (kargo/teslimat dahil)":""}`,"",`Ad Soyad: ${fd.get("ad")}`,`Telefon: ${fd.get("tel")}`,pick?"Teslimat: Mağazadan gel-al":`Teslimat: ${fd.get("adres")} — ${fd.get("ilce")}/${fd.get("il")}`,`Tarih/Saat: ${fd.get("tarih")} ${fd.get("saat")}`,`Pasta yazısı / not: ${fd.get("not")||"-"}`,`Ödeme: ${pay}`,"","Not: Fiyatlar örnektir, onay için iletişime geçilecektir."].join("\n");
 const url="https://wa.me/"+WA+"?text="+encodeURIComponent(msg);
 window._done=true;
 $("#checkout-wrap").hidden=true;const c=$("#confirm");c.hidden=false;
 $("#order-no").textContent=no;$("#confirm-wa").href=url;
 $("#confirm-note").textContent=fd.get("odeme")==="havale"?"Havale/EFT bilgileri sipariş onayı sırasında sizinle paylaşılacaktır.":fd.get("odeme")==="kart"?"Bu demoda kart bilgisi alınmaz ve ödeme yapılmaz.":"Ödemeyi teslimatta yapabilirsiniz.";
 Cart.clear();window.scrollTo({top:0,behavior:"smooth"});
});
render();
})();
