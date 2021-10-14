const {NotImplementedError} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

function TreeNode(data) {
    this.data = data;
    this.left = null;
    this.right = null
}

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
        console.log('has(' +  data + '):' + (res !== null));
        return res !== null;
    }

    find(data) {
        const res = this.doFind(this._root, data);
        console.log('find(' + data + '):' + res);
        return res;
    }

    remove(/* data */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
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

