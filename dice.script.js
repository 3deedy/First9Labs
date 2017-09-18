var diceArray = [];
document.getElementById('generate-button').addEventListener('click', function() {
    var d = new Die();
    diceArray.push(d);
    // diceArray.push(new Die());
});

var rollBtn = document.getElementById('roll-button');
rollBtn.addEventListener('click', function() {
    for (var i = 0; i < diceArray.length; i++) {
        diceArray[i].roll();
    }
});

document.getElementById('sum-button').addEventListener('click', function() {
    var sum = 0;
    for (var i = 0; i < diceArray.length; i++) {
        sum = sum + diceArray[i].value;
        // sum += diceArray[i].value;
    }
    alert('The sum of the dice is ' + sum);
});

function Die() {
    this.div = document.createElement('div');
    this.div.className = 'die';
    this.div.addEventListener('click', this.roll.bind(this));
    // this.div.addEventListener('click', function() {
    //     this.roll();
    // }.bind(this));
    this.div.addEventListener('dblclick', this.removeDie.bind(this));
    this.roll();
    document.body.appendChild(this.div);
}
Die.prototype.roll = function() {
    this.value = Math.ceil(Math.random() * 6);
    this.div.innerHTML = this.value;
}
Die.prototype.removeDie = function() {
    this.div.remove();

    var index = diceArray.indexOf(this);
    diceArray.splice(index, 1);
}
