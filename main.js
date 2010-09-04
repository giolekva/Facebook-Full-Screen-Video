document.body.addEventListener('DOMNodeInserted', function(event) {
		var n = event.relatedNode,
			v = n.childNodes[0];

		if (v.tagName == 'EMBED' && v.getAttribute('allowfullscreen') != 'true') {
			var add = false;

			if (v.getAttribute('src').indexOf('youtube') != -1) {
				v.setAttribute('src', v.getAttribute('src') + '&fs=1&version=3&iv_load_policy=3');
				add = true;
			} else if (v.getAttribute('src').indexOf('vimeo') != -1) {
				v.setAttribute('src', v.getAttribute('src') + '&fullscreen=1');
				add = true;
			}

			if (add) {
				v.setAttribute('allowfullscreen', true);
				var tmp = n.innerHTML;
				n.innerHTML = tmp;
			}
		}
	},
	false
);