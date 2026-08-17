// MANAGER DEMO MODE
// Reduces visible repeated content while preserving the complete original dataset.
export const MANAGER_DEMO_MODE = true;

export function demoItems<T>(items: T[], demoSelection: T[]): T[] {
  return MANAGER_DEMO_MODE ? demoSelection : items;
}
