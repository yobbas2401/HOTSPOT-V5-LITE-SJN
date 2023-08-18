tsParticles.load("tsparticles", {
  fps_limit: 60,
  interactivity: {
    detect_on: "canvas",
    events: {
      ondiv: {
        enable: true,
        elementId: "login",
        mode: "bubble",
        type: "rectangle"
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 5,
        speed: 3,
        color: ["#ff0000", "#ff7700"]
      }
    }
  },
  particles: {
    color: {
      value: ["#f11414", "#1254ef","#11925c","#5e0891","#ffffff"]
    },
    links: {
      color: "random",
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1
    },
    move: {
      collisions: true,
      direction: "none",
      enable: true,
      out_mode: "bounce",
      random: false,
      speed: 3,
      straight: false
    },
    number: { density: { enable: true, value_area: 800 }, value: 80 },
    opacity: {
      animation: { enable: true, minimumValue: 0.1, speed: 1, sync: false },
      random: true,
      value: 0.6
    },
    shape: {
      type: ["circle", "triangle"]
    },
    size: {
      animation: {
        enable: true,
        minimumValue: 2,
        speed: 1,
        sync: false
      },
      random: {
        enable: true,
        minimumValue: 2
      },
      value: 9
    }
  },
  retina_detect: true
});