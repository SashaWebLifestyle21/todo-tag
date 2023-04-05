import {ITag} from "../redux/reducers/tagSlice";
import {toast} from "react-toastify";

export const validateTag = (tagStr: string, tags: ITag[]) => {
    if(tags.find(tag => tag.text === tagStr)) {
        toast('Такой тег уже существует')
        return false
    }
    if(/^\s*$/.test(tagStr)) {
        toast('Тег не может быть пустой')
        return false
    }
    return true
}
