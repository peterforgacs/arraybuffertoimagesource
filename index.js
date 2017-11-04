'use strict';
module.exports = (input, opts) => {
	if (!input) return;
	let arrayBufferView = new Uint8Array( input );
	let blob = new Blob( [ arrayBufferView ], { type: opts || "image/jpg" } );
	let urlCreator = window.URL || window.webkitURL;
	return urlCreator.createObjectURL(blob);
};
