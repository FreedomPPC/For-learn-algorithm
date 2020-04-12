// 链表
function LinkList() {
    // 定义链表类
    // 定义节点
    function Node(data) {
        this.data = data;
        this.next = null;
    }

    let length = 0; // 链表长度
    let head = null; // 头节点
    let tail = null; // 尾节点

    // append 末尾添加一个新元素
    this.append = function (data) {
        const node = new Node(data);

        // 如果链表为空
        if (head == null) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            tail = node;
        }

        // 链表长度加1
        length += 1;
        return true;
    };
    // 打印链表，从头节点往后遍历
    this.print = function () {
        let curNode = head;

        while (curNode) {
            console.log(curNode.data);
            curNode = curNode.next;
        }
    };
    // 插入节点
    this.insert = function (index, data) {
        if (index == length) {
            return this.append(data);
        } else if (index > length || index < 0) {
            return false;
        } else {
            const newNode = new Node(data);
            if (index == 0) {
                newNode.next = head;
                head = newNode;
            } else {
                // index >= 1 && index < length
                // insertIndex=1到开始遍历，找到位置插入
                let insertIndex = 1;
                let curNode = head; // 新建一个变量做临时变量存储
                // 找到应该插入的位置
                while (insertIndex < index) {
                    insertIndex += 1;
                    curNode = curNode.next; // curNode一个一个往后挪动
                }
                const nextNode = curNode.next; // 找到当前节点的下一个节点，备用
                curNode.next = newNode;
                newNode.next = nextNode; // 这两步是插入
            }
            length += 1;
            return true;
        }
    };
    // 删除节点
    this.remove = function (index) {
        if (index < 0 || index >= length) {
            return null;
        } else {
            let delNode = null;

            if (index == 0) {
                delNode = head;
                head = head.next;
            } else {
                let delIndex = 0;
                let preNode = null;
                let curNode = head;

                // 往后遍历的过程中，记录preNode和curNode
                while (delIndex < index) {
                    delIndex += 1;
                    preNode = curNode;
                    curNode = curNode.next;
                }

                delNode = curNode;
                preNode.next = curNode.next;
            }
            return delNode.data;
        }
    };
    // get方法 返回指定索引位置的元素
    this.get = function (index) {
        if (index < 0 || index >= length) {
            return null;
        } else {
            let curIndex = 0;
            let curNode = head;
            while (curIndex < index) {
                curIndex += 1;
                curNode = curNode.next;
            }

            return curNode.data;
        }
    };
    // indexOf，返回指定元素的索引
    this.indexOf = function (data) {
        let index = -1;
        let curNode = head;
        while (curNode) {
            index += 1;
            if (curNode.data == data) {
                return index;
            } else {
                curNode = curNode.next;
            }
        }
        return -1;
    };
    // 返回链表长度
    this.length = function () {
        return length;
    };
    // 删除尾节点
    this.removeTail = function () {
        return this.remove(length - 1);
    };
    // 删除头节点
    this.removeHead = function () {
        return this.remove(0);
    };
    // 返回链表头节点的值
    this.head = function () {
        return this.get(0);
    };
    // 返回链表尾节点的值
    this.tail = function () {
        return this.get(length - 1);
    };
    // 判断链表是否为空
    this.isEmpty = function () {
        return length == 0;
    };
    // 清空链表
    this.clear = function () {
        head = null;
        tail = null;
        length = 0;
    };
}

const linkList = new LinkList();
linkList.append(1);
linkList.append(2);
linkList.append(3);
linkList.append(4);
// linkList.insert(1, 4);
// linkList.remove(2);
linkList.print();

console.log('linkList.get --', linkList.get(2));
console.log('linkList.indexOf --', linkList.indexOf(4));
// console.log(linkList);
