import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let document;
let window;

describe("Responsive testing", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
  });

  



// test("Rules for screens less than or equal to 768px are defined", () => {
//   const sheet = Array.from(document.styleSheets).find((sheet) => !sheet.href);
//   const sheetRules = Array.from(sheet.cssRules);
//   const screenRules = sheetRules.filter(
//     (rule) =>
//       rule.media &&
//       rule.media.mediaText.includes("max-width: 768px") &&
//       rule.cssText.includes("{")
//   );
//   expect(screenRules.length).toBeGreaterThan(0);
// });


test("article title should have darkmagenta color on screen below 768px width", () => {
  let rules = document.styleSheets[0].cssRules;
  let rule = rules.filter(
    (rule) =>
      
      rule.cssText.includes("max-width") &&
      rule.cssText.includes("768px") 
  )[0];

  let color = Array.from(rule.cssRules).find((cssRule) => cssRule.selectorText === '.article-title h1').style.color;

      console.log(color)
  expect(color).toBe("darkmagenta");
});


test("article description  color should become darkgoldenrod on less than 768px width", () => {
  let rules = document.styleSheets[0].cssRules;
  let rule = rules.filter(
    (rule) =>
      
      rule.cssText.includes("max-width") &&
      rule.cssText.includes("768px") 
  )[0];

  let color = Array.from(rule.cssRules).find((cssRule) => cssRule.selectorText === '.article-description h3').style.color;

      console.log(color)
  expect(color).toBe("darkgoldenrod");
});



test("article container backgroud color should become lightcoral on less than 768px width", () => {
    let rules = document.styleSheets[0].cssRules;
    let rule = rules.filter(
      (rule) =>
        
        rule.cssText.includes("max-width") &&
        rule.cssText.includes("768px") 
    )[0];

    let bgcolor = Array.from(rule.cssRules).find((cssRule) => cssRule.selectorText === '.article-content').style['background-color'];

        console.log(bgcolor)
    expect(bgcolor).toBe("lightcoral");
  });










});





















// test("Rules for screens less than or equal to 768px are defined", () => {
//   const sheet = Array.from(document.styleSheets).find((sheet) => !sheet.href);
//   const sheetRules = Array.from(sheet.cssRules);
//   const screenRules = sheetRules.filter(
//     (rule) =>
//       rule.media &&
//       rule.media.mediaText.includes("max-width: 768px") &&
//       rule.cssText.includes("{")
//   );
//   expect(screenRules.length).toBeGreaterThan(0);
// });
