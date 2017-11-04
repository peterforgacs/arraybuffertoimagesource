# arraybuffertoimagesource [![Build Status](https://travis-ci.org/peterforgacs/arraybuffertoimagesource.svg?branch=master)](https://travis-ci.org/peterforgacs/arraybuffertoimagesource)

> Turn an array buffer to a blob source.


## Install

```
$ npm install arraybuffertoimagesource
```


## Usage

```js
const arraybuffertoimagesource = require('arraybuffertoimagesource');

let myArrayBuffer = getArrayBuffer();

let source = arraybuffertoimagesource(array, 'image/png');

document.getElementById('myImage').src = source;
```


## API

### arraybuffertoimagesource(input, [type])

#### input

Type: `arrayBuffer`


#### options

##### type

Type: `string`<br>
Default: `image/jpg`

## License

MIT © [Peter Forgacs](http://peterforgacs.github.io)
