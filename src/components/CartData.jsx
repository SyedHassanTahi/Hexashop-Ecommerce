import { MdDelete } from "react-icons/md";

const CartData = ({ item, increaseQty, decreaseQty, deleteItem }) => {
    return (
        <div className="flex items-center gap-6 border p-4 w-full max-w-xl">
            {/* Image */}
            <img
                className="w-32 h-32 object-cover"
                src={item.img}
                alt={item.name}
            />

            {/* Info */}
            <div className="flex-1">
                <h4 className="text-xl font-bold">{item.name}</h4>
                <p className="text-gray-500">${item.price}</p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-4 mt-3">
                    <button
                        onClick={() => decreaseQty(item.id)}
                        className="border px-3 py-1 text-lg"
                    >
                        –
                    </button>

                    <span className="font-semibold">{item.quantity}</span>

                    <button
                        onClick={() => increaseQty(item.id)}
                        className="border px-3 py-1 text-lg"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Delete */}
            <button
                onClick={() => deleteItem(item.id)}
                className="text-red-500 text-2xl"
            >
                <MdDelete />
            </button>
        </div>
    );
};

export default CartData;
