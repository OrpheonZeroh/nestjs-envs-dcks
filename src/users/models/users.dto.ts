export class UsersDto {

    id:string
    name:string
    email:string
    password:string
    verificated:boolean
    role:string

}

export enum UsersRole {

    ADMIN = 'admin',
    CLIENT = 'client',    
    DEV = 'prog',

}