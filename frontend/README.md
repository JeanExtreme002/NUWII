# Frontend

This is the frontend server built in React for the website

## Getting Started (quick run)

The entire project has been built to run entirely on [Docker](https://www.docker.com/).

Create a `.env` from `.env.sample` and execute the command below to run the application:

```
$ make run
```

Now, open the website on your browser at [localhost:3000](http://localhost:3000) — if you did not change the default settings.

## Getting Started (development)

Install the dependencies for the project, using [pnpm](https://pnpm.io/):

```
$ pnpm i
```

Now, you can run the server with:

```
$ pnpm dev
```

Build the project and run it using the following commands:
```
$ pnpm build
$ pnpm start
```

## Tests

Run commands below to test the project:

```
$ pnpm test        # Run the tests
$ pnpm test:watch  # Run the tests in watch mode
$ pnpm test:e2e    # Run the integration tests using Cypress
```

## Coding Style

Run the commands below to properly format the project's code:

```
$ pnpm lint
$ pnpm format
```

Check out the `package.json` to learn about more commands.
