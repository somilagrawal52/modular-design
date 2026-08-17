// MANAGER OUTLINE MODE
// Reduces visible repeated content while preserving the complete original dataset.
export const MANAGER_OUTLINE_MODE = true;

// Backwards-compatible name used by the existing outline-mode rendering logic.
export const MANAGER_DEMO_MODE = MANAGER_OUTLINE_MODE;
export const SITE_NAME = MANAGER_OUTLINE_MODE ? 'COMPANY' : 'AURELIAN';
export const SITE_STUDIO_NAME = MANAGER_OUTLINE_MODE ? 'COMPANY STUDIOS' : 'AURELIAN STUDIOS';
export const EMAIL_DOMAIN = MANAGER_OUTLINE_MODE ? 'company.com' : 'aurelian.com';
export const companyEmail = (mailbox: string) => `${mailbox}@${EMAIL_DOMAIN}`;

export function demoItems<T>(items: T[], demoSelection: T[]): T[] {
  return MANAGER_DEMO_MODE ? demoSelection : items;
}
