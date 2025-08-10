// remark-reading-time.mjs
import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const { text } = getReadingTime(textOnPage);

    const shortText = text.replace(" read", ""); // "3 min"

    data.astro.frontmatter.minutesRead = shortText;
  };
}
