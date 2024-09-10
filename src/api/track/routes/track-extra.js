module.exports = {
  routes: [
    {
      method: "POST",
      path: "/complete-track",
      handler: "track-extra.completeTrack",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};