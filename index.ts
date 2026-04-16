export default function quitAliasExtension(pi: any) {
  pi.on("input", async (event: any, ctx: any) => {
    if (event.source === "interactive" && event.text.trim() === ":q") {
      ctx.shutdown();
      return { action: "handled" };
    }

    return { action: "continue" };
  });
}
