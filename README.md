# NUWII Front-end
This is the front-end application for the [NUWII](https://www.nuwii.com.br/) website, built in React.js

### Quick-start
Run the application using the command `make run`. This will run the website into a [Docker](https://www.docker.com/) container.

If you prefer running the application without Docker, follow the steps below:
```
npm install -g pnpm
pnpm install
pnpm dev
```

For building the app, run the command below:
```
pnpm build
```

### Deployment
The [Github workflow](.github/workflows/deploy.yml) already deploys the application to the Github Pages, after pushing a new commit. So, you don't have to worry about it.
