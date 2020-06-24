import {Collection} from "../models/Collection";
import {CollectionView} from "./CollectionView";
import {User, UserProps} from "../models/User";
import {UserShow} from "./UserShow";

export class UserList extends CollectionView<User, UserProps>{

    renderItem(model: User, itemPrent: Element) {
        new UserShow(itemPrent, model).render()
    }
}