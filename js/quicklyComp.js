/* /////////////////////////////////////////////////// */
/* © 2024 Quickly CSS GRID v-2-0-1                     */
/* JS minimizado                                       */
/* Por Alex Osses                                      */
/* Documentación https://quicklycss.github.io/Quickly/ */
/* /////////////////////////////////////////////////// */
function recortarTexto(maxLongitud, clase) {
  const elementos = document.querySelectorAll(clase);
  const puntosSuspensivos = "...";
  const longitudRecorte = maxLongitud - puntosSuspensivos.length;
  elementos.forEach((elemento) => {
    let texto = elemento.textContent.trim();
    if (texto.length > maxLongitud) {
      elemento.textContent =
        texto.slice(0, longitudRecorte) + puntosSuspensivos;
    }
  });
}
window.onload = () => {
  recortarTexto(60, ".text-cut-60");
  recortarTexto(80, ".text-cut-80");
  recortarTexto(100, ".text-cut-100");
  recortarTexto(150, ".text-cut-150");
  recortarTexto(200, ".text-cut-200");
  recortarTexto(250, ".text-cut-250");
  recortarTexto(300, ".text-cut-300");
  recortarTexto(350, ".text-cut-350");
  recortarTexto(400, ".text-cut-400");
  recortarTexto(450, ".text-cut-450");
};
document.addEventListener("DOMContentLoaded", function () {
  const acordBlock = document.querySelectorAll(".accordion-block");
  const acordHeader = document.querySelectorAll(".accordion-header");
  acordHeader.forEach((header, i) => {
    acordHeader[i].addEventListener("click", () => {
      acordBlock.forEach((block, i) => {
        acordBlock[i].classList.remove("active");
      });
      acordBlock[i].classList.add("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const tabsButtom = document.querySelectorAll(".tabs-buttom");
  const tabsBlock = document.querySelectorAll(".tabs-block");
  tabsButtom.forEach((buttom, i) => {
    tabsButtom[i].addEventListener("click", () => {
      tabsButtom.forEach((buttom, i) => {
        tabsButtom[i].classList.remove("activo");
        tabsBlock[i].classList.remove("activo");
      });
      tabsButtom[i].classList.add("activo");
      tabsBlock[i].classList.add("activo");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggleButtons = document.querySelectorAll(
    '[data-Qy-toggle="dropdown"]'
  );
  dropdownToggleButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const dropdownMenu = button.nextElementSibling;
      dropdownMenu.classList.toggle("dropdown-show");
    });
  });
  document.addEventListener("click", function (event) {
    dropdownToggleButtons.forEach(function (button) {
      const dropdownMenu = button.nextElementSibling;
      if (
        !button.contains(event.target) &&
        !dropdownMenu.contains(event.target)
      ) {
        dropdownMenu.classList.remove("dropdown-show");
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const modalToggleButtons = document.querySelectorAll(
    '[data-Qy-toggle^="modal"]'
  );
  const closeBlackBtns = document.querySelectorAll(".modal .close");
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector(".modal-content");
    modalContent.classList.remove("fadeOut");
    modalContent.classList.add("fadeIn");
    modal.style.display = "block";
    setTimeout(function () {
      modalContent.classList.add("fadeIn");
    }, 50);
  }
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector(".modal-content");
    modalContent.classList.remove("fadeIn");
    modalContent.classList.add("fadeOut");
    setTimeout(function () {
      modal.style.display = "none";
    }, 600);
  }
  modalToggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const modalId = this.getAttribute("data-Qy-toggle");
      openModal(modalId);
    });
  });
  closeBlackBtns.forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
      const modalId = this.closest(".modal").id;
      closeModal(modalId);
    });
  });
  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
      const modalId = event.target.id;
      closeModal(modalId);
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const btnToast = document.querySelector('[data-qy-toggle="toastId"]');
  if (btnToast) {
    btnToast.addEventListener("click", function () {
      const toastContent = document.querySelector(".toast-content");
      if (toastContent) {
        toastContent.classList.add("toast-show");
        setTimeout(function () {
          toastContent.classList.remove("toast-show");
        }, 40000);
      }
    });
  }
  const toastContent = document.querySelector(".toast-content");
  if (toastContent) {
    const closeBtnToast = toastContent.querySelector(".toast-close");
    if (closeBtnToast) {
      closeBtnToast.addEventListener("click", function () {
        toastContent.classList.remove("toast-show");
      });
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const offcanvasToggleButtons = document.querySelectorAll(
    '[data-Qy-toggle^="offcanvas"]'
  );
  const offcanvasToggleButtonsR = document.querySelectorAll(
    '[data-Qy-toggle^="offcanvas"]'
  );
  const closeOffcanvasBtns = document.querySelectorAll(".offcanvas .close");
  const closeOffcanvasBtnsR = document.querySelectorAll(".offcanvas .close");
  function openOffcanvas(offcanvasId) {
    const offcanvas = document.getElementById(offcanvasId);
    const offcanvasContent = offcanvas.querySelector(".offcanvas-content");
    offcanvasContent.classList.remove("fadeOutOffcanvas");
    offcanvasContent.classList.add("fadeInOffcanvas");
    offcanvas.style.display = "block";
    setTimeout(function () {
      offcanvasContent.classList.add("fadeInOffcanvas");
    }, 50);
  }
  function closeOffcanvas(offcanvasId) {
    const offcanvas = document.getElementById(offcanvasId);
    const offcanvasContent = offcanvas.querySelector(".offcanvas-content");
    offcanvasContent.classList.remove("fadeInOffcanvas");
    offcanvasContent.classList.add("fadeOutOffcanvas");
    offcanvasContent.addEventListener(
      "animationend",
      function () {
        offcanvas.style.display = "none";
      },
      { once: !0 }
    );
  }
  closeOffcanvasBtns.forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
      const offcanvasId = this.closest(".offcanvas").id;
      closeOffcanvas(offcanvasId);
    });
  });
  offcanvasToggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const offcanvasId = this.getAttribute("data-Qy-toggle");
      openOffcanvas(offcanvasId);
    });
  });
  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("offcanvas")) {
      const offcanvasId = event.target.id;
      closeOffcanvas(offcanvasId);
    }
  });
  function openOffcanvasR(offcanvasId) {
    const offcanvas = document.getElementById(offcanvasId);
    const offcanvasContentR = offcanvas.querySelector(".offcanvas-content-r");
    offcanvasContentR.classList.remove("fadeOutOffcanvasR");
    offcanvasContentR.classList.add("fadeInOffcanvasR");
    offcanvas.style.display = "block";
    setTimeout(function () {
      offcanvasContentR.classList.add("fadeInOffcanvasR");
    }, 50);
  }
  function closeOffcanvasR(offcanvasId) {
    const offcanvas = document.getElementById(offcanvasId);
    const offcanvasContentR = offcanvas.querySelector(".offcanvas-content-r");
    offcanvasContentR.classList.remove("fadeInOffcanvasR");
    offcanvasContentR.classList.add("fadeOutOffcanvasR");
    offcanvasContentR.addEventListener(
      "animationend",
      function () {
        offcanvas.style.display = "none";
      },
      { once: !0 }
    );
  }
  closeOffcanvasBtnsR.forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
      const offcanvasId = this.closest(".offcanvas").id;
      closeOffcanvasR(offcanvasId);
    });
  });
  offcanvasToggleButtonsR.forEach(function (button) {
    button.addEventListener("click", function () {
      const offcanvasId = this.getAttribute("data-Qy-toggle");
      openOffcanvasR(offcanvasId);
    });
  });
  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("offcanvas")) {
      const offcanvasId = event.target.id;
      closeOffcanvasR(offcanvasId);
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggles = document.querySelectorAll(".navbar-toggle");
  const navbarContainers = document.querySelectorAll(".navbar-collapse");
  navbarToggles.forEach(function (navbarToggle, index) {
    navbarToggle.addEventListener("click", function () {
      navbarContainers[index].classList.toggle("active");
      navbarContainers[index].classList.remove("close");
    });
  });
  window.addEventListener("click", function (event) {
    const navbar = event.target.closest(".navbar");
    if (!navbar) {
      navbarContainers.forEach(function (navbarCollapse) {
        navbarCollapse.classList.remove("active");
        navbarCollapse.classList.add("close");
      });
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.getElementById("carousel-container");
  const carousel = document.getElementById("carouselId");
  const buttonLeft = document.getElementById("button-left");
  const buttonRight = document.getElementById("button-right");
  const carouselItems = document.querySelectorAll(".carousel_item");
  if (carouselContainer) {
    if (carousel && buttonLeft && buttonRight && carouselItems.length) {
      const containerStyles = carouselContainer.style;
      let carouselCounter = 0;
      let isInTransition = !1;
      const DIRECTION = { RIGHT: "RIGHT", LEFT: "LEFT" };
      const getTransformValue = () =>
        Number(
          containerStyles
            .getPropertyValue("--carousel-transform")
            .replace("px", "")
        );
      const reorderCarousel = () => {
        const transformValue = getTransformValue();
        containerStyles.setProperty("--transition", "none");
        if (carouselCounter === carouselItems.length - 1) {
          carousel.appendChild(carousel.firstElementChild);
          containerStyles.setProperty(
            "--carousel-transform",
            `${transformValue + carouselItems[carouselCounter].scrollWidth}px`
          );
          carouselCounter--;
        } else if (carouselCounter === 0) {
          carousel.prepend(carousel.lastElementChild);
          containerStyles.setProperty(
            "--carousel-transform",
            `${transformValue - carouselItems[carouselCounter].scrollWidth}px`
          );
          carouselCounter++;
        }
        isInTransition = !1;
      };
      const moveCarousel = (direction) => {
        if (isInTransition) return;
        const transformValue = getTransformValue();
        containerStyles.setProperty("--transition", "transform 1s");
        isInTransition = !0;
        if (direction === DIRECTION.LEFT) {
          containerStyles.setProperty(
            "--carousel-transform",
            `${transformValue + carouselItems[carouselCounter].scrollWidth}px`
          );
          carouselCounter--;
        } else if (direction === DIRECTION.RIGHT) {
          containerStyles.setProperty(
            "--carousel-transform",
            `${transformValue - carouselItems[carouselCounter].scrollWidth}px`
          );
          carouselCounter++;
        }
      };
      buttonRight.addEventListener("click", () =>
        moveCarousel(DIRECTION.RIGHT)
      );
      buttonLeft.addEventListener("click", () => moveCarousel(DIRECTION.LEFT));
      carousel.addEventListener("transitionend", reorderCarousel);
      if (carouselItems.length >= 3) {
        reorderCarousel();
      }
      const initCarouselAutoPlay = () => {
        const isAutoPlay = carouselContainer.classList.contains("auto-play");
        let autoplayInterval;
        if (isAutoPlay) {
          autoplayInterval = setInterval(() => {
            moveCarousel(DIRECTION.RIGHT);
          }, 3000);
          carouselContainer.addEventListener("mouseenter", () => {
            clearInterval(autoplayInterval);
          });
          carouselContainer.addEventListener("mouseleave", () => {
            autoplayInterval = setInterval(() => {
              moveCarousel(DIRECTION.RIGHT);
            }, 3000);
          });
        }
      };
      initCarouselAutoPlay();
    }
  }
});
