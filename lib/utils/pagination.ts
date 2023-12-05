export default function setPagination(page: number) {
  let startIndex = (page - 1) * 9;
  let lastIndex = startIndex + 8;
  return `${startIndex}-${lastIndex}`;
}
