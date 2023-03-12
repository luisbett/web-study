function onlyGoodNews(grade) {
    if (grade >= 7) {
        console.log('Approved with',grade)
    }
}

onlyGoodNews(8.1)
onlyGoodNews(6.1)

function ifItIsTrueIPrint(value) {
    if (value) {
        console.log('It is true ' + value)
    }
}

ifItIsTrueIPrint()
ifItIsTrueIPrint(null)
ifItIsTrueIPrint(undefined)
ifItIsTrueIPrint(NaN)
ifItIsTrueIPrint('')
ifItIsTrueIPrint(0)
ifItIsTrueIPrint(-1)
ifItIsTrueIPrint(' ')
ifItIsTrueIPrint('?')
ifItIsTrueIPrint([])
ifItIsTrueIPrint([1, 2])
ifItIsTrueIPrint({})