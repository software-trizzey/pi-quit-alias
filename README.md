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

Clone or download this repo:

```bash
git clone https://github.com/software-trizzey/pi-quit-alias.git
```

## Choose an install method

### Preferred: auto-load from the project

Use this if you want Pi to load the extension automatically every time in this project.

1. Copy the extension into Pi's project-local extensions folder:

   ```bash
   mkdir -p .pi/extensions/pi-quit-alias
   cp index.ts .pi/extensions/pi-quit-alias/index.ts
   ```

2. Start Pi normally, or run `/reload` if Pi is already open.

### Quick test with `-e`

Use this if you only want to try the extension once without installing it into the project.

Run Pi directly from the repo:

```bash
pi -e ./index.ts
```

## Uninstall / remove

### If you used the auto-load method

Delete the extension from the project-local extensions folder:

```bash
rm -rf .pi/extensions/pi-quit-alias
```

Then restart Pi, or run `/reload` if Pi is already open.

### If you used `-e`

Stop starting Pi with the `-e ./index.ts` flag.

## Files

- `index.ts` — extension implementation
- `SPEC.md` — implementation spec
- `TODO.md` — TDD task list
