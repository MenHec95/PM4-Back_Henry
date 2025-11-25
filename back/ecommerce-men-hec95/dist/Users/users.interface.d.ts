import { Role } from 'src/role.enum';
export interface User {
    email: string;
    name: string;
    password: string;
    address: string;
    phone: number;
    admin: Role;
    country?: string;
    city?: string;
}
