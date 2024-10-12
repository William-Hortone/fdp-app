import images from "./images";

const description = [
  {
    id: "1",
    category: "machines",
    name: "Machine de sport ",
    price:900,
    images: [
      {
        img: images.machine11,
      },
      { img: images.machine1 },
    ],
  },
  {
    id: "2",
    category: "machines",
    name: "Machine de sport ",
    price: 299900,
    images: [
      {
        img: images.machine2,
      },
      {
        img: images.machine15,
      },
    ],
  },
  {
    id: "3",
    category: "machines",
    name: "Machine de sport ",
    price: 199900,
    images: [
      {
        img: images.machine16,
      },
      { img: images.machine4 },
    ],
  },
  {
    id: "4",
    category: "machines",
    name: "Machine de sport ",
    price: 289900,
    images: [
      {
        img: images.machine17,
      },
      { img: images.machine22 },
    ],
  },
  {
    id: "5",
    category: "machines",
    name: "Machine de sport ",
    price: 299900,
    images: [
      {
        img: images.machine19,
      },
      { img: images.machine18 },
    ],
  },
  {
    id: "6",
    category: "machines",
    name: "Machine de sport ",
    price: 179900,
    images: [
      {
        img: images.machine20,
      },
      { img: images.machine21 },
    ],
  },
  {
    id: "7",
    category: "machines",
    name: "Machine de sport ",
    price: 219900,
    images: [
      {
        img: images.machine24,
      },
      { img: images.machine25 },
    ],
  },
  {
    id: "8",
    category: "sport",
    name: "Gilet de sport ",
    price: 9900,
    images: [
      {
        img: images.sport4,
      },
      { img: images.sport7 },
    ],
  },
  {
    id: "9",
    category: "sport",
    name: "Alters",
    price: 14900,
    images: [
      {
        img: images.alters,
      },
      { img: images.alters2 },
    ],
  },
  {
    id: "9",
    category: "sport",
    name: "Alters",
    price: 14500,
    images: [
      {
        img: images.alters5,
      },
      { img: images.alters7 },
    ],
  },
  {
    id: "10",
    category: "sport",
    name: "Alters  ",
    price: 14900,
    images: [
      {
        img: images.alters6,
      },
      { img: images.alters5 },
    ],
  },
  {
    id: "11",
    category: "sport",
    name: "Alters de sport ",
    price: 15900,
    images: [
      {
        img: images.sport3,
      },
      { img: images.sport9 },
    ],
  },

  {
    id: "12",
    category: "casque",
    name: "casque beat by dre",
    price: 29900,
    images: [
      {
        img: images.casque1,
      },
      { img: images.casque },
    ],
  },
  {
    id: "13",
    category: "casque",
    name: "casque beat by dre ",
    price: 29900,
    images: [
      {
        img: images.casque3,
      },
      { img: images.casque2 },
    ],
  },
  {
    id: "14",
    category: "casque",
    name: "Ecouteur sans fil ",
    price: 5900,
    images: [
      {
        img: images.casque7,
      },
      { img: images.casque8 },
    ],
  },

  {
    id: "15",
    category: "accessoires",
    name: "Corde de sport ",
    price: 2900,
    images: [
      {
        img: images.corde3,
      },
      { img: images.corde8 },
    ],
  },
  {
    id: "16",
    category: "accessoires",
    name: "Corde de sport ",
    price: 2900,
    images: [
      {
        img: images.corde,
      },
      { img: images.corde4 },
    ],
  },
  {
    id: "17",
    category: "accessoires",
    name: "Corde de sport ",
    price: 2500,
    images: [
      {
        img: images.corde10,
      },
      { img: images.corde9 },
    ],
  },
  {
    id: "18",
    category: "accessoires",
    name: "Corde de sport ",
    price: 3500,
    images: [
      {
        img: images.corde12,
      },
      { img: images.corde11 },
    ],
  },
  {
    id: "19",
    category: "accessoires",
    name: "Machine a laver ",
    price: 8900,
    images: [
      {
        img: images.lavage1,
      },
      { img: images.lavage2 },
    ],
  },
  {
    id: "19",
    category: "accessoires",
    name: "Accessoire telephone",
    price: 8900,
    images: [
      {
        img: images.accessoire,
      },
      { img: images.lavage4 },
    ],
  },

  // {
  //   id: "1",
  //   category: "sport",
  //   name: "Machine de sport ",
  //   price: " 399.900 fcfa",
  //   images: [images.sport4, images.alters2],
  // },

  // {
  //   id: "1",
  //   category: "casque",
  //   name: "Machine de sport ",
  //   price: " 299.900 fcfa",
  //   images: [images.casque1, images.casque8],
  // },

  // {
  //   id: "1",
  //   category: "accessoires",
  //   name: "Machine de sport ",
  //   price: " 499.900 fcfa",
  //   images: [images.sport9, images.corde11],
  // },
  // {
  //   id: "1",
  //   category: "machines",
  //   name: "Machine de sport ",
  //   price: " 199.900 fcfa",
  //   images: [images.machine10, images.machine11, images.machine12, images.machine],
  // },

  // {
  //   id: "1",
  //   category: "sport",
  //   name: "Machine de sport ",
  //   price: " 399.900 fcfa",
  //   images: [images.sport4, images.alters2],
  // },

  // {
  //   id: "1",
  //   category: "casque",
  //   name: "Machine de sport ",
  //   price: " 299.900 fcfa",
  //   images: [images.casque1, images.casque8],
  // },

  // {
  //   id: "1",
  //   category: "accessoires",
  //   name: "Machine de sport ",
  //   price: " 499.900 fcfa",
  //   images: [images.sport9, images.corde11],
  // },
];
export default description;
