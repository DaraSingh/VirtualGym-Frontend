import React, { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
function Workout(props) {
    
    const [data, setUserData] = useState(null);
    const [currentIndex,setCurrentIndex]=useState(0);
    const [loading, setLoading] = useState(true);
    const navigate=useNavigate();
    
    const handleClick=async()=>{
        const res=await fetch("https://virtualgym-backend.onrender.com/DoneToday",{
            method:"POST",
            header:{
                "Content-Type":"application/json",
            },
            credentials:"include"
        });
        const text=await res.json()
        if(res.ok) {
            let mess;
            if(data.day<10){
                alert(text.message+"See You Tommorrow")
                navigate('/')
            }
            else{
                alert(text.message+"Your Plan is Over Either Generate New Plan Else This plan will be repeated from Tommorrow")
                navigate('/')
            }
            
        }
        else{
            console.log("Error")
        }
        
    }
    
  useEffect(() => {
    // if(!props.isloggedIn){
    //     // alert("LogIn First")
    //     navigate('/login')
    // }
    window.speechSynthesis.cancel();
    const GenUser = async () => {
        try {
            const res = await fetch("https://virtualgym-backend.onrender.com/workout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
        const newData = await res.json();
      
    //   console.log(newData.plan)
      setUserData(newData.plan);
        } catch (error) {
            setLoading(false)
        }finally{
            setLoading(false)
        }
      
    };
    GenUser();
  }, []);
  
  if(!props.isloggedIn){
        return(
            <div className="text-white">Please Login First</div>
        )
    }
    if(loading){
    return (<div className="text-white font-bold text-2xl text-center" >Loading....</div>)
  }

   if (!data) {
    return <div className="text-center text-white">Please Generate a Plan First </div>;
  }
  const exercises = data.exercises;
  const currentExercise = exercises[currentIndex];
  const speakSteps = (steps) => {
    if (!("speechSynthesis" in window)) {
      alert("Sorry, your browser does not support speech synthesis.");
      return;
    }
    // const steps=exercises[currentIndex].steps
    // Stop any ongoing speech

    steps.forEach((step, i) => {
    const utter = new SpeechSynthesisUtterance(step);
    utter.rate = 0.7; // speed (0.5 - 2)
    utter.pitch = 1; // pitch
    utter.lang = "en-US"; // language/voice
    speechSynthesis.speak(utter);
  });
  };
  const speakWelcome = () => {
    if (!("speechSynthesis" in window)) {
      alert("Sorry, your browser does not support speech synthesis.");
      return;
    }

    // Stop any ongoing speech
    window.speechSynthesis.cancel();

    // Combine steps into a single string
    const text = "Ready To Go.";

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.7; // speed (0.5 - 2)
    utterance.pitch = 1; // pitch
    utterance.lang = "en-US"; // language/voice
    speechSynthesis.speak(utterance);
    // speakSteps(currentExercise.steps)
  };
  return (
    <div>
    {exercises.length?
    <div className="flex-1 flex flex-col items-center justify-center rounded-2xl shadow-lg p-6 mb-2 text-white">
        <h1 className="text-2xl font-bold text-fuchsia-700 mb-4">
            Exercise {currentIndex + 1} of {exercises.length}
        </h1>

        <h2 className="text-xl font-semibold text-gray-200 mb-2">
          {currentExercise.name}
        </h2>
        
        {typeof currentExercise.reps === "number" ? (
          <p className="text-lg text-gray-300">
            {currentExercise.sets} sets × {currentExercise.reps} reps
          </p>
        ) : currentExercise.duration > 0 ? (
          <p className="text-lg text-gray-300">
            Duration: {currentExercise.duration}s
          </p>
        ) : (
          <p className="text-lg text-gray-300">Reps: {currentExercise.reps}</p>
        )}

        <p className="text-sm text-gray-500 mt-2">
          Rest: {currentExercise.rest} seconds
        </p>
        <div className="space-x-3">

        {currentIndex>0?<button
        onClick={() =>{
            setCurrentIndex((prev) =>
                prev > 0 ? prev - 1 : prev
            
        );
        speakWelcome();
    }
        }
        className="mt-6 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105"
        >
             {"<--- "}Prev
        </button>:""}
        <button
          onClick={() => speakSteps(currentExercise.steps)}
          className="mt-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-2 px-6 rounded-full shadow-md"
        >
          Listen Steps
        </button>
        {currentIndex<exercises.length-1?<button
        onClick={() =>{
            setCurrentIndex((prev) =>
                prev < exercises.length - 1 ? prev + 1 : prev
        );
        speakWelcome();
    }
        }
        className="mt-6 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105"
        >
        Next {"--->"}
        </button>:<button
        onClick={handleClick}
        className="mt-6 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105"
        >
        Done
        </button>}
        </div>
      </div>
    :<div className="text-white">No Exercise Found For Today Kindly generate New Plan</div>}
    <div className="min-h-screen p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-fuchsia-500 mb-6">
        Day {data.day} Workout Plan
      </h1>

      {/* Exercises */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.exercises.map((exercise, idx) => (
          <div
            key={idx}
            className="bg-black/40 border border-white/10 rounded-2xl shadow-md p-5 hover:shadow-lg transition"
          >
            {/* Name */}
            <h2 className="text-xl font-semibold text-gray-200 mb-2">
              {exercise.name}
            </h2>

            {/* Sets/Reps or Duration */}
            <p className="text-gray-400">
              {exercise.reps && typeof exercise.reps === "number"
                ? `Sets: ${exercise.sets}, Reps: ${exercise.reps}`
                : exercise.duration > 0
                ? `Duration: ${exercise.duration}s`
                : `Reps: ${exercise.reps}`}
            </p>

            {/* Rest */}
            <p className="text-sm text-gray-500">
              Rest: {exercise.rest} seconds
            </p>

            {/* Focus Area */}
            <p className="mt-2 text-sm font-medium text-fuchsia-600">
              Focus: {exercise.focusArea}
            </p>

            {/* Equipment */}
            <p className="text-sm text-gray-400">
              Equipment: {exercise.equipment}
            </p>

            {/* Steps */}
            <details className="mt-3">
              <summary className="cursor-pointer text-fuchsia-300 font-semibold">
                Steps
              </summary>
              <ul className="list-disc list-inside text-sm text-gray-300 mt-2">
                {exercise.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </details>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Workout;
