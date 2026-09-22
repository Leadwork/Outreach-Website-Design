# Blog content

This folder holds every blog post as a single MDX file.

To publish a new post:

1. Create `<your-slug>.mdx` in this folder.
2. Add the frontmatter shown below.
3. Write the post in Markdown / MDX.
4. Commit and push — Vercel deploys automatically.

```mdx
---
title: "Your Post Title"
date: "2026-06-01"
category: "Cold Email"
excerpt: "Short 140-180 character description used for SEO and the card preview."
author: "MD. Al Amin"
coverImage: ""
---

## Section heading

Your content here…
```

See the top-level `README.md` for full details on fields, deployment, and editing other parts of the site.


## Editorial checks before publication

- Label hypothetical numbers and templates as illustrative; never describe them as real campaign results.
- Publish results only with evidence, permission, dates, sample size, metric definitions, and limitations.
- Link provider requirements to official documentation. Distinguish internal preferences from provider rules.
- Check prices, terms, features, and billing periods against current vendor sources; otherwise omit the figure.
- Do not claim guaranteed inbox placement, platform compliance, or freedom from restrictions.
- Align package names, prices, allowance units, scope, and timelines with the pricing page.
- Use one shared end-of-article CTA; do not add another booking block in MDX.
- Preserve established slugs when updating content; set updatedAt to the actual review date.
