class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  
  add(item) {
    this.items.push(item);
    if (this.items.length > 1){
      this.items.sort(function(a, b) {
        return a - b;
      });
    }
    this.length = this.items.length;
  }
  
  get(pos) {
    if (this.items[pos]){
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }
  
  max() {
    if (this.items.length){
      return this.items[this.items.length-1];
    } else {
      throw new Error('EmptySortedList');
    }
  }
  
  min() {
    if (this.items.length){
      return this.items[0];
    } else {
      throw new Error('EmptySortedList');
    }
  }
  
  sum() {
    if (!this.items.length){
      return 0;
    } else {
      return this.items.reduce((acc, val) => {return acc + val})
    }
  }
  
  avg() {
    if (!this.items.length){
      throw new Error('EmptySortedList');
    } else {
      return (this.sum(this.items))/this.length;
    }
  }
}

module.exports = SortedList;
