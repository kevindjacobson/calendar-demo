import { useState, useEffect } from 'react';
import { today, getLocalTimeZone, CalendarDateTime, CalendarDate, toCalendarDateTime } from '@internationalized/date';

type DateAvailabilities = {
  date: CalendarDate,
  availablities:
    {
      start: CalendarDateTime,
      end: CalendarDateTime
    }[]
}

const availablityData = (date: CalendarDate) => {
  const startOfWorkDay = toCalendarDateTime(date).
    set({ hour: 0, minute: 0, second: 0, millisecond: 0 });

  return {
    date: date,
    availablities: [
    {
      start: startOfWorkDay.add({ hours: 1 }),
      end: startOfWorkDay.add({ hours: 1, minutes: 30 }),
    },
    {
      start: startOfWorkDay.add({ hours: 3 }),
      end: startOfWorkDay.add({ hours: 3, minutes: 30 }),
    },
    {
      start: startOfWorkDay.add({ hours: 3, minutes: 30 }),
      end: startOfWorkDay.add({ hours: 4 }),
    },
    {
      start: startOfWorkDay.add({ hours: 4 }),
      end: startOfWorkDay.add({ hours: 4, minutes: 30 }),
    },
    ]
  };
};

export const useAvailability = (date: CalendarDate) => {
  const [loading, setLoading] = useState(true);
  const [availabilities, setAvailabilities] = useState<DateAvailabilities>();

  useEffect(() => {
    setTimeout(() => {
      setAvailabilities(availablityData(date));
      setLoading(false);
    }, 0
    );
  });

  return { loading, data: availabilities };
};
