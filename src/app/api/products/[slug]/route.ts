import productsJson from "@/data/products.json";

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const product = productsJson.products.find((p) => p.slug === params.slug);
  if (!product) {
    return new Response(JSON.stringify({ message: "Not Found" }), {
      status: 404,
    });
  }
  return Response.json(product);
}
