interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  isActive: boolean;
  description: string;
  phone: string;
}

export default function UserTable({ users }: { users: User[] }) {
  return (
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
          {users.map((user) =>(
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
  );
}
