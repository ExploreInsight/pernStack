import {sql} from '../lib/db.js';


export const getProducts = async (req, res) => {
  try {
    const products = await sql`
    SELECT * FROM products
    ORDER BY created_at DESC
    `;
    res.status(200).json({
      success: true,
      data: products
    })
  } catch (error) {
     console.log("Error in getProducts function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" }); console.log("Internal Sever Error");
  }
};

export const getProduct = async (req, res) => {
  try {
  const {id} = req.params;

  const product = await sql`
   SELECT * FROM products WHERE id=${id}
  `;
  res.status(200).json({success:true , data:product[0]});
  } catch (error) {
     console.log("Error in getProducts function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const createProduct = async (req, res) => {
  try {
      const {name , price , image} = req.body;

    if(!name || !price || !image){
      return res.status(400).json({success:false , message:"All fields are needed"})
    }

    const newProducts = await sql`
      INSERT INTO products (name ,price , image)
      VALUES (${name},${price},${image})
      RETURNING *
    `;
    res.status(201).json({success:true , data:newProducts[0]});
  } catch (error) {
     console.log("Error in getProducts function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const {id} = req.params;

    const deletedProduct = await sql`
    DELETE FROM products WHERE id=${id} RETURNING * 
    `;

    if(deletedProduct.length === 0){
      return res.status(404).json({
        success: false , message:"Proudct not found"
      })
    }
    res.status(200).json({ success: true, data: deletedProduct[0] });
  } catch (error) {
     console.log("Error in getProducts function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const {name , price , image} = req.body;

    const updateProduct = await sql`
    UPDATE products 
    SET name=${name},price=${price},image=${image}
    WHERE id=${id}
    RETURNING *
    `;
    
    res.status(200).json({ success: true, data: updateProduct[0] });
  } catch (error) {
     console.log("Error in getProducts function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
