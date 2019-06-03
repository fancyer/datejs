/**
 * @description 增强原生Date
 * @constructor
 * @params 可选参数与原生Date相同
 * eg:
 * new Date2()
 * new Date2(12345)
 * new Date('2011/11/11')
 * new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])
 */
class Date2 extends Date{
  constructor (...args) {
    super()
    this._d = new Date(...args)
  }

  get year () {
    return this._d.getFullYear()
  }

  set year (v) {
    this._d = new Date(v, this.month, this.day, this.hour, this.minute, this.second)
  }

  get month () {
    return this._d.getMonth() + 1
  }

  set month (v) {
    // handle monthIndex
    this._d = new Date(this.year, v - 1, this.day, this.hour, this.minute, this.second)
  }

  get day () {
    return this._d.getDate()
  }

  set day (v) {
    this._d = new Date(this.year, this.month - 1, v, this.hour, this.minute, this.second)
  }

  get hour () {
    return this._d.getHours()
  }

  set hour (v) {
    this._d = new Date(this.year, this.month - 1, this.day, v, this.minute, this.second)
  }

  get minute () {
    return this._d.getMinutes()
  }

  set minute (v) {
    this._d = new Date(this.year, this.month - 1, this.day, this.hour, v, this.second)
  }

  get second () {
    return this._d.getSeconds()
  }

  set second (v) {
    this._d = new Date(this.year, this.month - 1, this.day, this.hour, this.minute, v)
  }

  get dayOfWeek () {
    // use user-set date to get the day of week
    // use '/' instead of '-' to avoid bug
    return this._d.getDay()
  }

  // WebStorm suggests to static it.
  // 为什么需要有静态方法?益处是什么？
  // 静态方法为什么在constructor上?
  static _pad (v) {
    return v > 9 ? v : `0${v}`
  }

  /**
   * 在当前date基础上加上一个数值，返回新的Date2实例
   * @param {number} value - 要增加的数值
   * @param {string} label - 要增加的字段, 可选值为 year/month/day/hour/minute/second
   * @returns {Date2}      - 新的 Date2 实例
   */
  add (value, label) {
    if (typeof value !== 'number') {
      throw new Error('Invalid value, must be a number')
    }
    if (['year', 'month', 'day', 'hour', 'minute', 'second'].includes(label) === false) {
      throw new Error('Invalid label')
    }
    // handle monthIndex
    const params = [this.year, this.month - 1, this.day, this.hour, this.minute, this.second]

    // return new instance
    let ins = new Date2(...params)
    ins[label] += value
    return ins
  }

  // todo: custom format
  toString (fmt) {
    const [mo, d, h, mi, s] = [this.constructor._pad(this.month), this.constructor._pad(this.day), this.constructor._pad(this.hour), this.constructor._pad(this.minute), this.constructor._pad(this.second)]
    return `${this.year}-${mo}-${d} ${h}:${mi}:${s}`
  }
}
