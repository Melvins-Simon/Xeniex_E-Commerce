import { navDetails, advertCard } from "./LinkData.js";
import {
  topSellingProducts,
  FlashSaleProducts,
  AnniversaryProducts,
  HalfPriceProducts,
  WareHouseClearanceProducts,
  TopDealProducts,
  MoreAdvertProducts
} from "./ProductsData.js";
import { AboutData,FAQData } from "./AboutData.js";

// HEADER NAVIGATIONS
const HeaderJS = () =>{
  const pAccount = document.querySelector("#P-Account-Popup");
const accountP = document.querySelector("#Account-Popup");
const pHelp = document.querySelector("#P-Help-Popup");
const helpP = document.querySelector("#Help-Popup");
const keyAr1 = document.querySelector("#key-arrow-down");
const keyAr2 = document.querySelector("#key-arrow-down2");

pAccount.addEventListener("click", () => {
  accountP.classList.toggle("hidden");

  keyAr1.innerHTML === "keyboard_arrow_up"
    ? (keyAr1.innerHTML = "keyboard_arrow_down")
    : (keyAr1.innerHTML = "keyboard_arrow_up");
});

pHelp.addEventListener("click", () => {
  helpP.classList.toggle("hidden");

  keyAr2.innerHTML === "keyboard_arrow_up"
    ? (keyAr2.innerHTML = "keyboard_arrow_down")
    : (keyAr2.innerHTML = "keyboard_arrow_up");
});
}
window.addEventListener('DOMContentLoaded',HeaderJS());

// NAVIGATIION DOTS

const rendDotsSpan = () =>{
  const dot1Cont = document.getElementById("navigationDots1");
const dot2Cont = document.querySelector('#MoreAdvertSpanDot');
function renderNavDots(numberOfDots,container) {
  let html = '';
  for (let i = 1; i <= numberOfDots; i++) {
    html += `<span class="ad-1 h-3 w-3 rounded-full cursor-pointer -bg--color-gray"></span>`;
  }  
  container.innerHTML = html;  
}

window.addEventListener('DOMContentLoaded',renderNavDots(7,dot1Cont));
window.addEventListener('DOMContentLoaded',renderNavDots(3,dot2Cont));

}
window.addEventListener('DOMContentLoaded',rendDotsSpan());

// DISPLAY NAV LINKS & ITEMS
function displayNav() {
  let linkElem = "";
  const navContainer = document.getElementById("navCont");
  const navLinks = () => {
    navDetails.map((item, index) => {
      linkElem += `<a key='${index}' href="#">
        <li class="flex justify-start gap-2 items-center group">
            <span class="material-symbols-outlined -text--color-amber group-hover:-text--color-white group-hover:duration-300 group-hover:ease-in-out ">
            ${item.iconName}
            </span>
            <a class="navlink" href="#">${item.linkName}</a>
        </li>
    </a>`;
    });
  };

  navLinks();
  navContainer.innerHTML = linkElem;
}
window.addEventListener("DOMContentLoaded", displayNav());

// RENDER ADVERT CARDS
function renderAddCard() {
  let cardElem = "";
  const advertCardContainer = document.querySelector("#advertCardCont");
  const dispCard = () => {
    advertCard.map((card, index) => {
      cardElem += `
        <div key='${index}'  class="h-32 w-32 -bg--color-dark bg-center bg-cover bg-no-repeat rounded-md hover:scale-105 duration-100 ease-in-out overflow-hidden">
        <a href="#">
        <img class="block w-full h-full" src="${card.src}" alt="AdvertCard">
        </a>
        </div>`;
    });
  };
  dispCard();
  advertCardContainer.innerHTML = cardElem;
}
window.addEventListener("DOMContentLoaded", renderAddCard());

// RENDER TOP SELLING

function renderTopSelling() {
  let topSellingElem = "";
  const topSellingCont = document.querySelector("#topSellingCont");
  const dispTopSelling = () => {
    topSellingProducts.map((product, index) => {
      topSellingElem += `
        <a key='${index}' ref="#">
        <div class="h-max w-[180px] cursor-pointer rounded-md hover:scale-[1.01] hover:shadow-[0px_0px_10px] hover:shadow-black duration-100 ease-in-out flex flex-col gap-1 overflow-hidden">
            <a class="relative h-[185px] w-[180px] overflow-hidden" href="#">
                <img class="block w-full h-full" src="${product.src}" alt="Top Selling Product">
                <div class="absolute top-1 right-1 -bg--color-dark p-1 rounded-md text-sm -text--color-white w-[48.7px] text-center">
                    ${product.percentDiscount}
                </div>
            </a>  
            <span class="p-2">
                <h3 class="name">${product.productName}</h3>
                <h3 class="-text--color-white text-lg">Ksh ${product.currentPrice}</h3>
                <h4 class="-text--color-gray line-through text-sm">Ksh ${product.initialPrice}</h4>
            </span>                      
        </div>
        </a>
        `;
    });
  };
  dispTopSelling();
  topSellingCont.innerHTML = topSellingElem;
}
window.addEventListener("DOMContentLoaded", renderTopSelling());

