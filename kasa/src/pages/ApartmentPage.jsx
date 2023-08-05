import React, { useEffect, useState } from 'react'
import './ApartmentPage.css';
import ApartmentBanner from '../components/ApartmentBanner';
import ApartmentHeader from '../components/ApartmentHeader';
// import { useLocation } from 'react-router-dom';
import DescriptionPanel from '../components/DescriptionPanel';
import flats from "../data/apartments.json";
import ErrorPageNotFound from './ErrorPageNotFound';
import { useParams, redirect } from 'react-router-dom';

function ApartmentPage() {
const  {id} = useParams();
const flat = flats.find((flat) => flat.id === id);

    if (!flat) {
         redirect("/Error")
      }
    
    return (
        <div className='apartment-page'>
            <ApartmentBanner pictures={flat.pictures}/>
            <ApartmentHeader flat={flat} />
            
            <div className='ApartmentDescription_area'>
                <DescriptionPanel title="Description" content={flat.description} />
                <DescriptionPanel title="Equipements" content={flat.equipments.map((equipment, i) => <li key={i}>{equipment}</li>)}  className='equipments'/>
            </div>
           
        </div>
    );
}

export default ApartmentPage;