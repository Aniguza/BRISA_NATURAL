import React from 'react'
import foto from "../assets/img/img-contacto.jpg"

export const Contacto = () => {
  return (
    <div className='mt-25'>
      <p className="text-center font-lale text-primario text-2xl lg:text-4xl">"QUEREMOS ESCUCHARTE"</p>
      <p className="text-center text-secondario font-rale text-lg">Aquí puedes enviarnos tus comentarios, dudas o sugerencias.</p>
      <div className='flex gap-10 justify-center my-10'>
        <div>
          <img src={foto} alt="" className='img-cont' />
        </div>
        <div>
          <fieldset className="fieldset text-secondario w-90">
            <label className="fieldset co-label">Nombre completo</label>
            <input type="text" placeholder="Juan Pérez" className="input co-input" />

            <label className="fieldset co-label pt-5">Correo electrónico</label>
            <input type="text" placeholder="example@gmail.com" className="input co-input" />

            <label className="fieldset co-label pt-5">Celular</label>
            <input type="text" placeholder="999 999 999" className="input co-input" />

            <textarea className="textarea co-input mt-5" placeholder="Mensaje"></textarea>

            <input type="file" className="file-input file-input co-input mt-5" />

            <label className="label mt-5">
              <input type="checkbox" className="checkbox border-secondario checked:bg-secondario" />No soy un robot</label>

            <button className="btn bg-extra rounded-xl border-none shadow-none text-secondario text-[18px] font-bold mt-4">Enviar</button>
          </fieldset>
        </div>
      </div>
    </div>
  )
}
