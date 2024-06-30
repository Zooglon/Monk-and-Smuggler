import { ReactNode } from "react";

export const Paragraph = ({ children }: { children: string | ReactNode }) => (
  <span>{children}</span>
);
