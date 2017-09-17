var friends = ['Nikki', 'Jason', 'Sammi', 'Patty', 'Mike'];
var singFriend = ['NIKKITA:', 'JASON:', 'SAMANTHA:', 'PATRICIA', 'MICHAEL'];

function sing() {
    for (var i = 0; i < friends.length; i++) {
        var myFriend = friends[i];

        var div = document.createElement('div');
        div.className = 'friend';

        var h3 = document.createElement('h3');
        // h3.innerText = myFriend;
        var headingText = document.createTextNode(singFriend[i]);
        //var headingText = document.createTextNode(myFriend); ***slightly different formatting***
        h3.appendChild(headingText);
        div.appendChild(h3);

        for (var j = 99; j > 0; j--) {
            var p = document.createElement('p');
            if (j > 2) {
                p.innerText = j + ' lines of code in the file, ' + j + ' lines of code, ' + myFriend + ' strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file.';
            } else if (j === 2) {
                p.innerText = j + ' lines of code in the file, ' + j + ' lines of code, ' + myFriend + ' strikes one out, clears it all out, ' + (j-1) + ' line of code in the file.';
            } else {
                p.innerText = j + ' line of code in the file, ' + j + ' line of code, ' + myFriend + ' strikes one out, clears it all out, no more lines of code in the file.';
            }
            div.appendChild(p);
        }
        document.body.appendChild(div);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('sing-button');
    btn.addEventListener('click', sing);
});
