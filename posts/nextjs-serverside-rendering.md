---
title: 'Server-Side Rendering with NextJS'
date: '2022-10-25'
image: getting-started-nextjs.png
excerpt: Discover how NextJS makes server-side rendering simple and why it matters for performance and SEO in modern web applications.
isFeatured: true
---

One of the biggest revelations in my NextJS journey was understanding how **server-side rendering** actually works and why it's so important.

Coming from a pure React background where everything renders on the client, NextJS opened my eyes to a better way.

## Why Server-Side Rendering Matters

When you build a traditional React app, the browser receives an almost empty HTML file with a JavaScript bundle. The content only appears after JavaScript executes. This means:

- Search engines might struggle to index your content
- Users see a blank page while JavaScript loads
- Initial page load feels slower

NextJS solves this by rendering your React components on the server **before** sending HTML to the browser.

## Using getServerSideProps

The `getServerSideProps` function runs on every request and lets you fetch data on the server:

```js
export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: { data }
  };
}

function Page({ data }) {
  return (
    <div>
      <h1>Server-Rendered Data</h1>
      <p>{data.content}</p>
    </div>
  );
}

export default Page;
```

The page is fully rendered with data on the server, so users see content immediately!

## When to Use SSR

I've learned that SSR is perfect for:
- Pages with frequently changing data
- Content that needs to be indexed by search engines
- Pages where you need access to request-time information

However, for static content that doesn't change often, Static Site Generation (SSG) with `getStaticProps` is even better!

The flexibility to choose between SSR, SSG, or client-side rendering on a **per-page basis** is what makes NextJS so powerful.