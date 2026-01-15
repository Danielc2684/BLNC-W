import { useState, useEffect } from "react";
import { MenuItem } from "../types";

type Props = {
  item: MenuItem;
  onClose: () => void;
  onAddToCart: (
    customizedItem: MenuItem & {
      selectedSize?: string | null;
      selectedAddOns?: string[];
      finalPrice: number;
    }
  ) => void;
};

export default function ItemModal({ item, onClose, onAddToCart }: Props) {
  const [size, setSize] = useState<string | null>(null);
  const [addOns, setAddOns] = useState<string[]>([]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const toggleAddOn = (addon: string) => {
    setAddOns(prev =>
      prev.includes(addon)
        ? prev.filter(a => a !== addon)
        : [...prev, addon]
    );
  };

  // ✅ PRICE CALCULATION
  const basePrice = item.price;

  const sizePrice =
    item.options?.sizes?.find(s => s.label === size)?.price ?? 0;

  const addOnsPrice =
    item.options?.addOns
      ?.filter(a => addOns.includes(a.label))
      .reduce((sum, a) => sum + a.price, 0) ?? 0;

  const finalPrice = basePrice + sizePrice + addOnsPrice;

  const handleAdd = () => {
    onAddToCart({
      ...item,
      selectedSize: size,
      selectedAddOns: addOns,
      finalPrice,
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:max-w-xl lg:max-w-2xl sm:rounded-xl h-[90vh] sm:h-auto p-6 overflow-y-auto transition-all duration-300 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
        <p className="text-gray-600 mb-4">{item.description}</p>

        <img
          className="rounded-xl w-full max-h-60 object-contain mb-6"
          src={item.image}
          alt={item.name}
        />

        {/* SIZE OPTIONS */}
        {item.options?.sizes && (
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Size</h3>
            <div className="space-y-2">
              {item.options.sizes.map(s => (
                <label
                  key={s.label}
                  className={`flex items-center justify-between border rounded-lg p-3 cursor-pointer ${
                    size === s.label
                      ? "border-vital-green bg-vital-green/5"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="size"
                      checked={size === s.label}
                      onChange={() => setSize(s.label)}
                    />
                    <span>{s.label}</span>
                  </div>
                  <span className="text-sm text-gray-600">
                    +${s.price.toFixed(2)}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* ADD-ONS */}
        {item.options?.addOns && (
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Add-ons</h3>
            <div className="space-y-2">
              {item.options.addOns.map(a => (
                <label
                  key={a.label}
                  className={`flex items-center justify-between border rounded-lg p-3 cursor-pointer ${
                    addOns.includes(a.label)
                      ? "border-vital-green bg-vital-green/5"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={addOns.includes(a.label)}
                      onChange={() => toggleAddOn(a.label)}
                    />
                    <span>{a.label}</span>
                  </div>
                  <span className="text-sm text-gray-600">
                    +${a.price.toFixed(2)}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* FOOTER */}
        <div className="flex items-center justify-between border-t pt-4 mt-6">
          <span className="text-xl font-bold text-sunrise-orange">
            ${finalPrice.toFixed(2)}
          </span>

          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>

            <button
              onClick={handleAdd}
              disabled={item.options?.sizes && !size}
              className={`px-4 py-2 rounded-lg text-white ${
                item.options?.sizes && !size
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-vital-green hover:bg-vital-green-700"
              }`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