// RENDER FLASH SALES

function renderFlashSale() {
  let FlashSaleElem = "";
  const FlashSaleCont = document.querySelector("#FlashSaleCont");
  const dispFlashSale = () => {
    FlashSaleProducts.map((product, index) => {
      FlashSaleElem += `
          <a key='${index}' ref="#">
                <div class="h-max w-[180px] cursor-pointer rounded-md hover:scale-[1.01] hover:shadow-[0px_0px_10px] hover:shadow-black duration-100 ease-in-out flex flex-col gap-1 overflow-hidden">
                    <a class="relative h-[185px] w-[180px] overflow-hidden" href="#">
                        <img class="block w-full h-[185px]" src="${
                          product.src
                        }" alt="Product in flash Sales">
                        <div class="absolute top-1 right-1 -bg--color-dark p-1 rounded-md text-sm -text--color-white w-[48.7px] text-center">
                            ${product.percentDiscount}
                        </div>
                    </a>  
                    <div class="p-2">
                        <h3 class="name">${product.productName}</h3>
                        <h3 class="-text--color-white text-lg">Ksh ${
                          product.currentPrice
                        }</h3>
                        <h4 class="-text--color-gray line-through text-sm">Ksh ${
                          product.initialPrice
                        }</h4>
                        <div class="flex flex-col gap-1">
                            <span class="text-[0.75rem] -text--color-light overflow-hidden">${
                              product.itemsRemaining
                            } items remaining</span>
                            <span class="w-full  h-2 rounded-full -bg--color-gray flex justify-start items-center">
                                <span
                                style="width: ${product.span}%;"
                                class="
                                ${
                                  Number(product.span) <= 25
                                    ? "-bg--color-danger"
                                    : "-bg--color-amber"
                                }
                                
                                h-2  rounded-tl-full rounded-bl-full"></span>
                            </span>
                        </div>
                    </div>                           
                    
                </div>
            </a>
          `;
    });
  };
  window.addEventListener("DOMContentLoaded", dispFlashSale());
  FlashSaleCont.innerHTML = FlashSaleElem;
}
window.addEventListener("DOMContentLoaded", renderFlashSale());

// RENDER ANNIVASARY PRODUCTS

function renderAnniversary() {
  let AnniversaryElem = "";
  const AnniversaryCont = document.querySelector("#AnniversaryCont");
  const dispAnniversary = () => {
    AnniversaryProducts.map((product, index) => {
      AnniversaryElem += `
        <a key='${index}' class="bg-red-400" href="#">
                <div class="h-max w-[180px] cursor-pointer  rounded-md hover:scale-[1.01] hover:shadow-[0px_0px_10px] hover:shadow-black duration-100 ease-in-out flex flex-col gap-1 overflow-hidden">
                    <a class="relative h-[185px] w-[180px] overflow-hidden" href="#">
                        <img class="block w-full h-full" src="${product.src}" height="185px" width="185px" alt="AdvertLink">

                        <div class="absolute top-1 right-1 -bg--color-dark p-1 rounded-md text-sm -text--color-white w-[48.7px] text-center">
                            ${product.percentDiscount}
                        </div>
                    </a>  
                    <span class="p-2">
                        <h3 class="name">${product.productName}</h3>
                        <h3 class="-text--color-white text-lg">Ksh ${product.currentPrice}</h3>
                        <h4 class="-text--color-gray line-through text-sm">Ksh ${product.initialPrice}</h4>
                    </span>                      
                </div>
            </a>

`;
    });
  };
  dispAnniversary();
  AnniversaryCont.innerHTML = AnniversaryElem;
}

window.addEventListener("DOMContentLoaded", renderAnniversary());

// HALF PRICE PRODUCTS

function renderHalfPrice() {
  let HalfPriceElem = "";
  const HalfPriceCont = document.querySelector("#HalfPriceCont");
  const dispHalfPrice = () => {
    HalfPriceProducts.map((product, index) => {
      HalfPriceElem += `
      <div key='${index}' class="h-max w-32 flex flex-col gap-1 justify-center -bg--color-dark bg-center bg-cover bg-no-repeat rounded-md hover:scale-[1.02] hover:shadow-[0px_0px_10px] hover:shadow-black duration-100 ease-in-out overflow-hidden">
      <a href="#">
          <img class="block w-full h-32" src="${product.src}" alt="50%-Off Product">
      </a>  
      <h3 class="-text--color-white text-center text-sm select-none cursor-pointer">${product.productName}</h3>                      
      </div>
      `;
    });
  };
  dispHalfPrice();
  HalfPriceCont.innerHTML = HalfPriceElem;
}

