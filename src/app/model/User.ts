import { Role } from "./Role";

export class User{
  id!: string;
  firstName!: string;
  lastName!: string;
  username!: string;
  email!: string;
  password!: string;
  civi!: string;
  fonction!: string;
  enable!: boolean;
  roles!: Role[];
}
