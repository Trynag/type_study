// import { subDays, format } from 'date-fns'
import {subHours, getHours, getMinutes} from 'date-fns'

// const date = new Date(1998, 1, 28)
// const response = subDays(date, 30)
// const responseFormated = format(response, 'yyyy/MM/dd')

const convertTimeToString = ((hours: number, minutes: number): string => {
  return hours.toString().concat(':', minutes.toString())
})

const timeSleep = subHours(new Date(2023, 7, 31, 6, 20, 0), 7)
const timeSleepHours = getHours(timeSleep)
const timeSleepMinutes = getMinutes(timeSleep)
// console.log(`${getHours(time)}:${getMinutes(time)}`)
const timeNow = new Date()
const timeNowHours = getHours(timeNow)
const timeNowMinutes = getMinutes(timeNow)

const isTime = convertTimeToString(timeSleepHours, timeSleepMinutes) === convertTimeToString(timeNowHours, timeNowMinutes)
const subTime = subHours(timeSleep, timeNowHours)

isTime ? console.log('A DORMIR PERRO HPTA') : console.log(`Aun no rei, falta ${getHours(subTime)}`)