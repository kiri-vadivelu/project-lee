---
layout: article
title: Netlify & Vercel Competing for Jamstack Market
date: 2022-07-07
category: "Architecture"
---

Netlify and Vercel are serverless deployment platforms for web applications, both designed to allow you to deploy as quickly and easily as possible. Both have very similar feature sets, so which one should you use? The core feature set of both Netlify and Vercel is the build + Edge stack. Essentially, you trigger a build step either by using Git or uploading manually.

<!-- excerpt -->

**Build + Edge**

 Once built, your app is automatically deployed to Netlify or Vercel's Edge Network to ensure a fast UX. This makes it incredibly easy to stepup a static site (e.g. a blog like this one), since all you have to do is push your code. They're fairly equal in this matter, so I wouldn't consider either to be better.

**Serverless Functions**

Static sites are all well and good, but most applications need a backend to function. For this purpose, both Netlify and Vercel offer serverless functions via AWS Lambda.

**Netlify**

For Netlify, you create a functions directory in your project folder. You can then add AWS Lambda handlers in JavaScript or Go. Routing is handled based on the directory structure. You can read more at the official documentation here.

**Vercel**

Vercel has a very similar interface, using an api directory in your project, but it pulls out ahead in the features department with its support for Python and Ruby as well as JavaScript and Go, and it also supports a custom Express.js-like (req, res) => {...} format for JavaScript functions, as well as optional Edge caching for responses.

**Server Side Rendering**

Server-Side rendering, or SSR, is a huge win for Vercel, as it's just not really feasible with Netlify. On Vercel, you can deploy a server-side rendered Next.js application within minutes.

**Authentication**

Netlify has a built-in authentication platform based on the GoTrue API which you can easily setup. With Vercel, you'll have to setup authentication some other way.

**Backend for Static Sites**

Netlify provides three features which make it trivially easy to add common functionality to your site:

Netlify Forms: Manage forms and submissions without setting up any backend

Netlify Analytics (Paid): Server-side analytics you can setup with no client-side code whatsoever

Split Testing: Netlify allows you to easily A/B test two deployments

**Pricing**
Both Netlify and Vercel have generous free plans. You can see the full pricing info here, here, and here, but here's a quick comparison:

**Build**
Vercel is ahead here, with a soft limit of 100 build hours / month for free and 400 with the Pro plan ($20/month per member) compared to Netlify's 300 build minutes / month free and then $7/500 minutes. Most projects won't need anywhere near this much time anyway, so it probably won't matter for you.

**Edge**
Both Netlify and Vercel give you 100GB of bandwidth free (although that's a soft limit for Vercel). Netlify sells additional bandwidth at $20/100 and Vercel gives you 1 TB with the Pro plan (also a soft limit).

**Serverless Functions**
Netlify bills based on the number of invocations, whereas Vercel bills based on GB-hours since you can customize your serveless function instances. Netlify gives you 125k invocations free, and then charges "$25+ when exceeded" (your guess is as good as mine). Vercel gives you 100GB-hours free, and 1000GB-hours with the Pro plan.

**Netlify Forms, Identity, and Analytics**
Forms get 100 free submissions, then cost "$19+ when exceeded." Identity gives you 1000 free monthly active users, then charges $99 when exceeded. Analytics costs a flat rate of $9/month.

We can see a clear divergence of interests between Netlify and Vercel, two extremely similar products at first glance. Netlify is focused on making it easy to create client-side, static applications, and delivers on that goal wonderfully. Vercel, on the other hand, focuses on making back-end work simple. If you're creating a static site, Netlify is the clear choice, but if you need more server-side functionality and you don't mind spending a little time, Vercel is the way to go.