
const filterInput = document.getElementById('filterInput');
const cardContainer = document.getElementById('cardContainer');


const districts =[

        { 
            id: 1 ,
            city: 'Kasarkod', 
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Kasrkod-beach-park-Honnavar.jpg/1200px-Kasrkod-beach-park-Honnavar.jpg' 
            dis: 'north end' ,
    },
        
        { 
            id: 2 ,
            city: 'Kannur', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Muzhappilangad_Drive-in_Beach_2.jpg/1024px-Muzhappilangad_Drive-in_Beach_2.jpg'
        dis: 'sea end' ,
    },  

    },
        
        { city: 'Calicut', image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRwnTyfBU1t9qnloBvM4AYe4eVXKmfztoyzesrlbOVQdjHGCoRIO7LU3jJJOPVpsUwEetTV0HiQMx7GYoA1eumymdp41Q' },
        { city: 'Wayanad', image: 'https://www.wayanad.com/files/menuboxes/108009770.jpg' },
        { city: 'Malappuram', image: 'https://cdn.s3waas.gov.in/s382aa4b0af34c2313a562076992e50aa3/uploads/2018/04/2018041752-2.jpg' },
        { city: 'Palakkad', image: 'https://www.tusktravel.com/blog/wp-content/uploads/2022/12/Malampuzha-Park-Palakkad-Kerala.jpg' },
        { city: 'Thrissur', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsc376BoB-Tnb7m10osDSXsV15oXL98UD4zMduln4AQ&usqp=CAU&ec=48665701' },
        { city: 'Kochi', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/de/f0/eb/backwater-tourism.jpg?w=700&h=-1&s=1' },
        { city: 'Alappuzha', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Alappuzha_Boat_Beauty_W.jpg/1024px-Alappuzha_Boat_Beauty_W.jpg' },
        { city: 'Idukki', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Munnar_Top_station.jpg/1024px-Munnar_Top_station.jpg' },
        { city: 'Kollam', image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/13_Arch_bridge_Kazhuthurutty_Kerala.jpg' },
        { city: 'Kottayam', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vembanad_Lake_at_Kumarakom.jpg/1280px-Vembanad_Lake_at_Kumarakom.jpg' },
        { city: 'Pathanamthitta', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/33kVsubstationperunad.jpeg/1280px-33kVsubstationperunad.jpeg' },
        { city: 'Thiruvananthapuram', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Poovar_Kerala.jpg/1280px-Poovar_Kerala.jpg' }
      ];
      
]
function generateCard(city, image) {
    return `
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="${image}" class="card-img-top" alt="${city}">
          <div class="card-body">
            <p class="card-text">${city}</p>
          </div>
        </div>
      </div>
    `;
  }

  // Function to render the initial cards
  function renderCards() {
    const html = data.map(item => generateCard(item.city, item.image)).join('');
    cardContainer.innerHTML = html;
  }

  // Function to filter the cards based on the input value
  function filterCards() {
    const filterValue = filterInput.value.toLowerCase();
    const filteredData = data.filter(item => item.city.toLowerCase().includes(filterValue));
    const html = filteredData.map(item => generateCard(item.city, item.image)).join('');
    cardContainer.innerHTML = html;
  }

  // Render the initial cards
  renderCards();

  // Add event listener to the filter input
  filterInput.addEventListener('input', filterCards);
</script>