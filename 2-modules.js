const names = require('./3-name');
const utils = require('./4-utils');
const data = require('./5-alternative_exporting');

// console.log(data);

require('./6-mind_grenade')

const {john, peter} = names;

const {sayHi} = utils;

sayHi(john)
sayHi(peter)


