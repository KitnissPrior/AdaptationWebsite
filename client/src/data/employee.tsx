export interface IEmployee {
    id?: string;
    name?: string;
    username?: string;
    email?: string;
    phone?: number;
    job?: string;
    team?: string;
    password?: number;
}

export type EmployeeData = IEmployee[];
