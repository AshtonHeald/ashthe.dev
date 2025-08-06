export function formatDate(
  date: Date,
  options: {
    day?: boolean;
    month?: boolean;
    year?: boolean;
    locale?: string;
  } = {}
): string {
  const {
    day = false,
    month = false,
    year = false,
    locale = "en-US",
  } = options;

  const formatOptions: Intl.DateTimeFormatOptions = {};

  if (day) formatOptions.day = "numeric";
  if (month) formatOptions.month = "short"; // or 'long' for full month name
  if (year) formatOptions.year = "numeric";

  return new Intl.DateTimeFormat(locale, formatOptions).format(date);
}
