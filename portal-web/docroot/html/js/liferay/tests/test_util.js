AUI.add('liferay-util-tests', function(A) {
	var suite = new A.Test.Suite('liferay-util');

	suite.add(new A.Test.Case({
		name: 'Dynamic Data Mapping tests',

		setUp: function () {
			//
		},

		tearDown: function () {
			//
		},

		'Test Liferay.Util.camelize': function() {
			A.Assert.areSame(
				Liferay.Util.camelize('this-will-pass'),
				'thisWillPass',
				'Do not allow punctuation.'
			);

			A.Assert.areNotSame(
				Liferay.Util.camelize('this-will-fail'),
				'thisWillfail',
				'Do not allow punctuation.'
			);
		}
	}));

	A.Test.Runner.add(suite);
}, '', {
	requires: ['test']
});