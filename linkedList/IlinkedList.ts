import { Node } from './Node';
export interface ILinkedList<T>
{
    addFirst(node: Node<T>): void;
    addLast(node: Node<T>): void;
    removeLast(): void;
    removeFirst(): void;
    getEnumerator(): Iterator<T>;
    clear(): void;
}
