AUI.add(
	'liferay-dmm-repeatable-fields-tests',
	function(A) {
		var suite = new A.Test.Suite('liferay-dmm-repeatable-fields');

		var ddm;

		var portletNamespace = '_167_';

		function registerFieldsLocalizationMap() {
			ddm._registerFieldsLocalizationMap('en_US');
		}

		suite.add(
			new A.Test.Case(
				{
					name: 'Liferay.DDM.RepeatableFields.Tests',

					setUp: function() {
						Liferay.component(portletNamespace + 'translationManager', function() {
							return new Liferay.TranslationManager();
						});

						ddm = new Liferay.DDM.RepeatableFields(
							{
								classNameId: 10103,
								classPK: 10435,
								container: '#ihgq_null_null',
								definition: {"availableLanguageIds":["en_US"],"defaultLanguageId":"en_US","fields":[{"predefinedValue":{"en_US":""},"dataType":"string","multiple":false,"readOnly":false,"label":{"en_US":"Company"},"type":"text","required":false,"showLabel":true,"nestedFields":[{"predefinedValue":{"en_US":""},"dataType":"string","multiple":false,"readOnly":false,"label":{"en_US":"Email"},"type":"text","required":false,"showLabel":true,"nestedFields":[{"predefinedValue":{"en_US":""},"dataType":"string","multiple":false,"readOnly":false,"label":{"en_US":"First Name"},"type":"text","required":false,"showLabel":true,"fieldNamespace":"","indexType":"keyword","repeatable":false,"name":"firstName","localizable":false,"tip":{"en_US":""}}],"fieldNamespace":"","indexType":"keyword","repeatable":true,"name":"email","localizable":true,"tip":{"en_US":""}}],"fieldNamespace":"","indexType":"keyword","repeatable":true,"name":"company","localizable":false,"tip":{"en_US":""}},{"predefinedValue":{"en_US":"[\"gtalk\"]"},"dataType":"string","multiple":false,"readOnly":false,"label":{"en_US":"Instant Messenger Service"},"type":"select","required":false,"showLabel":true,"fieldNamespace":"","indexType":"keyword","repeatable":false,"options":[{"label":{"en_US":"AOL"},"value":"aol"},{"label":{"en_US":"Yahoo"},"value":"yahoo"},{"label":{"en_US":"GTalk"},"value":"gtalk"}],"name":"imService","localizable":true,"tip":{"en_US":""}},{"predefinedValue":{"en_US":""},"dataType":"string","multiple":false,"readOnly":false,"label":{"en_US":"Instant Messenger"},"type":"text","required":false,"showLabel":true,"nestedFields":[{"predefinedValue":{"en_US":"false"},"dataType":"boolean","multiple":false,"readOnly":false,"label":{"en_US":"Boolean"},"type":"checkbox","required":false,"showLabel":true,"fieldNamespace":"","indexType":"keyword","repeatable":false,"name":"Boolean","localizable":true,"tip":{"en_US":""}}],"fieldNamespace":"","indexType":"keyword","repeatable":false,"name":"imUserName","localizable":false,"tip":{"en_US":""}},{"predefinedValue":{"en_US":""},"dataType":"string","multiple":false,"readOnly":false,"label":{"en_US":"Job Title"},"type":"text","required":false,"showLabel":true,"fieldNamespace":"","indexType":"keyword","repeatable":false,"name":"jobTitle","localizable":true,"tip":{"en_US":""}},{"predefinedValue":{"en_US":""},"dataType":"string","multiple":false,"readOnly":false,"label":{"en_US":"Last Name"},"type":"text","required":false,"showLabel":true,"fieldNamespace":"","indexType":"keyword","repeatable":false,"name":"lastName","localizable":true,"tip":{"en_US":""}},{"predefinedValue":{"en_US":""},"dataType":"string","multiple":false,"readOnly":false,"label":{"en_US":"Notes"},"type":"textarea","required":false,"showLabel":true,"fieldNamespace":"","indexType":"text","repeatable":false,"name":"notes","localizable":true,"tip":{"en_US":""}},{"predefinedValue":{"en_US":""},"dataType":"string","multiple":false,"readOnly":false,"label":{"en_US":"Phone (Mobile)"},"type":"text","required":false,"showLabel":true,"fieldNamespace":"","indexType":"keyword","repeatable":false,"name":"phoneMobile","localizable":true,"tip":{"en_US":""}},{"predefinedValue":{"en_US":""},"dataType":"string","multiple":false,"readOnly":false,"label":{"en_US":"Phone (Office)"},"type":"text","required":false,"showLabel":true,"fieldNamespace":"","indexType":"keyword","repeatable":false,"name":"phoneOffice","localizable":true,"tip":{"en_US":""}}]},
								doAsGroupId: 10185,
								fieldsDisplayInput: '#' + portletNamespace + '_fieldsDisplay',
								namespace: '',
								p_l_id: 10178,
								portletNamespace: portletNamespace,
								repeatable: true
							}
						);
					},

					tearDown: function() {},

					'it should register localization object': function() {
						var fieldsLocalizationMap = '{"pzhz":"","poie":{"en_US":""},"nqpu":"","jhsw":{"en_US":"gtalk"},"llnw":"","plpr":{"en_US":"false"},"dgfg":{"en_US":""},"ebwt":{"en_US":""},"oryf":{"en_US":""},"bjwx":{"en_US":""},"uwvx":{"en_US":""}}';

						registerFieldsLocalizationMap();

						A.Assert.areSame(
							JSON.stringify(ddm.fieldsLocalizationMap),
							fieldsLocalizationMap
						);
					},

					'it should create values object on submit form': function() {
						var fieldsDisplayInput = ddm.get('fieldsDisplayInput');

						var valuesObject = '[{"instanceId":"pzhz","name":"company","nestedFieldValues":[{"instanceId":"poie","name":"email","nestedFieldValues":[{"instanceId":"nqpu","name":"firstName","value":""}],"value":{"en_US":""}}],"value":""},{"instanceId":"jhsw","name":"imService","value":{"en_US":"gtalk"}},{"instanceId":"llnw","name":"imUserName","nestedFieldValues":[{"instanceId":"plpr","name":"Boolean","value":{"en_US":"false"}}],"value":""},{"instanceId":"dgfg","name":"jobTitle","value":{"en_US":""}},{"instanceId":"ebwt","name":"lastName","value":{"en_US":""}},{"instanceId":"oryf","name":"notes","value":{"en_US":""}},{"instanceId":"bjwx","name":"phoneMobile","value":{"en_US":""}},{"instanceId":"uwvx","name":"phoneOffice","value":{"en_US":""}}]';

						registerFieldsLocalizationMap();
						ddm._syncFieldsTreeUI();

						A.Assert.areSame(
							fieldsDisplayInput.get('value'),
							valuesObject
						);
					}
				}
			)
		);

		A.Test.Runner.add(suite);
	},
	'',
	{
		requires: ['test', 'liferay-ddm-repeatable-fields', 'liferay-translation-manager']
	}
);