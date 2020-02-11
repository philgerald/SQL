var user1 ={
    name:"Mark",
    age:18,
    bmi:10
    },
    count=1000,
    users=[];
    
    for(var i=0;i<count;i++){
        users.push(user1);
        }
    db.user.insert(users);