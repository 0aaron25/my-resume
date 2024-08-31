import React from "react";

interface ContainerProps {
  classes: string;
  children: React.ReactNode;
}

export default function Container({ children, classes }: ContainerProps) {
  return <main className={classes}>{children}</main>;
}
