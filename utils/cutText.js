module.exports = (content, maxLength) => {
  if (
    typeof content !== "string" ||
    content.length < 1 ||
    typeof maxLength !== "number"
  )
    return "Error";
  if (content.length <= maxLength) return content;
  return content.substring(0, content.lastIndexOf(" ", maxLength)) + "...";
};
