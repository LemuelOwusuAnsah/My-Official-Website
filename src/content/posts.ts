export type Post = {
  slug: string
  titleKey: string
  excerptKey: string
  dateKey: string
  tagKey: string
  readTimeKey: string
  cover: string
  coverCredit: string
  body: string
}

export const posts: Post[] = [
  {
    slug: 'design-to-fullstack',
    titleKey: 'post1_title',
    excerptKey: 'post1_excerpt',
    dateKey: 'post1_date',
    tagKey: 'post1_tag',
    readTimeKey: 'post1_readtime',
    cover: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=1600&q=80&auto=format&fit=crop',
    coverCredit: 'Photo — Unsplash',
    body: `
I started as a designer. Layouts in Canva, mockups in Photoshop, then turning those mockups into real pages with HTML and CSS. For a while, that was enough.

Then something broke. A client asked for a simple login system, and I realised I could design the perfect screen but I could not make the backend behind it work. That gap bothered me for months.

## The turn

I picked up PHP first. Not because it was trendy — it was the fastest path to shipping a real dynamic product for the clients I was already serving. Then MySQL, then Apache, then Linux servers, then deployment.

The LAMP stack gets dismissed as old. In Ghana, it is still the most reliable tool for building real business software that runs on cheap hosting and works.

## What design gave me

Design taught me that the front-end is the promise. Full-stack taught me that the back-end is the trust.

If the UI is beautiful but the form loses data, the product is broken. If the database is clean but the page is unreadable, the product is still broken. You need both. I stopped being one and became the other — then eventually both.

## What I would tell my younger self

Pick the boring technology that lets you ship. Learn it deeply. Then stack another layer on top of it once it works.

That is how I ended up here.
    `.trim(),
  },
  {
    slug: 'ai-workflows',
    titleKey: 'post2_title',
    excerptKey: 'post2_excerpt',
    dateKey: 'post2_date',
    tagKey: 'post2_tag',
    readTimeKey: 'post2_readtime',
    cover: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80&auto=format&fit=crop',
    coverCredit: 'Photo — Unsplash',
    body: `
Nine AI certificates from Google and the University of Pennsylvania taught me one thing clearly: most AI talk is theatre. The tools that matter are the ones you actually use.

Here is my real stack, quietly.

## What I use daily

**For drafting and editing.** Not for writing — for tightening. I write a first draft with my own voice, then use AI to trim fat sentences and suggest better structure. The voice stays mine.

**For code scaffolding.** When I need a repetitive component in React or a specific PHP query pattern, I ask once and adapt. Saves 20 minutes, not two hours.

**For translation.** When I build a multilingual site, I use AI translation as a starting point and review the important pages by hand. Accuracy is 80% out of the box — good enough to ship, not good enough to trust blindly.

## What I dropped

**AI-generated brand copy.** It is always slightly off. I can smell it on other sites. Clients can too.

**AI-written emails to clients.** Emails are relationships. I write those myself.

**AI-generated blog posts.** What you are reading right now is written by me. If I outsource this, why would anyone read it?

## The rule

AI should remove friction, not voice. If a tool makes the output faster but less you, the trade is not worth it.

That is my whole framework. Nothing fancier than that.
    `.trim(),
  },
  {
    slug: 'ghana-software',
    titleKey: 'post3_title',
    excerptKey: 'post3_excerpt',
    dateKey: 'post3_date',
    tagKey: 'post3_tag',
    readTimeKey: 'post3_readtime',
    cover: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=1600&q=80&auto=format&fit=crop',
    coverCredit: 'Photo — Unsplash',
    body: `
There is a version of software building taught in textbooks, and there is the version that happens when you are working from Accra with a client who has one laptop and patchy WiFi.

I have only really learned the second.

## Constraint one: bandwidth is real

Every kilobyte of a page matters here more than in most markets. Images get compressed twice. Fonts get subsetted. JavaScript bundles get trimmed until they cry. Anything that can be a static asset should be a static asset.

This is why I still love the LAMP stack. It does not ask the end user to download a 4MB framework to read a page.

## Constraint two: trust is built slowly

Clients do not care what stack you use. They care that the thing works after the meeting is over.

I learned to under-promise and over-ship. To say "this will be live Friday" and have it live Thursday. To send screenshots before they ask. To make the first version smaller than they want and better than they expected.

That habit has earned more repeat work than any portfolio has.

## Constraint three: the stack is not the point

I have seen people argue for weeks about React vs Vue vs Svelte. Every one of them builds the wrong thing faster than the other. The stack is not the point. The product is.

Pick the tool you can maintain. Ship it. Move on.

## What I keep

Every project I have shipped from Accra has taught me the same three things:

- Ship smaller than you think you should
- Trust is slower than money
- The stack is never the argument worth winning

That is the whole manual.
    `.trim(),
  },
  {
    slug: 'lamp-stack-alive',
    titleKey: 'post4_title',
    excerptKey: 'post4_excerpt',
    dateKey: 'post4_date',
    tagKey: 'post4_tag',
    readTimeKey: 'post4_readtime',
    cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80&auto=format&fit=crop',
    coverCredit: 'Photo — Unsplash',
    body: `
Every few years a headline declares that PHP is dead. I keep building things with it that run for years without a single support ticket.

The LAMP stack — Linux, Apache, MySQL, PHP — is not fashionable. It is reliable, boring, and cheap to run. That is exactly the point.

## Why boring wins here

Modern JavaScript frameworks are wonderful. I use React for this site. But every layer of abstraction you add is a layer that can break, drift, or need a security patch on a Tuesday afternoon.

For a client running a small business, the difference between a Next.js app and a clean PHP app is invisible. What they notice is whether the thing loads in under two seconds on a 4G connection and stays up.

## What PHP actually looks like in 2026

The PHP I write today is nothing like the PHP tutorials from 2010. It is typed, namespaced, dependency-managed, and secure by default. It runs on cheap shared hosting, dedicated servers, and modern cloud stacks. It does not care where it runs.

The frameworks have caught up. PHP 8 is fast. Opcache makes it faster. For a lot of what real businesses actually need — form handling, auth, dashboards, e-commerce — PHP is not just adequate, it is optimal.

## When to reach for something else

I will not pretend PHP is the right answer for everything. For realtime, heavy client-side apps, or data science work, the ecosystem is elsewhere.

But if you are building a CRUD-heavy web product, running on a modest budget, needing to hand it off to another developer who will still be around in five years — LAMP is still one of the safest bets in software.

Boring ships. Fashionable argues.
    `.trim(),
  },
  {
    slug: 'one-laptop-matters',
    titleKey: 'post5_title',
    excerptKey: 'post5_excerpt',
    dateKey: 'post5_date',
    tagKey: 'post5_tag',
    readTimeKey: 'post5_readtime',
    cover: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=1600&q=80&auto=format&fit=crop',
    coverCredit: 'Photo — Unsplash',
    body: `
There is a machine I keep in mind on every project I design. It is a five-year-old laptop, running a mid-range browser, on a 3G connection, in a room with the fan on.

That is the real benchmark.

Not Lighthouse on a MacBook Pro. Not a 5G speed test from an office in a wealthy city. If the design works on that laptop, it works everywhere.

## What that changes

**Images get interrogated.** Every hero image has to justify its file size. Every icon has to be a real SVG. Every animation has to be cheap enough that it does not eat the CPU.

**Fonts get pruned.** Subset them. Load two weights, not six. Skip them altogether if they do not carry the brand.

**JavaScript gets cut.** Not every interactivity is worth shipping. Most modals, popups, and carousels are worth deleting.

**Colors get honest.** High contrast, legible type, nothing that relies on a perfect screen to read.

## The surprise

The site gets faster for everyone. Designing for the harder case never hurts the easier one.

A page that loads fast on a bad connection is a page that loads instantly on a good one. A page that looks clean on a five-year-old laptop looks sharp on a brand new one.

Design for the user who has the least. Everyone else gets the gift.
    `.trim(),
  },
  {
    slug: 'studio-to-software',
    titleKey: 'post6_title',
    excerptKey: 'post6_excerpt',
    dateKey: 'post6_date',
    tagKey: 'post6_tag',
    readTimeKey: 'post6_readtime',
    cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80&auto=format&fit=crop',
    coverCredit: 'Photo — Unsplash',
    body: `
Running a studio is different from being a developer. A developer ships software. A studio ships outcomes — for people who may not fully know what they want when the meeting begins.

Four years of doing both have taught me the parts no textbook covers.

## The first meeting is not about the product

It is about the person. What they are actually afraid of. What they are actually trying to prove — to themselves, to a board, to a spouse, to a rival.

Listen long enough and the brief reveals itself. It is never what the document said.

## Cheap work is expensive

Every project I have underpriced has cost me more than it paid. Not because the work was harder, but because it was treated as less valuable — by the client and eventually by me.

Price is a signal. A modest but honest price opens a better working relationship than a bargain ever will.

## Deadlines are a form of respect

A deadline is a promise that the client's life can continue around it. Miss one casually and you have cost them something they cannot buy back.

I have learned to under-promise on dates and over-deliver on quality. That combination buys more repeat work than any marketing ever has.

## The quiet craft

The most valuable thing I have built for clients is not code. It is confidence — knowing that if something breaks, someone will answer the phone, and it will be fixed by end of day.

That is not a technical skill. It is a studio skill. And it is the reason some clients have followed me through three different job changes.

Software is not finished when it ships. It is finished when the person who paid for it stops worrying about it.
    `.trim(),
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getRelated(slug: string, count = 3): Post[] {
  return posts.filter((p) => p.slug !== slug).slice(0, count)
}
