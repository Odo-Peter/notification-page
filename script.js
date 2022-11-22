const notificationCounter = document.querySelector('.n-number');
const allRead = document.querySelector('.n-read');
const profiles = document.querySelectorAll('.profile');
const msg = document.querySelector('.msg');
const notificationTag = document.querySelectorAll('.unread');

let counter = profiles.length;

//notification counter on load
notificationCounter.innerHTML = counter;

//checking for 'mark all as read'
function removeNotification() {
  notificationTag.forEach((tag) => {
    tag.style.display = 'none';
  });
  profiles.forEach((profile) => {
    profile.style.backgroundColor = 'var(--card-bg)';
    profile.style.boxShadow = 'none';
    profile.style.cursor = 'default';
  });
  notificationCounter.innerHTML = 0;
}

//checking for clicks for each profile and removing the notifications for each

profiles.forEach((profile, pIndex) => {
  profile.addEventListener(
    'click',
    (e) => {
      if (profile == e.target && (counter != 0 || counter == profiles.length)) {
        profile.style.backgroundColor = 'var(--card-bg)';
        profile.style.boxShadow = 'none';
        profile.style.cursor = 'default';
        counter--;
        notificationCounter.innerHTML = counter;

        notificationTag.forEach((tag, nIndex) => {
          if (nIndex === pIndex) {
            tag.style.display = 'none';
          }
        });
      } else {
        profile.style.backgroundColor = 'var(--card-bg)';
        profile.style.boxShadow = 'none';
      }
    },
    { once: true }
  );
});

allRead.addEventListener('click', removeNotification);
