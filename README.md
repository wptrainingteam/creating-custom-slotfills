This repository contains the code examples for the Creating custom slotfill post on the WordPress Developer Blog.

## Getting Started

This repo is a monorepo multipackage because it contains several packages (plugins) and is prepared to manage them collectively. To get up and running with it, you will need to make sure that you have installed the prerequisites.

## Prerequisites

[NVM](https://github.com/nvm-sh/nvm#installing-and-updating) - While you can always install Node through other means, we recommend using NVM to ensure you're aligned with the version used by our development teams. Our repository contains an .nvmrc file which helps ensure you are using the correct version of Node.

[PNPM](https://pnpm.io/installation) - This monorepo utilizes PNPM to manage project dependencies and run various scripts involved in building and testing projects. You can easily install it with `npm i -g pnpm`.

Quick Start Guide
After cloning this repo and entering into this projects's folder (cd gutenberg-examples-2023), do the following from the root of the project:

```bash
# Set your Node version to the right one for this project (as defined on .nvmrc)
nvm use
# Install the dependencies for all of the plugins
pnpm install
# Launch a build process for all of the plugins in the monorepo
pnpm run start
```

At this point you are now ready to begin developing and testing the examples.

To see the examples in action you have several options:

-   Run `npx @wp-now/wp-now start` from any plugin folder to use [`wp-now`](https://github.com/WordPress/playground-tools/tree/trunk/packages/wp-now) to quickly launch a WordPress installation with that specific plugin installed.
-   Use your own WordPress installation to install the plugin (as `.zip`) with the example you're interested in.
    -   Run `pnpm run plugin-zip` from the root of the project to get the zip version of each plugin at `<plugin-folder>/@gutenberg-examples/<plugin-folder>.zip`.
-   Copy the plugins folders for the examples you're interested in under the `plugins` folder of your own WordPress installation.
-   Use `wp-env` as explained in [Development > WordPress Local Development Environment](DEVELOPMENT.md##wordpress-local-development-environment)
