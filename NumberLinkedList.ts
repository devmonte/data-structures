import {Node} from './Node';

export class NuberLinkedList
{
    head: Node;
    tail: Node;
    count: number;

    addFirst(node: Node): void
    {
        let temp = this.head;
        this.head = node;
        this.head.next = temp;

        this.count++;
        if(this.count == 1)
        {
            this.tail = this.head;
        }
    }

    addLast(node: Node): void
    {
        if(this.count == 0)
        {
            this.head = node;
        }
        else
        {
            this.tail.next = node;
        }
        this.tail = node;
        this.count++;
    }

}