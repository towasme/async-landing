
const API = 'https://free-football-soccer-videos.p.rapidapi.com/'

const content = document.getElementById('content');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '77e5064463msh940edda8434a38ep1e37b5jsnbf3c39090a28',
        'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
    }
};

async function fetchData(urlApi) {

    const response = await fetch(urlApi, options);
    return await response.json()
}

(async()=>{try{const videos=await fetchData(API);let view=`
    ${videos.items.map(video=>`
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.url}" alt="${video.title}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.title}
          </h3>
        </div>
      </div>
    `).slice(0,4).join('')}
    `;content.innerHTML=view;}catch(error){console.log(error);}})();