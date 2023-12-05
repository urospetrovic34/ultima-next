export default function setPagination(page: number) {
  if (page) {
    let startIndex = (page - 1) * 9;
    let lastIndex = startIndex + 8;
    return `${startIndex}-${lastIndex}`;
  } else {
    return "0-8";
  }
}
