const API = "https://69b31ef5e224ec066bdb7eea.mockapi.io/packages"; 

const cards = document.getElementById("cards");
const form = document.getElementById("form");
const search = document.getElementById("search");
const filter = document.getElementById("countryFilter");

// Display packages
function displayPackages(data) {
  cards.innerHTML = "";
  data.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.image}" />
      <div class="card-body">
        <h3>${p.destination}</h3>
        <p>${p.country}</p>
        <p>$${p.price}</p>
        <button onclick="edit(${p.id})">Edit</button>
        <button onclick="removePkg(${p.id})">Delete</button>
      </div>
    `;
    cards.appendChild(card);
  });
}

// Load packages with search/filter
async function load() {
  try {
    let res = await fetch(API);
    let data = await res.json();

    const text = search.value.toLowerCase();
    const country = filter.value;

    data = data.filter(p => p.destination.toLowerCase().includes(text));
    if (country) data = data.filter(p => p.country === country);

    displayPackages(data);
  } catch (err) {
    console.error("Failed to fetch API:", err);
    cards.innerHTML = "<p style='color:red;'>Failed to load data. Check API URL.</p>";
  }
}

search.oninput = load;
filter.onchange = load;

form.onsubmit = async e => {
  e.preventDefault();

  const id = document.getElementById("id").value;
  const pkg = {
    destination: destination.value,
    country: country.value,
    price: price.value,
    image: image.value
  };

  try {
    if (id) {
      await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pkg)
      });
    } else {
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pkg)
      });
    }
    form.reset();
    load();
  } catch (err) {
    console.error("Failed to save package:", err);
  }
};

async function edit(id) {
  let res = await fetch(`${API}/${id}`);
  let d = await res.json();

  document.getElementById("id").value = id;
  destination.value = d.destination;
  country.value = d.country;
  price.value = d.price;
  image.value = d.image;
}

async function removePkg(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  load();
}

// Initial load
load();