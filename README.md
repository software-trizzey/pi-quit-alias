# Pi Quit Alias Extension

A tiny Pi extension that adds `:q` as a quit alias in interactive mode, matching Pi's existing `/quit` behavior.

## What it does

- Intercepts raw interactive input
- Trims whitespace and checks for `:q`
- Calls `ctx.shutdown()` for a graceful exit
- Returns `handled` so Pi does not continue processing the input
- Leaves all other input untouched

## Prerequisite: install Pi

If you do not already have Pi installed, install it first:

```bash
npm install -g @mariozechner/pi-coding-agent
```

Then verify it works:

```bash
pi
```

## Install this extension

Clone or download this repo, then choose one of these load methods.

### Option 1: quick test with `-e`

Run Pi with the extension directly from the repo:

```bash
pi -e ./index.ts
```

### Option 2: auto-load from the project

Pi auto-discovers extensions from `.pi/extensions/` in the current project. Copy the extension there:

```bash
mkdir -p .pi/extensions/pi-quit-alias
cp index.ts .pi/extensions/pi-quit-alias/index.ts
```

Start Pi normally, or run `/reload` if Pi is already open.

## Files

- `index.ts` — extension implementation
- `SPEC.md` — implementation spec
- `TODO.md` — TDD task list
