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

    removeLast(): void
    {   
        if(this.count != 0)
        {
            if(this.count == 1)
            {
                this.head = null;
                this.tail = null;
            }
            else
            {
                let current = this.head;
                while(current.next != this.tail)
                {
                    current = current.next;
                }

                current.next = null;
                this.tail = current;
            }
            
            this.count--;
        }
    }

    removeFirst(): void
    {
        if(this.count != 0)
        {
            this.head = this.head.next;
            this.count--;
            if(this.count == 1)
            {
                this.tail = null;
            }
        }
    }

    *getEnumerator()
    {
        let current = this.head;
        while(current.next != null)
        {
            yield current.value;
        }
    }

}
