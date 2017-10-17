_.intrp = function(a, b, f){return a + (6 * Math.pow(f, 5) - 15 * Math.pow(f, 4) + 10 * Math.pow(f, 3)) * (b - a)} 

_.Perlin = function(seed, w, h, scale) {
	this.scale = scale
	this.grad = [[]]
	this.rng = new _.Random(seed || new Date().getTime())
	for (let i = 0; i <= w / this.scale; i++) {
		this.grad[i] = []
		for (let j = 0; j <= h / this.scale; j++) {
			this.grad[i][j] = this.rng.get() * 2 * Math.PI
		}
	}
}

_.Perlin.prototype = {
	get: function(x, y) {
		x = (x + 0.5) / this.scale
		y = (y + 0.5) / this.scale
		let xs = [Math.floor(x), Math.ceil(x)]
		let ys = [Math.floor(y), Math.ceil(y)]
		let ds = []
		for (i in xs) {
			for (j in ys) {
				ds.push((Math.cos(this.grad[xs[i]][ys[j]]) * (x - xs[i])) + (Math.sin(this.grad[xs[i]][ys[j]]) * (y - ys[j])))	
			}
		}
		let o = []
		for (let i = 0; i < 2; i++) {
			o[i] = _.intrp(ds[i], ds[i + 2], (x - xs[0]))
		}
		return (_.intrp(o[0], o[1], (y - ys[0])) + 1) / 2 
	},
}
