export default class Dates {
  constructor() {
    const date = new Date();
    this._year = date.getFullYear();
    this._month = date.getMonth() + 1;
    this._day = date.getDate();

    if (this._month < 10) {
      this._month = `0${this._month}`
    }
  }

  currentDate() {

    return `${this._year}-${this._month}-${this._day}`;
  }

  oneWeekAgoDate() {
    const _sevenDays = `0${this._day - 7}`;
    if (_sevenDays < 7 && this._month != '01') {
      this._month -= 1;
    } else if (this._day < 7 && this._month === '01') {
      this._year -= 1;
      this._month = 12;
    }

    if (_sevenDays.length.length === 1) {
      _sevenDays = `0${_sevenDays}`;
    }

    return `${this._year}-${this._month}-${_sevenDays}`;
  }
}
