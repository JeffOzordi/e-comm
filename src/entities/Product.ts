export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
  category: string;
  description: string;
  images: string[];
  tags: string[]
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  stock: number,
  returnPolicy: string
  minimumOrderQuantity: number,
}
