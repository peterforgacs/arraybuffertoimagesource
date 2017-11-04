'use strict';
module.exports = (input, opts) => {
	if (!arrayBuffer) return;
	
	try{
	  let arrayBufferView = new Uint8Array( arrayBuffer );
	  let blob = new Blob( [ arrayBufferView ], { type: type || "image/jpg" } );
	  let urlCreator = window.URL || window.webkitURL;
	  return urlCreator.createObjectURL(blob);
	}
	catch(err){
	  console.error(err);
	}
};
