import {Node} from './Node';
import { ILinkedList } from './ILinkedList';

export class LinkedList<T> implements ILinkedList<T>
{
    head: Node<T>;
    tail: Node<T>;
    count: number;

    addFirst(nodeValue: T): void
    {
        let temp = this.head;
        this.head = new Node<T>(nodeValue);
        this.head.next = temp;

        this.count++;
        if(this.count == 1)
        {
            this.tail = this.head;
        }
    }

    addLast(nodeValue: T): void
    {
        let newNode = new Node(nodeValue);
        if(this.count == 0)
        {
            this.head = newNode;
        }
        else
        {
            this.tail.next = newNode;
        }
        this.tail = newNode;
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

    clear()
    {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

}
