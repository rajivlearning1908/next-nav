This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

===========================================================================
Key Differences in Next Js Routing
=========================================

File-Based Routing (Built-In): Next.js provides file-based routing out of the box. This means that the file structure in the pages directory directly corresponds to your URL structure. For example, a file named pages/about.js automatically becomes accessible at /about. This greatly simplifies routing, as no additional routing libraries are required.

Server-Side and Static Rendering: Next.js has built-in support for Server-Side Rendering (SSR), Static Site Generation (SSG), and Client-Side Rendering (CSR). Routes can be pre-rendered either at build time (SSG) or on-demand during request time (SSR), offering performance and SEO benefits.

Dynamic Routing: Dynamic routes are handled by using bracket notation in the file names, like pages/posts/[id].js. This allows for easy creation of dynamic pages, and the route parameters are passed as props to the component.


