x66a: function (t, e, n) {
    (function (t) {
      +(function (t) {
        "use strict";
        function e(e) {
          return this.each(function () {
            var i = t(this),
              o = i.data("bs.carousel"),
              r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
              s = "string" == typeof e ? e : r.slide;
            o || i.data("bs.carousel", (o = new n(this, r))),
              "number" == typeof e
                ? o.to(e)
                : s
                ? o[s]()
                : r.interval && o.pause().cycle();
          });
        }
        var n = function (e, n) {
          (this.$element = t(e)),
            (this.$indicators = this.$element.find(".carousel-indicators")),
            (this.options = n),
            (this.paused = null),
            (this.sliding = null),
            (this.interval = null),
            (this.$active = null),
            (this.$items = null),
            this.options.keyboard &&
              this.$element.on(
                "keydown.bs.carousel",
                t.proxy(this.keydown, this)
              ),
            "hover" == this.options.pause &&
              !("ontouchstart" in document.documentElement) &&
              this.$element
                .on("mouseenter.bs.carousel", t.proxy(this.pause, this))
                .on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
        };
        (n.VERSION = "3.3.7"),
          (n.TRANSITION_DURATION = 600),
          (n.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0,
          }),
          (n.prototype.keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
              switch (t.which) {
                case 37:
                  this.prev();
                  break;
                case 39:
                  this.next();
                  break;
                default:
                  return;
              }
              t.preventDefault();
            }
          }),
          (n.prototype.cycle = function (e) {
            return (
              e || (this.paused = !1),
              this.interval && clearInterval(this.interval),
              this.options.interval &&
                !this.paused &&
                (this.interval = setInterval(
                  t.proxy(this.next, this),
                  this.options.interval
                )),
              this
            );
          }),
          (n.prototype.getItemIndex = function (t) {
            return (
              (this.$items = t.parent().children(".item")),
              this.$items.index(t || this.$active)
            );
          }),
          (n.prototype.getItemForDirection = function (t, e) {
            var n = this.getItemIndex(e);
            if (
              (("prev" == t && 0 === n) ||
                ("next" == t && n == this.$items.length - 1)) &&
              !this.options.wrap
            )
              return e;
            var i = "prev" == t ? -1 : 1,
              o = (n + i) % this.$items.length;
            return this.$items.eq(o);
          }),
          (n.prototype.to = function (t) {
            var e = this,
              n = this.getItemIndex(
                (this.$active = this.$element.find(".item.active"))
              );
            if (!(t > this.$items.length - 1 || t < 0))
              return this.sliding
                ? this.$element.one("slid.bs.carousel", function () {
                    e.to(t);
                  })
                : n == t
                ? this.pause().cycle()
                : this.slide(t > n ? "next" : "prev", this.$items.eq(t));
          }),
          (n.prototype.pause = function (e) {
            return (
              e || (this.paused = !0),
              this.$element.find(".next, .prev").length &&
                t.support.transition &&
                (this.$element.trigger(t.support.transition.end),
                this.cycle(!0)),
              (this.interval = clearInterval(this.interval)),
              this
            );
          }),
          (n.prototype.next = function () {
            if (!this.sliding) return this.slide("next");
          }),
          (n.prototype.prev = function () {
            if (!this.sliding) return this.slide("prev");
          }),
          (n.prototype.slide = function (e, i) {
            var o = this.$element.find(".item.active"),
              r = i || this.getItemForDirection(e, o),
              s = this.interval,
              a = "next" == e ? "left" : "right",
              l = this;
            if (r.hasClass("active")) return (this.sliding = !1);
            var c = r[0],
              u = t.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: a,
              });
            if ((this.$element.trigger(u), !u.isDefaultPrevented())) {
              if (
                ((this.sliding = !0),
                s && this.pause(),
                this.$indicators.length)
              ) {
                this.$indicators.find(".active").removeClass("active");
                var f = t(this.$indicators.children()[this.getItemIndex(r)]);
                f && f.addClass("active");
              }
              var d = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a,
              });
              return (
                t.support.transition && this.$element.hasClass("slide")
                  ? (r.addClass(e),
                    r[0].offsetWidth,
                    o.addClass(a),
                    r.addClass(a),
                    o
                      .one("bsTransitionEnd", function () {
                        r.removeClass([e, a].join(" ")).addClass("active"),
                          o.removeClass(["active", a].join(" ")),
                          (l.sliding = !1),
                          setTimeout(function () {
                            l.$element.trigger(d);
                          }, 0);
                      })
                      .emulateTransitionEnd(n.TRANSITION_DURATION))
                  : (o.removeClass("active"),
                    r.addClass("active"),
                    (this.sliding = !1),
                    this.$element.trigger(d)),
                s && this.cycle(),
                this
              );
            }
          });
        var i = t.fn.carousel;
        (t.fn.carousel = e),
          (t.fn.carousel.Constructor = n),
          (t.fn.carousel.noConflict = function () {
            return (t.fn.carousel = i), this;
          });
        var o = function (n) {
          var i,
            o = t(this),
            r = t(
              o.attr("data-target") ||
                ((i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""))
            );
          if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), o.data()),
              a = o.attr("data-slide-to");
            a && (s.interval = !1),
              e.call(r, s),
              a && r.data("bs.carousel").to(a),
              n.preventDefault();
          }
        };
        t(document)
          .on("click.bs.carousel.data-api", "[data-slide]", o)
          .on("click.bs.carousel.data-api", "[data-slide-to]", o),
          t(window).on("load", function () {
            t('[data-ride="carousel"]').each(function () {
              var n = t(this);
              e.call(n, n.data());
            });
          });
      })(t);
    }.call(e, n("juYr")));
  }
