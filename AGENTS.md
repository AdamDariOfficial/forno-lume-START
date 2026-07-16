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

These instructions apply to any agent or AI-assisted tool working in this repository.

## Project identity

Forno Lume START is:

- a completed and deployed Hospitality START website;
- the initial canonical visual reference for the Tretnix Hospitality family;
- the source project from which Forno Lume BUSINESS was evolved;
- the pilot repository for the Tretnix controlled development workflow.

Repository:

```text
https://github.com/AdamDariOfficial/forno-lume-START.git
```

Deployment:

```text
https://forno-lume.tretnix.com
```

## Initial repository assessment

Before applying corrective or cross-project changes, the repository must first undergo a read-only audit.

During that initial audit:

- do not modify or format source files;
- do not update dependencies;
- do not change the lockfile;
- do not create or apply migrations;
- do not deploy;
- do not apply fixes.

Non-destructive typecheck, lint, test, build and local browser checks are allowed when configured.

After the initial audit has been completed and reviewed, implementation requires an explicit approved task.

## Source precedence

When guidance conflicts, use this order:

1. approved decisions;
2. shared Tretnix development standards;
3. project-specific documentation;
4. the approved current task specification;
5. behavior confirmed in code and deployment;
6. prior conversations or assumptions that still need to be formalized.

A past chat is not a permanent project decision unless it has been approved or documented.

## Visual identity to preserve

The approved identity is warm, elegant, artisanal and premium.

Known visual references include:

- cream, terracotta, olive and muted gold;
- Fraunces for editorial headings;
- Inter for body text and interface;
- refined and restrained motion;
- hospitality-focused imagery and composition.

Exact tokens and implementation must be confirmed from the repository before documentation or extraction.

Do not:

- convert the project into a generic SaaS aesthetic;
- replace its visual personality with Tretnix institutional branding;
- redesign approved sections without a specific requirement;
- remove approved details because a simpler layout is easier to implement.

## Canonical role and limitations

Forno Lume START is the declared visual reference for:

- Hospitality START identity;
- typography;
- palette;
- navbar behavior;
- reveal language;
- interactions;
- responsive quality.

It is not automatically the technical canonical source for every implementation.

Before copying a pattern into BUSINESS or another project:

1. inspect the implementation;
2. verify behavior in the deployment;
3. assess accessibility and responsive behavior;
4. identify technical defects;
5. preserve the approved perceived behavior;
6. improve implementation only through an approved task.

A visual canonical source and a technical canonical source may differ.

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

Do not duplicate markup only to change responsive order.

### Route and scroll

- New routes open at the top.
- Route reset is immediate, not smooth.
- Preserve direct URL, refresh, browser back and forward behavior.
- Cross-route section links navigate before scrolling.

### Reveals

- Below-the-fold reveals start when entering the viewport.
- Avoid flashes and already-completed reveals.
- Respect `prefers-reduced-motion`.
- Content must remain visible without animation.

### Footer attribution

Include a discreet link:

“Progettato e sviluppato da Tretnix”

to:

```text
https://tretnix.com
```

### START → BUSINESS

Forno Lume BUSINESS must preserve the approved START identity and animation language while expanding routes, content, navigation and functionality.

## Areas that require audit

Inspect without assuming a defect:

- architecture;
- component structure;
- routing;
- scroll behavior;
- navbar hide/show;
- animation architecture;
- responsive behavior;
- horizontal overflow;
- mobile text/image order;
- accessibility;
- TypeScript quality;
- duplication;
- dependencies;
- performance;
- error handling;
- SEO;
- tests;
- build;
- deployment risks;
- preparation for reuse by higher plans.

## Working method

For non-trivial work:

1. read this file;
2. inspect repository structure and scripts;
3. identify affected files and flows;
4. distinguish symptoms from root causes;
5. search for related patterns;
6. state a concise plan;
7. implement only when explicitly authorized;
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
- rewrite published Git history;
- force push;
- rebase, amend or squash commits already pushed to the Lovable-connected history.

Keep any branch intended to sync with Lovable in a working state.

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

- Never expose or print secrets.
- Never commit `.env` files.
- Never place service-role keys in client code.
- Client-side route guards are not authorization controls.
- Never weaken authorization or RLS to hide a frontend error.
- Use versioned migrations for schema changes.
- Do not perform destructive database, storage, deployment or DNS actions without explicit approval.
- If Supabase files exist, inspect them without assuming unavailable backend access.

## Validation

Use repository-defined scripts.

Do not invent missing commands.

Record each command as:

- executed and passed;
- executed and failed;
- unavailable;
- not executable in the environment;
- manual verification still required.

For relevant flows consider:

- direct URL;
- refresh;
- browser back and forward;
- responsive widths;
- keyboard access;
- reduced motion;
- console errors;
- network errors.

## Reporting

For every finding or intervention report:

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
- probable;
- potential;
- manual verification required;
- not assessable.

## Public identity

Public-facing software is designed and developed by Tretnix.

Do not add public references attributing the product to AI tools.
