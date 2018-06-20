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
        this.list.addFirst(valueToPush);
    }

    pop(): T
    {
        if(this.list.getEnumerator.length == 0)
        {
            //add throwing exception
        }
        let value = this.list.head.value;
        this.list.removeFirst;
        return value;    
    }
}