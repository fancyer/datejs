class Date2 {
  constructor() {
    const _d = new Date()
    this._year = _d.getFullYear()
    this._month = _d.getMonth() + 1
    this._day = _d.getDate()
    this._hour = _d.getHours()
    this._minute = _d.getMinutes()
    this._second = _d.getSeconds()

    this.validators = {
      y: (v) => {
        const max = this.year + 100
        if (typeof (v) !== 'number' || v > max || v < 1970) {
          throw new Error(`Invalid year, must be a number between 1970 ~ ${max}`)
        }
      },
      m(v) {
        if (typeof (v) !== 'number' || v > 12 || v < 1) {
          throw new Error('Invalid month, must be a number between 1 ~ 12')
        }
      },
      d: (v) => {
        const max = new Date(this.year, this.month, 0).getDate()
        if (typeof (v) !== 'number' || v > max || v < 1) {
          throw new Error(`Invalid date, must be a number between 1 ~ ${max}`)
        }
      },
      h(v) {
        if (typeof (v) !== 'number' || v > 23 || v < 0) {
          throw new Error('Invalid hour, must be a number between 0 ~ 23')
        }
      },
      s(v) {
        if (typeof (v) !== 'number' || v > 59 || v < 0) {
          throw new Error('Invalid value, must be a number between 0 ~ 59')
        }
      },
    }
  }

  get year() {
    return this._year
  }

  set year(v) {
    this.validators.y(v)
    this._year = v
  }

  get month() {
    return this._month
  }

  set month(v) {
    this.validators.m(v)
    this._month = v
  }

  get day() {
    return this._day
  }

  set day(v) {
    this.validators.d(v)
    this._day = v
  }

  get hour() {
    return this._hour
  }

  set hour(v) {
    this.validators.h(v)
    this._hour = v
  }

  get minute() {
    return this._minute
  }

  set minute(v) {
    this.validators.s(v)
    this._minute = v
  }

  get second() {
    return this._second
  }

  set second(v) {
    this.validators.s(v)
    this._second = v
  }

  get dayOfWeek() {
    // use user-set date to get the day of week
    // use '/' instead of '-' to avoid bug
    return new Date(`${this.year}/${this.month}/${this.day}`).getDay()
  }

  // WebStorm suggests to static it.
  // 为什么需要有静态方法?益处是什么？
  // 静态方法为什么在constructor上?
  static _pad(v) {
    return v > 9 ? v : `0${v}`
  }

  // todo: custom format
  toString(fmt) {
    const [mo, d, h, mi, s] = [this.constructor._pad(this.month), this.constructor._pad(this.day), this.constructor._pad(this.hour), this.constructor._pad(this.minute), this.constructor._pad(this.second)]
    return `${this.year}-${mo}-${d} ${h}:${mi}:${s}`
  }
}
