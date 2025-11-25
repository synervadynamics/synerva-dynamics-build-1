import Link from "next/link";
import { copy } from "@/data/copy";

const renderWithBreaks = (text: string) =>
  text.split("\n").map((line, index, arr) => (
    <span key={`${index}-${line}`}>
      {line}
      {index < arr.length - 1 && <br />}
    </span>
  ));

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[2rem] border border-white/12 bg-gradient-to-br from-[#0b1522cc] via-[#0e1c2ccc] to-[#0a131fcc] p-6 text-white/72 shadow-[0_32px_120px_-76px_rgba(0,0,0,0.82)] backdrop-blur-2xl lg:flex-row lg:items-center lg:justify-between lg:p-8">
        <div className="space-y-1">
          <p className="text-lg text-white">{copy.footer.schema.name}</p>
          <p className="text-sm">{renderWithBreaks(copy.global.contact.address)}</p>
          <p className="text-sm">
            <a href={`tel:${copy.global.contact.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-white">
              {copy.global.contact.phone}
            </a>{" "}
            ·{" "}
            <a href={`mailto:${copy.global.contact.email}`} className="hover:text-white">
              {copy.global.contact.email}
            </a>
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm">
          {copy.global.nav.map(item => (
            <Link key={item.href} className="hover:text-white" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-4 text-sm">
          {copy.footer.socials.map(social => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="hover:text-white">
              {social.label}
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-6xl text-xs text-white/55">{copy.footer.legal}</p>
    </footer>
  );
};
