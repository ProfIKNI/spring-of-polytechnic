import { type SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> {}

export const TicketButton = (props: IProps) => {
  return (
    <svg
      fill="currentColor"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M15 20H1.5v-4.5a3 3 0 0 0 0-6V5H15v3.75h1.5V5h6v4.5a3 3 0 0 0 0 6V20h-6v-3.75H15zm0-9.75v4.5h1.5v-4.5z" />
    </svg>
  );
};
