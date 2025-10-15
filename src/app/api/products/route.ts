import productsJson from "@/data/products.json";

export async function GET() {
  return Response.json(productsJson.products);
}
