import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { createApp } from "json-server/lib/app.js";

const adapter = new JSONFile("db.json");
const db = new Low(adapter, {});
await db.read();

const app = createApp(db);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
  console.log(`Resources: http://localhost:${PORT}/users`);
});


