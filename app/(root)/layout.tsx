import { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
  return <div>{props.children}</div>;
};

export default RootLayout;
