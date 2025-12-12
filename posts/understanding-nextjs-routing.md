---
title: 'Understanding NextJS Routing System'
date: '2022-10-20'
image: getting-started-nextjs.png
excerpt: The file-based routing system in NextJS is one of its most powerful features. Learn how to create dynamic routes and nested paths effortlessly.
isFeatured: false
---

When I first started exploring NextJS, the routing system completely changed how I thought about navigation in React apps.

Unlike traditional React where you need to set up React Router and manually configure all your routes, NextJS uses a **file-based routing system** that feels incredibly natural.

## How File-Based Routing Works

Every file you create in the `pages` directory automatically becomes a route. It's that simple!

For example:
- `pages/index.js` → `/`
- `pages/about.js` → `/about`
- `pages/blog/index.js` → `/blog`

## Dynamic Routes

The real magic happens with dynamic routes. You can create dynamic segments by wrapping the filename in square brackets:

```js
// pages/posts/[id].js

import { useRouter } from 'next/router';

function Post() {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
}

export default Post;
```

This single file handles routes like `/posts/1`, `/posts/2`, or `/posts/getting-started` - whatever you need!

## Nested Routes

Creating nested routes is as easy as creating nested folders:

```
pages/
  blog/
    index.js        → /blog
    [slug].js       → /blog/:slug
    categories/
      [category].js → /blog/categories/:category
```

This structure makes your codebase **incredibly organized** and intuitive. You can see the entire routing structure just by looking at your file system.

The best part? No configuration files, no route definitions, just create a file and it works!