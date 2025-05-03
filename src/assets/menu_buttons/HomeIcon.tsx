import { type SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> {}

export const HomeButton = (props: IProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <g clipPath="url(#a)">
        <path d="M20.457 13.003a.54.54 0 0 1-.4-.17l-8.054-8.417-8.054 8.416a.55.55 0 0 1-.765-.03.605.605 0 0 1-.03-.799l8.454-8.829a.55.55 0 0 1 .398-.17c.149 0 .291.06.397.17l8.454 8.829a.61.61 0 0 1 .118.639.6.6 0 0 1-.207.262.55.55 0 0 1-.31.1" />
        <path d="m12.019 6.003-7 6.89v6.965c0 .304.122.595.341.81s.516.335.825.335h4.084V15.28h3.5v5.723h4.083c.31 0 .606-.12.825-.335s.342-.506.342-.81v-7.004z" />
      </g>
    </svg>
  );
};
