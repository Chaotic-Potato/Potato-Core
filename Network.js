_.act = function(n) {return 1/(1+Math.exp(-n))}
_.antiAct = function(n) {return Math.log(1/((1/n)-1))}

_.Network = function(w, seed) {
	if (w[0][0]) {
		this.w = w
	}
	else {
		let rng = new _.Random(seed || new Date().getTime())
		this.w = []
		for (let x = 0; x < w.length - 1; x++) {
			this.w[x] = []
			for (let y = 0; y < w[x + 1]; y++) {
				this.w[x][y] = []
				for (let z = 0; z < w[x] + 1; z++) {
					this.w[x][y][z] = _.antiAct(rng.get())
				}
			}
		}
	}
}

_.Network.prototype = {
	get: function(i) {
		for (n in this.w) {	
			i = this.w[n].map(function(e) {
				let sum = 0
				for (x in i) {
					sum += i[x] * e[x]
				}
				return _.act(e[parseInt(x) + 1] + sum)
			})
		}
		return i
	}
}
