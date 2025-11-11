# Sign In with Base x Next.js App Router x NextAuth Demo

This example app shows how to use Sign In With Base in a Next.js app(App router) with a backend API, using [NextAuth.js](https://next-auth.js.org/) for authentication. It also works as a mini app.

## Getting Started

1. Install dependencies

```sh
$ git clone https://github.com/dylsteck/siwb-next-app-router.git && cd siwb-next-app-router
$ bun install
```

2. Create a new `.env.local` with an `AUTH_SECRET` credential for Next Auth
   
```sh
$ cp .env.example .env.local
$ npx auth secret
```

3. Run the app locally

```sh
$ bun run dev
```