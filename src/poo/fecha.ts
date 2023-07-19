class MyDate {
  constructor(
    protected year: number, 
    public month: number, 
    private _day: number
  ) {}

  printFormat():string {
    const day = this.addPadding(this._day)
    const month = this.addPadding(this.month)
    return `year/month/day -> ${this.year}/${month}/${day}`
  }

  private addPadding(value: number): string {
    if( value <= 9 ) {
      return `0${value}`
    }

    return `${value}`
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if(type === 'days') {
      this._day += amount
    } else if (type === 'months') {
      this.month += amount
    } else {
      this.year += amount
    }
  }

  get day(){
    return this._day
  }

  set day(value: number) {
    this._day = value
  }

  testError(){
    try {
      if(this._day > 10 ) {
        this._day = 12
      } else {
        throw new Error('Month out of range')
      }
    }catch (e) {
      console.log(e)
    }

    console.log("programa sigue")
  }
}

const myDate = new MyDate(1, 1, 1)
console.log(myDate.testError())