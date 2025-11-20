import { CardShop } from "@/components/CardShop"
import { useCartContext } from "@/context/CartContext";
import { MainLayout } from "@/layouts/MainLayout"

export const Cart = () => {
    const {productInCart} = useCartContext();

    return (
        <MainLayout>
            <div className="container-fluid">
                <section id="products" className="mb-5">
                    <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
                        <h2 className="title-b mb-0">Carrito</h2>
                    </div>
                    
                    {productInCart.length === 0 ? (
                        <div className="alert alert-info" role="alert">
                            No tienes productos en el carrito aún
                        </div>
                    ) : (
                        <div className="row g-4">
                            {productInCart.map((product, index) => (
                                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <CardShop data={product}/>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </MainLayout>
    )   
}
        