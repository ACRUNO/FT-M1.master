function LinkedList() {
    this.head = null;
  }
  
  function Node(value) {
    this.value = value;
    this.next = null;
  }
  
  LinkedList.prototype.add = function(value){
    var node = new Node(value);
    var current = this.head;
    if (!current){
      this.head = node;
      return node;
    }
    while (current.next !== null){
      current = current.next;
    }
    current.next = node;
    return node;
  };
  
  LinkedList.prototype.remove = function(){
    var current = this.head;
    if (this.head === null){
      return null;
    }
    if (current.next === null){
        var value = current.value;
        this.head = null;
        return value;
    }
    var before;
    while (current.next !== null){
      before = current;
      current = current.next;
      }
    before.next = null;
    return current.value;
  }
  
  
  LinkedList.prototype.search = function(value){
    var current = this.head;
    while (current !== null){
    if (value === current.value){
      return current.value;
      }
      current = current.next;
    }
    return null;
  }

  var lista1 = new LinkedList();

  lista1.add('hola');
  lista1.add('chau');

  console.log(lista1);

  lista1.remove()

  console.log(lista1)
  lista1.remove()
  console.log(lista1)
  