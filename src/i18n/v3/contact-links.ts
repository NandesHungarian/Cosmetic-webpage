/**
 * src/i18n/v3/contact-links.ts
 * ─────────────────────────────────────────────────────────────
 * A kapcsolat szekció linkjei (cím, telefon, email) nyelv-független
 * adatok — ugyanaz minden locale-on. Egy helyen tartjuk őket, hogy
 * új nyelv hozzáadásakor ne kelljen (és ne is lehessen elfelejteni)
 * mindegyik i18n fájlban újra beállítani.
 *
 * A sorrend a `contact.items` tömb sorrendjével egyezik: cím, telefon,
 * email. A negyedik elem (nyitvatartás) szándékosan nincs itt, mert
 * az nem link.
 */
export const CONTACT_LINKS: readonly (string | undefined)[] = [
  'https://maps.app.goo.gl/kZ2HKbYtLq6AtfQSA',
  'tel:+36203393399',
  'mailto:info@szepsegterapeuta.hu',
];
