export default function () {
  const contentDiv = document.querySelector("#content");
  const header = document.createElement("h1");
  const containerDiv = document.createElement("div");
  const items = [
    {
      name: "Ballerina Cappuccina",
      src: "https://static.wikitide.net/italianbrainrotwiki/9/9a/Ballerina_cappucappu.png",
      text: "Ballerina Cappuccina, mimimimi! È la moglie di Cappuccino Assassino, e ama la musica, la-la-la-la, la! Sua passione è il Ballerino Lololo.",
    },
    {
      name: "Blueberrinni Octopussini",
      src: "https://static.wikitide.net/italianbrainrotwiki/thumb/a/a8/6CgsqyyvS04uz_2kDIvaoi4pT8ZNExnFQmnsDIJNnMncO33W7SlPE-6-XOxwVZVe8tXlV1nono8Y2RSxuQ6eq1LA3HWsDBqeAth8jcryA0ejU4FJZv7f9ZazWyo6TZsSFl-cHVFGh8uBNfvApnrvtg.webp/599px-6CgsqyyvS04uz_2kDIvaoi4pT8ZNExnFQmnsDIJNnMncO33W7SlPE-6-XOxwVZVe8tXlV1nono8Y2RSxuQ6eq1LA3HWsDBqeAth8jcryA0ejU4FJZv7f9ZazWyo6TZsSFl-cHVFGh8uBNfvApnrvtg.webp.png",
      text: "Blueberrinni Octopussini. Bloop, bloop, bloop, octopussi. Questo picolo animale vive sul fondale Marino e si gode la sua dolce vite. Brava ragazza, rispetto.",
    },
    {
      name: "Burbaloni Lulliloli",
      src: "https://static.wikitide.net/italianbrainrotwiki/thumb/b/b2/Burbaloni_Luliloli.png/600px-Burbaloni_Luliloli.png",
      text: "Burbaloni Luliloli, Capibarello Coccosini! È molto raro trovare sulle coste di Bali una noce di cocco unica nel suo genere che contenga un capibara al suo interno. Si tratta di un evento molto raro in cui la gente del posto si riunisce attorno a un fuoco e celebra l'arriva del dio capibara cocco.",
    },
    {
      name: "Cappuccino Assassino",
      src: "https://static.wikitide.net/italianbrainrotwiki/2/29/Cappuccino_assassino.png",
      text: "Cappu-cappu-cappuccino Assassino! Assassini cappuccini! Questo killer furtivo si infiltra tra i nemici approffitando de la notte. Attento, oddiatore di caffè! Se non bevi una tazza di cappuccino al mattino, è meglio non incrociare questo tizio.",
    },
    {
      name: "Chimpanzini Bananini",
      src: "https://static.wikitide.net/italianbrainrotwiki/thumb/5/50/Chimpanzini_Bananino.png/600px-Chimpanzini_Bananino.png",
      text: "Shimpanzini Bananini! Waa, waa, waa. Bananucci, monkey-monkey-monkey-ucci!",
    },
    {
      name: "Espressona Signora",
      src: "https://static.wikitide.net/italianbrainrotwiki/thumb/f/f1/Espressora_Signora.png/600px-Espressora_Signora.png",
      text: "Ballerina Cappuccina? No, no, no - Espressona Signora. Con il suo charm una vera da dora. Espressona Signora cosi sudecente fa perdere la testa e sorprendente. Cappuccino Assasino pensava de essere il re ma con lei dimentico Ballerina Cappuccina. Oh la la com'e Cappuccino Assassino non e piu con te ora e con me e lo sai che e cosi.",
    },
    {
      name: "Glorbo Fruttodrillo",
      src: "https://static.wikitide.net/italianbrainrotwiki/thumb/f/fd/Go6Qn4sXgAAXbYK.jpg/450px-Go6Qn4sXgAAXbYK.jpg",
      text: "Glorbo Fruttodrillo nel profondo della Palude glorbo frutt drillo regnava il suo corpo era un'enorme anguria a strisce ma la testa e la coda tutto alligatoreLe creature sussurravano del suo morso letale e della sua polpa succosa. Alcuni volevano essere suoi amici, altri volevano assaggiarlo.Un giorno un cacciatore sciocco arrivò con un coltello. “Un cocomero che cammina… jackpot.” Glorbo sorrise. *Chomp.* Quella notte, la palude rimase in silenzio.",
    },
    {
      name: "U Din Din Din Din Dun Ma Din Din Din Dun",
      src: "https://static.wikitide.net/italianbrainrotwiki/thumb/c/cb/U_Din_Din_Din_Din_Dun_Ma_Din_Din_Din_Dun2.webp/450px-U_Din_Din_Din_Din_Dun_Ma_Din_Din_Din_Dun2.webp.png",
      text: "Sosok Jeruk ini suka menelan biji jeruk hingga akhirnya berubah menjadi udin din din dun jeruk yang berotot.",
    },
  ];

  header.textContent = "MENU";
  containerDiv.classList.add("menu");
  for (const item of items) {
    const itemDiv = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h2");
    const description = document.createElement("p");

    itemDiv.classList.add("item");
    img.src = item.src;
    img.alt = item.name;
    title.textContent = item.name;
    description.textContent = item.text;

    itemDiv.appendChild(img);
    itemDiv.appendChild(title);
    itemDiv.appendChild(description);
    containerDiv.appendChild(itemDiv);
  }

  contentDiv.appendChild(header);
  contentDiv.appendChild(containerDiv);
}