window.addEventListener("DOMContentLoaded", renderHalfPrice());

// WAREHOUSE CLEARANCE SALES

function renderWareHouseClearance() {
  let WareHouseClearanceElem = "";
  const WareHouseClearanceCont = document.querySelector("#WareHouseClearanceCont");
  const dispWareHouseClearance = () => {
    WareHouseClearanceProducts.map((product, index) => {
      WareHouseClearanceElem += `
      <a key='${index}' ref="#">
      <div class="h-max w-[180px] cursor-pointer rounded-md hover:scale-[1.01] hover:shadow-[0px_0px_10px] hover:shadow-black duration-100 ease-in-out flex flex-col gap-1 overflow-hidden">
          <a class="relative h-[185px] w-[180px] overflow-hidden" href="#">
              <img class="block w-full h-[185px]" src="${product.src}" alt="Clearance deal">
              <div class="absolute top-1 right-1 -bg--color-dark p-1 rounded-md text-sm -text--color-white w-[48.7px] text-center">
                  ${product.percentDiscount}
              </div>
          </a>  
          <div class="p-2">
              <h3 class="name">${product.productName}</h3>
              <h3 class="-text--color-white text-lg">Ksh ${product.currentPrice}</h3>
              <h4 class="-text--color-gray line-through text-sm">Ksh ${product.initialPrice}</h4>                                
          </div>                           
         
      </div>
      </a>
      `;
    });
  };
  dispWareHouseClearance();
  WareHouseClearanceCont.innerHTML = WareHouseClearanceElem;
}

window.addEventListener("DOMContentLoaded", renderWareHouseClearance());

// TOP DEALS PRODUCTS

function renderTopDeals() {
  let TopDealsElem = "";
  const TopDealsCont = document.querySelector("#TopDealsCont");
  const dispTopDeals = () => {
    TopDealProducts.map((product, index) => {
      TopDealsElem += `
      <a key='${index}' href="${product.href}">
      <div class="h-max w-[180px] cursor-pointer rounded-md hover:scale-[1.01] hover:shadow-[0px_0px_5px] duration-100 ease-in-out flex flex-col gap-1 overflow-hidden">
          <img class="block w-full h-[16rem]" src="${product.src}" alt="Top Deal">      
      </div>
      </a>
      `;
    });
  };
  dispTopDeals();
  TopDealsCont.innerHTML = TopDealsElem;
}
window.addEventListener("DOMContentLoaded", renderTopDeals());

// MORE ADVERT IMAGES

function renderMoreAdvert() {
  let MoreAdvertElem = "";
  const MoreAdvertCont = document.querySelector("#MoreAdvertCont");
  const dispMoreAdvert = () => {
    MoreAdvertProducts.map((product, index) => {
      MoreAdvertElem += `
      <a key='${index}' href="${product.href}"><img class="block w-full h-full rounded-md " src="${product.src}" alt="Advert Img"></a>
      `;
    });
  };
  dispMoreAdvert();
  MoreAdvertCont.innerHTML = MoreAdvertElem;
}
window.addEventListener("DOMContentLoaded", renderMoreAdvert());


// ABOUT XENIEX SECTION

function renderAboutData() {
  let AboutDataElem = "";
  const AboutDataCont = document.querySelector(".AboutDataCont");
  const dispAboutData = () => {
    AboutData.map((data, index) => {
      AboutDataElem += `
      <div key='${index}' class="flex flex-wrap flex-col gap-2">
        <h3 class="font-bold -text--color-white text-lg">${data.subtext}</h3>
        <p class="-text--color-white text-sm">
          ${data.information}
        </p>
      </div>

      `;
    });
  };
  dispAboutData();
  AboutDataCont.innerHTML = AboutDataElem;

}
window.addEventListener("DOMContentLoaded", renderAboutData());

// FAQs SECTION

function renderFAQData() {
  let FAQDataElem = "";
  const FAQDataCont = document.querySelector("#FAQDataCont"); 
  const dispFAQData = () => {
    FAQData.map((data, index) => {
      FAQDataElem += `
      <li key='${index}' class="flex flex-col justify-between items-start gap-1">
      <span class="-text--color-white font-bold">${data.question}</span>
        <p class="-text--color-white pl-4 text-sm">
       ${data.answer}
        </p>
    </li>
      `;    
    });
  };  
  dispFAQData();
  FAQDataCont.innerHTML=FAQDataElem;

}
window.addEventListener("DOMContentLoaded", renderFAQData());
