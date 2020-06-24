import {View} from "./View";
import {User, UserProps} from "../models/User";
import {UserShow} from "./UserShow";
import {UserForm} from "./UserForm";

export class UserEdit extends View<User, UserProps>{
    regionsMap(): { [p: string]: string } {
        return {
            userShow: '.user',
            userForm: '.form'
        }
    }

    onRender() {
        new UserShow(this.regions.userShow, this.model).render()
        new UserForm(this.regions.userForm, this.model).render()
    }

    template(): string {
        return `
        <div>
            <div class="user"></div>
            <div class="form"></div>
        </div>
        `;
    }


}