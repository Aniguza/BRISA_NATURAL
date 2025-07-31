// src/pages/PagoForm.jsx

import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";

export const PagoForm = () => {
    const { cart } = useContext(CartContext);
    const [paymentMethod, setPaymentMethod] = useState("transferencia");

    const subtotal = cart.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    );
    const total = subtotal; // puedes aplicar descuentos si deseas
    const [distrito, setDistrito] = useState("");

    const distritosPiura = [
        "Piura",
        "Castilla",
        "Veintiséis de Octubre",
        "Catacaos",
        "La Arena",
        "La Unión",
        "Las Lomas",
        "Cura Mori",
        "El Tallán",
        "Tambo Grande"
    ];


    return (
        <div className=" bg-gray-100 min-h-screen text-black">
            <p className="flex ml-22 pt-10 text-[30px] font-bold">Pagar pedido</p>
            <div className="flex items-center justify-center">
                <div className="flex items-start md:flex-row gap-6 p-6 ">
                    {/* Datos del cliente */}
                    <div className="w-full md:w-2/3 bg-white p-6 rounded-xl shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Datos de envío</h2>
                        <form className="grid grid-cols-1 gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Nombre" className="border p-2 rounded" required />
                                <input type="text" placeholder="Apellidos" className="border p-2 rounded" required />
                            </div>
                            <input type="text" placeholder="Nombre de la empresa (opcional)" className="border p-2 rounded" />
                            <div>
                                <label className="text-sm text-gray-600">País / Región: <b>Perú</b></label>

                            </div>
                            <input type="text" placeholder="Dirección (calle, número)" className="border p-2 rounded" required />
                            <input type="text" placeholder="Apartamento, habitación, etc. (opcional)" className="border p-2 rounded" />
                            <input type="text" placeholder="Población" className="border p-2 rounded" required />
                            <label className="text-sm text-gray-600">Ciudad*</label>
                            <div className="space-y-4">
                                {/* Región fija */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Región:
                                    </label>
                                    <select
                                        disabled
                                        className="border p-2 rounded w-full bg-gray-100 text-gray-700"
                                    >
                                        <option value="Piura">Piura</option>
                                    </select>
                                </div>

                                {/* Distritos */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Distrito:
                                    </label>
                                    <select
                                        value={distrito}
                                        onChange={(e) => setDistrito(e.target.value)}
                                        className="border p-2 rounded w-full"
                                        required
                                    >
                                        <option value="">Seleccione un distrito</option>
                                        {distritosPiura.map((nombre) => (
                                            <option key={nombre} value={nombre}>
                                                {nombre}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <input type="text" placeholder="Código postal / ZIP" className="border p-2 rounded" required />
                        </form>
                    </div>

                    {/* Resumen de la orden */}
                    <div className="w-full md:w-1/3 bg-white p-6 rounded-xl shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Resumen del pedido</h2>
                        <div className="text-sm mb-4">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between mb-2">
                                    <p>{item.name} × {item.quantity}</p>
                                    <p>S/ {(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            ))}
                            <hr className="my-2" />
                            <div className="flex justify-between font-semibold">
                                <p>Subtotal</p>
                                <p>S/ {subtotal.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between text-green-600">
                                <p>Envío</p>
                                <p>Gratis</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between font-bold text-lg">
                                <p>Total</p>
                                <p>S/ {total.toFixed(2)}</p>
                            </div>
                        </div>

                        {/* Método de pago */}
                        <div className="mt-6">
                            <h3 className="font-semibold mb-2">Método de pago</h3>
                            <label className="flex items-start gap-2 mb-4">
                                <input
                                    type="radio"
                                    name="pago"
                                    value="transferencia"
                                    checked={paymentMethod === "transferencia"}
                                    onChange={() => setPaymentMethod("transferencia")}
                                />
                                <div>
                                    <p className="font-medium">Transferencia Bancaria</p>
                                    <p className="text-sm text-gray-600">
                                        Cuando hayamos recibido su pedido nuestro equipo comercial se
                                        pondrá en contacto con usted para enviar los datos bancarios.
                                    </p>
                                </div>
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="pago"
                                    value="culqi"
                                    checked={paymentMethod === "culqi"}
                                    onChange={() => setPaymentMethod("culqi")}
                                />
                                <p className="font-medium">Culqi</p>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                                    alt="Visa"
                                    className="h-5 ml-2"
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
