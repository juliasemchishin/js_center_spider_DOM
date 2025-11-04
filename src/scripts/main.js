'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallRect = wall.getBoundingClientRect();
const spiderRect = spider.getBoundingClientRect();

wall.style.position = 'relative';
spider.style.position = 'absolute';

spider.style.left = (wallRect.width - spiderRect.width) / 2 - 10 + 'px';
spider.style.top = (wallRect.height - spiderRect.height) / 2 - 10 + 'px';
