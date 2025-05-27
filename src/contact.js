export default function () {
  const contentDiv = document.querySelector("#content");
  const header = document.createElement("h1");
  const containerDiv = document.createElement("div");
  const owners = [
    {
      name: "Brr Brr Patapim",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Brr_brr_patapim.jpg/600px-Brr_brr_patapim.jpg",
      text: `Brr, brr, Patapim, il mio cappello è pieno di Slim! Nel bosco fitto e misterioso, viveva un essere assai curioso. Con radici intrecciate e gambe incrociate, mani sottili, braccia agitate. Il suo naso lungo come un prosciutto, un po' babbuino, un po' cespugliotto. Si chiamava Patapim, oh che strano, e parlava italiano ma con accento arcano! Un giorno trovò un cappello dorato: "Perfetto!" gridò, "che bel risultato!" Ma dentro c'era Slim, il ranocchio blu, che faceva "brr, brr" senza un perché in più. Patapim piangeva: "Mio caro cappello, ora c'è Slim, che guaio, che duello!" Saltava, rideva, si disperava, ma il ranocchio mai se ne andava. Con foglie sui gomiti e muschio sul mеnto, corse nel bosco spinto dal vento. Andò dal mago Tiramisù, chiеdendo aiuto con un gran "ciuu ciuu!" Il mago rispose, mangiando un panino: "Per togliere Slim, serve un palloncino!" Così Patapim, con gran confusione, soffiò nel pallone con emozione. Slim volò, con un grande "boom", sparendo nel cielo come un bel fungo di fumo! Ora Patapim balla nel vento.`,
    },
    {
      name: "Tung Tung Tung Sahur",
      src: "https://static.wikitide.net/italianbrainrotwiki/f/fa/Tung_tung_tung_sahur.png",
      text: "Tung, tung, tung, tung, tung, tung, tung, tung, tung Sahur. Anomali mengerikan yang hanya keluar pada sahur. Konon katanya kalau ada orang yang dipanggil sahur tiga kali dan tidak nyaut, maka makhluk ini datang di rumah kalian. Hiiii, seramnya! Tung tung ini biasanya bersuara layaknya pukulan kentungan sepereti ini. Tung, tung, tung, tung, tung, tung, tung! Share ke teman kalian yang susah sahur.",
    },
  ];

  header.textContent = "CONTACT";
  containerDiv.classList.add("contact");
  for (const owner of owners) {
    const ownerDiv = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h2");
    const description = document.createElement("p");

    ownerDiv.classList.add("owner");
    img.src = owner.src;
    img.alt = owner.name;
    title.textContent = owner.name;
    description.textContent = owner.text;

    ownerDiv.appendChild(img);
    ownerDiv.appendChild(title);
    ownerDiv.appendChild(description);
    containerDiv.appendChild(ownerDiv);
  }

  contentDiv.appendChild(header);
  contentDiv.appendChild(containerDiv);
}