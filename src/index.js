const regexBlockquote = /\>(.+)/g;
const regexImg = /\!\[(.+)\]\((.+)\)/g;
const regexH6 = /[\#]{6} (.+)/g;
const regexH5 = /[\#]{5} (.+)/g;
const regexH4 = /[\#]{4} (.+)/g;
const regexH3 = /[\#]{3} (.+)/g;
const regexH2 = /[\#]{2} (.+)/g;
const regexH1 = /[\#]{1} (.+)/g;
const regexLi = /\- (.+)/g;
const regexB = /[\*]{2}(.+)[\*]{2}/g;
const regexB2 = /[\_]{2}(.+)[\_]{2}/g;
const regexI = /[\_]{1}(.+)[\_]{1}/g;
const regexI2 = /[\*]{1}(.+)[\*]{1}/g;
const regexCode = /[\`](.+)[\`]/g;
const regexCode2 = /[\`]{3}(.+)[\`]{3}/g;
const regexLink = /\[(.+)\]\((.+)\)/g;

function parse(markdown) {
  return markdown
    .replace(regexBlockquote, "<blockquote><p>$1</p></blockquote>")
    .replace(regexH6, "<h6>$1</h6>")
    .replace(regexH5, "<h5>$1</h5>")
    .replace(regexH4, "<h4>$1</h4>")
    .replace(regexH3, "<h3>$1</h3>")
    .replace(regexH2, "<h2>$1</h2>")
    .replace(regexH1, "<h1>$1</h1>")
    .replace(regexLi, "<li>$1</li>")
    .replace(regexB, "<b>$1</b>")
    .replace(regexB2, "<b>$1</b>")
    .replace(regexI, "<i>$1</i>")
    .replace(regexI2, "<i>$1</i>")
    .replace(regexCode2, "<code>$1</code>")
    .replace(regexCode, "<code>$1</code>")
    .replace(regexImg, "<img src='$2' alt='$1'/>")
    .replace(regexLink, "<a href='$2'>$1</a>");
}

export default parse;
