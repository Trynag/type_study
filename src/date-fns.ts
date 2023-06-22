import { subDays, format } from 'date-fns'

const date = new Date(1998, 1, 28)
const response = subDays(date, 30)
const responseFormated = format(response, 'yyyy/MM/dd')

console.log(responseFormated)