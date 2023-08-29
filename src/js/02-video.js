import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_OF_TIME_STORAGE = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(KEY_OF_TIME_STORAGE, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(
  JSON.parse(localStorage.getItem(KEY_OF_TIME_STORAGE)) || 0
);
