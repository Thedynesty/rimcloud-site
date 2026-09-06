// Rim Cloud - Pterodactyl Container Bridge Entrypoint
// Defaults to port 19219 or uses $PORT provided by the container environment

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = parseInt(process.env.PORT, 10) || 19219;

console.log(`[RimCloud Engine] Booting storefront server on ${hostname}:${port}...`);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error("[RimCloud] Server request error:", req.url, err);
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    });

    server.once("error", (err) => {
      console.error("[RimCloud] Fatal server error:", err);
      process.exit(1);
    });

    server.listen(port, hostname, () => {
      console.log(`[RimCloud] Server successfully listening at http://${hostname}:${port}`);
    });
  })
  .catch((err) => {
    console.error("[RimCloud] Failed to boot Next.js:", err);
    process.exit(1);
  });

