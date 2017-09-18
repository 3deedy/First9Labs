var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
var sentenceIndex = 0;
var letterIndex = 0;
var errorCount = 0;
var startTime;

var currentSentence = sentences[sentenceIndex];
var currentLetter = currentSentence.charAt(0);


function toggleKeyboards() {
    $('#keyboard-upper-container').toggle();
    $('#keyboard-lower-container').toggle();
}

$('#keyboard-upper-container').hide();
$('#sentence').text(currentSentence);
$('#target-letter').text(currentLetter);

$(document).keydown(function(event) {
    if (event.which === 16) {
        // $('#keyboard-upper-container').show();
        // $('#keyboard-lower-container').hide();
        toggleKeyboards();
    }
});

$(document).keyup(function(event) {
    if (event.which === 16) {
        // $('#keyboard-upper-container').hide();
        // $('#keyboard-lower-container').show();
        toggleKeyboards();
    }
    $('.highlighted').removeClass('highlighted');
});

$(document).keypress(function(event) {
    event.preventDefault();

    if (!startTime) {
        startTime = event.timeStamp;
    }
    $('#' + event.which).addClass('highlighted');

    if (event.which === currentLetter.charCodeAt(0)) {
        $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
    } else {
        $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
        errorCount++;
    }

    letterIndex++;

    if (letterIndex === currentSentence.length) { // If we are at the end of the current sentence
        // move on to the next sentence
        sentenceIndex++;

        if (sentenceIndex === sentences.length) { // We are out of sentences; done
            // end of the game, compute wpm, show alert, etc.
            var endTime = event.timeStamp;
            var elapsedMinutes = (endTime - startTime) / (60 * 1000);
            var wpm = 54 / elapsedMinutes - 2 * errorCount;
            $('#feedback').text('You scored ' + wpm + ' words per minute.');
            setTimeout(function() {
                if (confirm('Do you want to play again?')) {
                    sentenceIndex = 0;
                    letterIndex = 0;
                    currentSentence = sentences[0];
                    currentLetter = currentSentence.charAt(0);
                    $('#sentence').text(currentSentence);
                    $('#target-letter').text(currentLetter);
                    $('#feedback').empty();
                    $('#yellow-block').css('left', '15px');
                    startTime = undefined;
                }
            }, 2000);
        } else {
            // there is at least one more sentence
            // move on to the next sentence
            currentSentence = sentences[sentenceIndex];
            $('#sentence').text(currentSentence);
            // reset the letter back to the first position
            letterIndex = 0;
            currentLetter = currentSentence.charAt(letterIndex);
            $('#target-letter').text(currentLetter);
            // TODO: clear out the feedback div (checks and X's)
            $('#feedback').empty();
            $('#yellow-block').css('left', '15px');
        }
    } else {
        // not at the end of the sentence, move onto the next letter
        currentLetter = currentSentence.charAt(letterIndex);
        $('#target-letter').text(currentLetter);
        $('#yellow-block').css('left', '+=17.5px');
    }
});
