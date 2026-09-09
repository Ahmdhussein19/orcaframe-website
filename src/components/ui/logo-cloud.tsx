import Image, { type StaticImageData } from "next/image";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import DataEngineerDockImg from "@/assets/images/pngwing.com.png";
import CodeLightImg from "@/assets/images/1.png";
import CodeDarkImg from "@/assets/images/2.png";
import DashboardsImg from "@/assets/images/New_Power_BI_Logo.svg";
import PricingImg from "@/assets/images/9ab41cbbb7784d985cbe0ab37f4adaef.png";
import ApiLightImg from "@/assets/images/4.png";
import ApiDarkImg from "@/assets/images/3.png";
import AwsImg from "@/assets/images/aws-svgrepo-com.svg";
import AwsColorImg from "@/assets/images/aws-color.png";
import AzureImg from "@/assets/images/azure-svgrepo-com.svg";
import JavaScriptLogoImg from "@/assets/images/JavaScript-logo.png";

type Logo = {
  src: StaticImageData;
  alt: string;
  darkSrc?: StaticImageData;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn("grid grid-cols-2 border md:grid-cols-4", className)}
      {...props}
    >
      <LogoCard
        className="relative border-r border-b bg-secondary dark:bg-card/100"
        logo={{
          src: DataEngineerDockImg,
          alt: "Tableau",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b md:border-r"
        logo={{
          src: CodeLightImg,
          darkSrc: CodeDarkImg,
          alt: "Code",
        }}
      />

      <LogoCard
        className="relative border-r border-b md:bg-secondary dark:md:bg-card/100"
        logo={{
          src: DashboardsImg,
          alt: "Power BI",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6"
          strokeWidth={1}
        />
        <PlusIcon
          className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="relative border-b bg-secondary md:bg-background dark:bg-card/100 md:dark:bg-background"
        logo={{
          src: PricingImg,
          alt: "SQL",
        }}
      />

      <LogoCard
        className="relative border-r border-b bg-secondary md:border-b-0 md:bg-background dark:bg-card/100 md:dark:bg-background"
        logo={{
          src: ApiLightImg,
          darkSrc: ApiDarkImg,
          alt: "APIs",
        }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b bg-background md:border-r md:border-b-0 md:bg-secondary dark:md:bg-card/100"
        logo={{
          src: AwsImg,
          darkSrc: AwsColorImg,
          alt: "AWS",
        }}
      />

      <LogoCard
        className="border-r"
        logo={{
          src: AzureImg,
          alt: "Azure",
        }}
      />

      <LogoCard
        className="bg-secondary dark:bg-card/100"
        logo={{
          src: JavaScriptLogoImg,
          alt: "JavaScript",
        }}
      />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-background px-4 py-8 md:p-8",
        className
      )}
      {...props}
    >
      <Image
        alt={logo.alt}
        className={cn(
          "h-9 w-auto select-none object-contain transition-transform duration-200 hover:scale-125 md:h-11",
          logo.darkSrc && "dark:hidden"
        )}
        height={44}
        src={logo.src}
      />
      {logo.darkSrc ? (
        <Image
          alt={logo.alt}
          className="hidden h-9 w-auto select-none object-contain transition-transform duration-200 hover:scale-125 dark:block md:h-11"
          height={44}
          src={logo.darkSrc}
        />
      ) : null}
      {children}
    </div>
  );
}
