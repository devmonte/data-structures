import { Node } from './Node';

class Main
{
    showDataStructures()
    {
        let firstNode = new Node();
        firstNode.value = 3;

        let secondNode = new Node();
        secondNode.value = 23;

        firstNode.next = secondNode;

        console.log(firstNode.next.value);
    }
}