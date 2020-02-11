db.user5.insert({
"name" : "mark",
"fans" : ["steven","crisis","stanly"]
})
db.user5.update({"name":"mark"},
{"$addToSet" : {"fans" :
{"$each" : ["steven","jack"] }}}
)