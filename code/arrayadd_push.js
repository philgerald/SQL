db.user1.update({"name":"mark"},
{$push:{"fans" : "jack"}
})