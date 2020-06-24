import {Eventing} from "./Eventing";
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import {Model} from "./Model";
import {Collection} from "./Collection";

export interface UserProps {
    name?: string,
    age?: number,
    id? : number
}
const userUrl = `http://localhost:3000/users`

export class User extends Model<UserProps>{
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(userUrl)

        )
    }

    static buildUserCollection(): Collection <User, UserProps> {
        return new Collection<User, UserProps>(userUrl, (json: UserProps) => User.buildUser(json))
    }

    setRandomAge(): void{
        this.set({age: Math.round(Math.random() * 100)})
    }
}