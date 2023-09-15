const jewels = [
  { brand: 'Bridal | JG', type: 'Rings', image: 'IMG_2836.png' },
  { brand: 'Bridal | JG', type: 'Rings', image: 'IMG_2838.png' },
  { brand: 'Bridal | JG', type: 'Rings', image: 'IMG_2839.png' },
  { brand: 'Bridal | JG', type: 'Rings', image: 'IMG_2840.png' },
  { brand: 'Bridal | JG', type: 'Rings', image: 'IMG_2841.png' },
  { brand: 'Bridal | JG', type: 'Rings', image: 'IMG_2842.png' },
  { brand: 'Bridal | JG', type: 'Rings', image: 'IMG_2843.png' },
  { brand: 'Bridal | JG', type: 'Rings', image: 'IMG_2845.png' },
  { brand: 'Bridal | JG', type: 'Rings', image: 'IMG_2846.png' },
  { brand: 'Bridal | JG', type: 'Rings', image: 'IMG_2848.png' },
  { brand: 'Bridal | JG', type: 'Rings', image: 'IMG_2849.png' },
  { brand: 'Bridal | JG', type: 'Rings', image: 'IMG_2850.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2852.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2853.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2854.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2855.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2856.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2857.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2858.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2859.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2860.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2861.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2863.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2864.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2865.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2866.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2867.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2868.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2869.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2870.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2871.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2872.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2873.png' },
  { brand: 'Collection | JG', type: 'Rings', image: 'IMG_2874.png' },
  { brand: 'Collection | JG', type: 'Earrings', image: 'IMG_2875.png' },
  { brand: 'Collection | JG', type: 'Earrings', image: 'IMG_2876.png' },
  { brand: 'Collection | JG', type: 'Earrings', image: 'IMG_2877.png' },
  { brand: 'Collection | JG', type: 'Earrings', image: 'IMG_2878.png' },
  { brand: 'Collection | JG', type: 'Earrings', image: 'IMG_2879.png' },
  { brand: 'Collection | JG', type: 'Earrings', image: 'IMG_2880.png' },
  { brand: 'Collection | JG', type: 'Earrings', image: 'IMG_2881.png' },
  { brand: 'Collection | JG', type: 'Earrings', image: 'IMG_2882.png' },
  { brand: 'Collection | JG', type: 'Earrings', image: 'IMG_2883.png' },
  { brand: 'Collection | JG', type: 'Earrings', image: 'IMG_2884.png' },
  { brand: 'Collection | JG', type: 'Earrings', image: 'IMG_2885.png' },
  { brand: 'Collection | JG', type: 'Earrings', image: 'IMG_2886.png' },
  { brand: 'Collection | JG', type: 'Earrings', image: 'IMG_2959.png' },
  { brand: 'Collection | JG', type: 'Earrings', image: 'IMG_2961.png' },
  { brand: 'Collection | JG', type: 'Earrings', image: 'IMG_2962.png' },
  { brand: 'Collection | JG', type: 'Earrings', image: 'IMG_2963.png' },
  { brand: 'Collection | JG', type: 'Earrings', image: 'IMG_2964.png' },
  { brand: 'Collection | JG', type: 'Bracelets', image: 'IMG_2887.png' },
  { brand: 'Collection | JG', type: 'Bracelets', image: 'IMG_2889.png' },
  { brand: 'Collection | JG', type: 'Bracelets', image: 'IMG_2890.png' },
  { brand: 'Collection | JG', type: 'Bracelets', image: 'IMG_2891.png' },
  { brand: 'Collection | JG', type: 'Bracelets', image: 'IMG_2892.png' },
  { brand: 'Collection | JG', type: 'Bracelets', image: 'IMG_2893.png' },
  { brand: 'Collection | JG', type: 'Bracelets', image: 'IMG_2894.png' },
  { brand: 'Collection | JG', type: 'Bracelets', image: 'IMG_2895.png' },
  { brand: 'Collection | JG', type: 'Bracelets', image: 'IMG_2896.png' },
  { brand: 'Collection | JG', type: 'Babies', image: 'IMG_2910.png' },
  { brand: 'Collection | JG', type: 'Babies', image: 'IMG_2911.png' },
  { brand: 'Collection | JG', type: 'Babies', image: 'IMG_2912.png' },
  { brand: 'Collection | JG', type: 'Babies', image: 'IMG_2914.png' },
  { brand: 'Collection | JG', type: 'Babies', image: 'IMG_2915.png' },
  { brand: 'Collection | JG', type: 'Babies', image: 'IMG_2916.png' },
  { brand: 'Collection | JG', type: 'Babies', image: 'IMG_2917.png' },
  { brand: 'Collection | JG', type: 'Babies', image: 'IMG_2918.png' },
  { brand: 'Collection | JG', type: 'Babies', image: 'IMG_2919.png' },
  { brand: 'Collection | JG', type: 'Babies', image: 'IMG_2920.png' },
  { brand: 'Collection | JG', type: 'Babies', image: 'IMG_2921.png' },
  { brand: 'Collection | JG', type: 'Necklaces', image: 'IMG_2926.png' },
  { brand: 'Collection | JG', type: 'Necklaces', image: 'IMG_2927.png' },
  { brand: 'Collection | JG', type: 'Necklaces', image: 'IMG_2928.png' },
  { brand: 'Collection | JG', type: 'Necklaces', image: 'IMG_2929.png' },
  { brand: 'Collection | JG', type: 'Necklaces', image: 'IMG_2930.png' },
  { brand: 'Collection | JG', type: 'Necklaces', image: 'IMG_2931.png' },
  { brand: 'Collection | JG', type: 'Necklaces', image: 'IMG_2932.png' },
  { brand: 'Collection | JG', type: 'Necklaces', image: 'IMG_2933.png' },
  { brand: 'Collection | JG', type: 'Necklaces', image: 'IMG_2935.png' },
  { brand: 'Collection | JG', type: 'Necklaces', image: 'IMG_2937.png' },
  { brand: 'Collection | JG', type: 'Necklaces', image: 'IMG_2939.png' },
  { brand: 'Collection | JG', type: 'Necklaces', image: 'IMG_2940.png' },
  { brand: 'Collection | JG', type: 'Necklaces', image: 'IMG_2941.png' },
  { brand: 'Collection | JG', type: 'Necklaces', image: 'IMG_2942.png' },
  { brand: 'Collection | JG', type: 'Necklaces', image: 'IMG_2943.png' },
  { brand: 'Collection | JG', type: 'Necklaces', image: 'IMG_2944.png' },
  { brand: 'Collection | JG', type: 'Necklaces', image: 'IMG_2945.png' },
  { brand: 'Collection | JG', type: 'Necklaces', image: 'IMG_2946.png' },
  { brand: 'Collection | JG', type: 'Mens', image: 'IMG_2939.png' },
  { brand: 'Collection | JG', type: 'Mens', image: 'IMG_2940.png' },
  { brand: 'Collection | JG', type: 'Mens', image: 'IMG_2941.png' },
  { brand: 'Collection | JG', type: 'Mens', image: 'IMG_2942.png' },
  { brand: 'Collection | JG', type: 'Mens', image: 'IMG_2943.png' },
  { brand: 'Collection | JG', type: 'Mens', image: 'IMG_2944.png' },
  { brand: 'Collection | JG', type: 'Mens', image: 'IMG_2945.png' },
  { brand: 'Collection | JG', type: 'Mens', image: 'IMG_2946.png' },
  { brand: 'Collection | JG', type: 'Pendants', image: 'IMG_2947.png' },
  { brand: 'Collection | JG', type: 'Pendants', image: 'IMG_2948.png' },
  { brand: 'Collection | JG', type: 'Pendants', image: 'IMG_2949.png' },
  { brand: 'Collection | JG', type: 'Pendants', image: 'IMG_2950.png' },
  { brand: 'Collection | JG', type: 'Pendants', image: 'IMG_2951.png' },
  { brand: 'Collection | JG', type: 'Pendants', image: 'IMG_2955.png' },
  { brand: 'Collection | JG', type: 'Pendants', image: 'IMG_2956.png' },
  { brand: 'Collection | JG', type: 'Pendants', image: 'IMG_2957.png' },
  { brand: 'Collection | JG', type: 'Pendants', image: 'IMG_2958.png' },
  
  // Add more jewel objects as needed
];

