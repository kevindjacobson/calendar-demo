import {useCalendarGrid} from 'react-aria';
import {getWeeksInMonth} from '@internationalized/date';
import { RangeCalendarState } from 'react-stately';
import { useLocale } from 'react-aria';
import { CalendarCell } from './CalendarCell';


export const CalendarGrid = ({ state, ...props }: { state: RangeCalendarState }) => {
  let { locale } = useLocale();
    // const locale = 'ar-SA';

  let { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);

  // Get the number of weeks in the month so we can render the proper number of rows.
  let weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <table {...gridProps}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => <th key={index}>{day}</th>)}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state.getDatesInWeek(weekIndex).map((date, i) => (
              date
                ? (
                  <CalendarCell
                    key={i}
                    state={state}
                    date={date}
                  />
                )
                : <td key={i} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
