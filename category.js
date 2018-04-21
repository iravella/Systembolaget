module.exports = class Category {

  constructor(name, allProducts){
    this.name = name;
    // filter out products that belong to this category
    // and put them in a property called products
    let splitted = name.split(' från ');
    let varugrupp = splitted[0];
    let ursprunglandnamn = splitted[1];
    this.products = allProducts.filter(function(product){
      if(ursprunglandnamn === undefined){
        return product.varugrupp === varugrupp;
      }
      return product.varugrupp === varugrupp && 
        product.ursprunglandnamn === ursprunglandnamn;
    });
  }

}