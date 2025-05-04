"use client";

import Image from "next/image";
import { User } from "@/features/user/domain/entities/User";
import Link from "next/link";

type Props = {
  user: User;
  saving: boolean;
  error: string | null;
  success: boolean;
  onChange: <K extends keyof User>(field: K, value: User[K]) => void;
  onSave: () => void;
};

export function UserView({
  user,
  saving,
  error,
  success,
  onChange,
  onSave,
}: Props) {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 bg-white p-6 rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold">Account Settings</h1>

      {error && <p className="text-red-600 text-sm">{error}</p>}
      {success && (
        <p className="text-green-600 text-sm">
          ¡Perfil actualizado correctamente!
        </p>
      )}

      {/* Avatar */}
      <div className="flex items-center gap-4">
        <Image
          src={user.avatarUrl}
          alt={user.fullName}
          width={60}
          height={60}
          className="rounded-full"
        />
        <p className="text-sm text-gray-500">
          No se puede cambiar el avatar en esta demo
        </p>
      </div>

      {/* Formulario */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <label className="block mb-1 font-medium">Nombre</label>
          <input
            className="w-full border px-3 py-2 rounded-md"
            value={user.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Apellido</label>
          <input
            className="w-full border px-3 py-2 rounded-md"
            value={user.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Correo</label>
          <input
            className="w-full border px-3 py-2 rounded-md bg-gray-100"
            value={user.email}
            disabled
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Teléfono</label>
          <input
            className="w-full border px-3 py-2 rounded-md"
            value={user.phone}
            onChange={(e) => onChange("phone", e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Género</label>
          <select
            className="w-full border px-3 py-2 rounded-md"
            value={user.gender}
            onChange={(e) =>
              onChange("gender", e.target.value as "male" | "female")
            }
          >
            <option value="">Selecciona</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">ID Usuario</label>
          <input
            className="w-full border px-3 py-2 rounded-md bg-gray-100"
            value={user.id}
            disabled
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">NIT / Cédula</label>
          <input
            className="w-full border px-3 py-2 rounded-md"
            value={user.taxId}
            onChange={(e) => onChange("taxId", e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">País</label>
          <input
            className="w-full border px-3 py-2 rounded-md"
            value={user.country}
            onChange={(e) => onChange("country", e.target.value)}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Dirección</label>
          <textarea
            className="w-full border px-3 py-2 rounded-md"
            rows={2}
            value={user.address}
            onChange={(e) => onChange("address", e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-row items-start space-x-6 mt-6">
        <button
          onClick={onSave}
          disabled={saving}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          {saving ? "Guardando..." : "Guardar Cambios"}
        </button>
        <Link
          href="/user"
          className="inline-block mt-4 text-sm text-blue-600 hover:underline"
        >
          Volver al perfil
        </Link>
      </div>
    </div>
  );
}
