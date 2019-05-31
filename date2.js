class Date2 {
  constructor () {
    this._now = new Date()
  }

  toString (fmt) {
    // todo: 添加自定义格式的功能
    return `${this.year()}-${this.months()}-${this.days()} ${this.hours()}:${this.minutes()}:${this.seconds()}`
  }

  year () {
    return this._now.getFullYear()
  }

  month () {
    return this._now.getMonth() + 1
  }

  months () {
    return this._pad(this.month())
  }

  day () {
    return this._now.getDate()
  }

  days () {
    return this._pad(this.day())
  }

  dayOfWeek () {
    return this._now.getDay()
  }

  hour () {
    return this._now.getHours()
  }

  hours () {
    return this._pad(this.hour())
  }

  minute () {
    return this._now.getMinutes()
  }

  minutes () {
    return this._pad(this.minute())
  }

  second () {
    return this._now.getSeconds()
  }

  seconds () {
    return this._pad(this.second())
  }

  _pad (v) {
    return v > 9 ? v : `0${v}`
  }
}
