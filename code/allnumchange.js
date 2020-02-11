db.user.update(
{},
{"$inc":{"age":1}},
{multi:true}
)