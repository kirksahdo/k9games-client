# Boilerplate Apps Router

This is a boilerplate repository for a Next.js application. It includes various configurations for linting, testing, styling, and component documentation.

## Features

- **Next.js 15**: Latest version of Next.js with App Router support.
- **React 19**: Utilizes the latest React version for enhanced performance and features.
- **TypeScript**: Type safety for better maintainability.
- **ESLint & Prettier**: Linting and formatting to ensure code consistency.
- **React Component Test**: Configured for unit and integration testing.
- **Storybook**: A component-driven development environment.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **Husky & Lint-Staged**: Pre-commit hooks to enforce code quality.
- **Plop**: Scaffolding tool for generating components and other boilerplate code.

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/kirksahdo/boilerplate-apps-router.git
cd boilerplate-apps-router
npm install
```

## Scripts

### Development

```sh
npm run dev
```

Starts the Next.js development server.

### Build

```sh
npm run build
```

Builds the application for production.

### Start

```sh
npm run start
```

Runs the built application in production mode.

### Linting

```sh
npm run lint
```

Runs ESLint to check for code issues.

### Testing

```sh
npm run test
```

Runs Jest tests.

```sh
npm run test:watch
```

Runs tests in watch mode.

```sh
npm run test:ci
```

Runs tests in CI mode.

### Storybook

```sh
npm run storybook
```

Starts Storybook for component development.

```sh
npm run build-storybook
```

Builds the Storybook static site.

### Code Generation

```sh
npm run generate
```

Uses Plop to scaffold new components or features.

## License

This project is open-source and available under the MIT License.
