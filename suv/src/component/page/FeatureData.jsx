import { useEffect } from "react";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import FeatureProduct from "./FeatureProduct";
import { featureproduct } from "../store/Slices/Feature";
import './FeatureData.css'
export default function FeatureData(){
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(featureproduct())
    },[dispatch])

    const {featureprod} = useSelector(state => state.feature)
    // console.log('Feature state:', useSelector(state => state.feature));
    // console.log('feature is', featureprod)   
    return (
        <div className="feature-container-image">
            
            {featureprod.map((curr)=>{
                return <FeatureProduct key={curr.id} {...curr}/>
            })}
        </div>  
        
    )
}
