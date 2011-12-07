/*!
 * Copyright 2011 France Télécom
 * This software is distributed under the terms of either the MIT
 * License or the GNU General Public License (GPL) Version 2.
 * See GPL-LICENSE.txt and MIT-LICENSE.txt files for more details.
 */
 
(function(window, document, undefined) {

/* cssrule.js
 * Version : 1
 * 
 * Authors: Julien Wajsberg <julien.wajsberg@orange.com>
 * 
 * This module can insert CSS rules in a cross-browser way.
 * It was inspired by http://code.google.com/p/doctype/wiki/ArticleInstallStyles
 *
*/
	
	var propToSet, stylesheet;

	function insertInPage(elt) {
		var firstScript = document.getElementsByTagName('script')[0];
		firstScript.parentNode.insertBefore(elt, firstScript);
	}
	
	function createStylesheet() {
		if (document.createStyleSheet) {
			// in IE
			stylesheet = document.createStyleSheet();
		} else {
			stylesheet = document.createElement("style");
			stylesheet.id = "cssrule";
			insertInPage(stylesheet);
		}
	}
	
	function findPropToSet() {
		var possibleprops = "cssText,innerText,innerHTML".split(",");
		
		for (i = 0; i < possibleprops.length; i++) {
			cur = possibleprops[i];
			if (stylesheet[cur] !== undefined) {
				propToSet = cur;
				break;
			}
		}
	}
	
	function init() {
		var i, cur;
		
		createStylesheet();
		findPropToSet();
	}
	
	function add(style) {
		stylesheet[propToSet] += style;
		return cssrule;
	}
	
	window.cssrule = {
		/**
		 * you must call "init" function on dom ready
		 * TODO: should we run it automatically when "add" is used the first time ?
		 */ 
		init: init,
		add: add
	};
})(this, document);
