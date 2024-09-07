//Middleware pattern (chain of responsability)

const step1 = (ctx, next) => {
    ctx.value1 = 'Middleware 1'
    next()
}

const step2 = (ctx, next) => {
    ctx.value2 = 'Middleware 2'
    next()
}

const step3 = ctx => ctx.value3 = 'Middleware 3'

const exec = (ctx, ...middlewares) => {
    const execStep = index => {
        middlewares && index < middlewares.length && middlewares[index](ctx, () => execStep(index + 1))
    }
    execStep(0)
}

const ctx = {}
exec(ctx, step1, step2, step3)
console.log(ctx)