import React from "react";
import { Mail, Phone } from "lucide-react";
import { contactInfo } from "../data/data";

const socialLinks = [
  {
    label: "f",
    name: "Facebook",
    icon:"/facebook.png",
    href: "#",
  },
  {
    label: "ig",
    name: "Instagram",
     icon:"/insta.jpg",
    href: "#",
  },
  {
    label: "in",
    icon: "/linkedin.png",
    name: "LinkedIn",
    href: "#",
  },
  
];

function TopBar() {
  return (
    <div className="hidden border-b border-slate-200 bg-[#f4f7f7] lg:block">
      <div className="container-x flex h-10 items-center justify-between">

        {/* LEFT — SOCIAL LINKS */}
        <div className="flex items-center gap-2">
          <span className="mr-2 text-[10px] font-semibold tracking-[0.12em] text-slate-500">
            FOLLOW US
          </span>

          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="
                flex h-6 min-w-6 items-center justify-center
                rounded-full px-1.5
                text-[10px] font-bold
                text-slate-500
                transition-all duration-200
                hover:bg-[#071a21]
                hover:text-white
              "
            >
              {social.icon ? (
                <img
                  src={social.icon}
                  alt={social.name}
                  className="h-4 w-4 object-contain"
                />
              ) : (
                social.label
              )}
            </a>
          ))}
        </div>

        {/* RIGHT — CONTACT DETAILS */}
        <div className="flex items-center gap-5">

          {/* PHONE */}
          <a
            href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
            className="
              flex items-center gap-2
              text-[12px] font-medium text-slate-600
              transition-colors duration-200
              hover:text-[#087ea4]
            "
          >
            <Phone
              size={14}
              strokeWidth={1.8}
              className="text-[#087ea4]"
            />

            <span>{contactInfo.phone}</span>
          </a>

          <span className="h-4 w-px bg-slate-300" />

          {/* EMAIL */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="
              flex items-center gap-2
              text-[12px] font-medium text-slate-600
              transition-colors duration-200
              hover:text-[#087ea4]
            "
          >
            <Mail
              size={14}
              strokeWidth={1.8}
              className="text-[#087ea4]"
            />

            <span>{contactInfo.email}</span>
          </a>

        </div>
      </div>
    </div>
  );
}

export default TopBar;