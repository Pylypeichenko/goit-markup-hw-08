refs = {
  buttons: {
    shownAllButton: document.querySelector(".js-button__all-shown"),
    shownWebSitesButton: document.querySelector(".js-button__web-sites-shown"),
    shownAppsButton: document.querySelector(".js-button__apps-shown"),
    shownDesignButton: document.querySelector(".js-button__design-shown"),
    shownMarketingButton: document.querySelector(".js-button__marketing-shown"),
  },
  cards: {
    allCards: document.querySelectorAll(".projects__card"),
    webSiteCards: document.querySelectorAll(".js-filter__web-site"),
    appCards: document.querySelectorAll(".js-filter__app"),
    designCards: document.querySelectorAll(".js-filter__design"),
    marketingCards: document.querySelectorAll(".js-filter__marketing"),
  },
};

console.log(refs.cards.allCards);
console.log(refs.cards.webSiteCards);
console.log(refs.cards.appCards);
console.log(refs.cards.designCards);
console.log(refs.cards.marketingCards);

refs.buttons.shownAllButton.addEventListener("click", onShownAllButtonClick);
refs.buttons.shownWebSitesButton.addEventListener(
  "click",
  onShownWebSitesButtonClick
);
refs.buttons.shownAppsButton.addEventListener("click", onShownAppsButtonClick);
refs.buttons.shownDesignButton.addEventListener(
  "click",
  onShownDesignButtonClick
);
refs.buttons.shownMarketingButton.addEventListener(
  "click",
  onShownMarketingButtonClick
);

function onShownMarketingButtonClick() {
  onShownCards(refs.cards.marketingCards);

  onHiddenCards(refs.cards.webSiteCards);
  onHiddenCards(refs.cards.appCards);
  onHiddenCards(refs.cards.designCards);
}

function onShownDesignButtonClick() {
  onShownCards(refs.cards.designCards);

  onHiddenCards(refs.cards.webSiteCards);
  onHiddenCards(refs.cards.appCards);
  onHiddenCards(refs.cards.marketingCards);
}

function onShownAppsButtonClick() {
  onShownCards(refs.cards.appCards);

  onHiddenCards(refs.cards.webSiteCards);
  onHiddenCards(refs.cards.designCards);
  onHiddenCards(refs.cards.marketingCards);
}

function onShownWebSitesButtonClick() {
  onShownCards(refs.cards.webSiteCards);

  onHiddenCards(refs.cards.appCards);
  onHiddenCards(refs.cards.designCards);
  onHiddenCards(refs.cards.marketingCards);
}

function onShownAllButtonClick() {
  onShownCards(refs.cards.allCards);
}

function onShownCards(array) {
  array.forEach((card) => {
    if (card.classList.contains("visually-hidden")) {
      card.classList.remove("visually-hidden");
    }
  });
}

function onHiddenCards(array) {
  array.forEach((card) => {
    if (!card.classList.contains("visually-hidden")) {
      card.classList.add("visually-hidden");
    }
  });
}
