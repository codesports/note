import {
  parse
} from "./chunk-23M347O5.js";
import "./chunk-5AKNVWO2.js";
import "./chunk-GECUL4GR.js";
import "./chunk-O2TW5W24.js";
import "./chunk-EW7SKAN7.js";
import "./chunk-HM4B2G3C.js";
import "./chunk-P2MHTWKI.js";
import "./chunk-ZQXPTBYO.js";
import "./chunk-W4C6O4J6.js";
import {
  package_default
} from "./chunk-JT737LX2.js";
import {
  selectSvgElement
} from "./chunk-ESFO6OVK.js";
import {
  __name,
  configureSvgSize,
  log
} from "./chunk-YZVIDFGS.js";
import "./chunk-2VRVB2MD.js";
import "./chunk-4UTD2NOI.js";
import "./chunk-FDBJFBLO.js";

// node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-PH2N3AL5.mjs
var parser = {
  parse: __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = { version: package_default.version };
var getVersion = __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};
var draw = __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
//# sourceMappingURL=infoDiagram-PH2N3AL5-JHFCTXDT.js.map
