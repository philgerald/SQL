db.user5.update({"name":"mark"},
{"$pull":{"fans":"jack"}}
)