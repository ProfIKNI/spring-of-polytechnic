import { type SVGProps } from "react";

interface IProps extends SVGProps<SVGSVGElement> {}

export const CharactersButton = (props: IProps) => {
  return (
    <svg
      fill="currentColor"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 13q-1.65 0-2.825-1.175T8 9V5.5q0-.625.438-1.062A1.45 1.45 0 0 1 9.5 4q.375 0 .713.175t.537.5q.2-.325.538-.5a1.53 1.53 0 0 1 1.425 0q.339.175.537.5.2-.325.538-.5T14.5 4q.625 0 1.063.438T16 5.5V9q0 1.65-1.175 2.825T12 13m-8 8v-2.8q0-.85.438-1.562A2.93 2.93 0 0 1 5.6 15.55a14.8 14.8 0 0 1 3.15-1.162 13.8 13.8 0 0 1 6.5 0q1.6.39 3.15 1.162.725.375 1.163 1.088T20 18.2V21z" />
    </svg>
  );
};
