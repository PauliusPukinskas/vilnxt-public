# VILNXT / Limited frontend showcase

> **PUBLIC SHOWCASE ONLY. THE MAJORITY OF THE PRODUCTION SOURCE CODE IS PRIVATE.**
>
> **TIK PRISTATYMAS. DIDŽIOJI DALIS TIKROJO PROGRAMINIO KODO YRA PRIVATI.**

This small React/Vite UI example demonstrates a few **presentation-only** elements from VILNXT's design language. It is **not** the application shown at [vilnxt.com](https://vilnxt.com/).

## What's here

* `src/components/BrandMark.jsx`: small presentational component reproduced from the private project's frontend, with a comment explaining its showcase role.
* `src/components/EventDate.jsx`: small presentational date badge component reproduced from the private frontend, with a comment.
* `src/components/EventPreviewCard.jsx`: **simplified illustrative adaptation** of the private event card's visual layout, without any private dependencies or event fetching.
* `src/theme.css`: small, standalone public stylesheet that reuses the visible VILNXT visual identity and a limited set of basic design colors.
* `src/App.jsx`: **newly authored, non-production demonstration**, including local-only search, topic chips and bookmark state.

The three sample events and dates are **fictional placeholders**, not confirmed local events.

## Run the public UI sample

Requires Node.js 22.22+.

```bash
cd showcase
npm install
npm run dev
```

This sample needs no API keys, database, authentication, backend, live API or other private service.

## Intentionally excluded

The production frontend, real event catalogue, backend, PostgreSQL schemas, authentication and authorization, paid functionality, moderation, data ingestion, algorithms, private integrations, infrastructure, credentials, and proprietary application logic **are not released**.

**Judges:** The public repository is deliberately incomplete. Evaluate VILNXT via the [live product](https://vilnxt.com/). For any required private-source verification, contact the team.

**Legal:** Copyright (c) 2026 VILNXT Team and respective rights holders. All rights reserved. This code is proprietary and not licensed under an open-source license. See the repository [LICENSE](../LICENSE).
