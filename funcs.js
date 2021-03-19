const shineText = document.getElementById('shineText');
const firstArea = document.getElementById('firstArea');
const profileCard = document.getElementById('profileCard');
const profileCardAvatar = document.getElementById('profileCardAvatar');
const goDownLink = document.getElementById('goDownLink');
const footerText = document.getElementById('footerText');

let scrollYPos = 0;
let ticking = false;

document.addEventListener('scroll', () => {
  scrollYPos = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      getDark(window.scrollY);
      changeTextContainerZindex(window.scrollY);
      showProfileCardAvatar();
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

const showProfileCardAvatar = () =>  {
  if (isInViewport(profileCardAvatar) && profileCard.classList.contains('profile-card-container--visible')) {
    return;
  }
  if (isInViewport(profileCardAvatar)) {
    profileCard.classList.add('profile-card-container--visible');
    return;
  }
  profileCard.classList.remove('profile-card-container--visible');
}

const getDark = (scrollPos) => {
  scrollPos > 90 ? firstArea.classList.add('area-dark') : firstArea.classList.remove('area-dark');
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
  showProfileCardAvatar();
  setFooterText();
};

(()=> {
  initialSetup();
})();