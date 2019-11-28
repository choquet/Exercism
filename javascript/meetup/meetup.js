
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

/**
 * Return the number of day between 2 days of the same week
 * 
 * @param {Integer} startDay 
 * @param {Integer} endDay
 * @return {Integer} distance 
 */
const distance = (startDay, endDay) => {
  if (startDay > 6 || startDay < 0 || endDay > 6 || endDay < 0) throw new Error("Invalid day");
  if (startDay == endDay) return 0
  else if (endDay > startDay) return endDay - startDay
  else return (endDay + 7) - startDay
}

export const meetupDay = (year, month, day, descriptor) =>  {
  
  // That's what we have to compute
  var dayInMonth;

  // 0 for Sunday, 1 for Monday, 2 for Tuesday, 3 for Wednesday, 4 for Thursday, 5 for Friday, 6 for Saturday
  var dayNumber = DAYS.indexOf(day)

  // first day of targeted month
  var firstDayInMonth = new Date(year, month).getDay()

  // first targeted day in targeted month
  var firstTargetedDayInMonth = 1 + distance(firstDayInMonth, dayNumber);

  // 1 for 1st, 2 for 2nd, 3 for 3rd, 4 for 4th, 5 for 5th, NaN for last
  if (descriptor == "teenth") {

    // Between 13 and 19
    while (firstTargetedDayInMonth < 13) firstTargetedDayInMonth += 7

    dayInMonth = firstTargetedDayInMonth

  } else if (descriptor == "last") {
    
    // Last

    var lastDayInMonth = new Date(year, month + 1, 0).getDay()
    var lastDayNumInMonth = new Date(year, month + 1, 0).getDate()

    dayInMonth = lastDayNumInMonth - distance(dayNumber, lastDayInMonth);

  } else {

    // 1st, 2nd, 3rd, 4th, 5th

    let weekNumber = parseInt(descriptor)

    dayInMonth = firstTargetedDayInMonth + (weekNumber - 1) * 7
  
    if (new Date(year, month, dayInMonth) > new Date(year, month + 1, 0)){
      throw new Error("No 5th " + day + " in this month")
    }
    
  }

  return new Date(year, month, dayInMonth)
}

