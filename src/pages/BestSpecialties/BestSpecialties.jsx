import React from 'react';

const BestSpecialties = () => {
    return (
        <div className='mt-20 mx-auto grid justify-center container px-4 md:px-8 lg:px-16 xl:px-20'>
            <h2 className='text-5xl font-bold md:text-center'>Best Spacialities</h2>
            <div className='container mt-10 grid md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto gap-4'>
                <div className="card w-full bg-base-100 shadow-xl mb-3">
                    <figure><img className='w-full' src="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/thumbs/best-speciaties_1-psuk36f7n7hhpivuclvqs61ynqb4sle2339y80iix4.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Kung Pao chicken</h2>
                        <p>a spicy stir-fry dish made with diced chicken, peanuts, vegetables, and chili peppers.</p>
                        <div className="card-actions justify-end">
                        <h4 className='font-bold text-lg'>32$</h4>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 mb-3 shadow-xl">
                    <figure><img className='w-full' src="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/thumbs/best-speciaties_1-psuk36f7n7hhpivuclvqs61ynqb4sle2339y80iix4.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Dumplings (Jiaozi)</h2>
                        <p>a type of filled dough that is boiled, steamed or fried, usually filled with minced meat and vegetables, served with a dipping sauce.</p>
                        <div className="card-actions justify-end">
                        <h4 className='font-bold text-lg'>8$</h4>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 mb-3 shadow-xl">
                    <figure><img className='w-full' src="https://demo2.themelexus.com/delicioz/wp-content/uploads/elementor/thumbs/best-speciaties_1-psuk36f7n7hhpivuclvqs61ynqb4sle2339y80iix4.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Hot Pot (Huǒguō)</h2>
                        <p>a communal dish where diners cook raw meats, vegetables, and noodles in a boiling pot of seasoned broth, often served with dipping sauces.</p>
                        <div className="card-actions justify-end">
                            <h4 className='font-bold text-lg'>12$</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSpecialties;