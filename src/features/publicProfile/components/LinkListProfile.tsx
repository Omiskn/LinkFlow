export type LinkListProps = {
  links?: ProfileLinksType[];
};

import { useRecordClick } from "../hooks/useRecordClick";
import { useCountry } from "@/hooks/useCountry";
import { getDeviceType } from "@/lib/getDeviceType";
import { getBrowser } from "@/lib/getBrowser";
import LinkProfileItem from "./LinkProfileItem";

export type ProfileLinksType = {
  id: number;
  title: string;
  icon: string;
  url: string;
};

const mockLinks: ProfileLinksType[] = [
  {
    id: 7,
    title: "My Website",
    icon: "website",
    url: "#",
  },
  {
    id: 7,

    title: "GitHub",
    icon: "github",
    url: "#",
  },
  {
    id: 7,

    title: "Twitter",
    icon: "x",
    url: "#",
  },
  {
    id: 7,

    title: "LinkedIn",
    icon: "linkedin",
    url: "#",
  },
  {
    id: 7,

    title: "Instagram",
    icon: "instagram",
    url: "#",
  },
  {
    id: 7,
    title: "Contact Me",
    icon: "email",
    url: "#",
  },
];

function LinkListProfile({ links = mockLinks }: LinkListProps) {
  const { recordClick } = useRecordClick();
  const { country, isLoading } = useCountry();
  const device_type = getDeviceType();
  const browser = getBrowser();

  function handleClick(linkId: number) {
    console.log("hello");
    if (!isLoading)
      recordClick({ linkId, data: { country, device_type, browser } });
  }

  if (!isLoading)
    console.log(
      `country=${country}`,
      `deviceType=${device_type}`,
      `browser=${browser}`,
    );

  return (
    <section className="mt-8 space-y-4">
      {links.map((link) => {
        return <LinkProfileItem onClick={handleClick} link={link} />;
      })}
    </section>
  );
}

export default LinkListProfile;
