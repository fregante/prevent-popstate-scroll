import {getScrollTop, getScrollLeft} from 'get-scroll';
import {on as attach, off as remove} from 'on-off';
import once from 'one-event';

export let isPrevented = false;

/**
 * Scroll functions
 */
let lastScrollPosition;
function resetScroll() {
	window.scrollTo.apply(window, lastScrollPosition);
}
function waitForScroll() {
	lastScrollPosition = [getScrollLeft(), getScrollTop()];
	once(window, 'scroll', resetScroll);
}

/**
 * Toggle functions
 */
function event(action) {
	// run "remove" only if it's prevented
	// otherwise run "attach" or "once" only if it's not already prevented
	if (action === remove === isPrevented) {
		action(window, 'popstate', waitForScroll);
	}
}
export function allow() {
	event(remove);
	isPrevented = false;
}
export function prevent() {
	event(attach);
	isPrevented = true;
}
export function preventOnce() {
	event(once);
}

export default toggle => {
	(toggle ? prevent : allow)();
};
