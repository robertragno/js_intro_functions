var myAge = function(birth) {
    var time = new Date();
    var year = time.getFullYear();
    if (year - birth > 0) {
    	return "You are  either " + (year - birth) + " or " + (year - birth - 1) + " years old.";
    }
    else {
    	return "You haven't been conceived yet.";
    }
};

console.log(myAge(1986));

console.log(myAge(1990));

console.log(myAge(2016));