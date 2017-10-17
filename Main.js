_.tickList = []

_.start = function(tickRate = 100) {
	if (!_.loop) {
		_.loop = []
	}
	_.loop.push(setInterval(_.tick, 1000 / tickRate))	
}

_.halt = function() {
	_.loop.forEach(function(e){clearInterval(e)})
	_.loop = []
}

_.addTick = function(f) {
	_.tickList.push(f)
}

_.clearTick = function() {
	_.tickList = []
}

_.tick = function() {
	_.tickList.forEach(function(e){e()})
}
