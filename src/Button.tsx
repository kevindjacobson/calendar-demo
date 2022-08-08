import {useButton} from 'react-aria';
import { AriaButtonProps } from "@react-types/button";
import {useRef} from 'react';

export const Button = (props: AriaButtonProps<"button">) => {
  let ref = useRef<HTMLButtonElement>(null);
  let { buttonProps } = useButton(props, ref);
  let { children } = props;

  return (
    <button {...buttonProps} ref={ref}>
      {children}
    </button>
  );
}
