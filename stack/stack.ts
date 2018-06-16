import { LinkedList } from '../linkedList/linkedList';

export class Stack<T>
{
    list: LinkedList<T>
    
    constructor()
    {
        this.list = new LinkedList<T>();
    }

    push(valueToPush: T): void
    {
        //this.list.addFirst(valueToPush);
    }
}