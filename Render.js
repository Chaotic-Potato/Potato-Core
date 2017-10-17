document.write("<canvas id='screen' style='position:absolute;top:0;left:0;'></cavnas>")

_.Render = {
	ctx: _.get("screen").getContext("2d"),
	loop: false,
	width: function() {
		return window.innerWidth
	},
	height: function() {
		return window.innerHeight
	},
	xmid: function() {
		return window.innerWidth / 2
	},
	ymid: function() {
		return window.innerHeight / 2
	},
	clear: function() {
		_.Render.ctx.clearRect(0, 0, _.Render.width(), _.Render.height())
	},
	frame: function(){},
	frameLoop: function() {
		_.Render.clear()
		_.Render.frame()
		if (_.Render.loop) {
			window.requestAnimationFrame(_.Render.frameLoop)
		}
	},
	resize: function() {
		_.get("screen").width = _.Render.width()
		_.get("screen").height = _.Render.height()
	},
	drawPoint: function(x, y, c) {
		_.Render.ctx.fillStyle = c
		_.Render.ctx.fillRect(x, y, 1, 1)
	},
	drawRect: function(x, y, w, h, c) {
		_.Render.ctx.fillStyle = c
		_.Render.ctx.fillRect(x, y, w, h)
	},
	drawLine: function(x, y, dx, dy, c) {
		_.Render.ctx.beginPath()
		_.Render.ctx.strokeStyle = c
		_.Render.ctx.moveTo(x, y)
		_.Render.ctx.lineTo(x + dx, y + dy)
		_.Render.ctx.stroke()
	},
	drawText: function(s, x, y, f, c, a="center") {
		_.Render.ctx.fillStyle = c
		_.Render.ctx.font = f
		_.Render.ctx.textAlign = a
		_.Render.ctx.fillText(s, x, y)

	},
	drawImg: function(img, x, y, w, h, sx, sy, sw, sh) {
		if (sx) {
			_.Render.ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h)
		}
		else {
			_.Render.ctx.drawImage(img, x, y, w, h)
		}
	},
}

_.frameStart = function() {
	_.Render.loop = true
	_.Render.frameLoop()
}

_.frameStop = function() {
	_.Render.loop = false
}

_.$R = _.Render
window.onresize = _.$R.resize
_.$R.resize()
