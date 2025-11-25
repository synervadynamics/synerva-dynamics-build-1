/**
 * Simple email validation regex fallback.
 * Used for client-side form guard if needed.
 */
export function isValidEmail(email: string): boolean {
  return /^[\\w._%+-]+@[\\w.-]+\\.[A-Za-z]{2,}$/.test(email);
}
