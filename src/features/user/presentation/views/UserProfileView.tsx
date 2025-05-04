"use client";

import { User } from "@/features/user/domain/entities/User";
import Image from "next/image";
import Link from "next/link";

type Props = {
  user: User;
  logout: () => void;
};

export function UserProfileView({ user, logout }: Props) {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 bg-white p-6 rounded-xl shadow-md space-y-4">
      <div className="flex items-center gap-4">
        <Image
          src={user.avatarUrl}
          alt={user.fullName}
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
          <h2 className="text-xl font-bold">{user.fullName}</h2>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-6">
        <div>
          <p className="font-medium">Rol</p>
          <p>{user.role}</p>
        </div>
        <div>
          <p className="font-medium">Teléfono</p>
          <p>{user.phone}</p>
        </div>
        <div>
          <p className="font-medium">País</p>
          <p>{user.country}</p>
        </div>
        <div>
          <p className="font-medium">Registrado</p>
          <p>{new Date(user.createdAt).toLocaleDateString()}</p>
        </div>
        <div className="col-span-2">
          <p className="font-medium">Dirección</p>
          <p>{user.address}</p>
        </div>
      </div>
      <div className="flex flex-row items-start space-x-6 mt-6">
        <Link
          href="/user/edit"
          className="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Editar perfil
        </Link>
        <button
          onClick={logout}
          className="inline-block mt-6 text-sm px-4 py-2 text-blue-600 hover:underline"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
