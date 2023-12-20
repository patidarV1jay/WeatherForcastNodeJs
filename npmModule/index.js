import chalk from 'chalk'
import validator from 'validator'

// console.log(chalk.red("false"))  
const mail = 'champ@gmail.fa'
const res = validator.isEmail(mail)
console.log(res && chalk.green.inverse(res))
console.log('start')