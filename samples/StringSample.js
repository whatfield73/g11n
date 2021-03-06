enyo.kind({
	name:"g11n.sample.StringSample",
	kind: "FittableRows",
	classes: "enyo-fit",
	components: [
		{kind: "onyx.Toolbar", content:$L("Strings")},
		{kind: "FittableColumns", style: "padding: 10px", components:[
			{components: [
				{content:$L("Choose Locale:"), classes: "g11n-sample-divider"},		
				{kind: "onyx.PickerDecorator", style:"padding:10px;", onSelect: "pickerHandler", components: [
					{content: "Pick One...", style: "width: 200px"},
					{kind: "onyx.Picker", components: [
						{content: 'en_us', active:true},
						{content: 'en_ca'},
						{content: 'en_ie'},
						{content: 'en_gb'},
						{content: 'en_mx'},
						{content: 'de_de'},
						{content: 'fr_fr'},
						{content: 'fr_ca'},
						{content: 'it_it'},
						{content: 'es_es'},
						{content: 'es_mx'},
						{content: 'es_us'}																																																								
					]}
				]}
			]}				
		]},
		{kind: "onyx.Groupbox", style: "padding:10px", components: [
			{kind: "onyx.GroupboxHeader", content: $L("Example Translations")},
			{kind:"Scroller", style: 'height:300px', components: [
				{name:"Box", allowHtml: true, style:"font-size:1.2em"}
			]}
		]}
	],
	initComponents: function() {
		this.inherited(arguments);
		this.$.Box.setContent(this.strings().join("<br>"));
		var locale = enyo.g11n.currentLocale().getLocale();
		this.format(locale);
	},
	pickerHandler: function(inSender, inEvent){
		this.format(inEvent.selected.content);
	},
	format: function(locale){
		this.mockTranslate(locale);
	},
	/*
	* This function exists to emulate changing locale,
	* since browser locales are nonstandard to change
	* All you need is $L in your app, and this will happen for you
	* 
	*/	
	mockTranslate: function(locale) {
		if (!this._mockResources[locale]) {
			this._mockResources[locale] = new enyo.g11n.Resources({locale:locale}) || {$L:function(a){ return a }};
		}
		// HACK: Changing global language of the app to emulate locale change
		$L._resources = this._mockResources[locale]
		this.$.Box.setContent(this.strings().join("<br/>"));	
	},
	_mockResources:{},
	strings: function() { return [
		$L('(activated)')
		, $L('(not activated)')
		, $L('1 message #{high}')
		, $L('A new security policy has been implemented for your Exchange ActiveSync account.  When you end the call, you will be able to change your password.')
		, $L('A security policy has been implemented for your Exchange ActiveSync account. You must set a password or PIN to continue using it.')
		, $L('A security policy has been implemented for your Exchange ActiveSync account. You must set a password to continue using it.')
		, $L('Add to Contacts')
		, $L('Airplane mode is on.')
		, $L('Akey and checksum are not correct.')
		, $L('Akey set failed.')
		, $L('Albania')
		, $L('Algeria')
		, $L('American Samoa (US)')
		, $L('Andorra')
		, $L('Answer failed.')
		, $L('Answer failed: invalid call id')
		, $L('Antigua and Barbuda')
		, $L('Are you sure you want to clear all of the calls in your call history?')
		, $L('Argentina')
		, $L('Armenia')
		, $L('Australia')
		, $L('Austria')
		, $L('Authorization failed.')
		, $L('Azerbaijani Republic')
		, $L('Bahrain')
		, $L('Barbados')
		, $L('Baseband crashed.')
		, $L('Belarus')
		, $L('Belgium')
		, $L('Benin')
		, $L('Bermuda (UK)')
		, $L('Bhutan')
		, $L('Blocked number')
		, $L('Bolivia')
		, $L('Bosnia and Herzegovina')
		, $L('Brazil')
		, $L('British Virgin Islands (UK)')
		, $L('Bulgaria')
		, $L('CNAP disabled.')
		, $L('CNAP enabled.')
		, $L('CNAP not provisioned.')
		, $L('CNAP query failed.')
		, $L('Call #{value}')
		, $L('Call barred by network')
		, $L('Call barring password change failed. #{errorText}')
		, $L('Call barring password change was successful.')
		, $L('Call customer service')
		, $L('Call dropped')
		, $L('Call dropped.')
		, $L('Call dropped: baseband crashed.')
		, $L('Call dropped: out-of-range.')
		, $L('Call dropped: signal faded')
		, $L('Call dropped: signal faded.')
		, $L('Call ended')
		, $L('Call failed.')
		, $L('Call failed: No free lines.')
		, $L('Call failed: No service.')
		, $L('Call failed: Not an emergency call.')
		, $L('Call failed: Not on fixed dialing list.')
		, $L('Call failed: Phone is locked.')
		, $L('Call failed: Phone is off.')
		, $L('Call failed: network busy')
		, $L('Call failed: no service')
		, $L('Call forwarding (all-conditional) status: #{status}')
		, $L('Call forwarding (all-forwarding) status: #{status}')
		, $L('Call forwarding (mobile busy) status: #{status}')
		, $L('Call forwarding (no reply) status: #{status}')
		, $L('Call forwarding (unconditional) status: #{status}')
		, $L('Call forwarding (unreachable) status: #{status}')
		, $L('Call forwarding activation failed. #{errorText}')
		, $L('Call forwarding deactivation failed. #{errorText}')
		, $L('Call forwarding registration failed. #{errorText}')
		, $L('Call forwarding unregistration failed. #{errorText}')
		, $L('Call service provider for PUK code.')
		, $L('Call waiting activation failed. #{errorText}')
		, $L('Call waiting deactivation failed. #{errorText}')
		, $L('Call waiting is not active.')
		, $L('Call waiting query failed. #{errorText}')
		, $L('Call waiting registration failed. #{errorText}')
		, $L('Call waiting unregistration failed. #{errorText}')
		, $L('Call with #{contact} ended')
		, $L('Cambodia')
		, $L('Cameroon')
		, $L('Cancel')
		, $L('Cape Verde')
		, $L('Cayman Islands (UK)')
		, $L('Central African Republic')
		, $L('Chad')
		, $L('Change Default Number')
		, $L('Check Skype Credit')
		, $L('Chile')
		, $L('China')
		, $L('Choose a default number')
		, $L('Clear Call History')
		, $L('Colombia')
		, $L('Command timed out.')
		, $L('Commit succeeded')
		, $L('Comoros')
		, $L('Conference call')
		, $L('Conference call ended')
		, $L('Conference failed.')
		, $L('Conference failed: need at least 2 calls.')
		, $L('Connecting')
		, $L('Connecting to network to dial...')
		, $L('Cook Islands (NZ)')
		, $L('Cote d\'Ivoire')
		, $L('Croatia')
		, $L('Cyprus')
		, $L('Czech Republic')
		, $L('Delete')
		, $L('Denmark')
		, $L('Device Password Required')
		, $L('Device Password Upgrade Required')
		, $L('Dial')
		, $L('Dial ')
		, $L('Dialing')
		, $L('Dominica')
		, $L('Dominican Republic')
		, $L('Done')
		, $L('East Timor')
		, $L('Ecuador')
		, $L('Egypt')
		, $L('Eight')
		, $L('Emergency Call')
		, $L('Emergency call')
		, $L('Emergency call failed.')
		, $L('Emergency calls only.')
		, $L('Ended')
		, $L('Ending')
		, $L('Enter MSL then tap Done.')
		, $L('Enter PIN')
		, $L('Enter name or number...')
		, $L('Enter number...')
		, $L('Entering an incorrect PIN will erase your phone')
		, $L('Equatorial Guinea')
		, $L('Eritrea')
		, $L('Error occurred.')
		, $L('Error: MSL value is empty.')
		, $L('Estonia')
		, $L('Ethiopia')
		, $L('Extract failed.')
		, $L('Extract failed: no conference.')
		, $L('Extract failed: no free lines.')
		, $L('Failed to register for TelephonyService status.')
		, $L('Failed to save voicemail greeting')
		, $L('Failure. ')
		, $L('Failure. Tries left : ')
		, $L('Faroe Islands (Denmark)')
		, $L('Fax')
		, $L('Federated States of Micronesia')
		, $L('Fiji')
		, $L('Finland')
		, $L('Five')
		, $L('Four')
		, $L('French Guiana (France)')
		, $L('French Polynesia (France)')
		, $L('Gabonese Republic')
		, $L('Gambia')
		, $L('General error.')
		, $L('Georgia')
		, $L('Germany')
		, $L('Getting activation info...')
		, $L('Gibraltar (UK)')
		, $L('Greece')
		, $L('Greenland (Denmark)')
		, $L('Grenada')
		, $L('Guam (US)')
		, $L('Guinea')
		, $L('Guinea-Bissau')
		, $L('Guyana')
		, $L('Haiti')
		, $L('Hold')
		, $L('Home')
		, $L('Hong Kong (PRC)')
		, $L('Hungary')
		, $L('IMEI query failed.')
		, $L('IMEI: #{value}')
		, $L('Iceland')
		, $L('If you enter an incorrect PIN now your phone will be erased.')
		, $L('Ignored call from #{contact}')
		, $L('Incoming call')
		, $L('Incoming caller ID presentation disabled.')
		, $L('Incoming caller ID presentation enabled.')
		, $L('Incoming caller ID presentation not provisioned.')
		, $L('Incoming caller ID presentation query failed. #{errorText}')
		, $L('India')
		, $L('Indonesia')
		, $L('Initial programming required')
		, $L('Initializing...')
		, $L('International Call')
		, $L('Invalid parameter.')
		, $L('Iraq')
		, $L('Ireland')
		, $L('Israel')
		, $L('Italy')
		, $L('Jamaica')
		, $L('Japan')
		, $L('Jordan')
		, $L('Kuwait')
		, $L('Kyrgyz Republic')
		, $L('Latvia')
		, $L('Lebanon')
		, $L('Libya')
		, $L('Line is busy')
		, $L('Listening...')
		, $L('Lithuania')
		, $L('MDN downloaded')
		, $L('Macao (PRC)')
		, $L('Macedonia, The Former Yugoslav Republic Of')
		, $L('Main')
		, $L('Malaysia')
		, $L('Malta')
		, $L('Marshall Islands')
		, $L('Mauritania')
		, $L('Mauritius')
		, $L('Mexico')
		, $L('Missed call')
		, $L('Missed call ')
		, $L('Missed call at ')
		, $L('Modem error')
		, $L('Moldova')
		, $L('Mongolia')
		, $L('Montserrat (UK)')
		, $L('Morocco')
		, $L('NAM downloaded')
		, $L('Namibia')
		, $L('Nepal')
		, $L('Netherlands')
		, $L('Netherlands Antilles (Netherlands)')
		, $L('Network failure.')
		, $L('Network message')
		, $L('Network update')
		, $L('New Caledonia (France)')
		, $L('New Zealand')
		, $L('New message #{high}')
		, $L('Nine')
		, $L('No answer')
		, $L('No free lines.')
		, $L('No service.')
		, $L('No telephony server')
		, $L('Northern Mariana Islands')
		, $L('Norway')
		, $L('Not supported by this network type.')
		, $L('Number not on fixed dialing list.')
		, $L('On hold')
		, $L('One')
		, $L('Operation failed: Call forwarding (all-conditional). #{errorText}')
		, $L('Operation failed: Call forwarding (all-forwarding) query. #{errorText}')
		, $L('Operation failed: Call forwarding (mobile busy) query. #{errorText}')
		, $L('Operation failed: Call forwarding (no reply). #{errorText}')
		, $L('Operation failed: Call forwarding (unconditional) #{errorText}')
		, $L('Operation failed: Call forwarding (unreachable) query. #{errorText}')
		, $L('Other')
		, $L('Outgoing Caller ID restriction not provisioned.')
		, $L('Outgoing Caller ID restriction query failed.')
		, $L('Outgoing caller ID enable failed.')
		, $L('Outgoing caller ID enabled.')
		, $L('Outgoing caller ID restricted failed.')
		, $L('Outgoing caller ID restricted.')
		, $L('PAD access')
		, $L('PCS Vision Services could not be prepared. If the problem persists, call Sprint Customer Service.')
		, $L('PIN change successful.')
		, $L('PIN doesn\'t match')
		, $L('PIN must be enabled before change is allowed.')
		, $L('PIN required.')
		, $L('PIN reset failed. #{attemptsRemaining} attempts remaining.')
		, $L('PIN reset successful.')
		, $L('PIN2 change successful.')
		, $L('PIN2 must be enabled before change is allowed.')
		, $L('PIN2 reset successful.')
		, $L('PRL downloaded')
		, $L('PRL update could not be prepared. If the problem persists, call Sprint Customer Service.')
		, $L('Pager')
		, $L('Papua New Guinea')
		, $L('Password does not match security requirements.')
		, $L('Password must contain both numbers and letters.')
		, $L('Passwords do not match.')
		, $L('Peru')
		, $L('Phone')
		, $L('Phone Locked')
		, $L('Phone is locked.')
		, $L('Phone is off.')
		, $L('Placed call')
		, $L('Poland')
		, $L('Processing...')
		, $L('Programming in progress')
		, $L('Programming succeeded')
		, $L('Programming unsuccessful')
		, $L('Programming unsuccessful.  Call #{value}')
		, $L('Programming unsuccessful. Call customer service.')
		, $L('Programming...')
		, $L('Puerto Rico (US)')
		, $L('Record New Greeting')
		, $L('Remove')
		, $L('Request failed to complete before timeout.')
		, $L('Reunion (France)')
		, $L('Romania')
		, $L('Russian Federation')
		, $L('Rwandese Republic')
		, $L('SIM has bad file.')
		, $L('SIM phonebook not ready.')
		, $L('SPL unlocked')
		, $L('Saint Lucia')
		, $L('Saint Pierre and Miquelon (France)')
		, $L('Saint Vincent and the Grenadines')
		, $L('San Marino')
		, $L('Sao Tome and Principe')
		, $L('Saudi Arabia')
		, $L('Sending your request...')
		, $L('Senegal')
		, $L('Serbia and Montenegro')
		, $L('Service Provider')
		, $L('Set Password')
		, $L('Seven')
		, $L('Singapore')
		, $L('Slovakia')
		, $L('Slovenia')
		, $L('Solomon Islands')
		, $L('Somalia')
		, $L('South Africa')
		, $L('Spain')
		, $L('Speaker')
		, $L('Success')
		, $L('Sudan')
		, $L('Sweden')
		, $L('Switzerland')
		, $L('Syria')
		, $L('TTY/TDD')
		, $L('Taiwan')
		, $L('Tajikistan')
		, $L('Tanzania')
		, $L('Tap to add default')
		, $L('Tap to add number')
		, $L('TelephonyService not connected to radio.')
		, $L('Thailand')
		, $L('The network is unavailable.')
		, $L('The number you are trying to call cannot be tried again until you restart your phone.')
		, $L('Three')
		, $L('Togolese Republic')
		, $L('Trinidad and Tobago')
		, $L('Try Again')
		, $L('Tunisia')
		, $L('Turkey')
		, $L('Turkmenistan')
		, $L('Turks and Caicos Islands (UK)')
		, $L('Two')
		, $L('USSD request failed.')
		, $L('USSD request successful')
		, $L('Uganda')
		, $L('Unable to change PIN status.')
		, $L('Unable to change PIN status: PUK locked.')
		, $L('Unable to change PIN status: SIM locked.')
		, $L('Unable to change PIN status: bad format.')
		, $L('Unable to change PIN.')
		, $L('Unable to change PIN. #{attemptsRemaining} attempts remaining.')
		, $L('Unable to change PIN2.')
		, $L('Unable to change PIN2. #{attemptsRemaining} attempts remaining.')
		, $L('Unable to change PIN: PINs don\'t match.')
		, $L('Unable to change PIN: PUK locked.')
		, $L('Unable to change PIN: SIM locked.')
		, $L('Unable to change PIN: enable PIN first.')
		, $L('Unable to complete call.')
		, $L('Unable to find voicemail number.')
		, $L('Unable to reset PIN.')
		, $L('Unable to reset PIN2.')
		, $L('Unable to reset PIN2. #{attemptsRemaining} attempts remaining.')
		, $L('Unable to unlock PUK.')
		, $L('Unable to unlock PUK: PINs don\'t match.')
		, $L('Unable to unlock PUK: SIM locked.')
		, $L('Unable to unlock PUK: bad or incorrect PUK.')
		, $L('Unable to unlock PUK: new PIN not valid.')
		, $L('United Arab Emirates')
		, $L('United Kingdom')
		, $L('United States Virgin Islands (US)')
		, $L('United States of America')
		, $L('Unknown')
		, $L('Unknown error.')
		, $L('Unknown method.')
		, $L('Unknown number')
		, $L('Unlock')
		, $L('Uzbekistan')
		, $L('Vatican City State')
		, $L('View Contact')
		, $L('Voice privacy disabled.')
		, $L('Voice privacy enabled.')
		, $L('Voicemail')
		, $L('Voicemail Greeting')
		, $L('Wallis and Futuna (France)')
		, $L('Warning')
		, $L('Which service would you like to use?')
		, $L('Wired headset')
		, $L('Work')
		, $L('Yemen')
		, $L('You are currently using a default greeting.')
		, $L('Zambia')
		, $L('Zero')
		, $L('all asynchronous services')
		, $L('all basic services')
		, $L('all synchronous services')
		, $L('asynchronous circuit data')
		, $L('asynchronous circuit data switch')
		, $L('auxiliary telephony')
		, $L('confirm password...')
		, $L('data')
		, $L('enter password...')
		, $L('fax')
		, $L('packet access')
		, $L('synchronous circuit data')
		, $L('synchronous circuit data switch')
		, $L('voice')
	]}
});
