import Scrollbar from "smooth-scrollbar";
import $ from "jquery";

export default function animate(_this) {
  $(".intro-card-component").each(function() {
    const load1 = _this.$scrollmagic
      .scene({
        triggerElement: this,
        triggerHook: 0.6,
        reverse: false
      })
      .setTween(
        this,
        1,
        {
          css: {
            y: -50,
            opacity: 1
          }
        },
        {
          ease: "power4.easeOut"
        }
      );
    // .addIndicators({ name: "2 (duration: 300)" });

    _this.$scrollmagic.addScene(load1);
  });

  const scene1 = _this.$scrollmagic
    .scene({
      triggerElement: "body",
      triggerHook: 0,
      duration: "100%"
    })
    .setTween(".intro-left", {
      y: "-15vh"
    });

  const scene2 = _this.$scrollmagic
    .scene({
      triggerElement: "body",

      // {0,0.5,1} - animations starts from {top,center,end} of window
      triggerHook: 0,

      // Duration of animation
      duration: "100%"
    })
    .setTween(".intro-right", {
      y: "-30vh"
    });

  if ($(window).width() > 992) {
    _this.$scrollmagic.addScene(scene1);
    _this.$scrollmagic.addScene(scene2);
  }

  let y = 0;

  let scroll = Scrollbar.init(document.querySelector("#app"), {
    damping: 0.05,
    alwaysShowTracks: true
  });

  let isChrome =
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  // update scrollY if chorme
  if (isChrome) {
    _this.$scrollmagic.scrollPos(function() {
      return y;
    });
  }

  var scrollmagic = _this.$scrollmagic;

  scroll.addListener(function(status) {
    y = status.offset.y;
    scrollmagic.update();
  });
}
