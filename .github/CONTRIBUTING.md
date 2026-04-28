# Contributing

Short version. Full guide: **[git-workflow runbook](https://github.com/uplift-technology-company-limited/infra/blob/main/docs/git-workflow.md)** in the KB.

## Branch + commit

- Branch from `main`: `<type>/<short-kebab-name>` — `feat`, `fix`, `chore`, `refactor`, `docs`, `ci`, `style`, `test`, `perf`, `build`, `revert`.
- **Conventional Commits** with lowercase subject:
  ```
  fix(auth): include id_token_hint in logout
  ```
  Some repos enforce this via `commitlint` — non-compliant commits get rejected.

## PR

- **Direct pushes to `main` are blocked** by branch protection. Open a PR.
- Squash-merge. The PR title becomes the squashed commit message — make it Conventional too.
- One approval required (currently @9Aediter).

## After merge

GitHub webhook → Jenkins → builds → deploys → LINE Flex card in **UPLIFT-DEV** group:

- ✅ `<service> #N deployed` — done, smoke-test in prod.
- ❌ `<service> #N failed` — click "View build" in the LINE message.

## Local pre-flight (before push)

Mirror what Jenkins does:

```bash
bun install --frozen-lockfile
bun run typecheck
# bun run lint    # if the repo has it
# bun run build   # for Next.js services
```

## Things to remember

- `--no-verify` is not a fix. Hooks catch real issues — read the error.
- Feature branches don't auto-build (Jenkins only watches `*/main`). Verification happens **after** merge.
- Roll back via `git revert <bad-sha>` and push — Jenkins picks it up like any other change.

## Help

Lead: @9Aediter. Build server: <https://jenkins.uplifttech.dev>.
