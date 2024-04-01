const modalContactsLocation = document.querySelector(
  "[data-contacts-location-modal]"
);
const overlayContactsLocation = document.querySelector(
  "[data-contacts-location-overlay]"
);
const openModalBtnContactsLocation = document.querySelector(
  "[data-contacts-location-open]"
);
const closeModalBtnContactsLocation = document.querySelector(
  "[data-contacts-location-close]"
);

const openModalContactsLocation = function () {
  modalContactsLocation.classList.remove("is-hidden");
  overlayContactsLocation.classList.remove("is-hidden");
};

openModalBtnContactsLocation.addEventListener(
  "click",
  openModalContactsLocation,
  { passive: true }
);

const closeModalContactsLocation = function () {
  modalContactsLocation.classList.add("is-hidden");
  overlayContactsLocation.classList.add("is-hidden");
};

closeModalBtnContactsLocation.addEventListener(
  "click",
  closeModalContactsLocation,
  { passive: true }
);

document.addEventListener(
  "keydown",
  function (event) {
    if (
      event.key === "Escape" &&
      !modalContactsLocation.classList.contains("is-hidden")
    ) {
      closeModalContactsLocation();
    }
  },
  { passive: true }
);

// Desktop modal
const modalContactsFranchise = document.querySelector(
  "[data-contacts-franchise-modal]"
);
const overlayContactsFranchise = document.querySelector(
  "[data-contacts-franchise-overlay]"
);
const openModalBtnContactsFranchise = document.querySelector(
  "[data-contacts-franchise-open]"
);
const closeModalBtnContactsFranchise = document.querySelector(
  "[data-contacts-franchise-close]"
);

const openModalContactsFranchise = function () {
  modalContactsFranchise.classList.remove("is-hidden");
  overlayContactsFranchise.classList.remove("is-hidden");
};

openModalBtnContactsFranchise.addEventListener(
  "click",
  openModalContactsFranchise,
  { passive: true }
);

const closeModalContactsFranchise = function () {
  modalContactsFranchise.classList.add("is-hidden");
  overlayContactsFranchise.classList.add("is-hidden");
};

closeModalBtnContactsFranchise.addEventListener(
  "click",
  closeModalContactsFranchise,
  { passive: true }
);

document.addEventListener(
  "keydown",
  function (event) {
    if (
      event.key === "Escape" &&
      !modalContactsFranchise.classList.contains("is-hidden")
    ) {
      closeModalContactsFranchise();
    }
  },
  { passive: true }
);
