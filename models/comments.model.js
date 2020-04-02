const commentDB = require("../data/db.config")

module.exports = {
    find,
    add,
    update,
    remove,
}

function find(){
    return commentDB("comments")
}

function add(comment){
return commentDB("comments")
.insert(comment, "id").then(ids => ({id: ids[0]}))

}

function update(id, changes){
return commentDB("comments")
.where({id})
.update(changes, "*")
}

function remove(id){
return commentDB("comments")
.where({ id })
.del()
}