export type BrowserType =
  | "Chrome"
  | "Edge"
  | "Firefox"
  | "Safari"
  | "Opera"
  | "Unknown";

export function getBrowser(): BrowserType {
  const ua = navigator.userAgent;
  console.log(ua);

  if (ua.includes("Edg")) return "Edge";
  if (ua.includes("OPR") || ua.includes("Opera")) return "Opera";
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Safari") && !ua.includes("Chrome") && !ua.includes("Edg")) {
    return "Safari";
  }
  if (ua.includes("Chrome")) return "Chrome";

  return "Unknown";
}
