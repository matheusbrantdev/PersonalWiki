const permissions = ['user_create', 'user_edit', 'user_index', 'user_delete']

const permission1 = "user_create"
const permission2= "user_restore"

console.log(permissions.includes(permission1))
// output true. permission one exists in array permissions

console.log(permissions.includes(permission2))
// output false. permission two does not exists in array permissions
