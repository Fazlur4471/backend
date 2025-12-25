import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      productType,
      description,
      shortDescription,
      specifications,
      applications,
      images,
      featured,
    } = req.body;

    if (!name || !category || !productType || !images?.length) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (images.length > 5) {
      return res.status(400).json({ message: "Max 5 images allowed" });
    }

    const product = await Product.create({
      name,
      category,
      productType,
      description,
      shortDescription,
      specifications,
      applications,
      images,
      featured,
    });

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Product creation failed" });
  }
};

export const getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};
