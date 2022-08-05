/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 1405,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: [], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR", "DEBUG"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: 'Gateway'
		},
		{
			module: 'EXT-Alert',
  			config: {
    				debug: true,
    				ignore: []
  			}
		},
		{
			module: 'MMM-OpenCVGestures',
			position: "upper_third",
			config: {
				GPIO: 14,
			}
		},
		{
			module: "MMM-GoogleAssistant",
  			configDeepMerge: true,
  			config: {
	    			debug: true,
    				stopCommand: "stop",
    				assistantConfig: {
					latitude: 51.508530,
					longitude: -0.076132,
				},
    				responseConfig: {
      					chimes: {},
      					imgStatus: {},
      					zoom: {}
   		 		},
    				recipes: []
  			}
		},
		{
  			module: "EXT-Detector",
  			position: "top_left",
  			configDeepMerge: true,
  			config: {
    				debug: true,
    				useIcon: true,
    				touchOnly: false,
    				detectors: [
      					{
        					detector: "Snowboy",
        					Model: "smart_mirror",
        					Sensitivity: null
      					},
      					{
        					detector: "Snowboy",
        					Model: "jarvis",
        					Sensitivity: null
      					},
      					{
        					detector: "Snowboy",
        					Model: "computer",
        					Sensitivity: null
      					},
      					{
        					detector: "Snowboy",
        					Model: "snowboy",
        					Sensitivity: null
      					},
      					{
        					detector: "Snowboy",
        					Model: "view_glass",
        					Sensitivity: null
      					},

    				]
  			}
		},
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Hanoi",
				locationID: "1581129", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "0433e83198f9d86c7a9d306281606514"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Hanoi",
				locationID: "1581129", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "0433e83198f9d86c7a9d306281606514"
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
