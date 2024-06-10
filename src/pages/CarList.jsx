import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppLayout from '../Layout/AppLayout';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [modelFilter, setModelFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');
  const [conditionFilter, setConditionFilter] = useState('');

  useEffect(() => {
    fetch('data/datacars.json')
      .then(response => response.json())
      .then(data => {
        setCars(data);
        setFilteredCars(data);
      })
      .catch(error => console.error('Error fetching car data:', error));
  }, []);

  useEffect(() => {
    filterCars();
  }, [modelFilter, companyFilter, conditionFilter]);

  const filterCars = () => {
    let filtered = [...cars];

    if (modelFilter) {
      filtered = filtered.filter(car => car.model.toLowerCase().includes(modelFilter.toLowerCase()));
    }

    if (companyFilter) {
      filtered = filtered.filter(car => car.company.toLowerCase().includes(companyFilter.toLowerCase()));
    }

    if (conditionFilter) {
      filtered = filtered.filter(car => car.condition.toLowerCase() === conditionFilter.toLowerCase());
    }

    setFilteredCars(filtered);
  };

  const handleModelFilterChange = (e) => {
    setModelFilter(e.target.value);
  };


  const handleConditionFilterChange = (e) => {
    setConditionFilter(e.target.value);
  };

  return (
    <AppLayout>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Car List</h1>

        <div className="mb-6 flex items-center justify-between">
          <div className="w-40">
            <input
              type="text"
              placeholder="Search by model"
              value={modelFilter}
              onChange={handleModelFilterChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
            />
          </div>

          <div className="w-40">
            <select
              value={conditionFilter}
              onChange={handleConditionFilterChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
            >
              <option value="">All</option>
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCars.map(car => (
               <Link to={`/CarDetail/${car.id}`}>
            <div
              key={car.id}
              className="relative group cursor-pointer overflow-hidden duration-500 w-[300px] text-gray-50 p-5 h-[360px] rounded-lg mb-7 shadow-lg shadow-zinc-800/50"
            >
              <img src={car.thumbnail} alt={car.title} className="w-full h-[240px] object-cover rounded-lg mb-4" />
              <div className="absolute w-full left-0 p-5 -bottom-16 group-hover:-translate-y-12 duration-500">
                <div className="mt-4 absolute -z-10 left-0 w-full h-60 opacity-0 group-hover:opacity-50 group-hover:bg-blue-900 duration-500 text-white"></div>
                    View Details
                <div className="group-hover:opacity-100 w-full duration-500 opacity-0 text-[#FAEDF0]">
                  <h2 className="text-xl font-bold mb-2 mt-3">{car.title}</h2>
                  <p className="mb-2">Price: ${car.price}</p>
                  <p className="mb-2">Company: {car.company}</p>
                  <p className="mb-2">Model: {car.model}</p>
                  <p className="mb-2">Condition: {car.condition}</p>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default CarList;
