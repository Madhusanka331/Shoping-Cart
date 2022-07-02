const koa_router = require('koa-router');
const { addItems, getItems,  getItemsById, updateItemsById } = require('../API/Item');

const router = new koa_router({prefix: '/trador/item'})

router.post('/', ctx => {
    let items = ctx.request.body;
    items = addItems(items);
    ctx.body = 'successfully  added ';
});

router.get('/', ctx => {
    ctx.body = getItems();
    
});


router.get('/:itemName', (ctx) => {
    const itemName = ctx.params.itemName;
    ctx.body = getItems(itemName);
});

router.put('/update/:itemName', (ctx) => {
    const itemName = ctx.params.itemName;
    let item = ctx.request.body;
    item = updateItemsById(itemName, item);
    ctx.body = "Successfully Updated";
})

module.exports = router;