const toggleOrder = [];

function updateToggleOrder(toggledText) {
  const index = toggleOrder.indexOf(toggledText);
  if (index > -1) {
    toggleOrder.splice(index, 1); // Remove the item if it's already in the list
  }
  toggleOrder.push(toggledText); // Add the item to the end of the list
}

function filterItems() {
  const gallery = document.getElementById('gallery');

  const activeBrands = Array.from(document.querySelectorAll('.brand-button.active')).map(button => button.textContent);
  const activeProductTypes = Array.from(document.querySelectorAll('.type-button.active')).map(button => button.textContent);

  const filteredJewels = jewels.filter(jewel => {
    const brandMatch = activeBrands.length === 0 || activeBrands.includes(jewel.brand);
    const typeMatch = activeProductTypes.length === 0 || activeProductTypes.includes(jewel.type);
    return brandMatch && typeMatch;
  });

  const orderedJewels = filteredJewels.sort((a, b) => {
    const aIndex = toggleOrder.indexOf(a.brand) === -1 ? toggleOrder.indexOf(a.type) : toggleOrder.indexOf(a.brand);
    const bIndex = toggleOrder.indexOf(b.brand) === -1 ? toggleOrder.indexOf(b.type) : toggleOrder.indexOf(b.brand);
    return aIndex - bIndex;
  });

  gallery.innerHTML = '';

  if (orderedJewels.length === 0) {
    const message = document.createElement('p');
    message.textContent = 'No matching jewels found.';
    gallery.appendChild(message);
  } else {
    const imagesFragment = document.createDocumentFragment();
    const displayedImages = [];

    orderedJewels.forEach(jewel => {
      const imageSrc = jewel.image;

      if (!displayedImages.includes(imageSrc)) {
        const image = document.createElement('img');
        image.src = imageSrc;
        imagesFragment.appendChild(image);
        displayedImages.push(imageSrc);
      }
    });

    gallery.appendChild(imagesFragment);
  }
}

