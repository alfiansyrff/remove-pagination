const newsData = {
  type1: [
    "tribunnews.com",
    "kompas.com",
    "merdeka.com",
    "viva.co.id",
  ],
  type2: ["detik.com"],
}

const urlParams = new URLSearchParams(window.location.search);
const href = window.location.href;

const includesTo = (type) => type.map((el) => href.includes(el)).includes(true);

if (includesTo(newsData.type1) && urlParams.get("page") !== "all") {
  urlParams.set("page", "all");
  window.location.search = urlParams;
} else if (includesTo(newsData.type2) && urlParams.get("single") !== "1") {
  urlParams.set("single", "1");
  window.location.search = urlParams;
};