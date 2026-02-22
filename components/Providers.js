"use client";

import { ThemeProvider } from "@material-tailwind/react";
import { theme } from "@/theme/theme";

export default function Providers({ children }) {
  return <ThemeProvider value={theme}>{children}</ThemeProvider>;
}