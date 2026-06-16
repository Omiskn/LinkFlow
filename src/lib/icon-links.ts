// link-icons.tsx

import { Globe, Mail, Phone, Link as LinkIcon } from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaTiktok,
  FaDiscord,
  FaTelegram,
  FaWhatsapp,
  FaSpotify,
  FaPaypal,
  FaXTwitter,
} from "react-icons/fa6";

export const LINK_ICONS_MAP = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  x: FaXTwitter,
  youtube: FaYoutube,
  github: FaGithub,
  linkedin: FaLinkedin,
  tiktok: FaTiktok,
  discord: FaDiscord,
  telegram: FaTelegram,
  whatsapp: FaWhatsapp,
  spotify: FaSpotify,
  paypal: FaPaypal,
  website: Globe,
  email: Mail,
  phone: Phone,
  custom: LinkIcon,
} as const;

export type LinkIconName = keyof typeof LINK_ICONS_MAP;
