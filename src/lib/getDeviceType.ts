export type DeviceType = "mobile" | "tablet" | "desktop" | "unknown";

export function getDeviceType(): DeviceType {
  const ua = navigator.userAgent.toLowerCase();

  if (/ipad|tablet|(android(?!.*mobile))/i.test(ua)) {
    return "tablet";
  }

  if (/iphone|ipod|android.*mobile|mobile/i.test(ua)) {
    return "mobile";
  }

  return "desktop";
}
