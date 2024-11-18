/** @format */

export const particles = {
  particles: {
    number: { value: 20 },
    color: { value: ["#0d6efd", "#1f77d1", "#4ea8f6"] }, // Different shades of blue
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: true,
        speed: 0.2,
        opacity_min: 0.3,
        sync: true,
      },
    },
    size: {
      value: 50,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 450,
      color: "#4ea8f6", // A matching blue color for line links
      opacity: 0.1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: ["bubble"],
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 200,
        size: 17,
        duration: 1,
        opacity: 0.8,
        speed: 2,
      },
    },
  },
  retina_detect: true,
};
