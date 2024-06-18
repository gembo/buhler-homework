/* Split a camel case string into a space separated string and capitalise the first letter. */
export function splitCamelCaseString(camelCaseString: string): string {
  if (camelCaseString && typeof camelCaseString == 'string') {
    return (camelCaseString.charAt(0).toUpperCase() + camelCaseString.slice(1))
      .replace(/([A-Z][a-z]+)/g, ' $1 ')
      .replace(/\s{2}/g, ' ')
      .trim();
  }
  return camelCaseString;
}
