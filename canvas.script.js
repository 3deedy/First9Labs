//Input boxes
var inputSquareSide = document.getElementById('input-square-side');
var inputRectangleWidth = document.getElementById('input-rect-width');
var inputRectangleHeight = document.getElementById('input-rect-height');
var inputTriangleHeight = document.getElementById('input-tri-height');
var inputCircleRadius = document.getElementById('input-circ-radius');

//span labels
var shapeNameLabel = document.getElementById('shape-name');
var shapeWidthLabel = document.getElementById('shape-width');
var shapeHeightLabel = document.getElementById('shape-height');
var shapeRadiusLabel = document.getElementById('shape-radius');
var shapeAreaLabel = document.getElementById('shape-area');
var shapePerimeterLabel = document.getElementById('shape-perimeter');

var canvas = document.getElementById('canvas');

document.getElementById('circle-btn').addEventListener('click', createCircle);
document.getElementById('triangle-btn').addEventListener('click', createTriangle);
document.getElementById('rectangle-btn').addEventListener('click', createRectangle);

function createCircle() {
    var inputRadius = inputCircleRadius.value;
    new Circle(inputRadius);
}

function createTriangle() {
  new Triangle (inputTriangleHeight.value)
}

function createRectangle() {
  new Triangle (inputRectangleHeight.value)
}

function Shape(width, height) {
    this.width = width;
    this.height = height;
}
Shape.prototype.draw = function() {
    this.div = document.createElement('div');
    this.div.className = 'shape ' + this.cssClass;

    var x = Math.floor(Math.random() * (600 - this.width));
    var y = Math.floor(Math.random() * (600 - this.height));

    this.div.style.top = y + 'px';
    this.div.style.left = x + 'px';
    this.div.style.width = this.width + 'px';
    this.div.style.height = this.height + 'px';

    this.div.addEventListener('click', this.describe.bind(this));
    this.div.addEventListener('dblclick', function() {
        this.div.remove();
    }.bind(this));

    canvas.appendChild(this.div);
}
Shape.prototype.describe = function() {
    shapeNameLabel.innerText = this.constructor.name;
    shapeWidthLabel.innerText = this.width;
    shapeHeightLabel.innerText = this.height;
    shapeRadiusLabel.innerText = this.radius;
    shapeAreaLabel.innerText = this.area();
    shapePerimeterLabel.innerText = this.perimeter();
}

function Circle(radius) {
    Shape.call(this, 2 * radius, 2 * radius);
    this.radius = radius;
    this.cssClass = 'circle';
    this.draw();
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
    return Math.PI * Math.pow(this.radius, 2);
}

Circle.prototype.perimeter = function() {
    return 2 * Math.PI * this.radius;
}

function Triangle (height) {
    Shape.call(this, height, height);
    this.cssClass = 'triangle';
    this.draw();
    this.div.style.width = 0;
    this.div.style.height = 0;
    this.div.style.borderRightWidth = height + 'px';
    this.div.style.borderBottomHeight = height + 'px';

}
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.area = function() {
    return 0.5 * this.height*this.height;
}

Triangle.prototype.perimeter = function() {
    return 2 * this.height + Math.sqrt(2 * math.pow(this.height);
}

function Rectangle (width, height) {
    Shape.call(this, width, height);
    this.cssClass = 'rectangle';
    this.draw();
    this.div.style.width = 0;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
    return 0.5 * this.height*this.height;
}

Rectangle.prototype.perimeter = function() {
    return 2 * this.height + Math.sqrt(2 * math.pow(this.height);
}

function square(side) {
  Rectangle.call(this, side, side);
  this.cssClass = 'square';
  this.div.classList.remove('Rectangle')
  this.div.classList.add(this.cssClass);
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
    return 0.5 * this.height*this.height;
}

Rectangle.prototype.perimeter = function() {
    return 2 * this.height + Math.sqrt(2 * math.pow(this.height);
}
