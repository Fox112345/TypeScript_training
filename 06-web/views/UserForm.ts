import {View} from "./View";
import {User, UserProps} from "../models/User";

export class UserForm extends View <User, UserProps>{

    eventMap(): { [key: string]: () => void } {
        return {
            'click:.myButton': this.onButtonClick,
            'click:.nameButton': this.onNameChange,
            'click:.saveModelButton': this.onSaveModel
        }
    }

    onSaveModel = ():void => {
        this.model.save()
    }

    onButtonClick = ():void => {
        this.model.setRandomAge()
    }

    onNameChange = (): void => {
        const input = this.parent.querySelector('input')

        if(input){
            this.model.set({name: input.value})
        }

    }

    template(): string {
        return `
        <div>
            <input placeholder="${this.model.get('name')}"/>
            <button class="nameButton">Change Name</button>
            <button class="myButton">Click</button>
            <button class="saveModelButton">Click</button>
        </div>
        `
    }


}