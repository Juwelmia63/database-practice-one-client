
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeData = ({ coffee }) => {




    const handledelete = _id => {
        console.log(_id)


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });


                        }
                    })
            }
        });
    }


    const { _id, name, quantity, supplier, test, photo } = coffee;

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={photo} className="w-52 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{name}!</h1>
                    <p className="py-6">{supplier}</p>
                    <p className="py-6">{quantity}</p>
                    <p className="py-6">{test}</p>

                </div>


                <div className="flex flex-col gap-3">
                    <button className="btn btn-outline">View</button>
                    <Link to={`updatecoffee/ ${_id}`}>
                        <button className="btn btn-outline">Edit</button>
                    </Link>
                    <button onClick={() => handledelete(_id)} className="btn btn-outline">X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeData;