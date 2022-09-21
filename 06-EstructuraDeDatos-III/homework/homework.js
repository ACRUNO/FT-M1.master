"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value){
  if (value < this.value){
    if (this.left){
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  } else if (value > this.value){
    if (this.right){
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }}
  };
  
  BinarySearchTree.prototype.size = function(){
    if (!this.left && !this.right){
      return 1;
    }
    if (this.left && this.right){
          return 1 + this.left.size() + this.right.size();
      }else if (this.left && !this.right){
      return 1 + this.left.size();
      }else  if (this.right){
      return 1 + this.right.size();
    }
  };

BinarySearchTree.prototype.contains = function(value){
  if (value === this.value){
    return true;
  } 
  if (value > this.value) {
    if (!this.right) return false;
    return this.right.contains(value);
  } else {
    if (value < this.value){
    if (!this.left) return false;  
    return this.left.contains(value);
    }
  }
};

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  if (order === undefined || order === 'in-order'){
    if (this.left ){
     this.left.depthFirstForEach(cb, order);
    }
    cb(this.value);
    if (this.right){
      this.right.depthFirstForEach(cb, order);
    }
    } 

  if (order === "post-order"){
    if (this.left){
      this.left.depthFirstForEach(cb, order);
    }
    if (this.right){
      this.right.depthFirstForEach(cb,order);
    }
    cb(this.value);
  }

  if (order === "pre-order"){
    cb(this.value);
    if (this.left){
      this.left.depthFirstForEach(cb, order);
    }
    if (this.right){
      this.right.depthFirstForEach(cb,order);
    }
  }

};

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr){
  if (!arr){
    var arr = [];
  } 
  cb(this.value);
  if (this.left){
    arr.push(this.left);
  }
  if (this.right){
    arr.push(this.right);
  }
  while (arr.length != 0){
    arr.shift().breadthFirstForEach(cb, arr);
  }
};





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};


// var tree = new BinarySearchTree(12);

// console.log(tree);
// tree.insert(11);
// tree;
// tree.insert(13);
// tree;
// tree.insert(90)
// tree;
// console.log(tree.left.value);
// tree.insert(13);
// tree;
// tree;
// tree.insert(12);
// tree
// console.log(tree.contains());


// console.log(tree.size());

