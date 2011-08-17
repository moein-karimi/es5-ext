'use strict';

module.exports = {
	__generic: function (t, a) {
		t = t.call;
		a.ok(t(this) instanceof Array, "turned to an array");
		a(t(this).length, this.length, "length matches");
	},
	"": function (t, a) {
		var o = [1, 2, 3];
		t = t.call;
		a(t("12345", 2, 3).length, 5, "Extra arguments does not affect result");
		a.deep(t(function (x) { return arguments; }(3)), [3],
			"List with one numeric value");
		a(t(o), o, "On array returns same array");
	}
};
