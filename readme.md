# prevent-popstate-scroll [![module size](https://badge-size.herokuapp.com/bfred-it/prevent-popstate-scroll/master/dist/prevent-popstate-scroll.node.min.js) ![module gzipped size](https://badge-size.herokuapp.com/bfred-it/prevent-popstate-scroll/master/dist/prevent-popstate-scroll.node.min.js?compression=gzip)](https://github.com/bfred-it/prevent-popstate-scroll/blob/master/dist/prevent-popstate-scroll.min.js)

> Prevent the scroll restoration caused by the `popstate` event or back/forward buttons. [Demo](https://rawgit.com/bfred-it/prevent-popstate-scroll/master/demo.html)

## Usage

```js
// Prevent the scroll, always
preventPopstateScroll.prevent();

// Stop preventing the scroll
preventPopstateScroll.allow();

// Prevent the scroll only once, for example before manually calling history.go(-1)
preventPopstateScroll.preventOnce();
```

## With browserify

```sh
npm install --save prevent-popstate-scroll
```

```js
var preventPopstateScroll = require('prevent-popstate-scroll');
```

### Alternative usage in ES6

```js
import {prevent, allow, preventOnce} from 'prevent-popstate-scroll';

prevent();
allow();
preventOnce();
```

or:

```js
import preventPopstateScroll from 'prevent-popstate-scroll';

preventPopstateScroll(true);
preventPopstateScroll(false);
```

## API

### `preventPopstateScroll.prevent()` _or `prevent()`_

Prevents the scroll restoration that normally happens after the `popstate` History event.

### `preventPopstateScroll.allow()` _or `allow()`_

Restores the normal browser behavior.

### `preventPopstateScroll.preventOnce()` _or `preventOnce()`_

Prevents the scroll restoration only once. Useful before manipulating the history once (e.g. `history.go(-1)`), without changing the whole site's behavior.
 
## Files

Here's an explanation of the files included in this repo

* `index.js`: source file, in ES6
* `dist/prevent-popstate-scroll.js`: browser-ready file with AMD or a global variable called `getIntrinsicScale`
* `dist/prevent-popstate-scroll.min.js`: same as above, minified
* `dist/prevent-popstate-scroll.node.js`: used by node/browserify with `require('prevent-popstate-scroll')`
* `dist/prevent-popstate-scroll.node.min.js`: same as above, but minified, for byte counting only

## Dependencies

* [`on-off`](https://www.npmjs.com/package/on-off) <img alt="dependency gzipped size" src="https://badge-size.herokuapp.com/npm-dom/dom-event/master/index.js?compression=gzip&amp;label=size" height="12">
* [`one-event`](https://www.npmjs.com/package/one-event) <img alt="dependency gzipped size" src="https://badge-size.herokuapp.com/npm-dom/dom-event/master/index.js?compression=gzip&amp;label=size" height="12">
* [`get-scroll`](https://www.npmjs.com/package/get-scroll) <img alt="dependency gzipped size" src="https://badge-size.herokuapp.com/npm-dom/dom-event/master/index.js?compression=gzip&amp;label=size" width="12">


## Used on

* http://away.gorving.com/ — to avoid scroll jumping when closing history-enabled lightboxes (i.e. closable via back button)

## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)
