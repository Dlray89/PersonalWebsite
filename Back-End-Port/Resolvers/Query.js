
async function contacts(parents, args, context,info){
    const where = args.filter ? {
        OR: [

            {name_contains: args.filter},
            {comment_contains: args.filter}
        ],
    } : {}

    const contact = await prisma.context.contacts({
        where
    })
    return contact
}

module.exports = {
    contacts,
}