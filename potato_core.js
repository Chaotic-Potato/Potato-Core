var _ = {
	loc: "https://raw.githubusercontent.com/Chaotic-Potato/Potato-Core/master/",
	get: function(d) {
		return document.getElementById(d)
	}
}

_.setLoc = function(loc) {
	_.loc = loc
}

_.load = function(mod) { 
	document.write("<script src='" + _.loc + mod + ".js'></script>")
}
