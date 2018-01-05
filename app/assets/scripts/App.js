import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/revealOnScroll';
import $ from 'jquery';
import StickyNav from './modules/stickyNav';
var mobileMenu = new MobileMenu();
new RevealOnScroll($('scrollReveal'),'80%');
var stickynav = new StickyNav();