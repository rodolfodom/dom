const d = document,
  w = window;

export function smtVideo() {
  let cb = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }

        w.addEventListener("visibilitychange", (e) => {
          if (d.visibilityState === "visible") {
            entry.target.play();
          } else {
            entry.target.pause();
          }
        });
      });
    },
    $video = d.getElementById("SVideo"),
    observer = new IntersectionObserver(cb, { threshold: 0.5 });
  observer.observe($video);
}
