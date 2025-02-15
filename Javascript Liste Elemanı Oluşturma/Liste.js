// Elemanları Seçme
const formadd = document.querySelector("#addfrm");
const addinput = document.querySelector("#inputadd");
const listgrup = document.querySelector("#list-grp");
const alertdv = document.querySelector("#alert-div");
const listgruptwo = document.querySelector("#list-grp-two");

let licount = 0; // Global Degişken Kullanımı
let licounttwo = 0;

// fonskiyonu çalıştır
liaddevents();

function liaddevents() {
  formadd.addEventListener("submit", addli); // Mvecut Forma Sumbit olayı çalıştıgı zaman addli adlı methodu çalıştır
  formadd.addEventListener("reset", removeli); // Mvecut Forma reset olayı çalıştıgı zaman removeli adlı methodu çalıştır
}

function removeli() {
  const Lirm = document.querySelectorAll(".list"); // List Classına sahip mevcut bütün elemanları döndürür
  if (Lirm.length > 0) {
    for (let i = 0; i < Lirm.length; i++) {
      // Sırası İle Tüm Elemanlara Eriş Ve Kaldır
      Lirm[i].remove();
    }
  } else {
    Alerts("danger", "Silme İşlemi İçin 1 Liste Elemanı Olmalıdır");
  }
}

function addli(e) {
  if (licounttwo == 10) {
    Alerts(
      "danger",
      "Toplam 20 Eleman Girdiniz Ve Sınıra Ulaştınız Tekrar Deger girmek için Lütfen Sayfayı Yenileyiniz"
    );
  } else {
    if (licount == 10) {
      let inputtextli2 = addinput.value.trim(); // Addinput içinde bulunan degeri sag ve soldan boşluk bırakarak alır
      if (inputtextli2 == "" || inputtextli2 == null) {
        Alerts("danger", " Lütfen Bir Liste Elemanı Giriniz ");
      } else {
        Alerts("success", " Liste Elemanı Eklendi ");
        addlisttwo(inputtextli2);
      }
    } else {
      let inputtextli = addinput.value.trim();
      if (inputtextli == null || inputtextli == "") {
        Alerts("danger", " Lütfen Bir Liste Elemanı Giriniz ");
      } else {
        Alerts("success", " Liste Elemanı Eklendi ");
        addlist(inputtextli);
      }
    }
  }

  e.preventDefault(); // sayfanın yenilenmesini engeller
}

function Alerts(type, message) {
  const div = document.createElement("div");
  div.className = `alert alert-${type} mt-3 ms-3`;
  div.textContent = message;
  alertdv.appendChild(div);

  setTimeout(function () {
    div.style.display = "none";
  }, 2500);
}

function addlist(newli) {
  const li = document.createElement("li");
  li.className = "list";
  li.textContent = newli;
  listgrup.appendChild(li);
  addinput.value = "";
  console.log(newli); // gelen veriyi konsolda geçiçi olarak depolamak için kullanılır bunu yerine daha saglan bir yapı olan localstroge kullaniladabilir
  licount++;

  // Bütün Li etiketlerine erişme
  const LİGRP = document.querySelectorAll(".list");
  for (let i = 0; i < LİGRP.length; i++) {
    LİGRP[i].style.backgroundColor = "#B6D7B9";
    LİGRP[i].style.padding = "10px";
    LİGRP[i].style.margin = "5px";
    LİGRP[i].style.color = "black";
    LİGRP[i].style.borderRadius = "10px";
    LİGRP[i].style.textAlign = "center";
  }
}

function addlisttwo(newli) {
  const li = document.createElement("li");
  li.className = "list";
  li.textContent = newli;
  listgruptwo.appendChild(li);
  addinput.value = "";
  licounttwo++;

  const LİGRP = document.querySelectorAll(".list");
  for (let i = 0; i < LİGRP.length; i++) {
    LİGRP[i].style.backgroundColor = "#B6D7B9";
    LİGRP[i].style.padding = "10px";
    LİGRP[i].style.margin = "5px";
    LİGRP[i].style.color = "black";
    LİGRP[i].style.borderRadius = "10px";
    LİGRP[i].style.textAlign = "center";
  }
}
