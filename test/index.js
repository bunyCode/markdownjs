import { test, expected } from "./test.js";
import parse from "../src/index.js";

const tests = [
  expected(
    "Test Blockquote",
    parse(">hola"),
    "<blockquote><p>hola</p></blockquote>",
  ),
  expected("Test h6", parse("###### Hola"), "<h6>Hola</h6>"),
  expected("Test h5", parse("##### Hola"), "<h5>Hola</h5>"),
  expected("Test h4", parse("#### Hola"), "<h4>Hola</h4>"),
  expected("Test h3", parse("### Hola"), "<h3>Hola</h3>"),
  expected("Test h2", parse("## Hola"), "<h2>Hola</h2>"),
  expected("Test h1", parse("# Hola"), "<h1>Hola</h1>"),
  expected("Test Li", parse("- hola"), "<li>hola</li>"),
  expected("Test B", parse("**Hola**"), "<b>Hola</b>"),
  expected("Tes t B2", parse("__Hola__"), "<b>Hola</b>"),
  expected("Test I", parse("_Hola_"), "<i>Hola</i>"),
  expected("Test I2", parse("*Hola*"), "<i>Hola</i>"),
  expected("Test Code", parse("`Hola`"), "<code>Hola</code>"),
  expected("Test Code2", parse("```Hola```"), "<code>Hola</code>"),
  expected(
    "Test Img",
    parse("![Hola](hola.js)"),
    "<img src='hola.js' alt='Hola'/>",
  ),
  expected("Test Link", parse("[Hola](hola.js)"), "<a href='hola.js'>Hola</a>"),
  expected("Test Tablas", parse(`
    |thing|thing|thing|
    |-----|-----|-----|
    |thing|thing|thing|
    |thing|thing|thing|`), `
    <table>
    <thead><tr><th>thing</th><th>thing</th><th>thing</th></tr></thead>
    <tbody>
    <tr><td>thing</td><td>thing</td><td>thing</td></tr>
    <tr><td>thing</td><td>thing</td><td>thing</td></tr>
    </tbody>
    </table>
    `),
];


test(tests);
