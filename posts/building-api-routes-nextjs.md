---
title: 'Building API Routes in NextJS'
date: '2022-11-08'
image: getting-started-nextjs.png
excerpt: NextJS allows you to build fullstack applications by creating API endpoints directly in your project. No separate backend needed!
isFeatured: true
---

One of the most exciting discoveries in my NextJS journey was realizing I could build **API endpoints** right inside my NextJS application. No need for a separate Express server!

## What Are API Routes?

API Routes let you create serverless API endpoints as part of your NextJS app. Any file inside `pages/api` becomes an API endpoint.

For example, `pages/api/hello.js` maps to `/api/hello`.

## Creating Your First API Route

Here's a simple API route that returns JSON data:

```js
// pages/api/posts.js

export default function handler(req, res) {
  const posts = [
    { id: 1, title: 'First Post' },
    { id: 2, title: 'Second Post' }
  ];

  res.status(200).json(posts);
}
```

You can now fetch from this endpoint in your frontend code:

```js
const response = await fetch('/api/posts');
const posts = await response.json();
```

## Handling Different HTTP Methods

You can handle different request methods in the same API route:

```js
export default function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request
    res.status(200).json({ message: 'GET request' });
  } else if (req.method === 'POST') {
    // Handle POST request
    const data = req.body;
    res.status(201).json({ message: 'Created', data });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
```

## Dynamic API Routes

Just like pages, API routes support dynamic parameters:

```js
// pages/api/posts/[id].js

export default function handler(req, res) {
  const { id } = req.query;
  
  // Fetch post by id from database
  const post = { id, title: 'Dynamic Post' };
  
  res.status(200).json(post);
}
```

This handles requests to `/api/posts/1`, `/api/posts/2`, etc.

## Real-World Use Cases

I've used API routes for:
- Form submissions and validation
- Authentication endpoints
- Database operations
- Third-party API integrations
- Webhook handlers

Having frontend and backend in **one project** simplifies development and deployment significantly!