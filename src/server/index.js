import express from 'express';
import { renderToString } from "react-dom/server";
import { App } from "../components/App";
import React from "react";
import path from "path";
import { StaticRouter } from "react-router";
import { ChunkExtractor } from "@loadable/server";


const statsFile = path.resolve("public/loadable-stats.json");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.get("*", (req, res) => {
  const extractor = new ChunkExtractor({
    statsFile,
    entrypoints: ["app"],
  });
  
  const jsx = extractor.collectChunks(
    <StaticRouter location={req.path}>
      <App />
    </StaticRouter>
  );
  const app = renderToString(jsx);

  const scripts = extractor.getScriptTags();

  res.render("index", { app, scripts });

});

const port = process.env.PORT || 3000;
app.listen(3000, function listenHandler() {
  console.info(`Running on ${port}`);
});
