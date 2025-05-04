import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = (props: AuthLayoutProps) => {
  return <div className="auth-layout">{props.children}</div>;
};

export default AuthLayout;
