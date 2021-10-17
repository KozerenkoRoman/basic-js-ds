const {NotImplementedError} = require('../extensions/index.js');
import('/extensions/list-tree');
// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

module.exports = class BinarySearchTree {
    constructor() {
        this._root = null;
        // this.getMax = this.getMax.bind(this);
        // this.getMin = this.getMin.bind(this);
    }

    root() {
        console.log('root: ' + this._root.data)
        return this._root.data;
    }

    add(data) {
        if (!data) return null;
        if (!this._root) this._root = new TreeNode(data);
        console.log('add: ' + data);
        let current = this._root;
        while (current.data !== data) {
            if (current.data < data) {
                if (!current.right) {
                    current.right = new TreeNode(data);
                } else {
                    current = current.right;
                }
            } else {
                if (!current.left) {
                    current.left = new TreeNode(data);
                } else
                    current = current.left;
            }
        }
        console.log('add: ' + current.data)
        return current;
    }

    doFind(node, data) {
        if (!node) return null;
        if (node.data === data) return node;
        return this.doFind(node.left, data) || this.doFind(node.right, data);
    }

    has(data) {
        const res = this.doFind(this._root, data);
        console.log('has(' + data + '):' + (res !== null));
        return res !== null;
    }

    find(data) {
        const res = this.doFind(this._root, data);
        console.log('find(' + data + '):' + res);
        return res;
    }

    deleteMin(node) {
        if (node.left == null) return node.right;
        node.left = this.deleteMin(node.left);
        return node;
    }

    doRemove(node, data) {
        if (!node) return null;
        if (node.data > data) node.left = this.doRemove(node.left, data);
        else if (node.data < data) node.right = this.doRemove(node.right, data);
        else {
            if (!node.right) return node.left;
            if (!node.left) return node.right;
            const tmpNode = node;
            node = this.getMin(tmpNode.right);
            node.right = this.deleteMin(tmpNode.right);
            node.left = tmpNode.left;
        }
        console.log('doRemove(' + node.data + ')');
        return node;
    }

    remove(data) {
        const node = this.find(data);
        if (node) {
            this.doRemove(node, data);
        }
    }

    getMin(node) {
        if (!node.left) return node;
        return this.getMin(node.left);
    }

    min() {
        let res = this.getMin(this._root).data;
        console.log('min: ' + res)
        return res;
    }

    getMax(node) {
        if (!node.right) return node;
        return this.getMax(node.right);
    }

    max() {
        let res = this.getMax(this._root).data;
        console.log('max: ' + res)
        return res;
    }
}

