export default function quitAliasExtension(pi: any) {
  pi.on("input", async (event: any, ctx: any) => {
    const normalizedInput = event.text.trim().toLowerCase();

    if (event.source === "interactive" && normalizedInput === ":q") {
      ctx.shutdown();
      return { action: "handled" };
    }

    return { action: "continue" };
  });
}
