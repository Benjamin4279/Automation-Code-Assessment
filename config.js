exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./valueFeatures.feature'], 
  capabilities: {
	  browserName: 'chrome'
  },
  framework: 'custom', 
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
	  format: '',
	  require: './qa-engineer_problems/*.js',
  },
  params: {
	  env: {
		  hostname: 'http://72.74.145.114:8000'
	  }
  }
};