db.user5.update({"name":"mark"},
{"$pop":{"fans":-1}}
)