/* Ürün verisi — fiyatlar ÖRNEK (placeholder); gerçek fiyatlar bilinmiyor. Dubai çikolatası 300 TL Instagram duyurusundan. */
window.SIZES_ROUND=[{label:"4-6 kişilik",price:650},{label:"8-10 kişilik",price:950},{label:"12-15 kişilik",price:1350}];
window.SIZES_RECT=[{label:"8-10 kişilik",price:1100},{label:"12-15 kişilik",price:1500},{label:"20+ kişilik",price:2100}];
window.SIZES_TALL=[{label:"8-10 kişilik",price:1250},{label:"12-15 kişilik",price:1700}];
window.CATS=[
 {id:"dogum",name:"Doğum Günü Pastaları",img:"005"},
 {id:"cocuk",name:"Çocuk & Karakter Pastaları",img:"020"},
 {id:"mesajli",name:"Mesajlı / Özel Tasarım Pastalar",img:"015"},
 {id:"ozelgun",name:"Öğretmenler Günü / Özel Gün",img:"016"},
 {id:"tatli",name:"Tatlı & Çikolata",img:"014"}
];
const R=window.SIZES_ROUND,C=window.SIZES_RECT,T=window.SIZES_TALL;
window.PRODUCTS=[
 {id:"p018",img:"018",cat:"dogum",name:"Makaron & Kurutulmuş Portakallı Pasta",desc:"Nane yeşili kremalı, renkli makaronlar, kurutulmuş portakal dilimleri ve çikolata toplarıyla süslü şık bir kutlama pastası.",sizes:T,badge:"İmza Tasarım"},
 {id:"p019",img:"019",cat:"dogum",name:"Kurutulmuş Narenciyeli Rustik Pasta",desc:"Doğal görünümlü krema, kurutulmuş narenciye dilimleri, yeşil yapraklar ve rakam mumuyla hafif ve zarif bir doğum günü pastası.",sizes:R},
 {id:"p005",img:"005",cat:"dogum",name:"“İyi Ki Doğdun Sultanım” Kelebekli Pasta",desc:"Beyaz kremanın üzerinde pembe fırça darbeleri, kelebek süsler ve kişiye özel yazı. Sevdiklerinize özel bir sürpriz.",sizes:R,text:"İyi Ki Doğdun Sultanım"},
 {id:"p012",img:"012",cat:"dogum",name:"“Prensesler Kasım’da Doğar” Pastası",desc:"Pembe ve kırmızı kuşaklar, minik kalpler ve altın inciler. Küçük prensesler ve büyük kalpler için.",sizes:R,text:"Prensesler Kasım'da Doğar"},
 {id:"p009",img:"009",cat:"dogum",name:"Birthday Princess Kelebekli Pasta",desc:"Turkuaz yeşili kremalı, renkli krema darbeleri ve kelebeklerle süslenmiş neşeli bir doğum günü pastası.",sizes:R,text:"Birthday Princess"},
 {id:"p020",img:"020",cat:"cocuk",name:"Spider-Man Karakterli Pasta",desc:"Yenilebilir Spider-Man baskısı, kırmızı krema bordür ve gümüş incilerle çocukların favorisi. Doğum günü ismi ve yaş yazılır.",sizes:C,text:"Kıvanç Uraz 5 yaşında"},
 {id:"p022",img:"022",cat:"cocuk",name:"Barbie Karakterli Pasta",desc:"Yenilebilir Barbie baskısı ve pembe krema kenar süslemeleriyle küçük hanımlar için hazırlanan özel pasta.",sizes:C,text:"Nisa 4 yaşında"},
 {id:"p023",img:"023",cat:"cocuk",name:"Batman Karakterli Pasta",desc:"Yenilebilir Batman baskısı, sarı yıldız süsler ve isim bandıyla süper kahraman hayranlarına.",sizes:C,text:"Mete 4 yaşında"},
 {id:"p021",img:"021",cat:"cocuk",name:"Fenerbahçe Temalı İki Katlı Pasta",desc:"Sarı-lacivert renklerde, iki katlı, kulüp logolu ve burgu kenarlı taraftar pastası.",sizes:[{label:"15-20 kişilik",price:2400},{label:"25+ kişilik",price:3200}],badge:"Taraftar"},
 {id:"p004",img:"004",cat:"cocuk",name:"Papatya & Gülen Yüz Pastası",desc:"Açık mavi kremanın üzerinde beyaz papatyalar ve ortada kocaman gülen sarı çiçek. İsim ve yaşa göre kişiselleştirilir.",sizes:C,text:"Lidya 6 yaşında"},
 {id:"p002",img:"002",cat:"mesajli",name:"“Varlığın Kutlamaya Değer” Mesajlı Pasta",desc:"Canlı pembe kremalı, kırmızı kalp üzerinde özel mesajlı, isim ve yaş yazılabilen sevimli bir pasta.",sizes:C,text:"Varlığın Kutlamaya Değer En Güzel Şey"},
 {id:"p015",img:"015",cat:"mesajli",name:"Siyah & Altın “Bütün Yaşların Benimle Olsun” Pasta",desc:"Mat siyah krema, altın rengi kenar ve altın yazılı mesajıyla şık ve duygusal bir tasarım.",sizes:R,text:"Bütün Yaşların Benimle Olsun"},
 {id:"p006",img:"006",cat:"mesajli",name:"Kırmızı Kalpli Mesajlı Pasta",desc:"Beyaz kremanın üzerinde minik kırmızı kalpler ve “Tüm Yaşların Benimle Olsun” yazısı.",sizes:R,text:"Tüm Yaşların Benimle Olsun"},
 {id:"p017",img:"017",cat:"mesajli",name:"“Canım Babam” Lacivert Mesajlı Pasta",desc:"Lacivert dokulu krema, altın yazı ve altın rengi kartonla babalar için esprili ve şık bir pasta.",sizes:R},
 {id:"p008",img:"008",cat:"mesajli",name:"Lacivert “Kocam da Kocam” Pasta",desc:"Koyu lacivert krema ve sarı yazıyla eşinize sevgi dolu, esprili bir sürpriz.",sizes:R,text:"Kocam da Kocam"},
 {id:"p013",img:"013",cat:"mesajli",name:"Fiyonklu Volanlı Mesajlı Pasta",desc:"Volanlı beyaz krema, siyah fiyonklar ve siyah yazıyla eğlenceli mesajlar için.",sizes:R,text:"Ablan bin yaşına da gelse taşşş"},
 {id:"p007",img:"007",cat:"mesajli",name:"Altın Kelebekli Sarı Mesajlı Pasta",desc:"Soft sarı krema, altın kelebekler ve inciler. Mesajınızı istediğiniz gibi yazdırın.",sizes:R},
 {id:"p010",img:"010",cat:"mesajli",name:"“Çiçek Bazen Felaket” Renkli Pasta",desc:"Beyaz krema üzerinde renkli çiçek motifleri ve esprili mesaj. Kişiye özel yazı eklenebilir.",sizes:R,text:"Seni Biliriz Bazen Çiçek Bazen Felaket"},
 {id:"p011",img:"011",cat:"mesajli",name:"Turuncu Gökkuşaklı Mesajlı Pasta",desc:"Canlı turuncu krema, küçük gökkuşağı ve çizgi karakter detaylarıyla eğlenceli bir pasta.",sizes:R},
 {id:"p016",img:"016",cat:"ozelgun",name:"Öğretmenler Günü Pastası",desc:"Kırmızı yazılı, harf süslemeli büyük tepsi pasta. Sınıfınız ya da okulunuz için.",sizes:[{label:"15-20 kişilik",price:1800},{label:"25-30 kişilik",price:2500},{label:"40+ kişilik",price:3400}],text:"Öğretmenler Gününüz Kutlu Olsun"},
 {id:"p003",img:"003",cat:"ozelgun",name:"Okuma Bayramı Pastası",desc:"Renkli harfler, minik kitaplar ve çilekler. “Artık okuyorum ve yazıyorum” kutlaması için sınıf pastası.",sizes:[{label:"15-20 kişilik",price:1800},{label:"25-30 kişilik",price:2500}],text:"1-C Artık Okuyorum ve Yazıyorum"},
 {id:"p014",img:"014",cat:"tatli",name:"Dubai Çikolatası",desc:"Antep fıstıklı, çıtır kadayıflı sütlü çikolata. Altın rengi kutusunda, hediye için ideal.",fixed:true,sizes:[{label:"1 adet",price:300}],badge:"Kampanya",priceNote:"Kampanya fiyatı (Instagram duyurusuna göre)",photo:"Fotoğraf: mağazada çekilmiş orijinal görsel"}
];
