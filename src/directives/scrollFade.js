export default {
  mounted(el) {
    el.classList.add('scroll-fade');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    observer.observe(el);
    el.__scrollFadeObserver__ = observer;
  },
  unmounted(el) {
    if (el.__scrollFadeObserver__) {
      el.__scrollFadeObserver__.disconnect();
      delete el.__scrollFadeObserver__;
    }
  }
};
