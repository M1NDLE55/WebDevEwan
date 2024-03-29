"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  //#region fix scroll to top (Link bug)
  const pathname = usePathname();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  //#endregion

  return <main className="h-section-1 p-4">about me</main>;
}
