module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        prismPreset: `dracula`,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Pandas Eating Lotsa Yummies!`,
    author: "Mark Chaves",
    description: "Pandas munching on yummy stuff.",
    siteUrl: "https://www.caughtmyeye.cc/",
    social: [
      {
        name: "Twitter",
        url: "https://twitter.com/marklchaves",
      },
      {
        name: "GitHub",
        url: "https://github.com/marklchaves",
      },
    ],
    displayFooterMessage: false,
  },
}
