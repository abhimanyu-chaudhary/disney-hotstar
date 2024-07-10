import React from 'react'
import { GoPlus } from "react-icons/go";

function Add() {
  return (
      <div className="w-14 h-14 bg-custom-white flex items-center justify-center font-semibold rounded-lg">
        <span className="text-white text-2xl">
          <GoPlus />
        </span>
      </div>
  )
}

export default Add;
