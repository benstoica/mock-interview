import { getTechStackIcons } from "@/lib/utils";
import Image from "next/image";

const DisplayTechStack = async (props: TechIconProps) => {
  const techIcons = await getTechStackIcons(props.techStack);
  return (
    <div className="flex flex-row gap-1.5">
      {techIcons.slice(0, 3).map((icon) => (
        <div
          key={icon.tech}
          className="relative group bg-dark-300 rounded-full p-2 flex-center">
          <span className="tech-tooltip">{icon.tech}</span>
          <Image
            src={icon.url}
            alt={icon.tech}
            width={100}
            height={100}
            className="size-5"
          />
        </div>
      ))}
    </div>
  );
};

export default DisplayTechStack;
