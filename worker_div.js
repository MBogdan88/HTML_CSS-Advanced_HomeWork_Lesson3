self.addEventListener('message',(e) => {
    console.log('Отримано повідомлення від основного потоку');
    let workerResult = `Результат: ${e.data[0] / e.data[1]}`;
    console.log('Надсилання повідомлення до основного потоку');
    postMessage(workerResult);
})