db.user4.update({"name":"mark"},
{"$push" : {"fans" :
{"$each" : ["jack","lnadry","max"],
"$slice" : -5 }}}
)