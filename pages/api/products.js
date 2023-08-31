// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import productData from "@/db/products.json";

export default function handler(req, res) {
  if (req.query && req.query.productName) {
    const filterData = productData.products?.filter(({ productName }) => {
      return productName.toLowerCase() === req.query.productName.toLowerCase();
    });
    res.status(200).json(filterData);
  } else {
    // return only 10 products
    productData.products = productData.products.slice(0, 15);
    res.status(200).json(productData);
  }
}
