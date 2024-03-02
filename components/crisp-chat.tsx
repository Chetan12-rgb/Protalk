"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
export const CrispChat= ()=>{
  useEffect(()=>{
    Crisp.configure("4914e444-72d9-4504-b425-3c98dccbc295")
  }, [] );

  return null;
}