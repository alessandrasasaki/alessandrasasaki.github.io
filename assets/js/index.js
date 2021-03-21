const shineText = document.getElementById('shineText');
const firstSection = document.getElementById('firstSection');
const profileCard = document.getElementById('profileCard');
const profileCardName = document.getElementById('profileCardName');
const goDownLink = document.getElementById('goDownLink');
const footerText = document.getElementById('footerText');

let scrollYPos = 0;
let ticking = false;

document.body.addEventListener('scroll', () => {
  scrollYPos = document.body.scrollTop;

  console.log();

  if (!ticking) {
    window.requestAnimationFrame(() => {
      getDark(scrollYPos);
      changeTextContainerZindex(scrollYPos);
      showProfileCard();
      ticking = false;
    });
    ticking = true;
  }
});

const isInViewport = (elem) => {
	const distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

const showProfileCard = () =>  {
  if (isInViewport(profileCardName) && profileCard.classList.contains('profile-card-container--visible')) {
    return;
  }
  if (isInViewport(profileCardName)) {
    profileCard.classList.add('profile-card-container--visible');
    return;
  }
  profileCard.classList.remove('profile-card-container--visible');
}

const getDark = (scrollPos) => {
    scrollPos > 90 ? firstSection.classList.add('section-dark') : firstSection.classList.remove('section-dark');
}

const changeTextContainerZindex = (scrollPos) => {
  scrollPos > 90 ? goDownLink.classList.remove('go-down-link--upper') : goDownLink.classList.add('go-down-link--upper');
}

const setFooterText = () => {
  const today = new Date();
  const year = today.getFullYear();
  footerText.innerHTML = `Feito com ♡ por Alessandra Sasaki • ${year} \n <br /> HTML • CSS • Vanilla JS`;
}

const initialSetup = () => {
  getDark(window.scrollY);
  changeTextContainerZindex(window.scrollY);
  showProfileCard();
  setFooterText();
};

(()=> {
  initialSetup();
})();