const Router = require('koa-router');
const { resolve } = require('path');
const fs = require('fs');

const router = new Router({
    prefix: '/base'
})

router.get('/codeTemplate', ctx => {
    // 代码模板目录路径
    const codeTempPath = resolve(__dirname, '../packages/online/src/mobile-maker/codeTemplate')
    // 需要读取的文件
    const tempList = ['config.vue', 'render.vue']
    
    const res = {};
    tempList.forEach(fileName => {
        const codeString = fs.readFileSync(resolve(codeTempPath, fileName), 'utf-8')
        res[fileName] = codeString
    })

    ctx.body = {
        code: 0,
        data: res
    }
})


module.exports = router;