export function getXLongestMeets(
  meets: {
    [key: string]: SimpleEvent[] & {
      duration: number;
    };
  },
  x: number
) {
  // Create a sorted list of the events

  let sortedList = [];
  // Sorting by values asc
  sortedList = Object.entries(meets).sort((a: any, b: any) => {
    if (b[1].duration > a[1].duration) return 1;
    else if (b[1].duration < a[1].duration) return -1;
    //if values are same do edition checking if keys are in the right order
    else {
      if (a[0].duration > b[0].duration) return 1;
      else if (a[0].duration < b[0].duration) return -1;
      else return 0;
    }
  });

  // return first x values from sortedList
  const longestMeets = sortedList.map((el) => el[0]).slice(0, x);

  // Return data of the top 5 events
  return longestMeets.map((longMeet) => meets[longMeet]);
}

// Reduces event data to simple format
// Converts from array of objects to object of arrays where event summary is object key
export function convertToObject(meetCalendarEvents: GCalendarEvent[]) {
  let timeSpentInMeet = 0;

  const meetEventsObject = meetCalendarEvents?.reduce((previousValue, currentValue) => {
    const summary = currentValue.summary;
    previousValue[summary] = previousValue?.[summary] || [];

    const timeDifference =
      new Date(currentValue.end.dateTime).getTime() -
      new Date(currentValue.start.dateTime).getTime();

    const timeDifferenceInHours = Number.isNaN(timeDifference)
      ? 0
      : timeDifference / 1000 / 60 / 60;

    const meet = {
      title: currentValue.summary,
      duration: timeDifferenceInHours,
      id: currentValue.id,
    };

    timeSpentInMeet += timeDifferenceInHours;

    previousValue[summary].duration =
      typeof previousValue[summary].duration === 'number'
        ? previousValue[summary].duration + timeDifferenceInHours
        : timeDifferenceInHours;

    previousValue[summary].push(meet);
    return previousValue;
  }, Object.create(null));

  return [meetEventsObject, timeSpentInMeet];
}
