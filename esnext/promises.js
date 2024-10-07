function speakAfter(seconds, sentence) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(sentence)
        }, seconds * 1000)
    })
}

speakAfter(3, 'I am a sentence 3 seconds delayed')
    .then(sentence => sentence.concat('!!!'))
    .then(finalSentence => console.log(finalSentence))