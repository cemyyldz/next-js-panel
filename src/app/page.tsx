"use client";

import { useState, useEffect} from "react";
import UserTable from "@/components/UserTable";
import { fetchUsers, User } from "@/services/userService";



export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredUsers = users.filter((user) =>
  `${user.name} ${user.surname} ${user.email} ${user.description} ${user.phone}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  


  useEffect(() => {
    const getUsers = async () => {
      try{
        const data = await fetchUsers();
        console.log("Kullanıcılar başarıyla alındı:", data);
        setUsers(data);

      }catch (error) {
        console.error("Kullanıcılar alınırken hata oluştu:", error);
      }
    };
    getUsers();
  }, []);



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

      <UserTable users={filteredUsers} />

      





    </main>

  );
}
