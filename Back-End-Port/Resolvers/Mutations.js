const { prisma } = require("../Prisma/..src/generated/prisma-client")


function postComment(parents, { name, email, phoneNumber, comment }, info) {
    return context.prisma.createComment({
        name,
        email,
        phoneNumber,
        comment
    })
}

module.exports = {
    postComment,

}