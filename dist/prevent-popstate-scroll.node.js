'use strict';
Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.allow = allow;
exports.prevent = prevent;
exports.preventOnce = preventOnce;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getScroll = require('get-scroll');

var _onOff = require('on-off');

var _oneEvent = require('one-event');

var _oneEvent2 = _interopRequireDefault(_oneEvent);

var isPrevented = false;

exports.isPrevented = isPrevented;
/**
 * Scroll functions
 */
(function a() {
	console.log((0, _getScroll.getScrollTop)());
	requestAnimationFrame(a);
})();
var lastScrollPosition = undefined;
function resetScroll() {
	console.log('scrolled', (0, _getScroll.getScrollTop)());
	window.scrollTo.apply(window, lastScrollPosition);
}
function waitForScroll() {
	console.log('will scroll', (0, _getScroll.getScrollTop)());
	lastScrollPosition = [(0, _getScroll.getScrollLeft)(), (0, _getScroll.getScrollTop)()];
	(0, _oneEvent2['default'])(window, 'scroll', resetScroll);
}

/**
 * Toggle functions
 */
function event(action) {
	// run "remove" only if it's prevented
	// otherwise run "attach" or "once" only if it's not already prevented
	if (action === _onOff.off === isPrevented) {
		action(window, 'popstate', waitForScroll);
	}
}

function allow() {
	event(_onOff.off);
	exports.isPrevented = isPrevented = false;
}

function prevent() {
	event(_onOff.on);
	exports.isPrevented = isPrevented = true;
}

function preventOnce() {
	event(_oneEvent2['default']);
}

exports['default'] = function (toggle) {
	return (toggle ? prevent : allow)();
};

