import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Interview Prep"
            width={38}
            height={32}
            priority={true}
          />
          <h2 className="text-primary-100">Interview Prep</h2>
        </Link>
      </nav>
      {props.children}
    </div>
  );
};

export default RootLayout;
