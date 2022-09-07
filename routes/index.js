const Router = require('koa-router');

const router = new Router({
    prefix: '/base'
})

router.get('/codeTemplate', ctx => {
    ctx.body = {
        code: 0,
        message: '代码模板'
    }
})


module.exports = router;