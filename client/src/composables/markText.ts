export function useMarkText(text: string): string {
  const toMark = /`.+`/;
  while (text.match(toMark)) {
    const textToMark = text.match(toMark);
    const marked = `<p class="text-emerald-700 inline">${textToMark[0].slice(
      1,
      -1
    )}</p>`;
    text = text.replace(textToMark[0], marked);
  }
  return text;
}
