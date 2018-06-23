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
            throw new Error("No elements on stack!");
        }
        let value = this.list.head.value;
        this.list.removeFirst;
        return value;    
    }

    peek(): T
    {
        if(this.list.getEnumerator.length == 0)
        {
            throw new Error("No elements on stack!");
        }
        return this.list.head.value;
    }

    count(): number
    {
        return this.list.count;
    }

    clear(): void
    {
        this.list.clear();
    }
}