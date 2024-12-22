import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function BookList(){
   return(
    
    <>
      <Navbar />
      <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Opration</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td><div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="/public/book1.png" />
                            </div>
                        </div></td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td><button className="btn btn btn-link">Update</button>
                            <button className="btn btn btn-link">Delete</button>
                        </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>2</th>
                        <td><div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="/public/book1.png" />
                            </div>
                        </div></td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td><button className="btn btn btn-link">Update</button>
                            <button className="btn btn btn-link">Delete</button>
                        </td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>3</th>
                        <td><div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="/public/book1.png" />
                            </div>
                        </div></td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td><button className="btn btn btn-link">Update</button>
                            <button className="btn btn btn-link">Delete</button>
                        </td>
                    </tr>


                </tbody>
            </table>
        </div>

      
      <Footer />
    </>
    
    


   )
}
export default BookList;