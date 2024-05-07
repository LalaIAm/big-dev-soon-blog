/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icon-fonts\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-arrow': '&#xe900;',
		'icon-arrow-left': '&#xe901;',
		'icon-arrow-right': '&#xe902;',
		'icon-close': '&#xe903;',
		'icon-facebook': '&#xe904;',
		'icon-hamburger-menu': '&#xe905;',
		'icon-instagram': '&#xe906;',
		'icon-mail': '&#xe908;',
		'icon-rss': '&#xe909;',
		'icon-search': '&#xe90a;',
		'icon-twitter': '&#xe90b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
