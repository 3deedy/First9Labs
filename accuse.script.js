var friends = ['Coco', 'Jamie', 'Edee', 'Jackie', 'Shayla'];
var locations = ['powder room', 'bedroom', 'elevator', 'parking lot', 'ballroom', 'street', 'hallway', 'break room', 'stairwell', 'back office'];
var weapons = ['ice pick', 'meatball', 'poison', 'hammer', 'stapler', 'rake', 'lawn mower', 'stiletto', 'rock', 'knife', 'shoelace', 'fancy pen', 'machine gun', 'snakes', 'bucket of starving rats'];

/*
* Using Bind
*/

// for (var i = 0; i < 100; i++) {
//     var h3 = document.createElement('h3');
//     h3.innerText = 'Accusation ' + (i + 1);
//     h3.addEventListener('click', function() {
//         var friend = friends[this % friends.length];
//         var location = locations[this % locations.length];
//         var weapon = weapons[this % weapons.length];
//         alert('Accusation ' + (this + 1) + ': I accuse ' + friend + ', with the ' + weapon + ' in the ' + location + '.');
//     }.bind(i));
//     document.body.appendChild(h3);
// }

/*
* Using Closure
*/

// function createHeading(num) {
//     var h3 = document.createElement('h3');
//     h3.innerText = 'Accusation ' + (num + 1);
//     h3.addEventListener('click', function() {
//         var friend = friends[num % friends.length];
//         var location = locations[num % locations.length];
//         var weapon = weapons[num % weapons.length];
//         alert('Accusation ' + (num + 1) + ': I accuse ' + friend + ', with the ' + weapon + ' in the ' + location + '.');
//     });
//     document.body.appendChild(h3);
// }

// for (var i = 0; i < 100; i++) {
//     createHeading(i);
// }

/*
* Using a closure
*/
function createAlerter(num) {
    return function() {
        var friend = friends[num % friends.length];
        var location = locations[num % locations.length];
        var weapon = weapons[num % weapons.length];
        alert('Accusation ' + (num + 1) + ': I accuse ' + friend + ', with the ' + weapon + ' in the ' + location + '.');
    }
}

for (var i = 0; i < 100; i++) {
    var h3 = document.createElement('h3');
    h3.innerText = 'Accusation ' + (i + 1);
    var alerter = createAlerter(i);
    h3.addEventListener('click', alerter);
    document.body.appendChild(h3);
}
