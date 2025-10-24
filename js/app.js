const container = document.getElementById("cards-container");

fetch('data/destinations.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(dest => {
      const card = document.createElement("div");
      card.className = "bg-white shadow-md rounded-xl overflow-hidden w-72 cursor-pointer hover:scale-105 transition transform";
      card.innerHTML = `
        <img src="${dest.image}" alt="${dest.title}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="font-bold text-blue-600 text-xl mb-1">${dest.title}</h3>
          <p class="text-gray-600 mb-2">${dest.duration}</p>
          <p class="text-gray-700 text-sm">${dest.highlights.join(' · ')}</p>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error(err));
