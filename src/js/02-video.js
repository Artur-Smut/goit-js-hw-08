import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);



playVideo();

player.on('timeupdate', throttle(time, 1000));

function time(data) {
    const seconds = Math.round(data.seconds);
    localStorage.setItem('videoplayer-current time', seconds);
}

function playVideo() {
    const onSecond = localStorage.getItem('videoplayer-current time');

    if (onSecond) {
    player.setCurrentTime(onSecond);
}
}

