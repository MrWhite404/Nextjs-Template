import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const LinkButton = ({ children, href, className }: LinkButtonProps) => {
  return (
    <Link href={href}>
      <Button className={className}>{children}</Button>
    </Link>
  );
};

export default LinkButton;
