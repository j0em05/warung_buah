export interface Product {
  "Product Name": string;
  "Price": number;
  "Image URL": string;
  "Description": string;
}

const API_URL = "https://script.google.com/macros/s/AKfycbzUxrnqazYqG6CGC_VkSk0OPrRwRe5VWgw9xkbBfKCnQ7IUIzbKV0Puy9WPI2hfWw/exec";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    // Return fallback data if API fails
    return [
      {
        "Product Name": "Apel Fuji Premium",
        "Price": 25000,
        "Image URL": "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400",
        "Description": "Apel fuji segar dan manis langsung dari kebun pilihan"
      },
      {
        "Product Name": "Jeruk Medan Manis",
        "Price": 20000,
        "Image URL": "https://images.pexels.com/photos/207085/pexels-photo-207085.jpeg?auto=compress&cs=tinysrgb&w=400",
        "Description": "Jeruk medan super manis dengan kandungan vitamin C tinggi"
      },
      {
        "Product Name": "Pisang Cavendish",
        "Price": 15000,
        "Image URL": "https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=400",
        "Description": "Pisang cavendish matang sempurna, kaya nutrisi"
      }
    ];
  }
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};