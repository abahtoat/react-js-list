import React, { useState } from "react"

export const data = {
    produks: [
        {
            id: 1,
            isbn: "12345",
            judulBuku: "Bulan",
            penulis: "Tere Liye",
            penerbit: "CV Harapan Kita",
            harga: 90000,
            cover: "https://cdnwpseller.gramedia.net/wp-content/uploads/2021/10/08110223/BULAN-TERE-LIYE.jpg"
        },
        {
            id: 2,
            isbn: "12346",
            judulBuku: "Anak Badai",
            penulis: "Tere Liye",
            penerbit: "CV Nusa Bangsa",
            harga: 80000,
            cover: "https://assets.kompasiana.com/items/album/2019/10/31/si-anak-badai-dpn-low-5dba8c38d541df530719ac92.jpg?t=o&v=770"
        },
        {
            id: 3,
            isbn: "54321",
            judulBuku: "Bumi",
            penulis: "Tere Liye",
            penerbit: "CV Nusa Bangsa",
            harga: 70000,
            cover: "https://upload.wikimedia.org/wikipedia/id/4/49/Bumi_%28sampul%29.jpg"
        },
        {
            id: 4,
            isbn: "98712",
            judulBuku: "Jenderal Kambing",
            penulis: "Khrisna Pabichara",
            penerbit: "Penerbit Exchange",
            harga: 70000,
            cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1504345274l/36167299.jpg"
        }
    ]
}

const KartuBelanja = ({ namaProduk, cover, harga, onAdd }) => {
    return (
        <div className="bg-white py-4 px-4 shadow-md rounded my-4 mx-4">
            <div className="flex justify-between px-4 items-center">
                <div className="flex">
                    <img src={cover} alt={namaProduk} className="mr-4" width={80} />
                    <div className="text-lg font-semibold">
                        <p>{namaProduk}</p>
                        <p className="text-gray-400 text-base">Rp {harga}</p>
                    </div>
                </div>
                <div className="text-lg font-semibold">
                    <button type="button" onClick={onAdd} className="focus:outline-none bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

const ItemBelanja = ({ judulBuku, qty, harga, cover, onAdd, onRemove }) => {
    return (
        <div className="bg-white rounded shadow-md">
            <div className="p-3">
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <img src={cover} alt={judulBuku} className="mr-4" width={80} />
                        <div>
                            <h3>{judulBuku}</h3>
                            <p className="text-gray-400 text-base">Rp {harga}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {/* tombol hapus */}
                        <button type="button" onClick={onRemove} className="focus:outline-none bg-teal-700 hover:bg-teal-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                            </svg>
                        </button>

                        <p className="mx-3 my-3">{qty} x {harga}</p>

                        {/* tombol tambah */}
                        <button type="button" onClick={onAdd} className="focus:outline-none bg-teal-700 hover:bg-teal-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Keranjang({ judulBuku, qty }) {
    // Get Data
    const { produks } = data

    // State yang dibutuhkan
    const [cartItems, setCartItems] = useState([])
    const [search, setSearch] = useState("")
    const [filteredResults, setFilteredResults] = useState([])

    // Search Event Handler
    const searchItems = (searched) => {
        setSearch(searched)
        const results = produks.filter((produk) => produk.judulBuku.toLowerCase().includes(searched.toLowerCase()))

        setFilteredResults(results)
    }

    // Tambah item ke keranjang
    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id)
        if (exist) {
            setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }])
        }
    }

    // Hapus item dari keranjang
    const onRemove = (product) => {
        const exist = cartItems.find(x => x.id === product.id)
        if (exist.qty === 1) {
            setCartItems(cartItems.filter(x => x.id !== product.id))
        } else {
            setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
        }
    }

    return (
        <div>
            {/* List Buku */}
            <section className="max-w-6xl mx-auto mt-10 mb-20">
                <div className="container">
                    <div className="bg-slate-100 rounded-xl">
                        <div className="flex flex-wrap">
                            {/* Header */}
                            <div className="w-full px-4">
                                <h1 className="text-2xl text-center font-bold mb-5 mt-5">Toko Buku</h1>
                                <hr />
                            </div>
                            {/* Header End */}

                            {/* Search */}
                            <div className="w-full">
                                <div className="px-4 pt-5">
                                    <input placeholder="Cari Buku" onChange={(search) => searchItems(search.target.value)} className="placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 w-full p-2 rounded-lg" />
                                </div>
                                {
                                    search.length > 1 ? (
                                        filteredResults.map((product) => (
                                            <KartuBelanja key={product.id} cover={product.cover} namaProduk={product.judulBuku} harga={product.harga} onAdd={() => onAdd(product)} />
                                        ))
                                    ) : (
                                        produks.map((product) => (
                                            <KartuBelanja key={product.id} cover={product.cover} namaProduk={product.judulBuku} harga={product.harga} onAdd={() => onAdd(product)} />
                                        ))
                                    )
                                }
                            </div>
                            {/* Search End */}
                        </div>
                    </div>
                </div>
            </section>
            {/* List Buku End */}

            {/* Keranjang */}
            <section className="max-w-6xl mx-auto mb-20">
                <div className="container">
                    <div className="bg-slate-100 rounded-xl">
                        {/* Header */}
                        <div className="px-4 py-5">
                            <h3 className="text-xl text-center mb-5 font-bold">Keranjang</h3>
                            <hr />
                        </div>
                        {/* Header End */}

                        {/* Keranjang Item */}
                        <div className="p-3">
                            {
                                cartItems.length === 0 && (
                                    <div className='flex justify-center items-center'>
                                        <h1 className='font-bold text-center mb-6 text-4xl'>Keranjang Belanja Kosong</h1>
                                    </div>
                                )
                            }
                            {
                                cartItems.map((item) => (
                                    <div className="my-3">
                                        <ItemBelanja key={item.id} judulBuku={item.judulBuku} qty={item.qty} harga={item.harga} cover={item.cover} onAdd={() => onAdd(item)} onRemove={() => onRemove(item)} />
                                    </div>
                                ))
                            }
                        </div>
                        {/* Keranjang Item End */}
                    </div>
                </div>
            </section >
            {/* Keranjang End */}
        </div >
    )
}

export default Keranjang