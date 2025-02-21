const svgstore = require('svgstore');
const fs = require('fs');

const sprites = svgstore()
    .add('steering-wheel', fs.readFileSync('./src/assets/svgs/steering-wheel.svg'))
    .add('car-front', fs.readFileSync('./src/assets/svgs/car-front.svg'));

fs.writeFileSync('./src/assets/sprites/hero-sprites.svg', sprites);