<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Forno Lume START — Agent Instructions

These instructions apply to Codex, Cursor Agent, Lovable, Claude Code and any other agent working in this repository.

## Project identity

Forno Lume START is:

- a completed, remediated, verified and deployed Hospitality START website;
- the approved visual baseline for the Tretnix Hospitality family;
- the approved motion-language baseline for the Tretnix Hospitality family;
- the approved reference for a premium single-page Hospitality START product;
- the source project from which Forno Lume BUSINESS evolved;
- the pilot repository for the Tretnix controlled development workflow.

Repository:

```text
https://github.com/AdamDariOfficial/forno-lume-START.git
```

Deployment:

```text
https://forno-lume.tretnix.com
```

## Verified project state

Confirmed as of 18 July 2026 against the authoritative technical-closure source
baseline `d15f639267dfdd57194536154abfa1d0ff3b4542` (merge pull request #8,
`fix: complete START technical closure`).

Later documentation-only commits may advance `main` without replacing this
source-code closure baseline.

- the agent foundation is merged into `main`;
- the static read-only audit was completed at the historical baseline
  `39d58126abb2fa9b63070e047db06c8027aaef6f`;
- the audit received an independent quality-control pass;
- the approved remediation packages and technical closure are complete and merged into `main`;
- production browser verification was completed successfully by the project owner;
- the project is frozen after technical closure under the rules below.

## Completed remediation and closure packages

### Tretnix compliance

- The approved footer attribution is implemented.
- The approved mobile editorial order is implemented.

### Accessibility hardening

- Hidden-navbar focus behavior is hardened.
- Mobile drawer keyboard handling is complete.
- FAQ motion respects `prefers-reduced-motion`.

### Motion system

- Below-the-fold reveals are consistent.
- Reveal timing follows editorial sequencing with restrained stagger.
- Structural layouts remain static.
- Large sections are not animated as single heavy blocks.

### Final visual polish

- The Menu visual card has one complete reveal.
- The About informational items use separate delays.
- The Tretnix footer attribution uses an external link.

### Technical closure

- Route reset is immediate.
- Same-page anchors retain intentional smooth scrolling.
- Canonical and Open Graph URLs use the production origin.
- Public Lovable metadata and the Lovable favicon were removed.
- The SSR error fallback is localized in Italian.
- The confirmed TypeScript escape hatches identified during remediation were removed.
- The repository defines a `typecheck` script.

## Verification record

### Executed and passed during the closure cycle

- `bun run typecheck`;
- `bun run build`, including the client production, SSR production and
  Nitro/Cloudflare production build stages;
- `git diff --check`;
- ESLint with the Prettier rule disabled: zero errors, with the six pre-existing
  warnings recorded below.

Production browser verification was completed successfully by the project owner.

### Executed and not passed or still limited

- The complete repository lint command must not be described as passed.
- Complete lint currently fails because the Windows checkout uses CRLF while Prettier
  expects LF.
- Six pre-existing `react-refresh/only-export-components` warnings remain in shadcn
  scaffold files. They were not introduced by the remediation.

## Source precedence

When guidance conflicts, use:

1. approved decisions;
2. shared Tretnix development standards;
3. project-specific documentation;
4. the approved current task;
5. behavior confirmed in code and deployment;
6. assumptions or past conversations that still need formalization.

## Agent coordination

- Only one writer may modify this working tree at a time.
- Do not edit concurrently with Lovable, Cursor Agent, Codex or Claude Code.
- Work on a dedicated branch, not `main`.
- Require a commit, branch or diff checkpoint before handoff.
- A reviewer starts in read-only mode.
- Do not apply review findings until approved.
- Never rewrite published Lovable-connected history.

## Visual identity to preserve

The approved identity is warm, elegant, artisanal and premium.

Known references include:

- cream, terracotta, olive and muted gold;
- Fraunces for editorial headings;
- Inter for body text and interface;
- refined and restrained motion;
- hospitality-focused imagery and composition.

Exact tokens and implementation must be confirmed from the repository before extraction.

Do not:

- convert the project into a generic SaaS aesthetic;
- replace its visual personality with Tretnix institutional branding;
- redesign approved sections without a specific requirement;
- remove approved details because a simpler layout is easier to implement.

## Canonical role and limitations

Forno Lume START is the approved reference for:

- the visual baseline of the Tretnix Hospitality family;
- the motion-language baseline of the Tretnix Hospitality family;
- a premium single-page Hospitality START product.

