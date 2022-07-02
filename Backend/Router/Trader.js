const koa_router = require('koa-router');
const { createTraderProfile, getTraderProfile } = require('../API/Trader');

const router = new koa_router({prefix: '/trader'})

router.post('/', ctx => {
    let traderProfile = ctx.request.body;
    traderProfile = createTraderProfile(traderProfile)
    ctx.body = 'successfully  craeted the trader profile';
});

router.get('/', ctx => {
    ctx.body = getTraderProfile()
    console.log(ctx.body);
});

module.exports = router;