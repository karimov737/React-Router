import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ProductsLayout = () => {
    return (
        <>
            <div className="container">
                <ul>
                    <li>
                        <Link to="/products/tv">Tv</Link>
                    </li>
                    <li>
                        <Link to="/products/phone">Phone</Link>
                    </li>
                    <li>
                        <Link to="/products/laptop">Laptop</Link>
                    </li>
                </ul>
                <Outlet/>
            </div>

        </>
    )
}

export default ProductsLayout