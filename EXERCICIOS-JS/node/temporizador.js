const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 3', function () { // */5 second(0-59, optional), * minute(0-59), 16 hour(0-23), * day of month(1-31), * month(1-12), 2 day of week(0-7, 0 ou 7, 1 é segunda, 2 é terça e por aí vai...)
    console.log('Executando Tarefa!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando primeira Tarefa!')
}, 20000) //20000 = 20 segundos

/**Além do setTimeout, temos também o setImmediate, que seria como o setTimeout só que no lugar de 20000, seria sempre 0 e
 * e o setInterval que de tempos em tempos dispara uma função, a cada 2 segundos, direto no javascript.*/

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] //dias da semana, 1-segunda, 2-terça e por aí vai...
regra.hour = 17 //hora
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando segunda Tarefa!', new Date().getSeconds())
})