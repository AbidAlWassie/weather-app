"use client";

import { addRegion } from "@/../actions/actions";

const AddRegion = () => {
  return (
    <form action={addRegion}>
      <input type="text" name="region" placeholder="Add new region" className="py-2 px-3 rounded-md"/>
      <button className="bg-blue-500 text-white py-2 px-3 rounded-md">Add Region</button>
    </form>
  )
}

export default AddRegion