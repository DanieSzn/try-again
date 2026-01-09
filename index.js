import { useState } from "react";
import { Card, CardContent } from "../components/ProductCard";
import { Button } from "../components/ProductCard";
import { ShoppingCart, Mail, Phone } from "lucide-react";

export default function ZenCore() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Lab Coat / Ward Coat", price: 11000, photo: "/images/labcoat.jpg", available: true },
    { id: 2, name: "Surgical Gloves", price: 15000, photo: "/images/gloves.jpg", available: true },
    { id: 3, name: "Name Tag", price: 4000, photo: "/images/nametag.jpg", available: true },
    { id: 4, name: "Medical Dictionary", price: 25000, photo: "/images/dictionary.jpg", available: true },
    { id: 5, name: "Nose Mask", price: 7000, photo: "/images/nosemask.jpg", available: true }
  ];

  const addToCart = (product) => {
    if(product.available) setCart([...cart, product]);
  };

  return (
    <div className="p-6 space-y-10">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">ZenCore <sub className="text-base font-normal">by danie</sub></h1>
        <p className="text-muted-foreground">Essentials right to you at one tap</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="rounded-2xl shadow">
            <CardContent className="p-4 space-y-3">
              <img src={product.photo} alt={product.name} className="w-full h-40 object-cover rounded" />
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-sm">₦{product.price.toLocaleString()}</p>
              <p className={`text-xs font-medium ${product.available ? 'text-green-600' : 'text-red-600'}`}>
                {product.available ? 'Available' : 'Sold Out'}
              </p>
              <Button className="w-full" onClick={() => addToCart(product)} disabled={!product.available}>
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2"><ShoppingCart /> Cart</h2>
        {cart.length === 0 ? (
          <p>No items yet.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.name}</span>
                <span>₦{item.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Checkout</h2>
        <form className="grid gap-3 max-w-md">
          <select className="border p-2 rounded" required>
            <option value="">Select Delivery Option</option>
            <option value="campus">On-Campus Pickup (Free)</option>
            <option value="offcampus">Off-Campus Delivery (Extra Fee Applies)</option>
          </select>
          <p className="text-xs text-muted-foreground">Note: All deliveries and pickups take 2–4 weeks.</p>
          <input placeholder="Full Name" className="border p-2 rounded" required />
          <input placeholder="Phone Number" className="border p-2 rounded" required />
          <input type="email" placeholder="Email Address" className="border p-2 rounded" required />
          <input placeholder="Delivery Address" className="border p-2 rounded" required />
          <Button type="submit" className="w-full">Proceed to Payment (Paystack)</Button>
        </form>
        <p className="text-sm text-muted-foreground">Orders will be sent to medcorewdanie@gmail.com</p>
      </section>

      <footer className="text-center space-y-2 pt-10">
        <p className="flex justify-center items-center gap-2"><Mail /> medcorewdanie@gmail.com</p>
        <p className="flex justify-center items-center gap-2"><Phone /> WhatsApp: +2348115669297</p>
      </footer>
    </div>
  );
}
