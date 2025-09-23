\# Workflow documentation

\## 1. CI Pipeline (.github/workflows/ci.yml)

\*\*Purpose:\*\* Lint → Test → Build the project.

\*\*Trigger:\*\* push to main/develop, PR to main.

\*\*Jobs \& dependencies:\*\* lint → test (needs lint) → build (needs test).

\*\*Secrets required:\*\* CODECOV_TOKEN (optional).

\*\*Troubleshooting:\*\* Check Actions → select run → expand failed step for logs.

\## 2. Daily Dependency Check (.github/workflows/dependency-check.yml)

\*\*Purpose:\*\* Run `npm audit` daily and create an issue if vulnerabilities found.

\*\*Trigger:\*\* daily cron + manual run.

\*\*Secrets required:\*\* none.

\*\*Troubleshooting:\*\* Ensure package-lock.json exists; `npm ci` succeeds.

\## 3. Deploy to GitHub Pages (.github/workflows/deploy.yml)

\*\*Purpose:\*\* Build and publish `./build` folder to GitHub Pages on push to main.

\*\*Trigger:\*\* push to main.

\*\*Secrets required:\*\* API_URL (example), GITHUB_TOKEN (provided by GitHub).

\*\*Troubleshooting:\*\* Ensure `build` folder exists; check publish_dir in workflow.

\## 4. Reusable composite action (.github/actions/reusable-ci/)

\*\*Purpose:\*\* DRY steps — checkout code, setup Node, cache npm, install dependencies.

\*\*Usage:\*\* `uses: ./.github/actions/reusable-ci` in other workflows.

\## Common tips

\- Always check Actions → logs if a workflow fails.

\- Fix lint errors locally with `npx eslint . --fix`.

\- Run tests locally with `npm test` to check coverage.

\- Ensure your GitHub Pages `build` path matches `publish\_dir`.

\## 2. Daily Dependency Check (.github/workflows/dependency-check.yml)

\*\*Purpose:\*\* Run `npm audit` every day to check for security vulnerabilities in dependencies.

\*\*Trigger:\*\*

\- Runs automatically every day (cron job at 02:00 UTC).

\- Can also be run manually via “Run workflow” button in Actions.

\*\*Job:\*\*

\- `npm-audit`: installs dependencies, runs `npm audit`, creates an issue if vulnerabilities are found.

\*\*Secrets required:\*\* None.

\*\*Troubleshooting:\*\*

\- If `npm ci` fails, make sure `package-lock.json` exists.

\- If no issue is created but vulnerabilities exist, check audit.json file in workflow logs.

\## 3. Deploy to GitHub Pages (.github/workflows/deploy.yml)

\*\*Purpose:\*\* Build the app and deploy it to GitHub Pages automatically.

\*\*Trigger:\*\* Push to the `main` branch.

\*\*Job:\*\*

\- `build-and-deploy`: sets up Node.js, installs dependencies, runs `npm run build`, publishes `./build` folder to GitHub Pages.

\*\*Secrets required:\*\*

\- `GITHUB\_TOKEN` (provided automatically by GitHub).

\- `API\_URL` (optional, if used in workflow).

\*\*Troubleshooting:\*\*

\- Check that `build` folder exists before deploying.

\- Make sure `publish\_dir` in workflow matches `./build`.

\- If deployment fails, check Actions logs for exact error messages.
