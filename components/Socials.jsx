// components/Socials.jsx
"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const socials = [
  { name: "GitHub",   href: "https://github.com/DoTienManhCoder",       icon: <FaGithub /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/do-manh-9a8b48272/", icon: <FaLinkedin /> },
  { name: "Facebook", href: "https://www.facebook.com/dotima71",        icon: <FaFacebook /> },
];


export default function Socials({
  align = "center",
  xlAlign = "start",
  size = "md",
  className = "",
}) {
  const base = "flex gap-6";
  const alignMap = {
    start: "justify-start items-center",
    center: "justify-center items-center",
    end: "justify-end items-center",
  };
  const xlAlignMap = {
    start: "xl:justify-start",
    center: "xl:justify-center",
    end: "xl:justify-end",
  };

  const sizeMap = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const containerCls = [
    base,
    alignMap[align] || alignMap.center,
    xlAlignMap[xlAlign] || xlAlignMap.start,
    className,
  ].join(" ");

  const iconCls = `${sizeMap[size]} text-white/80 hover:text-accent transition-colors duration-300`;

  return (
    <div className={containerCls}>
      {socials.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          className={iconCls}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