The approved visual and motion baseline includes typography, palette, perceived navbar
behavior, reveal language, interactions and responsive quality.

It is not automatically the canonical source for:

- multipage routing architecture;
- gallery and lightbox architecture;
- BUSINESS or BUSINESS PLUS functionality;
- admin, authentication or backend architecture.

Those patterns must be evaluated separately.

Before copying a pattern:

1. inspect the implementation;
2. verify behavior in deployment;
3. assess accessibility and responsive behavior;
4. identify technical defects;
5. preserve the approved perceived behavior;
6. improve implementation only through an approved task.

## Frozen status

Forno Lume START is frozen after technical closure.

Further source changes require at least one of:

- a confirmed bug;
- a confirmed regression;
- a security issue;
- an explicitly approved product requirement.

Any permitted change still requires an explicit, approved and scoped task.

Optional cleanup is not authorized by the current project status.

## Approved Tretnix decisions

### Mobile editorial order

On mobile:

```text
text
image
```

Exceptions:

- hero;
- gallery;
- documented visual-first elements.

Do not duplicate markup only to change order.

### Route and scroll

- New routes open at the top.
- Route reset is immediate, not smooth.
- Same-page anchors retain intentional smooth scrolling.
- Preserve direct URL, refresh, browser back and forward.
- Cross-route section links navigate before scrolling.

### Reveals

- Below-the-fold reveals start when entering the viewport.
- Avoid flashes and already-completed reveals.
- Respect `prefers-reduced-motion`.
- Content remains visible without animation.
- Preserve editorial sequencing and restrained stagger.
- Keep structural layouts static and do not animate large sections as single heavy blocks.

### Footer attribution

Preserve the implemented discreet external link:

“Progettato e sviluppato da Tretnix”

to:

```text
https://tretnix.com
```

### START → BUSINESS

Forno Lume BUSINESS preserves the approved START identity and motion language while expanding routes, content, navigation and functionality.

## Remaining non-blocking backlog

The following items are recorded but are not approved for implementation by project status:

- create an approved custom favicon;
- create or select an optimized horizontal social-preview image;
- perform a controlled SSR 500 fault test;
- normalize repository line-ending policy;
- review unused shadcn scaffold components;
- review the unused React Query provider;
- review technical warnings only when build tooling and regression checks are available.

These items do not block progression to Forno Lume BUSINESS.

## Working method

For non-trivial work:

1. read this file;
2. inspect repository structure and scripts;
3. identify affected files and flows;
4. distinguish symptoms from root causes;
5. search for related patterns;
6. state a concise plan;
7. implement only the approved scope;
8. review the diff;
9. run available checks;
10. report evidence, results and risks.

## Scope control

Do not:

- modify unrelated functionality;
- change copy without approval;
- redesign unrelated UI;
- install or update dependencies without a concrete need;
- perform speculative cleanup;
- suppress TypeScript errors with unsafe casts;
- change client identity for technical uniformity;
- deploy or push unless explicitly requested.

## Responsive and accessibility

When UI is affected, verify:

- 360px;
- 390px;
- 430px;
- 768px;
- desktop;
- keyboard;
- visible focus;
- reduced motion;
- touch targets;
- overflow;
- fixed and sticky elements.

## Security

- Never expose secrets.
- Never commit `.env` files.
- Never place service-role keys in client code.
- Client-side guards are not authorization controls.
- Never weaken authorization or RLS to hide a frontend error.
- Use versioned migrations.
- Do not perform destructive database, storage, deployment or DNS actions without explicit approval.

## Validation

Use repository-defined scripts.

Do not invent missing scripts.

Record each command as:

- executed and passed;
- executed and failed;
- unavailable;
- not executable in the environment;
- manual verification required.

For relevant flows consider:

- direct URL;
- refresh;
- browser back and forward;
- responsive widths;
- keyboard;
- reduced motion;
- console;
- network.

## Reporting

For every finding or intervention report include:

- repository and commit;
- file or area;
- evidence level;
- current behavior;
- expected behavior;
- confirmed or probable cause;
- impact;
- severity;
- recommendation;
- regression risk;
- required checks.

Clearly separate:

- confirmed from source code;
- confirmed by execution;
- confirmed in deployment;
- probable;
- potential;
- manual verification required;
- not assessable.

## Public identity

Public-facing software is designed and developed by Tretnix.

Do not add public references attributing the product to internal tools.
