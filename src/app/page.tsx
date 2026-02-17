"use client";

import { useState } from "react";

const mockUsers = [{
  id: 1, name: "Oğulcem", surname: "Yıldız", email: "ogulcem@example.com", isActive: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", phone: "+90 555 987 6543",

},
{
  id: 2, name: "Cem", surname: "Yıldız", email: "cem@example.com", isActive: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", phone: "+90 555 123 4567",
}];



export default function Home() {

  const [searchTerm, setSearchTerm] = useState("");



  return (
    <main className="container mx-auto p-4 mt-8">
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Personel Listesi

        </h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
        <button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer duration-200">
          <span>+</span>Kullanıcı Ekle

        </button>
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="Tabloda ara..."
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)}
          />
          <span className="absolute left-3 top-2.5 text-slate-400">🔍</span>



        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">İsim</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">Soyisim</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700 hidden md:table-cell">Email</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700 hidden md:table-cell">Açıklama</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700 hidden md:table-cell">Telefon</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700">Üyelik Durumu</th>
              <th className="px-6 py-4 text-sm font-semibold text-slate-700 text-center">İşlemler</th>
            </tr>

          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockUsers.map((user) =>(
              <tr key={user.id} className="hover:bg-slate-50 transition-colors cursor-pointer">
                <td className="px-6 py-4 text-sm text-slate-900 font-medium">{user.name}</td>
                <td className="px-6 py-4 text-sm text-slate-900 font-medium">{user.surname}</td>
                <td className="px-6 py-4 text-sm text-slate-900 font-medium hidden md:table-cell">{user.email}</td>
                <td className="px-6 py-4 text-sm text-slate-900 font-medium hidden md:table-cell">{user.description}</td>
                <td className="px-6 py-4 text-sm text-slate-900 font-medium hidden md:table-cell">{user.phone}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {user.isActive ? 'Aktif' : 'Pasif'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-center">
                  <div className="flex justify-center gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      ✏️
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      🗑️
                    </button>
                  </div>
                </td>
                </tr>



            ))}

          </tbody>

        </table>

      </div>





    </main>

  );
}
