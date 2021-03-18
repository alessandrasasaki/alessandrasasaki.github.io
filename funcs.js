const shineText = document.getElementById('shineText');
const firstArea = document.getElementById('firstArea');
const profileCard = document.getElementById('profileCard');

let scrollYPos = 0;
let ticking = false;

document.addEventListener('scroll', () => {
  scrollYPos = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      getDark(window.scrollY);
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
  if (isInViewport(profileCard) && profileCard.classList.contains('profile-card-container--visible')) {
    return;
  }
  if (isInViewport(profileCard)) {
    profileCard.classList.add('profile-card-container--visible');
    return;
  }
  profileCard.classList.remove('profile-card-container--visible');
}

const getDark = (scrollPos) => {
  scrollPos > 90 ? firstArea.classList.add('area-dark') : firstArea.classList.remove('area-dark');
  scrollPos > 100 ? shineText.classList.add('text--shining') : shineText.classList.remove('text--shining');
}

const initialSetup = () => {
  getDark(window.scrollY);
  showProfileCard();
};

(()=> {
  initialSetup();
})();