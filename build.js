const Metro = require('metro')

Metro.loadConfig().then(config => {
	Metro.runBuild(config, {
		platform: 'ios',
		minify: true,
		entry: 'src/index.js',
		out: 'dist/bundle.js'
	})
})
