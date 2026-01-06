function cekJawaban(){
  const j=document.getElementById('jawaban').value.toLowerCase();
  document.getElementById('hasil').innerText=(j==='kucing')?'Benar 😺':'Salah 😅';
}
function gantiEmoji(){
  const e=['🐱','🐶','🐸','🐼'];
  document.getElementById('emoji').innerText=e[Math.floor(Math.random()*e.length)];
}
setInterval(()=>{
  const d=new Date();
  const el=document.getElementById('jam');
  if(el)el.innerText=d.toLocaleString('id-ID');
},1000);

// GAME TEBAK GAMBAR
function jawabanBenar() {
  document.getElementById("hasilGambar").innerHTML =
    "✅ Benar! Ini adalah gambar kucing 🐱";
}

function jawabanSalah() {
  document.getElementById("hasilGambar").innerHTML =
    "❌ Salah! Coba lagi ya.";
}

// HITUNG TAWA
let tawa = 0;
function tambahTawa() {
  tawa++;
  document.getElementById("tawa").innerHTML = tawa;
}

// GAME TEBAK ANGKA
function tebakAngka() {
  const angkaAcak = Math.floor(Math.random() * 5) + 1;
  const tebakan = document.getElementById("inputAngka").value;

  if (tebakan == angkaAcak) {
    document.getElementById("hasilAngka").innerHTML =
      "🎉 Benar! Angkanya " + angkaAcak;
  } else {
    document.getElementById("hasilAngka").innerHTML =
      "❌ Salah! Angka yang benar " + angkaAcak;
  }
}

// GAME KLIK CEPAT
let skor = 0;
function klikCepat() {
  skor++;
  document.getElementById("skor").innerHTML = skor;
}
const links = document.querySelectorAll(".nav-link");
const indicator = document.querySelector(".liquid-indicator");
const currentPage = location.pathname.split("/").pop();

function moveIndicator(el) {
  indicator.style.width = el.offsetWidth + "px";
  indicator.style.left = el.offsetLeft + "px";
}

// set active saat load
links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
    moveIndicator(link);
  }

  // hover effect (liquid follow)
  link.addEventListener("mouseenter", () => {
    moveIndicator(link);
  });
});
