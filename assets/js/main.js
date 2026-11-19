// HTML belgesindeki tema değiştirme düğmesini seçer
const temaDugmesi = document.getElementById("tema-dugmesi");

// Tema düğmesine tıklandığında çalışacak olay dinleyicisini ekler
temaDugmesi.addEventListener("click", function () {
    // body etiketine koyu-tema sınıfını ekler veya varsa kaldırır
    const koyuTemaAktif = document.body.classList.toggle("koyu-tema");

    // Koyu tema aktifse düğme yazısını Açık tema yapar
    if (koyuTemaAktif) {
        // Düğmenin metnini Açık tema olarak günceller
        temaDugmesi.textContent = "Açık tema";
    } else { // Koyu tema kapatılıp açık temaya dönülüyorsa çalışır
        // Açık temaya geçildiğinde düğmenin metnini Koyu tema yapar
        temaDugmesi.textContent = "Koyu tema";
    }
}); // Tema düğmesi tıklama olay dinleyicisini sonlandırır

// HTML belgesindeki iletişim formunu seçer
const iletisimFormu = document.getElementById("iletisim-formu");

// Ad soyad giriş alanını seçer
const adSoyadAlani = document.getElementById("ad-soyad");

// E-posta giriş alanını seçer
const epostaAlani = document.getElementById("eposta");

// Mesaj metin alanını seçer
const mesajAlani = document.getElementById("mesaj");

// Hata ve teşekkür mesajlarının yazılacağı paragraf öğesini seçer
const formDurum = document.getElementById("form-durum");

// Form gönderildiğinde doğrulama işlemini başlatan olay dinleyicisini ekler
iletisimFormu.addEventListener("submit", function (event) {
    // Formun sayfayı yenilemesini ve varsayılan gönderimini engeller
    event.preventDefault();

    // Ad soyad alanındaki metnin başındaki ve sonundaki boşlukları temizler
    const adSoyad = adSoyadAlani.value.trim();

    // E-posta alanındaki metnin başındaki ve sonundaki boşlukları temizler
    const eposta = epostaAlani.value.trim();

    // Mesaj alanındaki metnin başındaki ve sonundaki boşlukları temizler
    const mesaj = mesajAlani.value.trim();

    // Önceki durum sınıflarını temizler
    formDurum.classList.remove("hata", "basari");

    // Alanlardan herhangi biri boşsa kullanıcıya uyarı gösterir
    if (adSoyad === "" || eposta === "" || mesaj === "") {
        // Hata mesajını sayfadaki paragraf etiketine yazar
        formDurum.textContent = "Lütfen ad soyad, e-posta ve mesaj alanlarının tümünü doldurun.";
        // Mesajın kırmızı görünmesi için hata sınıfını ekler
        formDurum.classList.add("hata");
        // Hata bulunduğu için işlemin devam etmesini durdurur
        return;
    }

    // E-posta alanında @ işareti bulunmuyorsa geçersiz e-posta uyarısı verir
    if (!eposta.includes("@")) {
        // Şartnamede istenen geçersiz e-posta uyarısını paragraf etiketine yazar
        formDurum.textContent = "Geçerli bir e-posta yazın";
        // Mesajın kırmızı görünmesi için hata sınıfını ekler
        formDurum.classList.add("hata");
        // Hata bulunduğu için işlemin devam etmesini durdurur
        return;
    }

    // Tüm alanlar geçerliyse ad soyadı içeren teşekkür mesajını paragrafa yazar
    formDurum.textContent = "Teşekkürler, " + adSoyad + ", mesajınız alındı.";

    // Mesajın yeşil görünmesi için başarı sınıfını ekler
    formDurum.classList.add("basari");

    // Gönderim tamamlandıktan sonra formdaki tüm alanları temizler
    iletisimFormu.reset();
}); // İletişim formu gönderme olay dinleyicisini sonlandırır