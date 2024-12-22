import React , { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function UserList(){
   const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/user/user");

        console.log(res);
        
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);


   return(
      <>
      <Navbar />
      <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Opration</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Yogesh</td>
                        <td>yogesh@gmail.com</td>
                        <td><button className="btn btn btn-link">Update</button>
                            <button className="btn btn btn-link">Delete</button>
                        </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                    <th>2</th>
                        <td>Yogesh</td>
                        <td>yogesh@gmail.com</td>
                        <td><button className="btn btn btn-link">Update</button>
                            <button className="btn btn btn-link">Delete</button>
                        </td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                    <th>3</th>
                        <td>Yogesh</td>
                        <td>yogesh@gmail.com</td>
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
export default UserList;