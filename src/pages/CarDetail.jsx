import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import AppLayout from '../Layout/AppLayout';


const CarDetails = ({ cars, setCars }) => {
  const { id } = useParams();
  
  useEffect(() => {
    fetchCarsData();
  }, []);

  const fetchCarsData = async () => {
    try {
      const response = await fetch('data/datacars.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // Find the car with the given id
  const car = cars.find(c => c.id === parseInt(id, 10));
  
  if (!car) {
    return <p>Car not found</p>;
  }
  
  return (
    <AppLayout>
 <div className="w-full flex justify-center mt-4">
  <div className="w-3/4 p-6 rounded-2xl bg-gray-100">
    <div className="flex">
      <div className="w-1/2">
        <img 
          src={car.thumbnail} 
          className="h-80 w-full "
        />
        <div className="flex flex-col items-center mt-4">
          <span className="font-bold text-red-600 text-2xl">${car.price}</span>
         
 
        </div>
      </div>
      <div className="w-1/2 pl-6">
        <h2 className="text-2xl font-bold text-center">
          {car.title}
        </h2>
        <p className="text-center">Company: {car.company}</p>
        <p className="text-center">Model: {car.model}</p>
        <p className="text-center">Year: {car.year}</p>
        <p className="text-center">Condition: {car.condition}</p>
        <h3 className="font-semibold text-center">Details</h3>
        <p className="text-center">Mileage: {car.details.mileage}</p>
        <p className="text-center">Fuel Type: {car.details.fuelType}</p>
        <p className="text-center">Transmission: {car.details.transmission}</p>
        <p className="text-center">Color: {car.details.color}</p>
        <p className="text-center">Doors: {car.details.doors}</p>
        <p className="text-center">Engine: {car.details.engine}</p>
        <h3 className="font-semibold text-center">Seller Information</h3>
        <p className="text-center">Name: {car.seller.name}</p>
        <p className="text-center">Contact: <a href={`mailto:${car.seller.contact}`} className="text-blue-600 underline">{car.seller.contact}</a></p>
        <p className="text-center">Phone: {car.seller.phone}</p>
        <p className="text-center">Location: {car.seller.location}</p>
      </div>
    </div>
  </div>

{/* contact */}

<div class="relative duration-500 [transform:rotate3d(20_,-10,_1,_60deg)] 
 hover:-rotate-0  group border border-gry-100 border-4
  overflow-hidden rounded-2xl relative h-52 w-72 bg-gray-100 p-5 flex flex-col items-start gap-2 h-40">

<div class="flex items-center justify-center">
 
    <div class="flex space-x-4">
      <a
        class="text-blue-100 hover:text-blue-400 transition duration-200"
        href="#"
      >
        <svg
          viewBox="0 0 64 64"
          height="60"
          width="60"
          y="0px"
          x="0px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <linearGradient
            spreadMethod="reflect"
            gradientUnits="userSpaceOnUse"
            y2="56.878"
            y1="14.5"
            x2="37.646"
            x1="37.646"
            id="JOZq0V4XPxMzNaLCE5XPGa_44003_gr1"
          >
            <stop stop-color="#6dc7ff" offset="0"></stop>
            <stop stop-color="#e6abff" offset="1"></stop>
          </linearGradient>
          <path
            d="M42,56V38h5.358l0.934-8H42v-4.457c0-2.097-0.131-3.527,2.877-3.527L48,22.014v-6.479 c-1-0.088-2.487-0.285-5.136-0.285c-5.531,0-8.864,3.376-8.864,9.576V30h-7v8h7v18H42z"
            fill="url(#JOZq0V4XPxMzNaLCE5XPGa_44003_gr1)"
          ></path>
          <linearGradient
            spreadMethod="reflect"
            gradientUnits="userSpaceOnUse"
            y2="58.017"
            y1="6.833"
            x2="32"
            x1="32"
            id="JOZq0V4XPxMzNaLCE5XPGb_44003_gr2"
          >
            <stop stop-color="#1a6dff" offset="0"></stop>
            <stop stop-color="#c822ff" offset="1"></stop>
          </linearGradient>
          <path
            d="M50,57H14c-3.859,0-7-3.141-7-7V14c0-3.859,3.141-7,7-7h36c3.859,0,7,3.141,7,7v36 C57,53.859,53.859,57,50,57z M14,9c-2.757,0-5,2.243-5,5v36c0,2.757,2.243,5,5,5h36c2.757,0,5-2.243,5-5V14c0-2.757-2.243-5-5-5H14z"
            fill="url(#JOZq0V4XPxMzNaLCE5XPGb_44003_gr2)"
          ></path>
        </svg>
      </a>
      <a
        class="text-blue-400 hover:text-blue-300 transition duration-200"
        href="#"
      >
        <svg
          viewBox="0 0 64 64"
          height="60"
          width="60"
          y="0px"
          x="0px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y2="52.195"
            y1="9.936"
            x2="32"
            x1="32"
            id="iS8U25XJCb2VBQOwbuAcra_bYzsf9Bmocst_gr1"
          >
            <stop stop-color="#1a6dff" offset="0"></stop>
            <stop stop-color="#c822ff" offset="1"></stop>
          </linearGradient>
          <path
            d="M57.595,16.086c-0.286-0.341-0.762-0.45-1.17-0.271c-0.614,0.271-1.245,0.512-1.891,0.719 c0.824-1.035,1.462-2.216,1.874-3.491c0.127-0.396-0.002-0.827-0.326-1.087c-0.324-0.261-0.774-0.295-1.131-0.083 c-1.777,1.041-3.672,1.788-5.641,2.223C47.244,12.122,44.449,11,41.555,11c-6.169,0-11.189,4.978-11.189,11.097 c0,0.404,0.022,0.81,0.067,1.214c-7.41-0.705-14.289-4.343-19.027-10.103c-0.207-0.252-0.518-0.385-0.85-0.362 c-0.325,0.025-0.618,0.207-0.784,0.488c-0.993,1.679-1.519,3.613-1.519,5.593c0,2.447,0.807,4.78,2.247,6.68 c-0.292-0.123-0.579-0.26-0.859-0.412c-0.311-0.167-0.686-0.161-0.988,0.021c-0.303,0.181-0.488,0.507-0.488,0.859v0.119 c0,3.708,1.868,7.073,4.786,9.104c-0.012-0.002-0.024-0.005-0.036-0.007c-0.35-0.065-0.699,0.062-0.93,0.327 c-0.231,0.265-0.306,0.631-0.198,0.966c1.182,3.648,4.149,6.371,7.769,7.332c-3.003,1.771-6.401,2.697-9.957,2.697 c-0.786,0-1.563-0.046-2.308-0.137c-0.467-0.059-0.906,0.218-1.063,0.657c-0.157,0.44,0.012,0.931,0.407,1.181 C11.478,51.38,17.064,53,22.79,53c18.772,0,29.989-15.119,29.989-29.736c0-0.271-0.005-0.541-0.014-0.81 c1.907-1.423,3.552-3.159,4.896-5.169C57.908,16.915,57.881,16.427,57.595,16.086z M51.167,21.143 c-0.279,0.197-0.438,0.523-0.422,0.865c0.02,0.415,0.034,0.834,0.034,1.256C50.779,36.897,40.31,51,22.79,51 c-3.982,0-7.894-0.84-11.499-2.452c4.226-0.321,8.198-1.85,11.575-4.468c0.335-0.26,0.47-0.702,0.336-1.104 s-0.506-0.677-0.93-0.686c-3.381-0.065-6.404-1.952-7.948-4.835c1.115,0.038,2.203-0.099,3.276-0.393 c0.447-0.123,0.751-0.537,0.735-1c-0.017-0.464-0.35-0.854-0.804-0.945c-3.773-0.752-6.632-3.773-7.244-7.449 c1.122,0.403,2.297,0.631,3.468,0.667c0.459,0.011,0.848-0.271,0.983-0.696c0.136-0.426-0.027-0.89-0.399-1.137 c-2.558-1.698-4.084-4.53-4.084-7.575c0-1.135,0.21-2.25,0.614-3.287c5.319,5.827,12.784,9.361,20.714,9.76 c0.328,0.022,0.617-0.116,0.817-0.357c0.202-0.241,0.278-0.563,0.207-0.868c-0.16-0.685-0.24-1.384-0.24-2.077 c0-5.016,4.122-9.097,9.189-9.097c2.537,0,4.979,1.047,6.7,2.871c0.235,0.248,0.581,0.359,0.917,0.296 c1.385-0.267,2.739-0.671,4.048-1.209c-0.729,1.007-1.665,1.865-2.759,2.514c-0.407,0.242-0.589,0.735-0.436,1.184 c0.153,0.447,0.597,0.73,1.068,0.669c0.952-0.117,1.886-0.292,2.797-0.525C53.06,19.666,52.15,20.449,51.167,21.143z"
            fill="url(#iS8U25XJCb2VBQOwbuAcra_bYzsf9Bmocst_gr1)"
          ></path>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y2="52.195"
            y1="9.936"
            x2="38.903"
            x1="38.903"
            id="iS8U25XJCb2VBQOwbuAcrb_bYzsf9Bmocst_gr2"
          >
            <stop stop-color="#1a6dff" offset="0"></stop>
            <stop stop-color="#c822ff" offset="1"></stop>
          </linearGradient>
          <path
            d="M30.772,45.786l0.621,1.9c7.123-2.326,12.824-7.914,15.642-15.33l-1.869-0.711 C43.636,35.671,39.733,42.859,30.772,45.786z"
            fill="url(#iS8U25XJCb2VBQOwbuAcrb_bYzsf9Bmocst_gr2)"
          ></path>
          <g>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="21.528"
              y1="17.979"
              x2="42"
              x1="42"
              id="iS8U25XJCb2VBQOwbuAcrc_bYzsf9Bmocst_gr3"
            >
              <stop stop-color="#6dc7ff" offset="0"></stop>
              <stop stop-color="#e6abff" offset="1"></stop>
            </linearGradient>
            <circle
              fill="url(#iS8U25XJCb2VBQOwbuAcrc_bYzsf9Bmocst_gr3)"
              r="2"
              cy="20"
              cx="42"
            ></circle>
          </g>
        </svg>
      </a>
      <a
        class="text-blue-400 hover:text-blue-300 transition duration-200"
        href="#"
      >
        <svg
          viewBox="0 0 64 64"
          height="60"
          width="60"
          y="0px"
          x="0px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <linearGradient
            spreadMethod="reflect"
            gradientUnits="userSpaceOnUse"
            y2="54.751"
            y1="10"
            x2="32"
            x1="32"
            id="PMWUiMSnUf2R_PPJ6rqZea_44112_gr1"
          >
            <stop stop-color="#1a6dff" offset="0"></stop>
            <stop stop-color="#c822ff" offset="1"></stop>
          </linearGradient>
          <path
            d="M32,53.001c-6.358,0-12.716-0.195-19.299-0.584c-4.96-0.293-8.961-4.242-9.308-9.187 c-0.521-7.452-0.521-15.009-0.001-22.46c0.348-4.945,4.349-8.895,9.309-9.188c13.167-0.778,25.433-0.778,38.598,0 c4.96,0.293,8.961,4.242,9.308,9.187c0.521,7.452,0.521,15.009,0.001,22.46c-0.348,4.945-4.349,8.895-9.309,9.188l0,0 C44.716,52.806,38.358,53.001,32,53.001z M51.182,50.421l0.059,0.998L51.182,50.421c3.959-0.234,7.153-3.386,7.431-7.331 c0.515-7.358,0.515-14.821-0.001-22.181c-0.276-3.944-3.471-7.096-7.43-7.33c-13.088-0.773-25.275-0.773-38.363,0 c-3.959,0.234-7.153,3.386-7.431,7.331c-0.515,7.358-0.515,14.821,0.001,22.181c0.276,3.944,3.471,7.096,7.43,7.33 C25.906,51.194,38.094,51.194,51.182,50.421z"
            fill="url(#PMWUiMSnUf2R_PPJ6rqZea_44112_gr1)"
          ></path>
          <linearGradient
            spreadMethod="reflect"
            gradientUnits="userSpaceOnUse"
            y2="39.252"
            y1="24.25"
            x2="31.72"
            x1="31.72"
            id="PMWUiMSnUf2R_PPJ6rqZeb_44112_gr2"
          >
            <stop stop-color="#6dc7ff" offset="0"></stop>
            <stop stop-color="#e6abff" offset="1"></stop>
          </linearGradient>
          <path
            d="M25 39.84L25 24.16 38.44 32z"
            fill="url(#PMWUiMSnUf2R_PPJ6rqZeb_44112_gr2)"
          ></path>
          <linearGradient
            spreadMethod="reflect"
            gradientUnits="userSpaceOnUse"
            y2="54.751"
            y1="10"
            x2="32.212"
            x1="32.212"
            id="PMWUiMSnUf2R_PPJ6rqZec_44112_gr3"
          >
            <stop stop-color="#1a6dff" offset="0"></stop>
            <stop stop-color="#c822ff" offset="1"></stop>
          </linearGradient>
          <path
            d="M24,41.581V22.419L40.425,32L24,41.581z M26,25.901v12.197L36.456,32L26,25.901z"
            fill="url(#PMWUiMSnUf2R_PPJ6rqZec_44112_gr3)"
          ></path>
        </svg>
      </a>
    </div>


</div>

</div>
{/* chat buttoun */}
<div class="group relative mt-7 px-70">
  <section class="flex justify-center items-center group relative px-70 mt-[360px] mr-[30px]">
  <button
    href="/"
    class="group flex justify-center p-4 me-4  rounded-lg drop-shadow-xl from-gray-800 bg-[#316FF6] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
  >
<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2.1em" viewBox="0 0 512 512">
  <path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7c-12.6 50-37.3 96.7-72.7 131.6c93.8 10.1 193.5-36.4 220.8-85.3c32.2 12.1 67.9 18.8 104.8 18.8c141.4 0 256-93.1 256-208S397.4 32 256 32z"/>
</svg>
  
  </button>
</section>




  <span
    class="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100"
    >
  <div
  class="max-w-md mx-auto bg-white dark:bg-zinc-800 shadow-md rounded-lg overflow-hidden"
>
  <div class="flex flex-col h-[400px]">
    <div class="px-4 py-3 border-b dark:border-zinc-700">
      <div class="flex justify-between items-center">
        <h2 class="text-lg font-semibold text-zinc-800 dark:text-white">
          Chatbot Assistant
        </h2>
        <div class="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          Online
        </div>
      </div>
    </div>
    <div
      class="flex-1 p-3 overflow-y-auto flex flex-col space-y-2"
      id="chatDisplay"
    >
      <div
        class="chat-message self-end bg-blue-500 text-white max-w-xs rounded-lg px-3 py-1.5 text-sm"
      >
        Hello! How can I assist you today?
      </div>
      <div
        class="chat-message self-start bg-zinc-500 text-white max-w-xs rounded-lg px-3 py-1.5 text-sm"
      >
        Hello! I need a Chatbot!
      </div>
    </div>
    <div class="px-3 py-2 border-t dark:border-zinc-700">
      <div class="flex gap-2">
        <input
          placeholder="Type your message..."
          class="flex-1 p-2 border rounded-lg dark:bg-zinc-700 dark:text-white dark:border-zinc-600 text-sm"
          id="chatInput"
          type="text"
        />
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm"
          id="sendButton"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</div>

  </span>
</div>
</div>
  </AppLayout>
  );
};

export default CarDetails;
