/*
 * Globalize Culture ml-IN
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo( "ml-IN", "default", {
	name: "ml-IN",
	englishName: "Malayalam (India)",
	nativeName: "മലയാളം (ഭാരതം)",
	language: "ml",
	numberFormat: {
		groupSizes: [3,2],
		percent: {
			pattern: ["-%n","%n"],
			groupSizes: [3,2]
		},
		currency: {
			pattern: ["$ -n","$ n"],
			groupSizes: [3,2],
			symbol: "ക"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			":": ".",
			firstDay: 1,
			days: {
				names: ["ഞായറാഴ്ച","തിങ്കളാഴ്ച","ചൊവ്വാഴ്ച","ബുധനാഴ്ച","വ്യാഴാഴ്ച","വെള്ളിയാഴ്ച","ശനിയാഴ്ച"],
				namesAbbr: ["ഞായർ.","തിങ്കൾ.","ചൊവ്വ.","ബുധൻ.","വ്യാഴം.","വെള്ളി.","ശനി."],
				namesShort: ["ഞ","ത","ച","ബ","വ","വെ","ശ"]
			},
			months: {
				names: ["ജനുവരി","ഫെബ്റുവരി","മാറ്ച്ച്","ഏപ്റില്","മെയ്","ജൂണ്","ജൂലൈ","ഓഗസ്ററ്","സെപ്ററംബറ്","ഒക്ടോബറ്","നവംബറ്","ഡിസംബറ്",""],
				namesAbbr: ["ജനുവരി","ഫെബ്റുവരി","മാറ്ച്ച്","ഏപ്റില്","മെയ്","ജൂണ്","ജൂലൈ","ഓഗസ്ററ്","സെപ്ററംബറ്","ഒക്ടോബറ്","നവംബറ്","ഡിസംബറ്",""]
			},
			patterns: {
				d: "dd-MM-yy",
				D: "dd MMMM yyyy",
				t: "HH.mm",
				T: "HH.mm.ss",
				f: "dd MMMM yyyy HH.mm",
				F: "dd MMMM yyyy HH.mm.ss",
				M: "dd MMMM"
			}
		}
	}
});

}( this ));
