import { useEffect } from "react";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { featureproduct } from "../store/Slices/Feature";
export default function FeatureData(){
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(featureproduct())
    },[])

    const {Fetureproduct} = useSelector(state => state.feature)
    console.log('feature is', Fetureproduct)
    return (
        <div>
            hello i am feature
            {/* {Fetureproduct && Fetureproduct.map(item=>(
                <div key={item.id}>
                    <img src={item.image} alt="" />
                </div>
            ))} */}
        </div>
    )
}
