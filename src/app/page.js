import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/about">About Us</Link>
      <Link href="/events">Events</Link>
    </div>
  );
}
