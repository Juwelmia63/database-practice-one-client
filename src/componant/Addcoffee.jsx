

const Addcoffee = () => {



    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const photo = form.photo.value;

        const Newcoffee = {name, quantity, supplier,test,photo};
        console.log(Newcoffee);


        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },

            body: JSON.stringify(Newcoffee)
        })
        .then(res=> res.json())
        .then(data=>{
           if(data.insertedId){
            alert('Data Added Successfully')
           }
        })



    }




    return (
        <div className="flex flex-col justify-center items-center">


            <h1 className="text-5xl font-bold text-center mb-6 border-2">Add Coffee</h1>



            {/* row one name and quantity */}
            <form  onSubmit={handleSubmit}>
                <div className="flex flex-row gap-4">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Name</span>

                        </div>
                        <input type="text" placeholder="Type here" name="name" className="input input-bordered w-full max-w-xs" />

                    </label>


                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Quantity</span>

                        </div>
                        <input type="text" placeholder="Type here" name="quantity" className="input input-bordered w-full max-w-xs" />

                    </label>
                </div>
                {/* row one supplier and test */}
                <div className="flex flex-row gap-4">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Supplier</span>

                        </div>
                        <input type="text" placeholder="Type here" name="supplier" className="input input-bordered w-full max-w-xs" />

                    </label>


                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Test</span>

                        </div>
                        <input type="text" placeholder="Type here" name="test" className="input input-bordered w-full max-w-xs" />

                    </label>
                </div>



                <div>
                    <label className=" flex flex-col items-center ">
                        <div className="">
                            <span className="label-text">Photo URL</span>

                        </div>
                        <input type="text" placeholder="url here" name="photo" className="input input-bordered w-full " />

                    </label>
                </div>



                <input className="btn btn-block mt-3" type="submit" value="Add Coffee" />
            </form>

        </div>
    );
};

export default Addcoffee;