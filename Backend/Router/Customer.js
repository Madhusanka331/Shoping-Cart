const koa_router = require('koa-router');
const { createProfile, getProfiles } = require('../API/Customer');

const router = new koa_router({prefix: '/customer'})

router.post('/', ctx => {
    let profile = ctx.request.body;
    profile = createProfile(profile)
    ctx.body = 'successfully  craeted the Customer profile';
});

router.get('/', ctx => {
    ctx.body = getProfiles()
    
});

module.exports = router;