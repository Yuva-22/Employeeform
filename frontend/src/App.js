// import React, { useState } from 'react';
// import './App.css';

// const App = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     employeeId: '',
//     department: '',
//     dob: '',
//     gender: '',
//     designation: '',
//     salary: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('http://localhost:3001', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (formData.salary.length > 8) {
//       alert('Salary must be less than 8 digits');
//       return;
//     }

//     if (!formData.name || !formData.employeeId || !formData.department || !formData.dob || !formData.gender || !formData.designation || !formData.salary) {
//       alert('Incomplete form data');
//       return;
//     }
  
//     if (formData.name.length > 30) {
//       alert('Name must be less than 30 characters');
//       return;
//     }
    
//     if (response.ok) {
//       alert('Employee added successfully');
//     }
//     else {
//       alert('Error adding employee');
//     }
//   };

//   return (
//     <div className='App'>
//       <div className='form-container'>
//           <h1>Employee Registration Form</h1>
//           <form onSubmit={handleSubmit}>
//             <label>
//               Employee Name:
//               <input
//                 className="forminput"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
                
//               />
//             </label>
//             <br />
//             <label>
//               Employee ID:
//               <input
//                 className="forminput"
//                 type="text"
//                 name="employeeId"
//                 value={formData.employeeId}
//                 onChange={handleChange}
                
//               />
//             </label>
//             <br />
//             <label>
//               Department:
//               <select name="department" value={formData.department} className="forminputdept" onChange={handleChange} >
//                 <option value="">Select Department</option>
//                 <option value="HR">HR</option>
//                 <option value="IT">IT</option>
//                 <option value="Finance">Finance</option>
//               </select>
//             </label>
//             <br />
//             <label>
//               Date of Birth:
//               <input
//                 className="forminput"
//                 type="date"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
                
//               />
//             </label>
//             <br />
//             <label>
//               Designation:
//               <input
//                 className="forminput"
//                 type="text"
//                 name="designation"
//                 value={formData.designation}
//                 onChange={handleChange}
                
//               />
//             </label>
//             <br />
//             <label>
//               Salary:
//               <input
//                 className="forminput"
//                 type="number"
//                 name="salary"
//                 value={formData.salary}
//                 onChange={handleChange}
                
//               />
//             </label>
//             <br />

//             <label>
//               Gender:
//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Male"
//                   checked={formData.gender === 'Male'}
//                   onChange={handleChange}
                  
//                 />
//                 Male
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Female"
//                   checked={formData.gender === 'Female'}
//                   onChange={handleChange}
                  
//                 />
//                 Female
//               </label>
//             </label>
//             <br />
//             <button type="submit" className='submitbtn'>Submit</button>
//           </form>
//     </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import './App.css';
// import { useHistory } from 'react-router-dom';


// const App = () => {

//   const history = useHistory();

//   const [formData, setFormData] = useState({
//     name: '',
//     employeeId: '',
//     department: '',
//     dob: '',
//     gender: '',
//     designation: '',
//     salary: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.salary.length > 8) {
//       alert('Salary must be less than 8 digits');
//       return;
//     }

//     if (!formData.name || !formData.employeeId || !formData.department || !formData.dob || !formData.gender || !formData.designation || !formData.salary) {
//       alert('Incomplete form data');
//       return;
//     }
  
//     if (formData.name.length > 30) {
//       alert('Name must be less than 30 characters');
//       return;
//     }

//     // const response = await fetch('http://localhost:3001', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(formData),
//     // });


    
//     // if (response.ok) {
//     //   alert('Employee added successfully');
//     // }
//     // else {
//     //   alert('Error adding employee');
//     // }

//     history.push({
//       pathname:"/second",
//       state:{ formData: formData}
//     });
//   };

//   return (
//     <div className='App'>
//       <div className='form-container'>
//           <h1>Employee Registration Form</h1>
//           <form onSubmit={handleSubmit}>
//             <label>
//               Employee Name:
//               <input
//                 className="forminput"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
                
//               />
//             </label>
//             <br />
//             <label>
//               Employee ID:
//               <input
//                 className="forminput"
//                 type="text"
//                 name="employeeId"
//                 value={formData.employeeId}
//                 onChange={handleChange}
                
//               />
//             </label>
//             <br />
//             <label>
//               Department:
//               <select name="department" value={formData.department} className="forminputdept" onChange={handleChange} >
//                 <option value="">Select Department</option>
//                 <option value="HR">HR</option>
//                 <option value="IT">IT</option>
//                 <option value="Finance">Finance</option>
//               </select>
//             </label>
//             <br />
//             <label>
//               Date of Birth:
//               <input
//                 className="forminput"
//                 type="date"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
                
//               />
//             </label>
//             <br />
//             <label>
//               Designation:
//               <input
//                 className="forminput"
//                 type="text"
//                 name="designation"
//                 value={formData.designation}
//                 onChange={handleChange}
                
//               />
//             </label>
//             <br />
//             <label>
//               Salary:
//               <input
//                 className="forminput"
//                 type="number"
//                 name="salary"
//                 value={formData.salary}
//                 onChange={handleChange}
                
//               />
//             </label>
//             <br />

//             <label>
//               Gender:
//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Male"
//                   checked={formData.gender === 'Male'}
//                   onChange={handleChange}
                  
//                 />
//                 Male
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Female"
//                   checked={formData.gender === 'Female'}
//                   onChange={handleChange}
                  
//                 />
//                 Female
//               </label>
//             </label>
//             <br />
//             <button type="submit" className='submitbtn'>Next</button>
//           </form>
//     </div>
//     </div>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Form1 from './form1';
import Form2 from './form2';

function App() {
  return (
    <div className='App'>
       <BrowserRouter>
         <Routes>
          <Route path="/" element = {<Form1 />} />
          <Route path="/second" element = {<Form2 />} />
         </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App


