var bulk =db.user.initializeOrderedBulkOp();
bulk.insert({name:"mark"});
bulk.insert({name:"hoho"});
bulk.execute();