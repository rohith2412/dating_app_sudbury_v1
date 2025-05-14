// import { useState, useEffect } from 'react';

// const MatchedUsers = () => {
//   const [pairs, setPairs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMatchedUsers = async () => {
//       try {
//         const response = await fetch('/api/suggestion');
//         const data = await response.json();

//         if (response.ok) {
//           setPairs(data);
//         } else {
//           console.log("No pairs found:", data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching matched users:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMatchedUsers();
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           <h2>Matched Users</h2>
//           {pairs.length > 0 ? (
//             pairs.map((pair, index) => (
//               <div key={index}>
//                 <h3>Pair {index + 1}:</h3>
//                 <p><strong>{pair[0].name}</strong> (Age: {pair[0].Age}, Gender: {pair[0].gender})</p>
//                 <p><strong>{pair[1].name}</strong> (Age: {pair[1].Age}, Gender: {pair[1].gender})</p>
//               </div>
//             ))
//           ) : (
//             <p>No matched pairs found</p>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default MatchedUsers;
