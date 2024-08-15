This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies using yarn:

```bash
yarn
```

then you can run development server using:

```bash
yarn dev
```

The server is available on url `http://localhost:3000`. Please note that if the port is changed,
the `NEXT_PUBLIC_BASE_URL` must be changed as well, otherwise it will not work as the api won't be available.

Storybook is also available when running:

```bash
yarn storybook
```

it will open on standard port `6006`. Storybook contains stories of elements only (page components are not transformed
into stories).

## API

To simulate data flow, api route `/day` was created. It will return mocked data for several hours a day with possibility
to return empty array (probability is 20%).
