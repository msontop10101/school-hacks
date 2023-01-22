import React from 'react'

const Form = () => {
  return (
    <div class='bg-purple-500/[0.3]'>
      <div class='flex flex-col'>
      <label class='text-black'>Nom</label>
      <input></input>
      </div>
      <div>
      <label>Nom</label>
      <input  class='focus:outline-none'></input>
      </div>
      <div>
      <label>Message</label>
      <textarea></textarea>
      </div>
      <button>Submit</button>
    </div>
  )
}

export default Form