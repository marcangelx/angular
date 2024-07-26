import { User } from "../types/user-types";

export function getFullName(user: User) {
    return `${user.name.first} ${user.name.last}`;
}
