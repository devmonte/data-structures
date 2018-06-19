import { Node } from './Node';
export interface ILinkedList<T>
{
    addFirst(nodeValue: T): void;
    addLast(nodeValue: T): void;
    removeLast(): void;
    removeFirst(): void;
    getEnumerator(): Iterator<T>;
    clear(): void;
}
