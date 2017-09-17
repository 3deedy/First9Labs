function displayHeading(name, title){
    console.log("Name: " + name.toUpperCase());
    console.log("Career: " + title);
}
displayHeading('DeDe Richardson', "Junior Developer");

console.log("profile:".toUpperCase());
console.log("I'm a super secret spy who enjoys kicking butt in my spare time.");



function displayInterests(interest1, interest2, interest3, interest4){
    console.log("My Interests:".toUpperCase());
    console.log("* " + interest1);
    console.log("* " + interest2);
    console.log("* " + interest3);
    console.log("* " + interest4);

};
displayInterests("Learning Code", "Big Brother (TV show)", "Hiking", "Baking");

console.log("My Previous Experience:".toUpperCase());

function displayPosition(company, title, description){

    console.log(title + " at " + company + ": " + description);

};
displayPosition("CIA", "Clerk", "Top secret missions doing top secret stuff");
displayPosition("FBI", "Trainee", "Analyzing super classified intelligence");
displayPosition("Terces, Inc.", "Administrator", "Planning and organizing files for distribution");

console.log("My Skills:".toUpperCase());

function displaySkill(skill, cool){

    if(cool === true){
        console.log("* BAM: " + skill);
    } else {
        console.log("* " + skill);
    }
};
displaySkill("Sky Diving", true);
displaySkill("JavaScript", false);
displaySkill("jQuery", false);
displaySkill("Spy Badassery", true);
