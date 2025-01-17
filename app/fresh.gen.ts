// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_app.tsx";
import * as $1 from "./routes/dark/index.tsx";
import * as $2 from "./routes/index.tsx";
import * as $3 from "./routes/not-found.tsx";
import * as $4 from "./routes/thanks.tsx";
import * as $$0 from "./islands/EmailForm.tsx";
import * as $$1 from "./islands/Input.tsx";
import * as $$2 from "./islands/ProductDetails.tsx";

const manifest = {
  routes: {
    "./routes/_app.tsx": $0,
    "./routes/dark/index.tsx": $1,
    "./routes/index.tsx": $2,
    "./routes/not-found.tsx": $3,
    "./routes/thanks.tsx": $4,
  },
  islands: {
    "./islands/EmailForm.tsx": $$0,
    "./islands/Input.tsx": $$1,
    "./islands/ProductDetails.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
