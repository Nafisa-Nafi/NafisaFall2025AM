
$(document).ready(function () {

    $(".more-btn").on("click", function () {
        const $btn = $(this);
        const $moreDiv = $btn.next(".more-content");
        $moreDiv.slideToggle("slow", function () {
            if ($moreDiv.is(":visible")) {
                $btn.text("Less...");
            } else {
                $btn.text("More...");
            }
        });
    });

});

// BACK TO TOP BUTTON
$(document).ready(function () {
    $("#back-to-top").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});



//festival page
function makeDraggable(el) {
    let startX = 0, startY = 0, startLeft = 0, startTop = 0;

    el.style.touchAction = "none";
    el.addEventListener("pointerdown", (e) => {
        e.preventDefault();

        const festivalArea = document.getElementById("festival-area");
        if (!festivalArea) return;
        el.style.zIndex = 9999;

        const rect = el.getBoundingClientRect();
        const areaRect = festivalArea.getBoundingClientRect();


        if (!festivalArea.contains(el)) {
            festivalArea.appendChild(el);
        }


        el.style.position = "absolute";
        el.style.left = (rect.left - areaRect.left) + "px";
        el.style.top = (rect.top - areaRect.top) + "px";
        el.style.right = "auto";
        el.style.bottom = "auto";

        startX = e.clientX;
        startY = e.clientY;
        startLeft = parseFloat(el.style.left) || 0;
        startTop = parseFloat(el.style.top) || 0;

        el.setPointerCapture(e.pointerId);

        const onMove = (ev) => {
            const dx = ev.clientX - startX;
            const dy = ev.clientY - startY;
            el.style.left = (startLeft + dx) + "px";
            el.style.top = (startTop + dy) + "px";
        };

        const onUp = () => {
            el.removeEventListener("pointermove", onMove);
            el.removeEventListener("pointerup", onUp);
            el.removeEventListener("pointercancel", onUp);
        };

        el.addEventListener("pointermove", onMove);
        el.addEventListener("pointerup", onUp);
        el.addEventListener("pointercancel", onUp);
    });
}

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".festival-item").forEach(makeDraggable);
});


// p5 Petals
(() => {
  if (!document.body.classList.contains("spring")) return;

  // if p5 not loaded, stop
  if (typeof p5 === "undefined") return;

  new p5((p) => {
    const petals = [];
    const COUNT = 35;

    function addPetal() {
      petals.push({
        x: p.random(p.width),
        y: p.random(-p.height, 0),
        r: p.random(8, 18),
        s: p.random(0.8, 1.6),
        a: p.random(p.TWO_PI),
      });
    }

    p.setup = () => {
      const c = p.createCanvas(p.windowWidth, p.windowHeight);
      c.id("p5-bg");
      for (let i = 0; i < COUNT; i++) addPetal();
    };

    p.draw = () => {
      p.clear(); // transparent background

      for (const pt of petals) {
        pt.y += pt.s;
        pt.x += Math.sin(pt.a + pt.y * 0.01) * 0.6;

        if (pt.y > p.height + 30) {
          pt.y = -30;
          pt.x = p.random(p.width);
        }

        p.noStroke();
        p.fill(255, 170, 210, 120);
        p.ellipse(pt.x, pt.y, pt.r * 1.2, pt.r);
      }
    };

    p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight);
  });
})();
