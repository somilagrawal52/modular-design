// MANAGER OUTLINE MODE
// Reduces visible repeated content while preserving the complete original dataset.
export const MANAGER_OUTLINE_MODE = false;

// Backwards-compatible name used by the existing outline-mode rendering logic.
export const MANAGER_DEMO_MODE = MANAGER_OUTLINE_MODE;
export const SITE_NAME = 'DREAM VENTURES REALTY';
export const SITE_STUDIO_NAME = 'DREAM VENTURES REALTY';
export const EMAIL_DOMAIN = 'dvr.com';
export const dreamRealtyEmail = (mailbox: string) => `${mailbox}@${EMAIL_DOMAIN}`;

export function demoItems<T>(items: T[], demoSelection: T[]): T[] {
  return MANAGER_DEMO_MODE ? demoSelection : items;
}
