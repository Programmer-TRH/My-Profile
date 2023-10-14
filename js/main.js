/*Show Sidebar*/
const navMenu = document.getElementById('sidebar');
const navToggle = document.getElementById('nav_toggle');
const navClose = document.getElementById('nav_close');


if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add('show_sidebar')
  })
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove('show_sidebar')
  })
}

/* Work section */
const tabs = document.querySelectorAll('[data-target]'),
  tabContent = document.querySelectorAll('[data-content]')

function activateTab(tab, content) {
  tabContent.forEach(tabContents => {
    tabContents.classList.remove('skills_active')
  })
  content.classList.add('skills_active')

  tabs.forEach(otherTab => {
    otherTab.classList.remove('skills_active')
  })
  tab.classList.add('skills_active')
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target)
    activateTab(tab, target);
  })
})

/* --- Mixitup filter Portfolio --*/
let mixerPortfolio = mixitup('.work_container', {
  selectors: {
    target: '.work_card'
  },
  animation: {
    duration: 300
  }
});

/* link Active work */
const linkWork = document.querySelectorAll('.work_item')

function activeWork() {
  linkWork.forEach(l => l.classList.remove('active_work'))
  this.classList.add('active_work')
}

linkWork.forEach(l => l.addEventListener("click", activeWork))

/*Work Popup*/
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work_button")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup_close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
  document.querySelector(".portfolio_popup_subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
  document.querySelector(".portfolio_popup_body").innerHTML = portfolioItem.querySelector(".portfolio_item_details").innerHTML;
}
/*Services Modal*/
const modalViews = document.querySelectorAll('.services_modal');
const modalBtns = document.querySelectorAll('.services_button');
const modalCloses = document.querySelectorAll('.services_modal_close');

function openModal(modalClick) {
  modalViews[modalClick].classList.add('active_modal');
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    openModal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active_modal');
    });
  });
});

/* Swiper */

let swiper = new Swiper(".testimonials_container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*Social section Active link*/
const section = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;
  section.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active_link")
    }
    else {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active_link")
    }
  })
}

