function assert(cond) {
	if (!cond) {
		throw new Error('Assertion failed')
	}
}

const o = {
	f: function a(a) {
		return a
	}
}

assert(o.f(1) === 1)
