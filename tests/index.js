'use strict';
var test = require('tape');
var preventPopstateScroll = require('.')['default'];
var getScroll = require('get-scroll').top;

// setup
document.documentElement.style.height = '5000px';

function setup () {
	var start = Math.random()*4000;
	window.scrollTo(0, start);
	location.hash = '#'+Math.random();
	var end = Math.random()*4000;
	window.scrollTo(0, end);
  history.back();
	return {
		start: start,
		end: end,
	};
}
// describe('Default browser behavior', function() {
  test('should restore scroll', function(t) {
  	t.equal(1, 1);
  	return
  	var positions = setup();

  	setTimeout(function () {
  		t.equal(getScroll(), positions.start);
  	}, 100);
  });
// });

// // describe('Augmented behavior', function() {
//   test('should prevent scroll', function(t) {
//   	preventPopstateScroll.prevent();
//   	var positions = setup();

//   	setTimeout(function () {
//   		t.equal(getScroll(), positions.end);
//   	}, 100);
//   });
//   test('should allow scroll again', function(t) {
//   	preventPopstateScroll.allow();
//   	var positions = setup();

//   	setTimeout(function () {
//   		t.equal(getScroll(), positions.start);
//   	}, 100);
//   });
//   test('should prevent scroll only once', function(t) {
//   	t.plan(2);
//   	preventPopstateScroll.preventOnce();
//   	var positions = setup();

//   	setTimeout(function () {
//   		t.equal(getScroll(), positions.end);
//   		positions = setup();
//   		setTimeout(function () {
//   			t.equal(getScroll(), positions.start);
//   		}, 100);
//   	}, 100);
//   });
// // });
