db.user.find(
{"$and":
 [
    {"age":{"$gte":30,"$lt":60}},
    {"fans":{"$gte":200}}
 ]
}
)