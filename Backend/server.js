const koa = require('koa');
const bodyparser = require('koa-bodyparser');
const app = new koa();
const router = require('./Router/customer');
const ItemRouter = require('./Router/addItem');
const PromotionRouter = require('./Router/Promotions');
const TraderRouter = require('./Router/Trader');

app.use(bodyparser());
app.use(router.routes()).use(router.allowedMethods());
app.use(ItemRouter.routes()).use(ItemRouter.allowedMethods());
app.use(PromotionRouter.routes()).use(PromotionRouter.allowedMethods());
app.use(TraderRouter.routes()).use(TraderRouter.allowedMethods());

const PORT = 8070;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})