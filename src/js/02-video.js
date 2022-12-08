import Vimeo from '@vimeo/player';

const vimeoPlayerEl = document.querySelector('#vimeo-player');
const vimeoPlayer = new Vimeo(vimeoPlayerEl);

const throttler = require('lodash.throttle');

vimeoPlayer.on('timeupdate', throttler(onPlay, 1000));

function onPlay(data) {
   
    localStorage.setItem('videoplayer-current-time', Math.round(data.seconds));
}

const playerCurrentTime = localStorage.getItem('videoplayer-current-time');

if (playerCurrentTime) {
    vimeoPlayer.setCurrentTime(playerCurrentTime);
}
