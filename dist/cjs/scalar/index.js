"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalarRender = void 0;
const theme_1 = __importDefault(require("./theme"));
const ScalarRender = (version, config, cdn) => `<!doctype html>
<html>
  <head>
    <title>API Reference</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1" />
    <style>
      body {
        margin: 0;
      }
    </style>
    <style>
      ${config.customCss ?? theme_1.default}
    </style>
  </head>
  <body>
    <script
      id="api-reference"
      data-url="${config.spec?.url}"></script>
    <script src="${cdn ? cdn : `https://cdn.jsdelivr.net/npm/@scalar/api-reference@${version}/dist/browser/standalone.min.js`}"></script>

  </body>
</html>`;
exports.ScalarRender = ScalarRender;
