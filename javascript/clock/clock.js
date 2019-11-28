const HM_SEPARATOR = ":"

export class Clock {

  constructor(hours = 0, minutes = 0) {
    
    // Remove more than a day value
    minutes %= 1440
    
    // More than one hour minutes
    while (minutes >= 60) {
      minutes -= 60
      hours++
    }

    // Negative minutes
    while (minutes < 0) {
      minutes += 60
      hours--
    }

    // Remove more than a day value
    hours %= 24

    // Manage negative hour value
    if (hours < 0) hours += 24

    // Affect value
    this.minutes = minutes
    this.hours = hours

  }

  toStringMinutes() {
    return (this.minutes + "").padStart(2, "0")
  }

  toStringHours() {
    return (this.hours + "").padStart(2, "0")
  }

  toString() {
    return this.toStringHours() + HM_SEPARATOR + this.toStringMinutes()
  }

  plus(minutes) {

    // Add minutes
    this.minutes += minutes

    // Remove more than a day value
    this.minutes %= 1440
    
    // More than one hour minutes
    while (this.minutes >= 60) {
      this.minutes -= 60
      this.hours++
    }

    // Negative minutes
    while (this.minutes < 0) {
      this.minutes += 60
      this.hours--
    }

    // Remove more than a day value
    this.hours %= 24

    // Manage negative hour value
    if (this.hours < 0) this.hours += 24
    
    // return updated clock
    return this;
  }

  minus(minutes) {
    return this.plus(-minutes)
  }

  equals(clock) {
    return this.hours == clock.hours && this.minutes == clock.minutes
  }
}
