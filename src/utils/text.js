import { RichText } from "prismic-reactjs"
export function convertRichTextToPlain(richText) {
  if (richText) {
    return RichText.asText(richText)
  }
  return ""
}

function getHeaderLevel(headerName) {
  const match = headerName.match(/\d/)
  return match && match.length && parseInt(match[0], 10)
}

export function reduceHeaderSize(title, maxHLevel) {
  let maxLevel = 7
  title.forEach(row => {
    const hl = getHeaderLevel(row.type)
    row.hl = hl
    if (hl < maxLevel) {
      maxLevel = hl
    }
  })
  if (maxHLevel > maxLevel) {
    const delta = maxHLevel - maxLevel
    return title.map(t => {
      let level = t.hl + delta
      level = level > 6 ? 6 : level
      t.type = "heading" + level
      return t
    })
  }
  return title
}
