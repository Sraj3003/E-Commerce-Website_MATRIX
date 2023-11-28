const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "NIKE",
    price: 19,
    colors: [
      {
        code: "black",
        img: "./img/nike 1.png",
      },
      {
        code: "white",
        img: "./img/nike 2.png",
      },
    ],
  },
  {
    id: 2,
    title: "H&M",
    price: 15,
    colors: [
      {
        code: "lightpink",
        img: "./img/hm 1.png",
      },
      {
        code: "black",
        img: "./img/hm 2.png",
      },
    ],
  },
  {
    id: 3,
    title: "OVERLAYS",
    price: 9,
    colors: [
      {
        code: "orange",
        img: "./img/ovr 1.png",
      },
      {
        code: "lightgreen",
        img: "./img/ovr 2.png",
      },
    ],
  },
  {
    id: 4,
    title: "PUMA",
    price: 29,
    colors: [
      {
        code: "ivory",
        img: "./img/puma 1.png",
      },
      {
        code: "black",
        img: "./img/puma 2.png",
      },
    ],
  },
  {
    id: 5,
    title: "ADIDAS",
    price: 24.99,
    colors: [
      {
        code: "mistyrose",
        img: "./img/adidas 1.png",
      },
      {
        code: "black",
        img: "./img/adidas 2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
