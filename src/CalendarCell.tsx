import styled from 'styled-components';
import { useRef } from 'react';
import {useCalendarCell} from 'react-aria';
import { CalendarState, RangeCalendarState } from 'react-stately';
import { CalendarDate } from "@internationalized/date";

type CalendarStateUnion = CalendarState | RangeCalendarState;

const Cell = styled.td<{selected: boolean}>`
  ${({ selected }) => selected && 'background: blue'}
`;

export const CalendarCell = ({ state, date }: { state: CalendarStateUnion, date: CalendarDate }) => {
  let ref = useRef<HTMLDivElement>(null);
  let {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate
  } = useCalendarCell({ date }, state, ref);

  return (
    <Cell {...cellProps} selected={isSelected}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={`cell ${
          isDisabled ? 'disabled' : ''
        } ${isUnavailable ? 'unavailable' : ''}`}
      >
        {formattedDate}
      </div>
    </Cell>
  );
}
