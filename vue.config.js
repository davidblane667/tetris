module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @use "sass:math";
          @import "@/styles/vars.scss";
        `,
      },
    },
  },
};
