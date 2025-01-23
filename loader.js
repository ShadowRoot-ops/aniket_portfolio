"use client";

export default function myImageLoader({ src, width, quality }) {
  if (!src.startsWith("https://i.imgur.com/")) {
    return src;
  }
  return `https://i.imgur.com/${src}.png?w=${width}&q=${quality || 75}`;
}
