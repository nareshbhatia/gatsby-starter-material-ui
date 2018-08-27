# Gatsby Material-UI Starter
The Gatsby Material-UI starter (based on Gatsby default starter).

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

The Material-UI theme is configured in `src/getPageContext.js`. This theme is propagated down a component tree using the `withRoot` HOC (see `src/withRoot.js`). Consequently, any component that uses Material-UI components should be wrapped with this HOC (e.g. `src/components/header`). Additionally, if you create your own JSS styles in a component, then you need to wrap the component with the `withStyles` HOC in order to pass your custom styles down (e.g. `src/components/layout.js`).

Note that I have removed the global styles defined by the Gatsby starter template (under `src/components/layout.css`). Instead I have used `gatsby-plugin-typography` + `typeface-roboto` to provide global styles (somewhat) compatible with Material Design. You can delete these global styles if you don't need them.

## Prerequisites

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

Dev Build
---------
```bash
$ yarn
$ gatsby develop
```

Now point your browser to http://localhost:8000/.

Production Build
----------------
```bash
$ gatsby build
```

Now deploy the public folder to your production web server.
