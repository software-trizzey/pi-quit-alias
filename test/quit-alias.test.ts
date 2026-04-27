import assert from "node:assert/strict";
import test from "node:test";
import quitAliasExtension from "../index.ts";

function loadExtension() {
  const handlers: Record<string, (event: any, ctx: any) => Promise<any>> = {};
  const pi = {
    on(name: string, handler: (event: any, ctx: any) => Promise<any>) {
      handlers[name] = handler;
    },
  };

  quitAliasExtension(pi);
  return handlers;
}

async function runInput(text: string, source: string = "interactive") {
  const handlers = loadExtension();
  let shutdownCount = 0;
  const ctx = {
    shutdown() {
      shutdownCount += 1;
    },
  };

  const result = await handlers.input({ text, source }, ctx);
  return { result, shutdownCount };
}

test("registers an input handler", () => {
  const handlers = loadExtension();
  assert.equal(typeof handlers.input, "function");
});

test("handles :q from interactive input after trimming whitespace", async () => {
  const { result, shutdownCount } = await runInput("  :q  ");

  assert.deepEqual(result, { action: "handled" });
  assert.equal(shutdownCount, 1);
});

test("handles :Q from interactive input by normalizing case", async () => {
  const { result, shutdownCount } = await runInput(" :Q ");

  assert.deepEqual(result, { action: "handled" });
  assert.equal(shutdownCount, 1);
});

test("passes through other interactive input unchanged", async () => {
  const { result, shutdownCount } = await runInput("/quit");

  assert.deepEqual(result, { action: "continue" });
  assert.equal(shutdownCount, 0);
});

test("ignores non-interactive :q input", async () => {
  const { result, shutdownCount } = await runInput(":q", "rpc");

  assert.deepEqual(result, { action: "continue" });
  assert.equal(shutdownCount, 0);
});

test("ignores non-interactive :Q input", async () => {
  const { result, shutdownCount } = await runInput(":Q", "rpc");

  assert.deepEqual(result, { action: "continue" });
  assert.equal(shutdownCount, 0);
});

test("does not match extra text after :q", async () => {
  const { result, shutdownCount } = await runInput(":q please");

  assert.deepEqual(result, { action: "continue" });
  assert.equal(shutdownCount, 0);
});
