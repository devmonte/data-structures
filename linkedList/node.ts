export class Node<T>
{
    value: T;
    next: Node<T>;

    constructor(nodeValue: T)
    {
        this.value = nodeValue;
    }
}