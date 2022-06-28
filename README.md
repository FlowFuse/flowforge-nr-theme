# FlowForge Node-RED Theme

A set of custom Node-RED themes used when running inside the FlowForge platform.

## Themes included

* forge-light
* forge-dark

## Install

### Install with npm

Run the following command from within the Node-RED user data directory (by default, `~/.node-red`).

```shell
npm install @flowforge/nr-theme
```

### Install from GitHub

Run the following command from within the Node-RED user data directory (by default, `~/.node-red`).

```shell
npm install https://github.com/flowforge/flowforge-nr-theme
```

### Usage

#### Node-RED

To enable this theme, set the `editorTheme.theme` property in your `settings.js` file
to the name of the theme you want to use:

```
module.exports = {
    ...
    editorTheme: {
        theme: "forge-light" // or "forge-dark"
    }
    ...
}
```

## Development

To modify the theme, edit the appropriate theme `scss` file:

 - `forge-light/forge-light-theme.scss`
 - `forge-dark/forge-dark-theme.scss`
 
Then run the build to regenerate the theme css. This requires the Node-RED source
repository checked out somewhere local:

    npm run build --src=/home/nol/github/node-red

This will compile the `forge-light` and `forge-dark` theme files.

*NOTE: `/home/nol/github/node-red` is an example. Update this to your local src directory*
