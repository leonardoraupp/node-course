const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 4', function () {
    console.log(`Executando tarefa 1! ${new Date().getSeconds()}s`)
})

// Maneira de cancelar um temporizador criado pelo scheduleJob.
setTimeout(() => {
    console.log('Cancelando tarefa 1.')
    tarefa1.cancel()
}, 20000);

//  Criando regras de recorrência na atividade programada

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]  // de seg a sex
regra.hour = 11
regra.second = 30 // irá executar sempre nos 30 segundos

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log(`Executando tarefa 2. ${new Date().getSeconds()}s`)
})
