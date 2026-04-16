declare module "node:assert/strict" {
  const assert: {
    equal(actual: unknown, expected: unknown, message?: string): void;
    deepEqual(actual: unknown, expected: unknown, message?: string): void;
  };

  export default assert;
}

declare module "node:test" {
  type TestCallback = () => void | Promise<void>;
  type TestFn = (name: string, fn: TestCallback) => void;

  const test: TestFn;
  export default test;
}
