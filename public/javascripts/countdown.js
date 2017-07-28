var today = new Date();
var yyyy = today.getFullYear();

xmas = new Date("December 25, " + yyyy );
msPerDay = 24 * 60 * 60 * 1000 ;
timeLeft = (xmas.getTime() - today.getTime());

e_daysLeft = timeLeft / msPerDay;
daysLeft = Math.floor(e_daysLeft);
e_hrsLeft = (e_daysLeft - daysLeft)*24;
hrsLeft = Math.floor(e_hrsLeft);
minsLeft = Math.floor((e_hrsLeft - hrsLeft)*60);

module.exports = {
	date: function() {
		return today;
	},
	counter: function() {
		if (daysLeft > 1) {
			return daysLeft + " days";	
		} else {
			return hrsLeft + " hours " + minsLeft + " minutes";
		}
	}
}