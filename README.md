This repository contains the code examples for the Creating custom slotfill post on the WordPress Developer Blog.

## Getting Started

This repo is a monorepo multipackage because it contains several packages (plugins) and is prepared to manage them collectively. To get up and running with it, you will need to make sure that you have installed the prerequisites.

## Prerequisites

[NVM](https://github.com/nvm-sh/nvm#installing-and-updating) - While you can always install Node through other means, we recommend using NVM to ensure you're aligned with the version used by our development teams. Our repository contains an .nvmrc file which helps ensure you are using the correct version of Node.

[PNPM](https://pnpm.io/installation) - This monorepo utilizes PNPM to manage project dependencies and run various scripts involved in building and testing projects. You can easily install it with `npm i -g pnpm`.

Quick Start Guide
After cloning this repo and entering into this projects's folder (`cd creating-custom-slotfills`), do the following from the root of the project:

```bash
# Set your Node version to the right one for this project (as defined on .nvmrc)
nvm use
# Install the dependencies for all of the plugins
pnpm install
# Launch a build process for all of the plugins in the monorepo
pnpm run start
```

At this point you are now ready to begin developing and testing the examples.

This repository uses `wp-env` and provides a `.wp-env.json` configuration file to make set up quick and easy.

Install `wp-env` globally with `npm -g i @wordpress/env` and once installed, run `wp-env start` from the project root to start a local development environment with preinstalled plugins.

For more information on the `@wordpress/env/` package refer to the [official documentation](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/)
