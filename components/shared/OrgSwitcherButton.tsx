"use client";

import { dark } from "@clerk/themes";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { useTheme } from "next-themes";

export default function OrgSwitcherButton() {
  const { resolvedTheme } = useTheme();

  return (
    <OrganizationSwitcher
      appearance={{
        baseTheme: resolvedTheme === "dark" ? dark : undefined,
        elements: {
          organizationSwitcherTrigger:
            "py-2 px-4 text-dark-4 dark:text-light-4",
        },
      }}
    />
  );
}
