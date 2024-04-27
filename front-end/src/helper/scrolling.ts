const scrollToProduct = () => {
    // Get the target div element by its ID
    var targetDiv = window.document.getElementById("product");
    console.log(targetDiv);

    // Scroll to the target div
    if (targetDiv)
      targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToCart = () => {
    // Get the target div element by its ID
    var targetDiv = window.document.getElementById("cart");

    // Scroll to the target div
    if (targetDiv)
      targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  export {scrollToProduct, scrollToCart}