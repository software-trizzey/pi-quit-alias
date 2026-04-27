# Pi Quit Alias Extension

Adds Vim-style `:q` and `:Q` as aliases for quitting Pi in interactive mode.

## What it does

When this extension is loaded, typing `:q` or `:Q` exits Pi the same way as `/quit`.

## Install globally

1. Make sure Pi is installed:

```bash
npm install -g @mariozechner/pi-coding-agent
```

2. Clone this repo:

```bash
git clone https://github.com/software-trizzey/pi-quit-alias.git
cd pi-quit-alias
```

3. Copy the extension into Pi's global extensions directory:

```bash
mkdir -p ~/.pi/agent/extensions/pi-quit-alias
cp index.ts ~/.pi/agent/extensions/pi-quit-alias/index.ts
```

4. Start Pi, or run `/reload` if it is already open.

## Run locally for development

From this repo, start Pi with the extension loaded directly:

```bash
pi -e ./index.ts
```

This is useful for testing changes without installing the extension globally.
