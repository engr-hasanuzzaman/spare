export const itemTypesByCategory = {
  clothing: [
    'shirts',
    'dresses_skirts',
    'hats',
    'pants',
    'shorts',
    'jacket_sweaters',
    'socks',
    'shoes',
  ],
  hygiene: [
    'toothbrush',
    'toothpaste',
    'mouthwash',
    'soap',
    'shampoo_conditioner',
    'feminine_hygiene',
  ],
  essentials: [
    'blankets',
    'sleeping_bags',
    'cat_food',
    'dog_food',
  ]
}

export const itemInfo = {
  shirts: {
    displayName: 'Shirts',
    icon: 'shirts.svg',
    icon_lg: 'shirts@2x.png',
    pluralPronoun: false,
    verboseName: 'shirt',
    sizeMen: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL"],
    sizeWomen: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL"]
  },
  dresses_skirts: {
    displayName: 'Dresses + Skirts',
    icon: 'dressesandskirts.svg',
    icon_lg: 'dressesandskirts@2x.png',
    pluralPronoun: false,
    verboseName: 'dress/skirt',
    sizeWomen: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL"]
  },
  hats: {
    displayName: 'Hats',
    icon: 'hats.svg',
    icon_lg: 'hats@2x.png',
    pluralPronoun: false,
    verboseName: 'hat'
  },
  pants: {
    displayName: 'Pants',
    icon: 'pants.svg',
    icon_lg: 'pants@2x.png',
    pluralPronoun: true,
    verboseName: 'pants',
    sizeMen: ["26-28", "28-30", "30-32", "32-34","34-36", "36-38", "38-40", "40-42", "40-44"],
    sizeWomen: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18"]
  },
  shorts: {
    displayName: 'Shorts',
    icon: 'shorts.svg',
    icon_lg: 'shorts@2x.png',
    pluralPronoun: true,
    verboseName: 'shorts',
    sizeMen: ["26-28", "28-30", "30-32", "32-34","34-36", "36-38", "38-40", "40-42", "40-44"],
    sizeWomen: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18"]
  },
  jacket_sweaters: {
    displayName: 'Jackets + Sweaters',
    icon: 'jacketsandsweaters.svg',
    icon_lg: 'jacketsandsweaters@2x.png',
    pluralPronoun: false,
    verboseName: 'jacket/sweater',
    sizeMen: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL"],
    sizeWomen: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL"]
  },
  socks: {
    displayName: 'Socks',
    icon: 'socks.svg',
    icon_lg: 'socks@2x.png',
    pluralPronoun: true,
    verboseName: 'socks',
  },
  shoes: {
    displayName: 'Shoes',
    icon: 'shoes.svg',
    icon_lg: 'shoes@2x.png',
    pluralPronoun: true,
    verboseName: 'shoes',
    sizeMen: ["4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "14.5", "15"],
    sizeWomen: ["4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13","13.5", "14", "14.5", "15"]
  },
  toothbrush: {
    displayName: 'Toothbrush',
    icon: 'toothbrush.svg',
    icon_lg: 'toothbrush@2x.png',
    pluralPronoun: false,
    verboseName: 'toothbrush',
  },
  toothpaste: {
    displayName: 'Toothpaste',
    icon: 'toothpaste.svg',
    icon_lg: 'toothpaste@2x.png',
    pluralPronoun: false,
    verboseName: 'toothpaste',
  },
  mouthwash: {
    displayName: 'Mouthwash',
    icon: 'mouthwash.svg',
    icon_lg: 'mouthwash@2x.png',
    pluralPronoun: false,
    verboseName: 'mouthwash',
  },
  soap: {
    displayName: 'Soap',
    icon: 'soap.svg',
    icon_lg: 'soap@2x.png',
    pluralPronoun: false,
    verboseName: 'soap',
  },
  shampoo_conditioner: {
    displayName: 'Shampoo + Conditioner',
    icon: 'shampoo.svg',
    icon_lg: 'shampoo@2x.png',
    pluralPronoun: false,
    verboseName: 'shampoo/conditioner',
  },
  feminine_hygiene: {
    displayName: 'Feminine Hygiene',
    icon: 'femininehygiene.svg',
    icon_lg: 'femininehygiene@2x.png',
    pluralPronoun: false,
    verboseName: 'hygiene product',
  },
  blankets: {
    displayName: 'Blankets',
    icon: 'blankets.svg',
    icon_lg: 'blankets@2x.png',
    pluralPronoun: false,
    verboseName: 'blanket',
  },
  sleeping_bags: {
    displayName: 'Sleeping Bags',
    icon: 'sleepingbags.svg',
    icon_lg: 'sleepingbags@2x.png',
    pluralPronoun: false,
    verboseName: 'sleeping bag',
  },
  cat_food: {
    displayName: 'Cat Food',
    icon: 'catfood.svg',
    icon_lg: 'catfood@2x.png',
    pluralPronoun: false,
    verboseName: 'cat food',
  },
  dog_food: {
    displayName: 'Dog Food',
    icon: 'dogfood.svg',
    icon_lg: 'dogfood@2x.png',
    pluralPronoun: false,
    verboseName: 'dog food',
  },
}

export const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
}

export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/
