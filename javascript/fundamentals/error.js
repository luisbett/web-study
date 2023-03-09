function handleErrorAndShow(error) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'Error 999'
    throw {
        id: error.id,
        msg: error.message,
        date: new Date
    }
}

function printNameOutLoud(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        handleErrorAndShow(error)
    } finally {
        console.log('Processing finished!')
    }
}

let obj1 = { name: 'Luis' }
printNameOutLoud(obj1)