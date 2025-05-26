export function getLanguageNameInOwnLanguage(locale: string) {
  const parsed = locale.split('-');
  // If locale has a region (e.g., en-US), return "English (US)"
  if (parsed.length === 2) {
    const languageDisplay = new Intl.DisplayNames(['en'], { type: 'language' });
    const regionDisplay = new Intl.DisplayNames(['en'], { type: 'region' });
    const languageName = languageDisplay.of(parsed[0]);
    const regionName = regionDisplay.of(parsed[1]);
    return `${languageName} (${regionName})`;
  }
  // Otherwise, return the language name in its own language
  const languageDisplay = new Intl.DisplayNames([locale], { type: "language" });
  return languageDisplay.of(locale);
}
