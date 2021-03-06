module.exports = {
  siteMetadata: {
    title: `Praktikakohvik 2021`,
    description: `TalTech Praktikakohvik 2021 Discordis`,
    author: `Germo Linder`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/content/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `svg`,
        path: `${__dirname}/src/images/svg`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `png`,
        path: `${__dirname}/src/images/png`,
      },
    },
    `gatsby-plugin-recaptcha`,
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
         async: false,
         defer: false,
         args: `?onload=onloadCallback&render=6Lda10UaAAAAAO6CbkZsichV5pPiDwxjDY58ZHE7`,
      },
   },
   {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Poppins\:300,400,500,700`,
        `Lato\:400,700`,
        `Montserrat\:400,600`
      ],
      display: 'swap'
    }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Praktikakohvik 2021`,
      short_name: `Praktikakohvik 2021`,
      icon: `src/images/favicon.png`
    },
  },
  {
    resolve: `gatsby-plugin-intl`,
    options: {
      // language JSON resource path
      path: `${__dirname}/src/intl`,
      // supported language
      languages: [`et`, `en`],
      // language file path
      defaultLanguage: `et`,
      // option to redirect to `/ko` when connecting `/`
      redirect: true,
    },
  },
  
   
  
  ],
};
