db.user.update(
{"name":"mark"},
{"$set":{"age":18}},
{multi:true}
)