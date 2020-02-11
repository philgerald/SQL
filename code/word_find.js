db.user3.find(
{"$and":[
{"name":/^s/},
{"name":/y$/}
]
}
)