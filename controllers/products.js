export const addProduct = (req, res) => {
  //Check if user has permission
  // Upload product image
  //Validate product information
  //Save product information in database
  //return response
  res.json(req.body);
};

export const getProducts = (req, res) => {
  res.send("All products!");
};

export const countProducts = (req, res) => {
  res.send("All products counts!");
};

export const updateProduct = (req, res) => {
  //   res.send("Products updated");
  res.send(`Product with id ${req.params.id} updated!`);
};

export const deleteProduct = (req, res) => {
  //   res.send("Product deleted");
  res.send(`Product with id ${req.params.id} deleted!`);
};
