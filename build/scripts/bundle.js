"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var o = {};

  function t(n) {
    if (o[n]) return o[n].exports;
    var r = o[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
  }

  t.m = e, t.c = o, t.d = function (e, o, n) {
    t.o(e, o) || Object.defineProperty(e, o, {
      enumerable: !0,
      get: n
    });
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, t.t = function (e, o) {
    if (1 & o && (e = t(e)), 8 & o) return e;
    if (4 & o && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (t.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & o && "string" != typeof e) for (var r in e) {
      t.d(n, r, function (o) {
        return e[o];
      }.bind(null, r));
    }
    return n;
  }, t.n = function (e) {
    var o = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return t.d(o, "a", o), o;
  }, t.o = function (e, o) {
    return Object.prototype.hasOwnProperty.call(e, o);
  }, t.p = "", t(t.s = 0);
}([function (e, o, t) {
  "use strict";

  function n() {
    !function () {
      var e = $(".header"),
          o = $(".main__fotorama");
      $(".fotorama").on("fotorama:show ", function (t, n, r) {
        var i = n.activeFrame.headertheme,
            l = n.activeFrame.textcolor;
        e.attr("data-theme", i), o.attr("data-text-color", l);
      }).fotorama();
    }(), $(".item_fotorama_slider").slick({
      infinite: !0,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<img class="slick-prev" src="build/img/prev-arrow.png">',
      nextArrow: '<img class="slick-next" src="build/img/next-arrow.png">',
      responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: !0
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }

  t.r(o), $(document).ready(function () {
    $(document).ready(function () {
      $(".footer__copyright_personal_popup").magnificPopup({
        type: "inline",
        fixedContentPos: !0,
        fixedBgPos: !0,
        overflowY: "auto",
        closeBtnInside: !0,
        preloader: !1,
        midClick: !0,
        removalDelay: 300,
        mainClass: "my-mfp-zoom-in"
      }), $(".item__left_options_table-size-link").magnificPopup({
        type: "inline",
        fixedContentPos: !0,
        fixedBgPos: !0,
        overflowY: "auto",
        closeBtnInside: !0,
        preloader: !1,
        midClick: !0,
        removalDelay: 300,
        mainClass: "my-mfp-zoom-in"
      });
    }), n(), $("#checkout_form").on("submit", function (e) {
      e.preventDefault(), window.API.onFormSubmit(function () {
        location.href = "checkout-complete.html";
      });
    });
  });
}]);