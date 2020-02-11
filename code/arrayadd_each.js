db.user1.update({"name":"mark"},
{$push:{"fans":{"$each":["jack","inadry","max"]}}
})