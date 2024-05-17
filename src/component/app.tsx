// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";

// // function App() {
// //     const [count, setCount] = useState (100);

// //     return (
// //         <div className="App">
// //             <p>{count}</p>
// //             <button
// //             onClick={() => {
// //             setCount(count + 1);   

// //             }}
// //         >
// //             Add
// //         </button>
// //         </div>

        
// //     )
// // } 

// // import "./App.css";
// // import "bootstrap/dist/css/bootstrap.min.css"; // Corrected Bootstrap import
// // import { useState } from "react";

// // function App() {
// //     const [count, setCount] = useState(100);

// //     return (
// //         <div className="App">
// //             <p>{count}</p>
// //             <button
// //                 onClick={() => {
// //                     setCount(count + 1);
// //                 }}
// //             >
// //                 Add
// //             </button>
// //         </div>
// //     );
// // }

// // export default App;


// function APP () {
//     const [txt, setTxt] = useState("abc");
//     const[txtList, setTxtlist] = useState<any>([]); 

//     const del = (i: any) => {
//         txtList.splice(i, 1);
//         setTxtlist([...txtList]);
//     };

//     return (
//         <div className="App">
//             <p>{txt}</p>
//             <input
//             type="text"
//             onChange={(e)=> {
//             console.log (e.target.value)
//             setTxt(e.target.value)
//             }}
                  
//             />
//             <button onClick={() => {
//                 txtList.push(txt);
//                 console.log(txtlist);
//                 setTxtlist([...txtList]);
//             } }
//             >
//                 Add
//             </button>
            
//             {txtList.map((x: any, i: any) => {
//                 return <p key={i}>{x}</p>;
//             }  ) }
            
//         </div>
//     );
// }
