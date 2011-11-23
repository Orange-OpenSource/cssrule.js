/*!
 * Copyright 2011 France Télécom
 * This software is distributed under the terms of either the MIT
 * License or the GNU General Public License (GPL) Version 2 or later.
 * See licence.txt file for more details.
 */
 
/* cssrule.js
 * Version : 1
 * 
 * Authors: Julien Wajsberg <julien.wajsberg@orange.com>
 * 
 * This module can insert CSS rules in a cross-browser way.
 * It was inspired by http://code.google.com/p/doctype/wiki/ArticleInstallStyles
 *
*/


var cssrule = (function($, document, undefined) {
	var stylesheet;
	
	var possibleprops = "cssText,innerText,innerHTML".split(",");
	var propToSet;
	
	var init = function() {
		if (document.createStyleSheet) {
			// in IE
			stylesheet = document.createStyleSheet();
		} else {
			stylesheet = $("<style type='text/css' id='cssrule'></style>").get(0);
			$("head").append(stylesheet);
		}

		var i, cur;
		for (i = 0; i < possibleprops.length; i++) {
			cur = possibleprops[i];
			if (stylesheet[cur] !== undefined) {
				propToSet = cur;
				break;
			}
		}
	};
	
	var add = function(style) {
		stylesheet[propToSet] += style;
		return cssrule;
	};
	
	return {
		init: init,
		add: add
	};
})(jQuery, document);
