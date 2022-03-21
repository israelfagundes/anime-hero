export const replaceURLBrackets = (url: string) => {
  return url.replace(/\[/g, '%5B').replace(/\]/g, '%5D');
};
