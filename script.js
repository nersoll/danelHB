(function () {
  const form = document.querySelector("[data-quest]");
  if (!form) return;

  const input = form.querySelector("input[type='text']");
  const btn = form.querySelector("button");
  const msg = form.querySelector(".msg");

  const next = form.getAttribute("data-next");
  const right = (form.getAttribute("data-answer") || "").trim().toLowerCase();

  const normalize = (s) =>
    (s || "")
      .trim()
      .toLowerCase()
      .replaceAll("ё", "е")
      .replace(/\s+/g, " ");

  const go = () => {
    if (!next) return;
    window.location.href = next;
  };

  const check = () => {
    const val = normalize(input?.value);
    if (!right) {
      // Если правильный ответ не задан — просто идём дальше
      go();
      return;
    }
    if (val === normalize(right)) {
        if (msg) {
            msg.textContent = "Верно! ✨ Переходим дальше…";
            msg.className = "msg ok";
        }

      setTimeout(go, 450);
    } else {
        if (msg) {
            msg.textContent = "Хм… попробуй ещё раз 🙂";
            msg.className = "msg bad";
        }
      input?.focus();
      input?.select?.();
    }
  };

  btn?.addEventListener("click", (e) => {
    e.preventDefault();
    check();
  });

  input?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      check();
    }
  });
})();







var end = Date.now() + (3 * 1000);

// go Buckeyes!
var colors = ['#e311af', '#ffffff'];

(function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());