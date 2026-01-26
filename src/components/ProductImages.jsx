import CrouselData from '../components/CrouselData';
import { useEffect, useState } from 'react';
import { IoAdd } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaShoppingCart } from 'react-icons/fa';
import Modal from './Modal';
import Pagination from './Pagination';

const ProductImages = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState(null);
    const [editId, setEditId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    const [items, setItems] = useState(() => {
        return JSON.parse(localStorage.getItem("items")) || [];
    });

    const [cartItem, setCartItem] = useState(() => {
        return JSON.parse(localStorage.getItem("CartItems")) || [];
    });

    // Save to LocalStorage
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    useEffect(() => {
        localStorage.setItem("CartItems", JSON.stringify(cartItem));
    }, [cartItem]);

    // Image Upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => setImg(reader.result);
        reader.readAsDataURL(file);
    };

    // Add to Cart
    const handleAddCart = (product) => {

        setCartItem((cart) => {
            const exist = cart.find(item => item.id === product.id);

            if (exist) {
                return cart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...cart, { ...product, quantity: 1 }];
        });
    };

    //    Add / Update Product
    const handleAddOrUpdate = (e) => {
        e.preventDefault();

        if (!name || !price || !img) {
            alert("All fields required");
            return;
        }

        if (editId === null) {
            setItems([...items, { id: Date.now(), name, price, img }]);
        } else {
            setItems(items.map(item =>
                item.id === editId ? { ...item, name, price, img } : item
            ));
            setEditId(null);
        }

        setName("");
        setPrice("");
        setImg(null);
        setIsModalOpen(false);
    };

    // Edit
    const handleEdit = (item) => {
        setName(item.name);
        setPrice(item.price);
        setImg(item.img);
        setEditId(item.id);
        setIsModalOpen(true);
    };

    // Delete
    const handleDelete = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    // Pagination 
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    return (
        <div>
            <div className='flex flex-wrap justify-center gap-8 my-5 mx-5'>
                {/* {items.map(item => ( */}
                {currentItems.map(item => (
                    <div key={item.id}>
                        <CrouselData
                            name={item.name}
                            price={item.price}
                            img={item.img}
                        />

                        <div className="flex justify-center gap-4 mt-2">
                            <button onClick={() => handleEdit(item)} className="border px-3 py-2 bg-white text-black hover:bg-[#2a2a2a]  hover:text-white">
                                <CiEdit />
                            </button>

                            <button onClick={() => handleDelete(item.id)} className="border px-3 py-2 text-red-500 bg-white hover:bg-red-500  hover:text-white">
                                <MdDelete />
                            </button>

                            <button
                                onClick={() => handleAddCart(item)}
                                className="border px-3 py-2 bg-white text-black hover:bg-[#2a2a2a]  hover:text-white"
                            >
                                <FaShoppingCart size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Button */}
            <div className="flex justify-center">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 border px-4 py-2 bg-white text-black hover:bg-[#2a2a2a]  hover:text-white"
                >
                    <IoAdd className="text-lg" />
                    <span>Add New Product</span>
                </button>
            </div>


            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <form onSubmit={handleAddOrUpdate} className="flex flex-col gap-4 p-10">
                    <h1 className="text-2xl font-bold">
                        {editId ? "Edit Product" : "Add Product"}
                    </h1>

                    <input
                        type="text"
                        placeholder="Title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border px-3 py-2"
                    />

                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border px-3 py-2"
                    />

                    <input type="file" onChange={handleImageChange} />

                    {img && <img src={img} alt="preview" width="120" />}

                    <button className="border py-2">
                        {editId ? "Update" : "Add"}
                    </button>
                </form>
            </Modal>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default ProductImages;
