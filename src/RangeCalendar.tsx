import { useRangeCalendarState } from 'react-stately';
import { useRef } from 'react';
import { DateValue, RangeCalendarProps } from "@react-types/calendar";
import { useLocale, useRangeCalendar } from 'react-aria';
import { Button } from './Button';
import { createCalendar } from '@internationalized/date';
import { CalendarGrid } from './CalendarGrid';
import { useAvailability } from './useAvailability';

export const RangeCalendar = (props: RangeCalendarProps<DateValue>) => {
  const { locale } = useLocale();
  // const locale = 'ar-SA';
  const state = useRangeCalendarState({ ...props, locale, createCalendar, visibleDuration: { weeks: 1 } });
  const ref = useRef<HTMLDivElement>(null);
  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useRangeCalendar(props, state, ref);

  return (
    <div {...calendarProps} ref={ref}>
      <p>{title}</p>
      <Button {...prevButtonProps}>PREV</Button>
      <Button {...nextButtonProps}>NEXT</Button>
      <CalendarGrid state={state} {...props} />
    </div>
  )
}
