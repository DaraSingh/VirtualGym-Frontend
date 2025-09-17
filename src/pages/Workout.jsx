import React, { useEffect ,useState} from "react";

function Workout() {
  const [data, setUserData] = useState(null);
  useEffect(() => {
    const GenUser = async () => {
      const res = await fetch("http://localhost:3000/workout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserData(data);
      console.log(data)
    };
    GenUser();
  }, []);

  return (
    <div className="text-white">
    data
    </div>
  )
}

export default Workout;