const brandButtons = document.querySelectorAll('.brand-button');
const typeButtons = document.querySelectorAll('.type-button');

brandButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    updateToggleOrder(button.textContent);
    filterItems();
  });
});

typeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    updateToggleOrder(button.textContent);
    filterItems();
  });
});

filterItems();

// product.html JavaScript code
document.addEventListener('DOMContentLoaded', function() {
  // Retrieve URL parameters
  const params = new URLSearchParams(window.location.search);
  const brand = params.get('brand');
  const type = params.get('type');

  // Set the corresponding buttons as active
  const brandButtons = document.querySelectorAll('.brand-button');
  const typeButtons = document.querySelectorAll('.type-button');

  brandButtons.forEach(button => {
    if (button.textContent === brand) {
      button.classList.add('active');
    }
  });

  typeButtons.forEach(button => {
    if (button.textContent === type) {
      button.classList.add('active');
    }
  });

  // Call the filterItems function to display the filtered results
  filterItems();
});

function togglesidebar() {
  var sidebar = document.querySelector('.sidebar');
  var filtersButton = document.querySelector('.filters.masterCTA2');

  if (sidebar.style.transform === 'translateX(0%)') {
    sidebar.style.transform = 'translateX(-100%)';
    filtersButton.textContent = 'FILTER';
  } else {
    sidebar.style.transform = 'translateX(0%)';
    filtersButton.textContent = 'CLOSE';
  }
}