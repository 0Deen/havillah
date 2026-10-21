import { siteContent } from "@/data/site-content";

/** Server-only email configuration. Secrets must be supplied as deployment env vars. */
export const HAVILLAH_NOTIFICATION_EMAIL = siteContent.email;
export const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "";

export function notificationRecipients(): string[] {
  const configured = (process.env.HAVILLAH_NOTIFICATION_EMAIL || HAVILLAH_NOTIFICATION_EMAIL)
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  return configured.length ? configured : [HAVILLAH_NOTIFICATION_EMAIL];
}
