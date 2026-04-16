# Pi Quit Alias Extension Spec

## Goal
Create a tiny Pi extension that adds support for `:q` as a quit alias, matching the existing `/quit` behavior in interactive mode.

## Project Location
Create and maintain the extension in:

`~/Projects/pi-extensions/pi-quit-alias/`

This directory should be committed to the user's GitHub/software-trizzey tracking flow so the extension can be reused and shared.

## Behavior
The extension must:

- Intercept raw interactive input
- Detect `:q` exactly after trimming whitespace
- Call `ctx.shutdown()` to request a graceful Pi shutdown
- Return `handled` so Pi does not continue processing the input as a normal prompt
- Leave all other input untouched

## Scope
Keep the extension intentionally minimal:

- No custom UI
- No persistent state
- No extra commands
- No changes to `/quit`
- No changes to keyboard shortcuts
- No changes to non-interactive input sources unless explicitly desired later

## Proposed Implementation
Create a single entry file, likely `index.ts`, exporting a default extension function.

Pseudo-behavior:

1. Register an `input` event handler
2. Check `event.source === "interactive"`
3. Check `event.text.trim() === ":q"`
4. Call `ctx.shutdown()`
5. Return `{ action: "handled" }`
6. Otherwise return `{ action: "continue" }`

## Files
Planned files in the directory:

- `index.ts` — extension implementation
- `SPEC.md` — this implementation plan
- `README.md` — usage/install notes, if needed later
- `package.json` — only if packaging or tests require it later

## Verification
Verify that:

- Typing `:q` in Pi exits cleanly
- Existing `/quit` behavior still works
- Normal prompts still pass through unchanged
- The extension does not affect RPC, print mode, or other command flows unless explicitly intended

## Sharing / Tracking
Before publishing or sharing, ensure:

- The directory is committed to GitHub/software-trizzey
- The README explains how to load the extension
- The implementation remains dependency-free unless a future need appears

## Acceptance Criteria
The task is complete when:

- `~/Projects/pi-extensions/pi-quit-alias/` exists
- `SPEC.md` exists inside it
- The spec clearly defines the extension behavior and scope
- The extension can be implemented from this spec with minimal code
