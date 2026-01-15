// import { useState } from "react";
// import { MenuItem } from '../types';

// type Props = {
//   item: MenuItem;
//   onClose: () => void;
//   onAddToCart: (customizedItem: any) => void;
// };

// export default function ItemModal({ item, onClose, onAddToCart }: Props) {
//   const [size, setSize] = useState<string | null>(null);
//   const [addOns, setAddOns] = useState<string[]>([]);

//   const toggleAddOn = (addon: string) => {
//     setAddOns(prev =>
//       prev.includes(addon)
//         ? prev.filter(a => a !== addon)
//         : [...prev, addon]
//     );
//   };

//   const handleAdd = () => {
//     onAddToCart({
//       ...item,
//       selectedSize: size,
//       selectedAddOns: addOns,
//     });
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl w-full max-w-lg p-6">
        
//         <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
//         <p className="text-gray-600 mb-4">{item.description}</p>

//         {/* SIZE OPTIONS */}
//         {item.options?.sizes && (
//           <div className="mb-4">
//             <h3 className="font-semibold mb-2">Size</h3>
//             {item.options.sizes.map(s => (
//               <label key={s.label} className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="size"
//                   value={s.label}
//                   onChange={() => setSize(s.label)}
//                 />
//                 {s.label} (+${s.price})
//               </label>
//             ))}
//           </div>
//         )}

//         {/* ADD-ONS */}
//         {item.options?.addOns && (
//           <div className="mb-6">
//             <h3 className="font-semibold mb-2">Add-ons</h3>
//             {item.options.addOns.map(a => (
//               <label key={a.label} className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   onChange={() => toggleAddOn(a.label)}
//                 />
//                 {a.label} (+${a.price})
//               </label>
//             ))}
//           </div>
//         )}

//         <div className="flex justify-end gap-4">
//           <button onClick={onClose} className="text-gray-500">
//             Cancel
//           </button>
//           <button
//             onClick={handleAdd}
//             className="bg-vital-green text-white px-4 py-2 rounded-lg"
//           >
//             Add to Cart
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }
