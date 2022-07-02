const koa_router = require('koa-router');
const { addPromotions, getPromotions } = require('../API/Promotions');

const router = new koa_router({prefix: '/promotions'})

router.post('/', ctx => {
    let promotion = ctx.request.body;
    promotion = addPromotions(promotion);
    ctx.body = 'successfully  added ';
});

router.get('/', ctx => {
    ctx.body = getPromotions();
    
});

module.exports = router;